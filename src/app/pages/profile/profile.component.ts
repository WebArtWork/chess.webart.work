import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { PreferencesComponent } from '../../components/preferences/preferences.component';
import { AuthService } from '../../feature/auth/auth.service';
import { DailyService } from '../../feature/chess/daily.service';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { ProgressService } from '../../feature/progress/progress.service';
import { QuizService } from '../../feature/quiz/quiz.service';

@Component({
	imports: [IconComponent, PreferencesComponent, RouterLink, TPipe],
	templateUrl: './profile.component.html',
})
export class ProfileComponent {
	private readonly _auth = inject(AuthService);
	private readonly _router = inject(Router);
	private readonly _i18n = inject(I18nService);

	protected readonly user = this._auth.user;
	protected readonly stats = signal(inject(DailyService).summary());
	protected readonly quiz = inject(QuizService).stats;
	protected readonly progress = inject(ProgressService);
	protected readonly signingOut = signal(false);
	protected readonly confirmingDelete = signal(false);
	protected readonly deleting = signal(false);
	protected readonly deleteError = signal<string | null>(null);
	protected readonly round = Math.round;
	protected readonly name = computed(() => this.user()?.displayName || this.user()?.email || this._i18n.t('Player'));
	protected readonly initial = computed(() => this.name().trim().charAt(0).toUpperCase());

	protected async signOut() {
		this.signingOut.set(true);
		try {
			await this._auth.signOut();
			await this._router.navigateByUrl('/');
		} finally {
			this.signingOut.set(false);
		}
	}

	protected async deleteAccount() {
		this.deleting.set(true);
		this.deleteError.set(null);
		try {
			await this._auth.deleteAccount();
			// a full reload, so no progress from the deleted account stays in memory
			window.location.assign('/');
		} catch (error) {
			console.error('Could not delete the account.', error);
			const closed = (error as { code?: string }).code === 'auth/popup-closed-by-user';
			this.deleteError.set(
				closed ? 'Sign-in was cancelled, so nothing was deleted.' : 'Could not delete your account. Check your connection and try again.',
			);
			this.deleting.set(false);
		}
	}
}
