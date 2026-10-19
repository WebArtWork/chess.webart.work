import { afterNextRender, Component, computed, inject, signal } from '@angular/core';
import { HubListComponent } from '../../components/hub-list/hub-list.component';
import { DailyRecord } from '../../feature/chess/chess.interface';
import { DailyService, todayString } from '../../feature/chess/daily.service';
import { PRACTICE_GROUPS } from '../../feature/hub/hub.const';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { ReviewService } from '../../feature/practice/review.service';

/** The Practice hub: pick a training mode, grouped, two related modes to a row. */
@Component({
	imports: [HubListComponent, TPipe],
	templateUrl: './practice.component.html',
})
export class PracticeComponent {
	private readonly _daily = inject(DailyService);
	private readonly _i18n = inject(I18nService);
	private readonly _review = inject(ReviewService);

	protected readonly groups = PRACTICE_GROUPS;
	/** Today's daily result: undefined until read in the browser, where the daily results live. */
	private readonly _record = signal<DailyRecord | null | undefined>(undefined);
	protected readonly status = computed<Record<string, string | null>>(() => {
		const record = this._record();
		let daily: string | null = null;
		if (record === null) daily = this._i18n.t('Not played today');
		else if (record?.won) daily = this._i18n.t('Solved');
		else if (record) daily = this._i18n.t('{hits} of {target} found', { hits: record.hits, target: record.target });
		// the queue lives in this browser too: read once rendered there
		const due = this._record() === undefined ? 0 : this._review.due().length;
		const review = due ? this._i18n.t('{count} due today|{count} due today', { count: due }) : null;
		return { '/practice/daily': daily, '/practice/review': review };
	});

	constructor() {
		afterNextRender(() => this._record.set(this._daily.get(todayString())));
	}
}
