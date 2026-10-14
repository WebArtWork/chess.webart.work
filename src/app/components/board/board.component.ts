import {
	afterNextRender,
	Component,
	computed,
	DestroyRef,
	effect,
	ElementRef,
	inject,
	input,
	output,
	viewChild,
} from '@angular/core';
import type { Api } from '@lichess-org/chessground/api';
import type { Config } from '@lichess-org/chessground/config';
import type { Key } from '@lichess-org/chessground/types';
import { Chess } from 'chess.js';
import { Side } from '../../feature/chess/chess.interface';

export interface BoardMove {
	from: string;
	to: string;
}

export interface BoardArrow {
	from: string;
	to: string;
	brush: 'green' | 'blue' | 'red' | 'yellow';
}

/** Chessground wrapper. The parent owns the position; the board only reports moves. */
@Component({
	selector: 'app-board',
	template: `<div #host class="aspect-square w-full overflow-hidden sm:rounded-xl"></div>`,
})
export class BoardComponent {
	readonly fen = input.required<string>();
	readonly orientation = input<Side>('white');
	readonly interactive = input(true);
	readonly viewOnly = input(false);
	readonly arrows = input<BoardArrow[]>([]);
	readonly lastMove = input<BoardMove | null>(null);
	readonly moved = output<BoardMove>();

	private readonly _host = viewChild.required<ElementRef<HTMLElement>>('host');
	private _api?: Api;

	private readonly _dests = computed(() => {
		const map = new Map<Key, Key[]>();
		if (!this.interactive()) return map;
		try {
			const game = new Chess(this.fen());
			for (const move of game.moves({ verbose: true })) {
				const list = map.get(move.from as Key) ?? [];
				list.push(move.to as Key);
				map.set(move.from as Key, list);
			}
		} catch {
			/* invalid fen: no moves */
		}
		return map;
	});

	constructor() {
		const destroyRef = inject(DestroyRef);

		afterNextRender(async () => {
			const { Chessground } = await import('@lichess-org/chessground');
			if (destroyRef.destroyed) return;
			this._api = Chessground(this._host().nativeElement, {
				...this._config(),
				events: {
					move: (from, to) => {
						this.moved.emit({ from, to });
						// snap back; the parent re-renders with a new fen if the move was applied
						this._api?.set(this._config());
					},
				},
			});
			destroyRef.onDestroy(() => this._api?.destroy());
		});

		effect(() => {
			const config = this._config();
			this._api?.set(config);
		});
	}

	private _config(): Config {
		const turn: Side = this.fen().includes(' b ') ? 'black' : 'white';
		const move = this.lastMove();
		return {
			fen: this.fen().split(' ')[0],
			orientation: this.orientation(),
			turnColor: turn,
			lastMove: move ? ([move.from, move.to] as Key[]) : undefined,
			coordinates: !this.viewOnly(),
			viewOnly: this.viewOnly(),
			animation: { enabled: true, duration: 150 },
			highlight: { lastMove: true, check: true },
			movable: {
				free: false,
				color: this.interactive() ? turn : undefined,
				dests: this._dests(),
				showDests: true,
			},
			draggable: { enabled: this.interactive() },
			selectable: { enabled: this.interactive() },
			drawable: {
				enabled: false,
				autoShapes: this.arrows().map((arrow) => ({
					orig: arrow.from as Key,
					dest: arrow.to as Key,
					brush: arrow.brush,
				})),
			},
		};
	}
}
