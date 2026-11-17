import { Component, OnInit, signal } from '@angular/core';
import { TPipe } from '../../feature/i18n/t.pipe';

/**
 * The signed-in user's email as a QR code, in the ngx-ui modal (opened from the topbar), for a class owner
 * who sits next to them and scans it on the create class page. The code holds the plain address, so any
 * scanner reads it. ModalService sets `email` and `close` on the instance.
 */
@Component({
	selector: 'app-email-qr-modal',
	imports: [TPipe],
	template: `
		<div class="flex flex-col items-center gap-3 text-center">
			<h2 id="email-qr-title" class="text-lg font-semibold tracking-tight">
				{{ 'Your email as a QR code' | t }}
			</h2>
			<!-- always black on white, whatever the theme: that is what scanners read -->
			<div class="grid size-60 place-items-center rounded-lg bg-white">
				@if (image(); as src) {
					<img
						class="size-full"
						[src]="src"
						width="240"
						height="240"
						[alt]="'QR code of {email}' | t: { email: email }"
					/>
				} @else if (failed()) {
					<p class="px-4 text-sm text-black" role="alert">
						{{ 'Could not make the QR code.' | t }}
					</p>
				}
			</div>
			<p class="text-sm font-medium [overflow-wrap:anywhere]">{{ email }}</p>
			<p class="text-sm text-mute">
				{{ 'The class owner scans this code when creating the class to add you.' | t }}
			</p>
			<button class="ds-btn ds-btn-primary h-11 w-full" type="button" (click)="close()">
				{{ 'Close' | t }}
			</button>
		</div>
	`,
})
export class EmailQrModalComponent implements OnInit {
	// set by ModalService
	close!: () => void;
	email = '';

	protected readonly image = signal('');
	protected readonly failed = signal(false);

	async ngOnInit() {
		if (!this.email) return;
		try {
			// loaded when first opened: most visits to the Class page never need it
			const lib = await import('qrcode');
			const qr = (lib as unknown as { default?: typeof lib }).default ?? lib;
			this.image.set(
				await qr.toDataURL(this.email, {
					margin: 2,
					width: 480,
					errorCorrectionLevel: 'M',
				}),
			);
		} catch (error) {
			console.error('Could not make the QR code.', error);
			this.failed.set(true);
		}
	}
}
