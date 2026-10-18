import { isPlatformBrowser } from '@angular/common';
import { afterRenderEffect, Component, computed, DestroyRef, effect, ElementRef, inject, PLATFORM_ID, signal, untracked, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BoardComponent, BoardMove } from '../../components/board/board.component';
import { IconComponent } from '../../components/icon/icon.component';
import { PuzzlePanelComponent } from '../../components/puzzle-panel/puzzle-panel.component';
import { Side } from '../../feature/chess/chess.interface';
import { formatEval, uciToSans } from '../../feature/chess/chess.util';
import { EngineService } from '../../feature/chess/engine.service';
import {
	CATEGORY_LABELS,
	LEVEL_LABELS,
	MODE_LABELS,
	openingFamily,
	openingVariation,
} from '../../feature/game/game.const';
import { GameData, PuzzleData } from '../../feature/game/game.interface';
import { GameService } from '../../feature/game/game.service';
import { lineEval, Replay, replayGame } from '../../feature/game/game.util';
import { PuzzleRun } from '../../feature/game/puzzle.run';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { PAWNS } from '../../feature/progress/progress.const';
import { Award, ProgressService } from '../../feature/progress/progress.service';

interface MoveRow {
	number: number;
	white: { ply: number; san: string } | null;
	black: { ply: number; san: string } | null;
}

/**
 * One game: replay it move by move, and solve its training positions on the spot.
 * /games/:id?ply=N opens at a position; ?solve=N starts the puzzle at that ply.
 */
@Component({
	imports: [BoardComponent, IconComponent, PuzzlePanelComponent, RouterLink, TPipe],
	templateUrl: './game.component.html',
	host: { '(document:keydown)': 'onKey($event)' },
})
export class GameComponent {
	private readonly _games = inject(GameService);
	private readonly _engine = inject(EngineService);
	private readonly _progress = inject(ProgressService);
	private readonly _i18n = inject(I18nService);

	private readonly _route = inject(ActivatedRoute);
	private readonly _moveList = viewChild<ElementRef<HTMLElement>>('moveList');

	protected readonly id = signal('');
	protected readonly game = signal<GameData | null>(null);
	protected readonly replay = signal<Replay | null>(null);
	protected readonly loading = signal(true);
	protected readonly failed = signal(false);
	/** Half-moves shown: 0 is the start position. */
	protected readonly current = signal(0);
	protected readonly orientation = signal<Side>('white');
	protected readonly run = signal<PuzzleRun | null>(null);
	/** Plies of the puzzles finished on this visit, and whether they were solved. */
	protected readonly finished = signal<Map<number, boolean>>(new Map());
	/** What the open puzzle earned once finished. */
	protected readonly award = signal<Award | null>(null);
	/** Pawns for finishing every puzzle of the game; null until then, or when it earned before. */
	protected readonly gameAward = signal<number | null>(null);

	protected readonly family = openingFamily;
	protected readonly variation = openingVariation;
	protected readonly levelLabels = LEVEL_LABELS;
	protected readonly categoryLabels = CATEGORY_LABELS;
	protected readonly modeLabels = MODE_LABELS;
	protected readonly format = formatEval;

	protected readonly total = computed(() => this.replay()?.moves.length ?? 0);
	protected readonly fen = computed(() => this.run()?.fen() ?? this.replay()?.fens[this.current()] ?? '');
	protected readonly lastMove = computed(() => {
		const run = this.run();
		if (run) return run.lastMove();
		const move = this.replay()?.moves[this.current() - 1];
		return move ? { from: move.from, to: move.to } : null;
	});
	protected readonly puzzlePlies = computed(() => new Set(this.game()?.puzzles.map((puzzle) => puzzle.ply) ?? []));
	/** The puzzle at the shown position, if there is one. */
	protected readonly puzzleHere = computed(() => this.game()?.puzzles.find((puzzle) => puzzle.ply === this.current()) ?? null);

	protected readonly rows = computed<MoveRow[]>(() => {
		const moves = this.replay()?.moves ?? [];
		const rows: MoveRow[] = [];
		moves.forEach((move, ply) => {
			if (ply % 2 === 0) rows.push({ number: ply / 2 + 1, white: { ply: ply + 1, san: move.san }, black: null });
			else rows[rows.length - 1].black = { ply: ply + 1, san: move.san };
		});
		return rows;
	});

	constructor() {
		const destroyRef = inject(DestroyRef);
		destroyRef.onDestroy(() => this.run()?.dispose());
		// keep the current move visible in the move list, scrolling only the list itself
		afterRenderEffect(() => {
			this.current();
			const list = this._moveList()?.nativeElement;
			const item = list?.querySelector<HTMLElement>('[aria-current="true"]');
			if (!list || !item) return;
			if (item.offsetTop < list.scrollTop) list.scrollTop = item.offsetTop;
			else if (item.offsetTop + item.offsetHeight > list.scrollTop + list.clientHeight) {
				list.scrollTop = item.offsetTop + item.offsetHeight - list.clientHeight;
			}
		});
		// a finished puzzle earns once, and so does finishing them all
		effect(() => {
			const run = this.run();
			if (!run?.done()) return;
			untracked(() => this._earn(run));
		});
		if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
		this._route.paramMap.pipe(takeUntilDestroyed(destroyRef)).subscribe((params) => {
			const id = params.get('id') ?? '';
			if (id === this.id()) return;
			this.id.set(id);
			void this._load(id);
		});
	}

	protected go(ply: number) {
		if (this.run()) return;
		this.current.set(Math.max(0, Math.min(this.total(), ply)));
	}

	protected startPuzzle(puzzle: PuzzleData) {
		this.run()?.dispose();
		this.award.set(null);
		this.current.set(puzzle.ply);
		this.orientation.set(puzzle.side);
		this.run.set(new PuzzleRun(puzzle, this._engine));
	}

	/** Leaves the puzzle and shows the move that was played in the game. */
	protected closePuzzle() {
		const run = this.run();
		if (!run) return;
		run.dispose();
		this.run.set(null);
		this.current.set(Math.min(this.total(), run.puzzle.ply + 1));
	}

	private _earn(run: PuzzleRun) {
		const game = this.game();
		if (!game || this.finished().has(run.puzzle.ply)) return;
		this.finished.update((map) => new Map(map).set(run.puzzle.ply, run.won()));
		this.award.set(
			this._progress.complete({
				key: `${game.id}-${run.puzzle.ply}`,
				rated: { rating: run.puzzle.rating, score: run.score() },
				pawns: run.won() ? PAWNS.puzzleSolved : PAWNS.puzzle,
			}),
		);
		if (this.finished().size < game.puzzles.length) return;
		const award = this._progress.complete({ key: `game-${game.id}`, pawns: PAWNS.game });
		this.gameAward.set(award?.pawns ?? null);
	}

	protected nextPuzzle(after: number): PuzzleData | null {
		return this.game()?.puzzles.find((puzzle) => puzzle.ply > after) ?? null;
	}

	protected onMove({ from, to, promotion }: BoardMove) {
		this.run()?.submit(from, to, promotion);
	}

	protected flip() {
		this.orientation.update((side) => (side === 'white' ? 'black' : 'white'));
	}

	protected onKey(event: KeyboardEvent) {
		if (this.run() || event.altKey || event.ctrlKey || event.metaKey) return;
		const target = event.target as HTMLElement | null;
		if (target?.closest('input, textarea, select, dialog')) return;
		const moves: Record<string, number> = {
			ArrowLeft: this.current() - 1,
			ArrowRight: this.current() + 1,
			Home: 0,
			End: this.total(),
		};
		if (!(event.key in moves)) return;
		event.preventDefault();
		this.go(moves[event.key]);
	}

	/** "Played Qe7, best was Nd3+": what happened at a puzzle, shown once it is finished. */
	protected summary(puzzle: PuzzleData): string {
		const played = uciToSans(puzzle.fen, [puzzle.played.uci.split(' ')[0]])[0] ?? '';
		const best = uciToSans(puzzle.fen, [puzzle.lines[0].uci.split(' ')[0]])[0] ?? '';
		if (played === best) return this._i18n.t('{move} was played in the game, the best move.', { move: best });
		return this._i18n.t('In the game {played} ({playedEval}); best was {best} ({bestEval}).', {
			played,
			playedEval: formatEval(lineEval(puzzle.played)),
			best,
			bestEval: formatEval(lineEval(puzzle.lines[0])),
		});
	}

	protected moveLabel(ply: number): string {
		const number = Math.floor(ply / 2) + 1;
		return this._i18n.t(ply % 2 === 0 ? 'Move {number}, White to move' : 'Move {number}, Black to move', { number });
	}

	protected resultLabel(result: string): string {
		if (result === '1-0') return 'White won';
		if (result === '0-1') return 'Black won';
		return 'Draw';
	}

	private async _load(id: string) {
		this.run()?.dispose();
		this.run.set(null);
		this.finished.set(new Map());
		this.gameAward.set(null);
		this.loading.set(true);
		this.failed.set(false);
		this.current.set(0);
		this.orientation.set('white');
		const game = await this._games.game(id);
		if (id !== this.id()) return;
		if (!game) {
			this.failed.set(true);
			this.loading.set(false);
			return;
		}
		const replay = replayGame(game.moves);
		this.game.set(game);
		this.replay.set(replay);
		this.loading.set(false);

		const query = this._route.snapshot.queryParamMap;
		const solve = Number(query.get('solve'));
		const start = Number(query.get('ply'));
		const puzzle = game.puzzles.find((item) => item.ply === solve);
		if (puzzle) {
			this.startPuzzle(puzzle);
		} else if (Number.isInteger(start) && start > 0) {
			this.current.set(Math.min(start, replay.moves.length));
			const at = game.puzzles.find((item) => item.ply === start);
			if (at) this.orientation.set(at.side);
		}
	}
}
