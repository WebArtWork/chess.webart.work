import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../feature/auth/auth.service';
import { environment } from '../../../environments/environment';
import { longDays, upcomingLessons } from '../../feature/classroom/classroom.const';
import { ClassItem } from '../../feature/classroom/classroom.interface';
import { ClassesService } from '../../feature/classroom/classes.service';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';

/** One class. The lesson flow itself comes next; for now this shows what the class is. */
@Component({
	imports: [RouterLink, TPipe],
	templateUrl: './class-detail.component.html',
})
export class ClassDetailComponent {
	private readonly _classes = inject(ClassesService);
	private readonly _i18n = inject(I18nService);
	private readonly _id = inject(ActivatedRoute).snapshot.paramMap.get('id') ?? '';
	protected readonly user = inject(AuthService).user;

	protected readonly item = signal<ClassItem | null>(null);
	protected readonly loading = signal(true);
	protected readonly failed = signal(false);
	protected readonly owner = computed(() => !!this.item() && this.item()?.ownerUid === this.user()?.uid);
	/** Who leads the class. Classes saved before the name was copied onto them fall back to the signed-in owner's own account. */
	protected readonly creator = computed(() => {
		const item = this.item();
		if (!item) return null;
		const me = this.owner() ? this.user() : null;
		return {
			name: item.ownerName || me?.displayName || '',
			email: item.ownerEmail || me?.email?.toLowerCase() || '',
		};
	});

	/** The next lesson from now, in this device's time zone; `null` when the class has no days or time. */
	protected readonly next = computed(() => {
		const item = this.item();
		return (item && upcomingLessons(item, new Date(), 1)[0]) || null;
	});

	constructor() {
		void this._load();
	}

	/** "Monday, 2 November" in the app language. */
	protected dateLabel(date: Date): string {
		const locale = environment.languages.find((item) => item.code === this._i18n.language())?.htmlLang ?? 'en';
		return new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
	}

	protected days(item: ClassItem): string {
		return longDays(item, (text) => this._i18n.t(text));
	}

	private async _load() {
		try {
			this.item.set(await this._classes.get(this._id));
			this.failed.set(!this.item());
		} catch (error) {
			console.error('Could not open the class.', error);
			this.failed.set(true);
		} finally {
			this.loading.set(false);
		}
	}
}
