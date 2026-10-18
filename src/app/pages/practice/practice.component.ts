import { afterNextRender, Component, computed, inject, signal } from '@angular/core';
import { HubListComponent } from '../../components/hub-list/hub-list.component';
import { DailyRecord } from '../../feature/chess/chess.interface';
import { DailyService, todayString } from '../../feature/chess/daily.service';
import { PRACTICE_ITEMS } from '../../feature/hub/hub.const';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';

/** The Practice hub: pick a training mode. */
@Component({
	imports: [HubListComponent, TPipe],
	templateUrl: './practice.component.html',
})
export class PracticeComponent {
	private readonly _daily = inject(DailyService);
	private readonly _i18n = inject(I18nService);

	protected readonly items = PRACTICE_ITEMS;
	/** Today's daily result: undefined until read in the browser, where the daily results live. */
	private readonly _record = signal<DailyRecord | null | undefined>(undefined);
	protected readonly status = computed<Record<string, string | null>>(() => {
		const record = this._record();
		let daily: string | null = null;
		if (record === null) daily = this._i18n.t('Not played today');
		else if (record?.won) daily = this._i18n.t('Solved');
		else if (record) daily = this._i18n.t('{hits} of {target} found', { hits: record.hits, target: record.target });
		return { '/practice/daily': daily };
	});

	constructor() {
		afterNextRender(() => this._record.set(this._daily.get(todayString())));
	}
}
