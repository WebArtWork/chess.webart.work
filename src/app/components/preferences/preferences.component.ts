import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '@wawjs/ngx-ui';
import { IconComponent } from '../icon/icon.component';

/** Interface preferences, shown on the sign-in and profile pages. */
@Component({
	selector: 'app-preferences',
	imports: [IconComponent],
	template: `
		<section class="flex flex-col gap-3" aria-labelledby="appearance-title">
			<h2 id="appearance-title" class="text-sm font-medium text-mute">Appearance</h2>
			<div class="flex gap-2" role="group" aria-label="Appearance">
				<button class="ds-chip h-11 px-4" type="button" [attr.aria-pressed]="!isDark()" (click)="set('light')">
					<app-icon name="sun" />
					Light
				</button>
				<button class="ds-chip h-11 px-4" type="button" [attr.aria-pressed]="isDark()" (click)="set('dark')">
					<app-icon name="moon" />
					Dark
				</button>
			</div>
		</section>
	`,
})
export class PreferencesComponent {
	private readonly _theme = inject(ThemeService);

	protected readonly isDark = computed(() => this._theme.mode() === 'dark');

	protected set(mode: 'light' | 'dark') {
		this._theme.setMode(mode);
	}
}
