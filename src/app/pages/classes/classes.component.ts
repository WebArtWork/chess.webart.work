import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../feature/auth/auth.service';
import { shortDays } from '../../feature/classroom/classroom.const';
import { ClassItem } from '../../feature/classroom/classroom.interface';
import { ClassesService } from '../../feature/classroom/classes.service';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';

/** The Class hub: the weekly classes you lead or were invited to. */
@Component({
	imports: [RouterLink, TPipe],
	templateUrl: './classes.component.html',
})
export class ClassesComponent {
	private readonly _classes = inject(ClassesService);
	private readonly _i18n = inject(I18nService);
	protected readonly user = inject(AuthService).user;

	protected readonly classes = signal<ClassItem[]>([]);
	protected readonly loading = signal(true);
	protected readonly failed = signal(false);

	constructor() {
		void this._load();
	}

	protected days(item: ClassItem): string {
		return shortDays(item, (text) => this._i18n.t(text));
	}

	private async _load() {
		try {
			this.classes.set(await this._classes.list());
		} catch (error) {
			console.error('Could not load the classes.', error);
			this.failed.set(true);
		} finally {
			this.loading.set(false);
		}
	}
}
