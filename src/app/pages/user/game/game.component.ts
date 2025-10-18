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
import { games as allGamesSource } from './test';

export type PlayerMarker = 'm' | 'o';
export type Winner = 'black' | 'white' | 'draw';

export interface ChessGame {
	white: PlayerMarker;
	black: PlayerMarker;
	moves: string[]; // SAN moves starting from White
	win: Winner;
}
export type ChessGames = ChessGame[];

@Component({
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
	standalone: false
})
export class GameComponent implements AfterViewInit, OnDestroy {
	@ViewChild('board', { static: true }) boardEl!: ElementRef<HTMLDivElement>;

	userService = inject(UserService);

	private cg!: Api;
	private game = new Chess();

	// dataset
	games: ChessGame[] = (allGamesSource as ChessGames).slice();

	// interactive state
	myColor: 'white' | 'black' = 'white';
	filteredGames: ChessGame[] = [];
	historySan: string[] = [];
	popularNextMoves: Array<{ san: string; count: number }> = [];

	ngAfterViewInit() {
		this.cg = Chessground(this.boardEl.nativeElement, {
			fen: this.game.fen(),
			coordinates: true,
			orientation: this.myColor,
			highlight: { lastMove: true, check: true },
			animation: { duration: 200 },
			draggable: { enabled: true },
			movable: {
				free: false,
				color: this.myColor,
				dests: this.computeDests(),
				events: {
					after: (orig: Key, dest: Key) => this.onUserMove(orig, dest)
				}
			}
		});

		this.resetFromStart();
	}

	ngOnDestroy() {
		(this.cg as any)?.destroy?.();
	}

	/** Toggle my side and restart */
	toggleColor() {
		this.myColor = this.myColor === 'white' ? 'black' : 'white';
		this.resetFromStart();
	}

	/** Reset board and filters; if I play black, opponent (white) moves first using DB */
	resetFromStart() {
		this.game.reset();
		this.historySan = [];
		this.filteredGames = this.games.filter((g) => g[this.myColor] === 'm');
		this.updatePopularNext();
		this.cg.set({
			orientation: this.myColor,
			fen: this.game.fen(),
			turnColor: this.game.turn() === 'w' ? 'white' : 'black',
			movable: { color: this.myColor, dests: this.computeDests() }
		});

		// If I'm black, opponent starts: play most popular first white move
		if (this.myColor === 'black') {
			this.engineReply(); // plays one move if available
		}
	}

	/** Called after my drag move */
	private onUserMove(orig: Key, dest: Key) {
		// Force promotions to queen for simplicity
		const move = this.game.move({ from: orig, to: dest, promotion: 'q' });
		if (!move) {
			// illegal, refresh to cancel
			this.refreshBoard();
			return;
		}

		// record SAN, filter games by history, then let opponent respond
		this.historySan.push(move.san);
		this.filteredGames = this.filterGamesByHistory(
			this.filteredGames,
			this.historySan
		);
		this.updatePopularNext();

		this.refreshBoard({ from: move.from as Key, to: move.to as Key });

		// Opponent replies from dataset
		this.engineReply();
	}

	/** Choose the most popular next SAN from remaining games and play it (opponent move) */
	private engineReply() {
		const idx = this.historySan.length; // next ply to play
		const counts: Record<string, number> = {};
		for (const g of this.filteredGames) {
			const san = g.moves[idx];
			if (!san) continue;
			counts[san] = (counts[san] || 0) + 1;
		}
		const best = Object.entries(counts)
			.sort((a, b) => b[1] - a[1])
			.map(([san, count]) => ({ san, count }))[0];

		if (!best) return; // no matching reply

		const mv = this.game.move(best.san);
		if (!mv) return; // should be legal if DB consistent

		this.historySan.push(mv.san);
		this.filteredGames = this.filterGamesByHistory(
			this.filteredGames,
			this.historySan
		);
		this.updatePopularNext();

		this.refreshBoard({ from: mv.from as Key, to: mv.to as Key });
	}

	/** Keep "popular next" preview for UI */
	private updatePopularNext() {
		const idx = this.historySan.length;
		const counts: Record<string, number> = {};
		for (const g of this.filteredGames) {
			const san = g.moves[idx];
			if (san) counts[san] = (counts[san] || 0) + 1;
		}
		this.popularNextMoves = Object.entries(counts)
			.map(([san, count]) => ({ san, count }))
			.sort((a, b) => b.count - a.count);
	}

	/** Filter games whose move list starts with current history SANs */
	private filterGamesByHistory(
		list: ChessGame[],
		history: string[]
	): ChessGame[] {
		return list.filter((g) => {
			if (g[this.myColor] !== 'm') return false;
			if (g.moves.length < history.length) return false;
			for (let i = 0; i < history.length; i++) {
				if (g.moves[i] !== history[i]) return false;
			}
			return true;
		});
	}

	/** Helpers */
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

	private refreshBoard(last?: { from: Key; to: Key }) {
		this.cg.set({
			fen: this.game.fen(),
			turnColor: this.game.turn() === 'w' ? 'white' : 'black',
			lastMove: last ? [last.from, last.to] : undefined,
			highlight: { lastMove: true, check: true },
			movable: { color: this.myColor, dests: this.computeDests() }
		});
	}
}
