import { isPlatformBrowser } from '@angular/common';
import { afterRenderEffect, Component, computed, DestroyRef, ElementRef, inject, PLATFORM_ID, signal, viewChild } from '@angular/core';
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
	imports: [BoardComponent, IconComponent, PuzzlePanelComponent, RouterLink],
	templateUrl: './game.component.html',
	host: { '(document:keydown)': 'onKey($event)' },
})
export class GameComponent {
	private readonly _games = inject(GameService);
	private readonly _engine = inject(EngineService);

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
		this.current.set(puzzle.ply);
		this.orientation.set(puzzle.side);
		this.run.set(new PuzzleRun(puzzle, this._engine));
	}

	/** Leaves the puzzle and shows the move that was played in the game. */
	protected closePuzzle() {
		const run = this.run();
		if (!run) return;
		if (run.done()) this.finished.update((map) => new Map(map).set(run.puzzle.ply, run.won()));
		run.dispose();
		this.run.set(null);
		this.current.set(Math.min(this.total(), run.puzzle.ply + 1));
	}

	protected nextPuzzle(after: number): PuzzleData | null {
		return this.game()?.puzzles.find((puzzle) => puzzle.ply > after) ?? null;
	}

	protected onMove({ from, to }: BoardMove) {
		this.run()?.submit(from, to);
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
		if (played === best) return `${best} was played in the game, the best move.`;
		return `In the game ${played} (${formatEval(lineEval(puzzle.played))}); best was ${best} (${formatEval(lineEval(puzzle.lines[0]))}).`;
	}

	protected moveLabel(ply: number): string {
		const number = Math.floor(ply / 2) + 1;
		return ply % 2 === 0 ? `Move ${number}, White to move` : `Move ${number}, Black to move`;
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
