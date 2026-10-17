import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { PreferencesComponent } from '../../components/preferences/preferences.component';
import { AuthService } from '../../feature/auth/auth.service';
import { DailyService } from '../../feature/chess/daily.service';
import { ProgressService } from '../../feature/progress/progress.service';
import { QuizService } from '../../feature/quiz/quiz.service';

@Component({
	imports: [IconComponent, PreferencesComponent, RouterLink],
	templateUrl: './profile.component.html',
})
export class ProfileComponent {
	private readonly _auth = inject(AuthService);
	private readonly _router = inject(Router);

	protected readonly user = this._auth.user;
	protected readonly stats = signal(inject(DailyService).summary());
	protected readonly quiz = inject(QuizService).stats;
	protected readonly progress = inject(ProgressService);
	protected readonly signingOut = signal(false);
	protected readonly round = Math.round;
	protected readonly name = computed(() => this.user()?.displayName || this.user()?.email || 'Player');
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
}
