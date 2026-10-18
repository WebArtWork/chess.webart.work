import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { TPipe } from '../../feature/i18n/t.pipe';
import { THEORY_CATALOG, THEORY_CATEGORY_LABELS, THEORY_GROUPS, THEORY_INTRO } from '../../feature/theory/theory.catalog';
import { TheoryCategory } from '../../feature/theory/theory.interface';
import { TheoryProgressService } from '../../feature/theory/theory-progress.service';

/** The Theory hub: every lesson in its block, filtered by category (kept in the URL). */
@Component({
	imports: [IconComponent, RouterLink, TPipe],
	templateUrl: './theory.component.html',
})
export class TheoryComponent {
	private readonly _router = inject(Router);
	private readonly _progress = inject(TheoryProgressService);

	protected readonly categoryLabels = THEORY_CATEGORY_LABELS;
	protected readonly intro = THEORY_INTRO;
	/** Categories in catalog order, each once. */
	protected readonly categories = [...new Set(THEORY_CATALOG.map((card) => card.category))];

	private readonly _query = inject(ActivatedRoute).snapshot.queryParamMap;
	protected readonly category = signal<TheoryCategory | null>(readCategory(this._query.get('category')));

	/** The hub's blocks with their filtered cards; empty blocks are left out. */
	protected readonly groups = computed(() => {
		const category = this.category();
		const cards = THEORY_CATALOG.filter((card) => !category || card.category === category).map((card) => ({
			...card,
			passed: !!this._progress.get(card.slug).checked,
		}));
		return THEORY_GROUPS.map((group) => ({ ...group, cards: cards.filter((card) => card.group === group.value) })).filter(
			(group) => group.cards.length,
		);
	});

	protected pickCategory(category: TheoryCategory | null) {
		this.category.set(this.category() === category ? null : category);
		this._syncUrl();
	}

	private _syncUrl() {
		void this._router.navigate([], { queryParams: { category: this.category() }, replaceUrl: true });
	}
}

function readCategory(value: string | null): TheoryCategory | null {
	return value && value in THEORY_CATEGORY_LABELS ? (value as TheoryCategory) : null;
}
