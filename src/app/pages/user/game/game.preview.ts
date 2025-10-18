import {
	AfterViewInit,
	Component,
	ElementRef,
	inject,
	OnDestroy,
	ViewChild
} from '@angular/core';
import { Chessground } from '@lichess-org/chessground';
import type { Api } from '@lichess-org/chessground/api';
import type { Key } from '@lichess-org/chessground/types';
import { Chess } from 'chess.js';
import { UserService } from 'src/app/modules/user/services/user.service';
import { games } from './test';

export type PlayerMarker = 'm' | 'o';
export type Winner = 'black' | 'white' | 'draw';

export interface ChessGame {
	white: PlayerMarker;
	black: PlayerMarker;
	moves: string[];
	win: Winner;
}

// If you store many games:
export type ChessGames = ChessGame[];

@Component({
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
	standalone: false
})
export class GameComponent implements AfterViewInit, OnDestroy {
	@ViewChild('board', { static: true }) boardEl!: ElementRef<HTMLDivElement>;

	games: ChessGame[] = games.slice() as ChessGame[];

	userService = inject(UserService);
	private cg!: Api;
	private game = new Chess();

	session = {
		white: 'Name of player one',
		black: 'Name of player two',
		moves: [
			'e4',
			'e5',
			'Nf3',
			'Nc6',
			'Bc4',
			'Bc5',
			'c3',
			'Nf6',
			'd4',
			'exd4',
			'cxd4',
			'Bb4+',
			'Nc3',
			'Nxe4',
			'O-O',
			'Bxc3',
			'd5',
			'Ne7',
			'bxc3',
			'O-O',
			'Re1',
			'Nxc3',
			'Qd4',
			'Na4',
			'Bg5',
			'f6',
			'd6+',
			'Kh8',
			'Re7',
			'Nb6',
			'Rxg7'
		],
		win: 'black'
	};

	ngAfterViewInit() {
		this.cg = Chessground(this.boardEl.nativeElement, {
			fen: this.game.fen(),
			coordinates: true,
			orientation: 'white',
			highlight: { lastMove: true, check: true },
			animation: { duration: 200 },
			draggable: { enabled: false }, // prevent manual drags during replay
			movable: {
				free: false,
				color: this.game.turn() === 'w' ? 'white' : 'black',
				dests: this.computeDests()
			}
		});

		console.log(games);
	}

	ngOnDestroy() {
		this.pause();
		(this.cg as any)?.destroy?.();
	}

	private computeDests(): Map<Key, Key[]> {
		const dests = new Map<Key, Key[]>();
		for (const m of this.game.moves({ verbose: true }) as Array<{
			from: Key;
			to: Key;
		}>) {
			const arr = dests.get(m.from) || [];
			arr.push(m.to);
			dests.set(m.from, arr);
		}
		return dests;
	}

	loadFen(fen: string) {
		this.game.load(fen);
		this.cg.set({
			fen,
			movable: { dests: this.computeDests() },
			turnColor: this.game.turn() === 'w' ? 'white' : 'black'
		});
	}

	reset() {
		this.game.reset();
		this.cg.set({
			fen: this.game.fen(),
			movable: { dests: this.computeDests() },
			turnColor: 'white'
		});
	}

	first() {
		this.pause();
		this.game.reset();
		this.moveIndex = 0;
		this.refreshBoard();
	}

	last() {
		this.pause();
		this.game.reset();
		for (const san of this.session.moves) this.game.move(san);
		this.moveIndex = this.session.moves.length;
		const hist = this.game.history({ verbose: true }) as Array<{
			from: Key;
			to: Key;
		}>;
		const last = hist.length ? hist[hist.length - 1] : undefined;
		this.refreshBoard(last);
	}

	moveIndex = 0;

	playing = false;

	private timerId: any = null;

	private refreshBoard(last?: { from: Key; to: Key }) {
		this.cg.set({
			fen: this.game.fen(),
			turnColor: this.game.turn() === 'w' ? 'white' : 'black',
			lastMove: last ? [last.from, last.to] : undefined,
			highlight: { lastMove: true, check: true },
			movable: { dests: this.computeDests() }
		});
	}

	next() {
		if (this.moveIndex >= this.session.moves.length) {
			this.pause();
			return;
		}
		const san = this.session.moves[this.moveIndex];
		const move = this.game.move(san);
		if (!move) {
			this.pause();
			return;
		}
		this.moveIndex++;
		this.refreshBoard({ from: move.from as Key, to: move.to as Key });
		if (this.moveIndex >= this.session.moves.length) this.pause(); // auto-stop at end
	}

	prev() {
		if (this.moveIndex <= 0) return;
		this.pause();
		this.game.undo();
		this.moveIndex--;
		const hist = this.game.history({ verbose: true }) as Array<{
			from: Key;
			to: Key;
		}>;
		const last = hist.length ? hist[hist.length - 1] : undefined;
		this.refreshBoard(last);
	}

	play() {
		if (this.playing || this.moveIndex >= this.session.moves.length) return;
		this.playing = true;
		this.timerId = setInterval(() => this.next(), 2000); // step every 2s
	}

	pause() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
		this.playing = false;
	}
}
