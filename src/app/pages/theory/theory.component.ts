import { afterNextRender, Component, computed, DestroyRef, effect, inject, Injector, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModalService } from '@wawjs/ngx-ui';
import { IconComponent } from '../../components/icon/icon.component';
import { PrintedLesson, TheoryPrintComponent } from '../../components/theory-print/theory-print.component';
import { TheoryPrintModalComponent } from '../../components/theory-print/theory-print-modal.component';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { THEORY_CATALOG, THEORY_CATEGORY_LABELS, THEORY_GROUPS, THEORY_INTRO } from '../../feature/theory/theory.catalog';
import { TheoryCategory } from '../../feature/theory/theory.interface';
import { TheoryProgressService } from '../../feature/theory/theory-progress.service';
import { TheoryToolbarService } from '../../feature/theory/theory-toolbar.service';
import { TheoryCategoryModalComponent } from './theory-category-modal.component';

/** Every hub block with all its lessons, in hub order: what the print dialog lists. */
const PRINT_GROUPS = THEORY_GROUPS.map((group) => ({
	value: group.value,
	label: group.label,
	cards: THEORY_CATALOG.filter((card) => card.group === group.value),
})).filter((group) => group.cards.length);

/** The Theory hub: every lesson in its block, filtered by category (kept in the URL, picked from the topbar). */
@Component({
	imports: [IconComponent, RouterLink, TheoryPrintComponent, TPipe],
	templateUrl: './theory.component.html',
})
export class TheoryComponent {
	private readonly _router = inject(Router);
	private readonly _i18n = inject(I18nService);
	private readonly _injector = inject(Injector);
	private readonly _progress = inject(TheoryProgressService);
	private readonly _toolbar = inject(TheoryToolbarService);
	private readonly _modal = inject(ModalService);

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

	/** Loading the lesson texts and their translations for printing. */
	protected readonly preparing = signal(false);
	/** The lessons being printed; rendered only for the print dialog. */
	protected readonly printing = signal<PrintedLesson[] | null>(null);

	constructor() {
		// the category button lives in the topbar
		const destroyRef = inject(DestroyRef);
		this._toolbar.active.set(true);
		destroyRef.onDestroy(() => {
			this._toolbar.active.set(false);
			this._toolbar.filtered.set(false);
			this._toolbar.preparing.set(false);
		});
		effect(() => this._toolbar.filtered.set(!!this.category()));
		effect(() => this._toolbar.preparing.set(this.preparing()));
		this._toolbar.print$.pipe(takeUntilDestroyed(destroyRef)).subscribe(() => this.openPrint());
		this._toolbar.categories$.pipe(takeUntilDestroyed(destroyRef)).subscribe(() => this.openCategories());
	}

	/** Opens the lesson picker; the lessons the hub shows (all of them, or the picked category) start selected. */
	protected openPrint() {
		if (this.preparing()) return;
		this._modal.show({
			component: TheoryPrintModalComponent,
			// a phone gets the whole screen, a larger window a wide dialog
			size: window.innerWidth < 640 ? 'fullscreen' : 'mid',
			ariaLabelledBy: 'print-title',
			groups: PRINT_GROUPS,
			initial: this.groups().flatMap((group) => group.cards.map((card) => card.slug)),
			onPrint: (slugs: string[]) => void this.print(slugs),
		});
	}

	/** Prints the chosen lessons, text only. */
	private async print(slugs: string[]) {
		if (this.preparing() || !slugs.length) return;
		this.preparing.set(true);
		const cards = PRINT_GROUPS.flatMap((group) => group.cards).filter((card) => slugs.includes(card.slug));
		const [{ THEORY_LESSONS }] = await Promise.all([
			import('../../feature/theory/lessons'),
			this._i18n.loadPages(
				cards.map((card) => `/i18n/theory/${card.slug}/`),
				this._i18n.language(),
			),
		]);
		this.printing.set(cards.map((card) => ({ card, lesson: THEORY_LESSONS.find((lesson) => lesson.slug === card.slug)! })));
		afterNextRender(
			() => {
				this.preparing.set(false);
				// some browsers return from print() before the dialog closes
				window.addEventListener('afterprint', () => this.printing.set(null), { once: true });
				window.print();
			},
			{ injector: this._injector },
		);
	}

	protected pickCategory(category: TheoryCategory | null) {
		this.category.set(this.category() === category ? null : category);
		this._syncUrl();
	}

	/** The category filter, opened from the topbar. */
	protected openCategories() {
		this._modal.show({
			component: TheoryCategoryModalComponent,
			size: 'small',
			ariaLabelledBy: 'categories-title',
			categories: this.categories,
			labels: this.categoryLabels,
			current: this.category(),
			onPick: (category: TheoryCategory | null) => this.pickCategory(category),
		});
	}

	private _syncUrl() {
		void this._router.navigate([], { queryParams: { category: this.category() }, replaceUrl: true });
	}
}

function readCategory(value: string | null): TheoryCategory | null {
	return value && value in THEORY_CATEGORY_LABELS ? (value as TheoryCategory) : null;
}
