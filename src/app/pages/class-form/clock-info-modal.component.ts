import { Component } from '@angular/core';
import { TPipe } from '../../feature/i18n/t.pipe';

/** What the game clock field means, in the ngx-ui modal. ModalService sets `close` on the instance. */
@Component({
	selector: 'app-clock-info-modal',
	imports: [TPipe],
	template: `
		<div class="flex flex-col gap-3">
			<h2 id="clock-info-title" class="text-lg font-semibold tracking-tight">
				{{ 'Game clock' | t }}
			</h2>
			<p>{{ 'Minutes per player + seconds added per move.' | t }}</p>
			<p class="text-sm text-mute">
				{{
					'10+5: each player gets 10 minutes, and 5 seconds are added after every move.'
						| t
				}}
			</p>
			<button class="ds-btn ds-btn-primary h-11 w-full" type="button" (click)="close()">
				{{ 'Close' | t }}
			</button>
		</div>
	`,
})
export class ClockInfoModalComponent {
	// set by ModalService
	close!: () => void;
}
