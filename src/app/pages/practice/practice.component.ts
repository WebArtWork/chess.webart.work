import { afterNextRender, Component, inject, signal } from '@angular/core';
import { HubListComponent } from '../../components/hub-list/hub-list.component';
import { DailyService, todayString } from '../../feature/chess/daily.service';
import { PRACTICE_ITEMS } from '../../feature/hub/hub.const';

/** The Practice hub: pick a training mode. */
@Component({
	imports: [HubListComponent],
	templateUrl: './practice.component.html',
})
export class PracticeComponent {
	private readonly _daily = inject(DailyService);

	protected readonly items = PRACTICE_ITEMS;
	/** Known only in the browser, where the daily results live. */
	protected readonly status = signal<Record<string, string | null>>({});

	constructor() {
		afterNextRender(() => {
			const record = this._daily.get(todayString());
			const daily = record ? (record.won ? 'Solved' : `${record.hits} of ${record.target} found`) : 'Not played today';
			this.status.set({ '/practice/daily': daily });
		});
	}
}
