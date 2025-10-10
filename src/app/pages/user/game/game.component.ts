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

	ngAfterViewInit() {
		// Ensure pieces are visible by providing a starting FEN.
		// Make sure you have a piece set CSS included globally (e.g., merida or cburnett).
		this.cg = Chessground(this.boardEl.nativeElement, {
			fen: this.game.fen(),
			coordinates: true,
			orientation: 'white',
			highlight: { lastMove: true, check: true },
			animation: { duration: 200 },
			draggable: { enabled: true },
			movable: {
				free: false,
				// Set color directly; update it after each move as needed
				color: this.game.turn() === 'w' ? 'white' : 'black',
				dests: this.computeDests(),
				events: {
					after: (orig, dest) => this.onUserMove(orig, dest)
				}
			}
		});

		console.log(this.cg);
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

	private onUserMove(orig: Key, dest: Key) {
		// Promote to queen by default (simple demo)
		const move = this.game.move({
			from: orig,
			to: dest,
			promotion: 'q' as const
		});
		if (!move) return;

		this.cg.set({
			fen: this.game.fen(),
			turnColor: this.game.turn() === 'w' ? 'white' : 'black',
			movable: { dests: this.computeDests() }
		});
	}

	// Public API examples
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

	ngOnDestroy() {
		// chessground typings don’t expose destroy in some versions
		(this.cg as any)?.destroy?.();
	}
}
