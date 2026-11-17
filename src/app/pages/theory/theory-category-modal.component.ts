import { Component } from '@angular/core';
import { TPipe } from '../../feature/i18n/t.pipe';
import { TheoryCategory } from '../../feature/theory/theory.interface';

/**
 * The category filter of the Theory hub, in the ngx-ui modal (opened from the topbar).
 * ModalService sets `categories`, `labels`, `current`, `close` and `onPick` on the instance.
 */
@Component({
	selector: 'app-theory-category-modal',
	imports: [TPipe],
	template: `
		<div class="flex flex-col gap-3">
			<h2 id="categories-title" class="text-lg font-semibold">{{ 'Category' | t }}</h2>
			<div class="flex flex-wrap gap-2" role="group" aria-labelledby="categories-title">
				<button
					class="ds-chip"
					type="button"
					[attr.aria-pressed]="!current"
					(click)="pick(null)"
				>
					{{ 'All' | t }}
				</button>
				@for (item of categories; track item) {
					<button
						class="ds-chip"
						type="button"
						[attr.aria-pressed]="current === item"
						(click)="pick(item)"
					>
						{{ labels[item] | t }}
					</button>
				}
			</div>
		</div>
	`,
})
export class TheoryCategoryModalComponent {
	// set by ModalService
	close!: () => void;
	categories: TheoryCategory[] = [];
	labels: Record<TheoryCategory, string> = {} as Record<TheoryCategory, string>;
	current: TheoryCategory | null = null;
	onPick!: (category: TheoryCategory | null) => void;

	protected pick(category: TheoryCategory | null) {
		this.onPick(category);
		this.close();
	}
}
