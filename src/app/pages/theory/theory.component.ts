import { Component, computed, DestroyRef, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { TPipe } from '../../feature/i18n/t.pipe';
import { THEORY_CATALOG, THEORY_CATEGORY_LABELS, THEORY_GROUPS, THEORY_INTRO } from '../../feature/theory/theory.catalog';
import { TheoryCategory } from '../../feature/theory/theory.interface';
import { TheoryProgressService } from '../../feature/theory/theory-progress.service';
import { TheoryToolbarService } from '../../feature/theory/theory-toolbar.service';

/** The Theory hub: every lesson in its block, filtered by category (kept in the URL, picked from the topbar). */
@Component({
	imports: [IconComponent, RouterLink, TPipe],
	templateUrl: './theory.component.html',
})
export class TheoryComponent {
	private readonly _router = inject(Router);
	private readonly _progress = inject(TheoryProgressService);
	private readonly _toolbar = inject(TheoryToolbarService);
	private readonly _sheet = viewChild.required<ElementRef<HTMLDialogElement>>('sheet');

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

	constructor() {
		// the category button lives in the topbar
		const destroyRef = inject(DestroyRef);
		this._toolbar.active.set(true);
		destroyRef.onDestroy(() => {
			this._toolbar.active.set(false);
			this._toolbar.filtered.set(false);
		});
		effect(() => this._toolbar.filtered.set(!!this.category()));
		this._toolbar.categories$.pipe(takeUntilDestroyed(destroyRef)).subscribe(() => this._sheet().nativeElement.showModal());
	}

	protected pickCategory(category: TheoryCategory | null) {
		this.category.set(this.category() === category ? null : category);
		this._syncUrl();
		this.closeSheet();
	}

	protected closeSheet() {
		this._sheet().nativeElement.close();
	}

	/** A tap on the dimmed backdrop (the dialog element itself) closes the sheet. */
	protected onSheetClick(event: MouseEvent) {
		if (event.target === this._sheet().nativeElement) this.closeSheet();
	}

	private _syncUrl() {
		void this._router.navigate([], { queryParams: { category: this.category() }, replaceUrl: true });
	}
}

function readCategory(value: string | null): TheoryCategory | null {
	return value && value in THEORY_CATEGORY_LABELS ? (value as TheoryCategory) : null;
}
