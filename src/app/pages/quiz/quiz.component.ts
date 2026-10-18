import { isPlatformBrowser } from '@angular/common';
import {
	afterRenderEffect,
	Component,
	computed,
	DestroyRef,
	effect,
	ElementRef,
	inject,
	PLATFORM_ID,
	signal,
	untracked,
	viewChild,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BoardComponent, BoardMove } from '../../components/board/board.component';
import { EngineService } from '../../feature/chess/engine.service';
import { PlayModeService } from '../../feature/chess/play-mode.service';
import { CATEGORY_LABELS, levelOf, themeLabel } from '../../feature/game/game.const';
import { PuzzleData, QuizItem } from '../../feature/game/game.interface';
import { GameService } from '../../feature/game/game.service';
import { PuzzleRun } from '../../feature/game/puzzle.run';
import { ProgressService } from '../../feature/progress/progress.service';
import { QuizService } from '../../feature/quiz/quiz.service';

export type QuizType = 'mate1' | 'mate3' | 'mixed';

const QUIZ_TITLES: Record<QuizType, string> = { mate1: 'Mate in 1', mate3: 'Mate in 3', mixed: 'Tactics' };

interface QuizPuzzle {
	id: string;
	game: string;
	ply: number;
	puzzle: PuzzleData;
}

interface QuizOutcome {
	solved: boolean;
	/** Rating change; null when not rated: a retry, or a puzzle played before. */
	delta: number | null;
	pawns: number;
	retry: boolean;
}

/** A candidate for the next puzzle; `load` fetches what it needs to be played. */
interface QuizEntry {
	id: string;
	rating: number;
	load: () => Promise<QuizPuzzle | null>;
}

/** Results of this visit, newest last, for the strip at the top. */
const SESSION_STRIP = 12;

/**
 * Puzzle after puzzle: solve it with one try, see the result and the rating change, move on.
 * Puzzles come from the games collection, near the player's quiz rating.
 */
@Component({
	imports: [BoardComponent, RouterLink],
	templateUrl: './quiz.component.html',
})
export class QuizComponent {
	private readonly _games = inject(GameService);
	private readonly _engine = inject(EngineService);
	private readonly _playMode = inject(PlayModeService);
	protected readonly quiz = inject(QuizService);
	protected readonly player = inject(ProgressService);
	private readonly _next = viewChild<ElementRef<HTMLElement>>('nextButton');

	/** Which quiz this route is, from its `quiz` data (/practice/mate-in-one, …). */
	protected readonly type = signal<QuizType>(readType(inject(ActivatedRoute).snapshot.data['quiz']));
	protected readonly title = QUIZ_TITLES[this.type()];
	protected readonly loading = signal(true);
	protected readonly failed = signal(false);
	protected readonly current = signal<QuizPuzzle | null>(null);
	protected readonly run = signal<PuzzleRun | null>(null);
	protected readonly outcome = signal<QuizOutcome | null>(null);
	/** Retries are not rated. */
	protected readonly retrying = signal(false);
	protected readonly session = signal<boolean[]>([]);

	protected readonly stats = this.quiz.stats;
	protected readonly strip = computed(() => this.session().slice(-SESSION_STRIP));
	protected readonly side = computed(() => (this.current()?.puzzle.side === 'black' ? 'Black' : 'White'));
	protected readonly task = computed(() => {
		if (this.type() === 'mate1') return 'Mate in 1. Find the mating move.';
		if (this.type() === 'mate3') return 'Mate in 3. Play the mating line, move by move.';
		return this.current()?.puzzle.mode === 'line' ? 'Play the best line, move by move.' : 'Find the best move.';
	});
	/** The line as played or as it should have been, e.g. "Nxe5 dxe5 Qh5+". */
	protected readonly solution = computed(() => this.run()?.line?.solutionSans.join(' ') ?? '');
	protected readonly progress = computed(() => {
		const line = this.run()?.line;
		if (!line || line.done()) return null;
		if (line.status() === 'checking') return 'Checking your move…';
		return line.found() ? 'Correct. Keep going.' : null;
	});
	protected readonly details = computed(() => {
		const puzzle = this.current()?.puzzle;
		if (!puzzle) return '';
		const themes = puzzle.themes.filter((theme) => !theme.startsWith('mateIn')).map(themeLabel);
		return [CATEGORY_LABELS[puzzle.category], ...themes].join(' · ');
	});

	private readonly _pools = new Map<QuizType, QuizEntry[]>();

	constructor() {
		const destroyRef = inject(DestroyRef);
		destroyRef.onDestroy(() => {
			this.run()?.dispose();
			this._playMode.fen.set(null);
		});
		effect(() => this._playMode.fen.set(this.run()?.fen() ?? null));

		// rate the first attempt as soon as it ends
		effect(() => {
			const run = this.run();
			if (!run?.done() || untracked(this.outcome)) return;
			untracked(() => this._finish(run));
		});

		// the Next button takes focus, so Enter moves on
		afterRenderEffect(() => {
			if (this.outcome()) this._next()?.nativeElement.focus({ preventScroll: true });
		});

		if (isPlatformBrowser(inject(PLATFORM_ID))) void this.next();
	}

	protected onMove({ from, to, promotion }: BoardMove) {
		this.run()?.submit(from, to, promotion);
	}

	protected async next() {
		const type = this.type();
		const pool = await this._pool(type);
		const picked = this.quiz.pick(pool, this.current()?.id);
		const puzzle = picked ? await picked.load() : null;
		if (type !== this.type()) return;
		if (!puzzle) {
			this.failed.set(true);
			this.loading.set(false);
			return;
		}
		this.retrying.set(false);
		this._present(puzzle);
	}

	protected retry() {
		const puzzle = this.current();
		if (!puzzle) return;
		this.retrying.set(true);
		this._present(puzzle);
	}

	/** Puzzles of a quiz type, loaded once. */
	private async _pool(type: QuizType): Promise<QuizEntry[]> {
		const cached = this._pools.get(type);
		if (cached) return cached;
		let pool: QuizEntry[] = [];
		if (type === 'mate1' || type === 'mate3') {
			const items = (await this._games.quiz())?.[type] ?? [];
			pool = items.map((item) => ({ id: item.id, rating: item.rating, load: async () => fromQuizItem(item) }));
		} else {
			const puzzles = (await this._games.catalog())?.puzzles ?? [];
			pool = puzzles
				.filter((puzzle) => puzzle.mode === 'best' || puzzle.mode === 'line')
				.map((puzzle) => ({
					id: puzzle.id,
					rating: puzzle.rating,
					load: async () => {
						const loaded = await this._games.puzzle(puzzle.id);
						return loaded && { id: loaded.id, game: loaded.game.id, ply: loaded.puzzle.ply, puzzle: loaded.puzzle };
					},
				}));
		}
		if (pool.length) this._pools.set(type, pool);
		return pool;
	}

	private _present(puzzle: QuizPuzzle) {
		this.run()?.dispose();
		this.outcome.set(null);
		this.current.set(puzzle);
		this.run.set(new PuzzleRun(puzzle.puzzle, this._engine, true));
		this.failed.set(false);
		this.loading.set(false);
	}

	private _finish(run: PuzzleRun) {
		const puzzle = this.current();
		if (!puzzle) return;
		const solved = run.won();
		if (this.retrying()) {
			this.outcome.set({ solved, delta: null, pawns: 0, retry: true });
			return;
		}
		const award = this.quiz.record({ id: puzzle.id, rating: puzzle.puzzle.rating }, solved);
		this.session.update((list) => [...list, solved]);
		this.outcome.set({ solved, delta: award?.delta ?? null, pawns: award?.pawns ?? 0, retry: false });
	}
}

function readType(value: unknown): QuizType {
	return value === 'mate3' || value === 'mixed' ? value : 'mate1';
}

/** A mate-in-N item as a playable puzzle: one line, mate for the side to move. */
function fromQuizItem(item: QuizItem): QuizPuzzle {
	const solution = item.line ?? [item.move];
	const moves = Math.ceil(solution.length / 2);
	const line = { uci: solution.join(' '), cp: null, mate: item.side === 'white' ? moves : -moves };
	return {
		id: item.id,
		game: item.game,
		ply: item.ply,
		puzzle: {
			ply: item.ply,
			fen: item.fen,
			side: item.side,
			mode: moves > 1 ? 'line' : 'best',
			target: 1,
			category: 'tactics',
			categories: ['tactics'],
			themes: ['mate', `mateIn${moves}`],
			level: levelOf(item.rating),
			rating: item.rating,
			quality: 0,
			solution: moves > 1 ? solution : [],
			lines: [line],
			played: line,
		},
	};
}
