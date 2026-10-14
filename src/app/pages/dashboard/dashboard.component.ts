import { afterNextRender, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { AuthService } from '../../feature/auth/auth.service';
import { DailyService, DayState, RecentDay, todayString } from '../../feature/chess/daily.service';
import { DAILY_MINUTES, PlanDay, WEEK_PLAN } from '../../feature/plan/plan.const';

interface Progress {
	days: RecentDay[];
	/** Consecutive days played, won or not. */
	playedStreak: number;
	found: number | null;
}

/** Shown to signed-out visitors, with the same shape as the real numbers. */
const SAMPLE_STATES: DayState[] = ['won', 'won', 'played', 'won', 'none', 'won', 'won'];
const SAMPLE_FOUND = 72;
const SAMPLE_PLAYED_STREAK = 2;

@Component({
	imports: [IconComponent, RouterLink],
	templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
	private readonly _auth = inject(AuthService);
	private readonly _daily = inject(DailyService);

	protected readonly week = WEEK_PLAN;
	protected readonly dailyMinutes = DAILY_MINUTES;
	protected readonly today = todayString();

	/** 0 = Sunday. Known only in the browser, so prerender never bakes in a weekday. */
	protected readonly weekday = signal<number | null>(null);
	protected readonly dailyDone = signal(false);
	/** How today's daily puzzle went, e.g. "Solved"; null until it is played. */
	protected readonly dailyResult = signal<string | null>(null);

	protected readonly user = this._auth.user;
	protected readonly ready = computed(() => this.user() !== undefined);
	protected readonly isGuest = computed(() => this.user() === null);
	protected readonly todayPlan = computed<PlanDay | null>(
		() => this.week.find((day) => day.day === this.weekday()) ?? null,
	);

	protected readonly progress = computed<Progress | null>(() => {
		if (!this.ready()) return null;
		const days = this._daily.recent(this.today, 7);

		if (this.isGuest()) {
			return {
				days: days.map((day, i) => ({ ...day, state: SAMPLE_STATES[i] })),
				playedStreak: SAMPLE_PLAYED_STREAK,
				found: SAMPLE_FOUND,
			};
		}

		return {
			days,
			playedStreak: this._daily.streaks(this.today).participation,
			found: this._daily.averageFound(days),
		};
	});

	constructor() {
		afterNextRender(() => {
			this.weekday.set(new Date().getDay());
			const record = this._daily.get(this.today);
			this.dailyDone.set(!!record);
			this.dailyResult.set(record ? (record.won ? 'Solved' : `${record.hits} of ${record.target} found`) : null);
			void this._auth.whenReady();
		});
	}

	protected dayLabel(state: DayState): string {
		switch (state) {
			case 'won':
				return 'solved';
			case 'played':
				return 'played';
			case 'none':
				return 'not played';
			default:
				state satisfies never;
				return '';
		}
	}
}
