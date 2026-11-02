import { Component, DestroyRef, ElementRef, inject, output, signal, viewChild } from '@angular/core';
import { emailFromScan } from '../../feature/classroom/email-scan';
import { TPipe } from '../../feature/i18n/t.pipe';

/** How often a camera frame is read for a code: often enough to feel instant, rare enough to spare the battery. */
const SCAN_EVERY_MS = 120;
/** Frames are shrunk to this width before reading; a QR code on a phone screen is large. */
const FRAME_WIDTH = 480;

/**
 * A modal with the camera that waits for a QR code holding an email address. The first address it reads
 * is reported through `scanned` and the modal closes; anything else only shows a hint and keeps looking.
 * The camera is on only while the modal is open.
 */
@Component({
	selector: 'app-email-scanner',
	imports: [TPipe],
	template: `
		<dialog
			#dialog
			class="m-auto w-[min(92vw,26rem)] rounded-xl border border-line bg-card p-0 text-fg backdrop:bg-black/50"
			aria-labelledby="email-scan-title"
			(close)="stop()"
			(click)="$event.target === dialog && close()"
		>
			<div class="flex flex-col gap-3 p-5">
				<h2 id="email-scan-title" class="text-lg font-semibold tracking-tight">{{ 'Scan an email QR code' | t }}</h2>
				<div class="relative aspect-square overflow-hidden rounded-lg bg-black">
					<video #video class="size-full object-cover" playsinline muted></video>
					<div class="pointer-events-none absolute inset-8 rounded-xl border-2 border-white/70" aria-hidden="true"></div>
				</div>
				<p class="min-h-10 text-sm" role="status" [class.text-danger]="!!problem()" [class.text-mute]="!problem()">
					{{ (problem() || 'Point the camera at the QR code on the other phone.') | t }}
				</p>
				<button class="ds-btn ds-btn-outline h-11 w-full" type="button" (click)="close()">{{ 'Close' | t }}</button>
			</div>
		</dialog>
	`,
})
export class EmailScannerComponent {
	/** The address that was read, lower case. */
	readonly scanned = output<string>();

	private readonly _dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
	// optional: the modal can close while the view is going away
	private readonly _video = viewChild<ElementRef<HTMLVideoElement>>('video');
	protected readonly problem = signal('');

	private _stream: MediaStream | null = null;
	private _frame = 0;
	private _last = 0;
	private _canvas: HTMLCanvasElement | null = null;
	private _read: ((data: Uint8ClampedArray, width: number, height: number) => { data: string } | null) | null = null;

	constructor() {
		inject(DestroyRef).onDestroy(() => this.stop());
	}

	async open() {
		this.problem.set('');
		const dialog = this._dialog().nativeElement;
		dialog.showModal();
		if (!navigator.mediaDevices?.getUserMedia) {
			this.problem.set('This browser cannot use the camera.');
			return;
		}
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
			// closed while the permission question was open
			if (!dialog.open) {
				stream.getTracks().forEach((track) => track.stop());
				return;
			}
			this._stream = stream;
			const video = this._video()?.nativeElement;
			if (!video) return;
			video.srcObject = stream;
			await video.play();
			// loaded when first used, so the decoder stays out of the pages that never scan
			const lib = await import('jsqr');
			this._read = (lib as unknown as { default?: typeof lib.default }).default ?? lib.default;
			this._frame = requestAnimationFrame(this._tick);
		} catch (error) {
			console.error('Could not open the camera.', error);
			this.stop();
			const blocked = error instanceof DOMException && (error.name === 'NotAllowedError' || error.name === 'SecurityError');
			this.problem.set(blocked ? 'Camera access is blocked. Allow it for this site and try again.' : 'Could not open the camera.');
		}
	}

	protected close() {
		this._dialog().nativeElement.close();
	}

	/** Turns the camera off. Runs whenever the modal closes, however it closes. */
	protected stop() {
		cancelAnimationFrame(this._frame);
		this._stream?.getTracks().forEach((track) => track.stop());
		this._stream = null;
		const video = this._video()?.nativeElement;
		if (video) video.srcObject = null;
	}

	private readonly _tick = (time: number) => {
		if (!this._stream) return;
		this._frame = requestAnimationFrame(this._tick);
		if (time - this._last < SCAN_EVERY_MS) return;
		this._last = time;

		const video = this._video()?.nativeElement;
		if (!video?.videoWidth || !this._read) return;
		const width = Math.min(FRAME_WIDTH, video.videoWidth);
		const height = Math.round((video.videoHeight / video.videoWidth) * width);
		const canvas = (this._canvas ??= document.createElement('canvas'));
		canvas.width = width;
		canvas.height = height;
		const context = canvas.getContext('2d', { willReadFrequently: true });
		if (!context) return;
		context.drawImage(video, 0, 0, width, height);
		const code = this._read(context.getImageData(0, 0, width, height).data, width, height);
		if (!code) return;

		const email = emailFromScan(code.data);
		if (email) {
			this.scanned.emit(email);
			this.close();
		} else {
			this.problem.set('That QR code is not an email address.');
		}
	};
}
