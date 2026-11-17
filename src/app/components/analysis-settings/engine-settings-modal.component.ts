import { Component, inject } from '@angular/core';
import { PositionInputService } from '../../feature/chess/position-input.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { AnalysisSettingsComponent } from './analysis-settings.component';

/**
 * The engine settings for Study, in the ngx-ui modal (opened by the settings icon in the topbar).
 * ModalService sets `close` on the instance.
 */
@Component({
	selector: 'app-engine-settings-modal',
	imports: [AnalysisSettingsComponent, TPipe],
	template: `
		<div class="flex h-full min-h-[60dvh] flex-col gap-4">
			<h2 id="engine-settings-title" class="text-xl font-semibold tracking-tight">
				{{ 'Engine settings' | t }}
			</h2>
			<div class="flex-1 overflow-y-auto">
				<app-analysis-settings [(settings)]="input.settings" />
			</div>
			<button class="ds-btn ds-btn-primary ds-btn-lg w-full" type="button" (click)="close()">
				{{ 'Done' | t }}
			</button>
		</div>
	`,
})
export class EngineSettingsModalComponent {
	// set by ModalService
	close!: () => void;

	protected readonly input = inject(PositionInputService);
}
