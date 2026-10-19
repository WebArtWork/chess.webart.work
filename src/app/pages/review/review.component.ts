import { isPlatformBrowser } from '@angular/common';
import { Component, computed, DestroyRef, effect, inject, PLATFORM_ID, signal, untracked } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BoardComponent, BoardMove } from '../../components/board/board.component';
import { AuthService } from '../../feature/auth/auth.service';
import { EngineService } from '../../feature/chess/engine.service';
import { SavedGamesService } from '../../feature/chess/saved-games.service';
import { levelOf } from '../../feature/game/game.const';
import { PuzzleData } from '../../feature/game/game.interface';
import { PuzzleRun } from '../../feature/game/puzzle.run';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { findMistakes } from '../../feature/practice/own-mistakes';
import { PRACTICE_TITLES } from '../../feature/practice/practice.const';
import { OwnMistake, ReviewEntry, ReviewService } from '../../feature/practice/review.service';
import { formatLine } from '../../feature/practice/practice.util';

/** Saved games looked at per scan, most recent first. */
const SCAN_GAMES = 5;

/**
 * The review queue: what you missed in any practice comes back after 1, 3 and 7 days. Start goes
 * through what is due today, practice by practice. Mistakes found in your saved games join the
 * queue and are played here, as find-a-better-move puzzles.
 */
@Component({
	imports: [BoardComponent, RouterLink, TPipe],
	templateUrl: './review.component.html',
})
export class ReviewComponent {
	protected readonly review = inject(ReviewService);
	protected readonly auth = inject(AuthService);
	private readonly _engine = inject(EngineService);
	private readonly _saved = inject(SavedGamesService);
	private readonly _router = inject(Router);
	private readonly _route = inject(ActivatedRoute);
	private readonly _i18n = inject(I18nService);
	protected readonly titles = PRACTICE_TITLES;

	/** Due today, grouped by practice. */
	protected readonly groups = computed(() => {
		const groups = new Map<string, ReviewEntry[]>();
		for (const entry of this.review.due()) groups.set(entry.kind, [...(groups.get(entry.kind) ?? []), entry]);
		return [...groups.entries()].map(([kind, entries]) => ({ kind: kind as ReviewEntry['kind'], entries }));
	});
	protected readonly upcoming = computed(() => this.review.entries().length - this.review.due().length);

	// the saved-games scan
	protected readonly scanning = signal(false);
	protected readonly scanned = signal<{ done: number; total: number } | null>(null);
	protected readonly scanResult = signal<string | null>(null);
	private _stop = false;

	// one of your own mistakes, played here
	protected readonly own = signal<{ id: string; mistake: OwnMistake } | null>(null);
	protected readonly run = signal<PuzzleRun | null>(null);
	protected readonly solved = signal<boolean | null>(null);
	protected readonly ownLine = computed(() => {
		const own = this.own();
		return own ? formatLine(own.mistake.fen, own.mistake.line) : '';
	});

	constructor() {
		const destroyRef = inject(DestroyRef);
		destroyRef.onDestroy(() => {
			this._stop = true;
			this.run()?.dispose();
		});
		// the first attempt at your own mistake moves it along the queue
		effect(() => {
			const run = this.run();
			const own = this.own();
			if (!run?.done() || !own || untracked(this.solved) !== null) return;
			untracked(() => {
				this.solved.set(run.won());
				this.review.record('own', own.id, run.won());
			});
		});
		if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
		this._route.queryParamMap.pipe(takeUntilDestroyed(destroyRef)).subscribe((params) => this._openOwn(params.get('id')));
	}

	protected start() {
		const entry = this.review.next();
		if (!entry) return;
		const { path, query } = this.review.link(entry);
		void this._router.navigate([path], { queryParams: query });
	}

	protected nextOwn() {
		const own = this.own();
		const entry = this.review.next(own ? { kind: 'own', id: own.id } : undefined);
		if (entry) {
			const { path, query } = this.review.link(entry);
			void this._router.navigate([path], { queryParams: query });
		} else {
			void this._router.navigate(['/practice/review']);
		}
	}

	protected onMove({ from, to, promotion }: BoardMove) {
		this.run()?.submit(from, to, promotion);
	}

	protected async scan() {
		if (this.scanning()) return;
		this.scanning.set(true);
		this.scanResult.set(null);
		this._stop = false;
		try {
			const games = (await this._saved.list()).slice(0, SCAN_GAMES);
			if (!games.length) {
				this.scanResult.set(this._i18n.t('No saved games yet. Save a game from the analysis board first.'));
				return;
			}
			const found = await findMistakes(this._engine, games, (done, total) => this.scanned.set({ done, total }), () => this._stop);
			const added = this.review.addOwn(found);
			this.scanResult.set(this._i18n.t('Found {found} mistakes; {added} new ones are in your review.', { found: found.length, added }));
		} catch (error) {
			this.scanResult.set((error as Error).message);
		} finally {
			this.scanning.set(false);
			this.scanned.set(null);
		}
	}

	protected stopScan() {
		this._stop = true;
	}

	private _openOwn(id: string | null) {
		const entry = id ? this.review.entries().find((item) => item.kind === 'own' && item.id === id) : null;
		this.run()?.dispose();
		this.solved.set(null);
		if (!entry?.own) {
			this.own.set(null);
			this.run.set(null);
			return;
		}
		this.own.set({ id: entry.id, mistake: entry.own });
		this.run.set(new PuzzleRun(ownPuzzle(entry.own), this._engine));
	}
}

/** Your mistake as a find-the-best-move puzzle; other moves the engine rates as good count too. */
function ownPuzzle(mistake: OwnMistake): PuzzleData {
	const side = mistake.fen.split(' ')[1] === 'w' ? 'white' : 'black';
	return {
		ply: 0,
		fen: mistake.fen,
		side,
		mode: 'best',
		target: 1,
		category: 'criticalDecision',
		categories: ['criticalDecision'],
		themes: [],
		level: levelOf(1200),
		rating: 1200,
		quality: 0,
		solution: [],
		lines: [{ uci: mistake.line.join(' ') || mistake.best, cp: Math.round(mistake.eval * 100), mate: null }],
		played: { uci: mistake.played, cp: null, mate: null },
	};
}
