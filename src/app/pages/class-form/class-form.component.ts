import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { AuthService } from '../../feature/auth/auth.service';
import {
	DEFAULT_TIME_CONTROL,
	DURATIONS,
	TIME_CONTROLS,
	WEEKDAYS,
	WEEKDAYS_SHORT,
} from '../../feature/classroom/classroom.const';
import { ClassInput } from '../../feature/classroom/classroom.interface';
import { ClassesService } from '../../feature/classroom/classes.service';
import { TPipe } from '../../feature/i18n/t.pipe';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Create a weekly class, or edit one (`?id=`), saved in Firestore through ClassesService. */
@Component({
	imports: [IconComponent, TPipe],
	templateUrl: './class-form.component.html',
})
export class ClassFormComponent {
	private readonly _router = inject(Router);
	private readonly _classes = inject(ClassesService);
	private readonly _auth = inject(AuthService);
	private readonly _form = viewChild<ElementRef<HTMLFormElement>>('form');
	private readonly _clockInfo = viewChild<ElementRef<HTMLDialogElement>>('clockInfo');
	/** The class being edited, or `null` when creating a new one. */
	private readonly _id = inject(ActivatedRoute).snapshot.queryParamMap.get('id');

	protected readonly weekdays = WEEKDAYS;
	protected readonly weekdaysShort = WEEKDAYS_SHORT;
	protected readonly durations = DURATIONS;
	protected readonly timeControls = TIME_CONTROLS;
	protected readonly editing = !!this._id;

	protected readonly title = signal('');
	protected readonly days = signal<number[]>([(new Date().getDay() + 6) % 7]);
	protected readonly time = signal('17:00');
	protected readonly duration = signal(60);
	protected readonly timeControl = signal(DEFAULT_TIME_CONTROL);
	protected readonly isPublic = signal(false);
	protected readonly emails = signal<string[]>([]);
	protected readonly emailDraft = signal('');
	protected readonly emailError = signal('');
	protected readonly submitted = signal(false);
	protected readonly loading = signal(!!this._id);
	protected readonly saving = signal(false);
	protected readonly saveFailed = signal(false);
	protected readonly loadFailed = signal(false);

	/** Problems per field, keyed by field; shown only once the form was submitted. */
	protected readonly errors = computed(() => {
		const errors: Record<string, string> = {};
		if (!this.title().trim()) errors['title'] = 'Enter a name for the class.';
		if (!this.days().length) errors['days'] = 'Pick at least one day.';
		if (!this.time()) errors['time'] = 'Pick a start time.';
		return errors;
	});

	constructor() {
		if (this._id) void this._loadExisting(this._id);
	}

	protected value(event: Event): string {
		return (event.target as HTMLInputElement).value;
	}

	protected checked(event: Event): boolean {
		return (event.target as HTMLInputElement).checked;
	}

	protected setEmailDraft(value: string) {
		this.emailDraft.set(value);
		this.emailError.set('');
	}

	protected addEmail() {
		const email = this.emailDraft().trim().toLowerCase();
		if (!email) return;
		if (!EMAIL.test(email)) {
			this.emailError.set('Enter a valid email address.');
		} else if (this.emails().includes(email)) {
			this.emailError.set('This email is already on the list.');
		} else {
			this.emails.update((emails) => [...emails, email]);
			this.setEmailDraft('');
		}
	}

	protected removeEmail(email: string) {
		this.emails.update((emails) => emails.filter((item) => item !== email));
	}

	protected toggleDay(day: number) {
		this.days.update((days) => (days.includes(day) ? days.filter((item) => item !== day) : [...days, day].sort()));
	}

	protected openClockInfo() {
		this._clockInfo()?.nativeElement.showModal();
	}

	protected closeClockInfo() {
		this._clockInfo()?.nativeElement.close();
	}

	protected async submit(event: Event) {
		event.preventDefault();
		if (this.saving()) return;
		this.submitted.set(true);
		// an address typed but not added yet still counts; a bad one stops the save
		if (this.emailDraft().trim()) this.addEmail();

		if (Object.keys(this.errors()).length || this.emailError()) {
			// after the errors render, move to the first field that has one
			setTimeout(() => {
				const first = this._form()?.nativeElement.querySelector<HTMLElement>('[aria-invalid="true"]');
				const target = first?.matches('input,select,button') ? first : first?.querySelector<HTMLElement>('input,select,button');
				target?.focus();
			});
			return;
		}

		this.saving.set(true);
		this.saveFailed.set(false);
		try {
			const input = this._input();
			let id = this._id;
			if (id) await this._classes.update(id, input);
			else id = await this._classes.create(input);
			await this._router.navigate(['/class', id]);
		} catch (error) {
			console.error('Could not save the class.', error);
			this.saveFailed.set(true);
		} finally {
			this.saving.set(false);
		}
	}

	private _input(): ClassInput {
		return {
			title: this.title().trim(),
			days: this.days(),
			time: this.time(),
			duration: this.duration(),
			timeControl: this.timeControl(),
			isPublic: this.isPublic(),
			emails: this.emails(),
		};
	}

	private async _loadExisting(id: string) {
		try {
			const [item, user] = await Promise.all([this._classes.get(id), this._auth.whenReady()]);
			if (!item) throw new Error('Class not found.');
			// only the owner edits; everyone else goes to the class page
			if (item.ownerUid !== user?.uid) {
				await this._router.navigate(['/class', id], { replaceUrl: true });
				return;
			}
			this.title.set(item.title);
			this.days.set(item.days);
			this.time.set(item.time);
			this.duration.set(item.duration);
			this.timeControl.set(item.timeControl);
			this.isPublic.set(item.isPublic);
			this.emails.set(item.emails);
		} catch (error) {
			console.error('Could not load the class.', error);
			this.loadFailed.set(true);
		} finally {
			this.loading.set(false);
		}
	}
}
