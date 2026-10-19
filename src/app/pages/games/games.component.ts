import { isPlatformBrowser } from '@angular/common';
import { Component, computed, DestroyRef, effect, ElementRef, inject, PLATFORM_ID, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BoardComponent } from '../../components/board/board.component';
import { IconComponent } from '../../components/icon/icon.component';
import { GamesToolbarService } from '../../feature/chess/games-toolbar.service';
import {
	activeFilterCount,
	CATEGORY_LABELS,
	EMPTY_FILTERS,
	ENDGAME_LABELS,
	FilterKey,
	FilterOption,
	LEVEL_LABELS,
	MODE_LABELS,
	openingFamily,
	openingVariation,
	readFilters,
	SACRIFICE_LABELS,
	STRUCTURE_LABELS,
	themeLabel,
} from '../../feature/game/game.const';
import { Catalog, CatalogGame, CatalogPuzzle, PuzzleFilters } from '../../feature/game/game.interface';
import { GameService } from '../../feature/game/game.service';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';

const PAGE_SIZE = 12;
const OPENING_CHIPS = 14;

interface GameCard {
	game: CatalogGame;
	/** First training position, shown as the preview. */
	preview: CatalogPuzzle | null;
}

@Component({
	imports: [BoardComponent, IconComponent, RouterLink, TPipe],
	templateUrl: './games.component.html',
})
export class GamesComponent {
	private readonly _games = inject(GameService);
	private readonly _toolbar = inject(GamesToolbarService);
	private readonly _i18n = inject(I18nService);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly _sheet = viewChild.required<ElementRef<HTMLDialogElement>>('sheet');

	protected readonly catalog = signal<Catalog | null>(null);
	protected readonly loading = signal(true);
	protected readonly filters = signal<PuzzleFilters>(readFilters(inject(ActivatedRoute).snapshot.queryParamMap));
	protected readonly seed = signal(0);
	protected readonly family = openingFamily;
	protected readonly variation = openingVariation;
	protected readonly levelLabels = LEVEL_LABELS;
	protected readonly categoryLabels = CATEGORY_LABELS;

	/** Chip groups shown after the opening search, in sheet order, with puzzle counts. */
	protected readonly groups = computed(() => {
		const facets = this.catalog()?.facets;
		const t = (text: string) => this._i18n.t(text);
		const count = (key: FilterKey, value: string) => facets?.[key]?.[value] ?? 0;
		const options = (key: FilterKey, labels: Record<string, string>, order?: string[]): FilterOption[] =>
			(order ?? Object.keys(facets?.[key] ?? {}).sort((a, b) => count(key, b) - count(key, a)))
				.filter((value) => count(key, value))
				.map((value) => ({ value, label: `${t(labels[value] ?? value)} · ${count(key, value)}` }));
		const themes = Object.fromEntries(Object.keys(facets?.theme ?? {}).map((theme) => [theme, themeLabel(theme)]));
		return [
			{ key: 'category' as const, label: t('Training focus'), options: options('category', CATEGORY_LABELS) },
			{ key: 'level' as const, label: t('Level'), options: options('level', LEVEL_LABELS, Object.keys(LEVEL_LABELS)) },
			{ key: 'theme' as const, label: t('Theme'), options: options('theme', themes) },
			{ key: 'mode' as const, label: t('Exercise'), options: options('mode', MODE_LABELS, Object.keys(MODE_LABELS)) },
			{ key: 'side' as const, label: t('Side to move'), options: options('side', { white: 'White', black: 'Black' }, ['white', 'black']) },
			{ key: 'structure' as const, label: t('Pawn structure'), options: options('structure', STRUCTURE_LABELS) },
			{ key: 'endgame' as const, label: t('Endgame type'), options: options('endgame', ENDGAME_LABELS, Object.keys(ENDGAME_LABELS)) },
			{ key: 'sacrifice' as const, label: t('Sacrifices (games)'), options: options('sacrifice', SACRIFICE_LABELS, Object.keys(SACRIFICE_LABELS)) },
		].filter((group) => group.options.length);
	});

	protected readonly openings = computed<FilterOption[]>(() => {
		const counts = this.catalog()?.facets.opening ?? {};
		return Object.entries(counts)
			.filter(([name]) => name !== 'Unknown opening')
			.sort((a, b) => b[1] - a[1])
			.slice(0, OPENING_CHIPS)
			.map(([name]) => ({ value: name, label: name }));
	});

	protected readonly matches = computed(() => {
		const catalog = this.catalog();
		return catalog ? this._games.filterGames(catalog, this.filters()) : [];
	});

	protected readonly activeCount = computed(() => activeFilterCount(this.filters()));

	protected readonly samples = computed<GameCard[]>(() => {
		this.seed();
		const catalog = this.catalog();
		if (!catalog) return [];
		const puzzles = new Map(catalog.puzzles.map((puzzle) => [puzzle.id, puzzle]));
		return [...this.matches()]
			.sort(() => Math.random() - 0.5)
			.slice(0, PAGE_SIZE)
			.map((game) => ({ game, preview: puzzles.get(game.puzzles[0]) ?? null }));
	});

	constructor() {
		// on phones the count, shuffle and filters live in the topbar
		const destroyRef = inject(DestroyRef);
		this._toolbar.active.set(true);
		destroyRef.onDestroy(() => {
			this._toolbar.active.set(false);
			this._toolbar.count.set(null);
		});
		effect(() => this._toolbar.count.set(this.loading() ? null : this.matches().length));
		effect(() => this._toolbar.filterCount.set(this.activeCount()));
		this._toolbar.shuffle$.pipe(takeUntilDestroyed(destroyRef)).subscribe(() => this.shuffle());
		this._toolbar.filters$.pipe(takeUntilDestroyed(destroyRef)).subscribe(() => this.openSheet());

		if (this._isBrowser) {
			void this._games.catalog().then((catalog) => {
				this.catalog.set(catalog);
				this.loading.set(false);
			});
		}
	}

	protected isActive(key: FilterKey, value: string): boolean {
		return this.filters()[key].includes(value);
	}

	protected toggle(key: FilterKey, value: string) {
		this.filters.update((filters) => ({
			...filters,
			[key]: filters[key].includes(value) ? filters[key].filter((item) => item !== value) : [...filters[key], value],
		}));
	}

	protected setSearch(value: string) {
		this.filters.update((filters) => ({ ...filters, search: value }));
	}

	protected clear() {
		this.filters.set({ ...EMPTY_FILTERS });
	}

	protected shuffle() {
		this.seed.update((value) => value + 1);
	}

	protected openSheet() {
		this._sheet().nativeElement.showModal();
	}

	protected closeSheet() {
		this._sheet().nativeElement.close();
	}

	/** A tap on the dimmed backdrop (the dialog element itself) closes the sheet. */
	protected onSheetClick(event: MouseEvent) {
		if (event.target === this._sheet().nativeElement) this.closeSheet();
	}

	protected resultLabel(result: string): string {
		if (result === '1-0') return 'White won';
		if (result === '0-1') return 'Black won';
		return 'Draw';
	}
}
