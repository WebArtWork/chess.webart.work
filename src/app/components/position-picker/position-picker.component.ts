import { Component, computed, DestroyRef, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Chess } from 'chess.js';
import { NewSavedGame, SavedGame } from '../../feature/chess/chess.interface';
import { isValidFen, parsePgn, STARTING_FEN } from '../../feature/chess/chess.util';
import { SavedGamesService } from '../../feature/chess/saved-games.service';
import { AuthService } from '../../feature/auth/auth.service';
import { PositionInputService } from '../../feature/chess/position-input.service';
import { BoardComponent, BoardMove } from '../board/board.component';
import { IconComponent } from '../icon/icon.component';

interface HistoryMove {
	san: string;
	fenAfter: string;
	from: string;
	to: string;
}

/**
 * Set up any position: move pieces, type a FEN or load a PGN and step through it.
 * Extra settings can be projected between the inputs and the start button.
 */
@Component({
	selector: 'app-position-picker',
	imports: [BoardComponent, IconComponent],
	template: `
		<!-- Phones: the board, its controls and Start are pinned at the bottom; the rest scrolls above. -->
		<div class="flex h-full min-h-0 flex-col lg:grid lg:grid-cols-[minmax(0,34rem)_1fr] lg:grid-rows-[minmax(0,1fr)] lg:items-stretch lg:gap-6">
			<div class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3 lg:order-2 lg:overflow-y-auto lg:p-0">
				<div class="flex flex-col gap-4">
					@if (moves().length) {
						<ol class="flex flex-wrap gap-1 text-sm" aria-label="Moves">
							@for (move of moves(); track $index) {
								<li class="shrink-0">
									<button
										class="rounded-lg px-2 py-1.5"
										[class]="$index === index() ? 'bg-soft font-semibold text-fg' : 'text-mute'"
										type="button"
										[attr.aria-current]="$index === index() ? 'true' : null"
										(click)="goTo($index)"
									>
										@if ($index % 2 === 0) {
											{{ $index / 2 + 1 }}.
										}
										{{ move.san }}
									</button>
								</li>
							}
						</ol>
					}

					<div class="flex flex-col gap-3">
						<div class="hidden gap-2 md:flex" role="group" aria-label="Import a position">
							<button class="ds-chip" type="button" [attr.aria-pressed]="tab() === 'fen'" (click)="tab.set('fen')">
								FEN
							</button>
							<button class="ds-chip" type="button" [attr.aria-pressed]="tab() === 'pgn'" (click)="tab.set('pgn')">
								PGN
							</button>
						</div>

						@if (tab() === 'fen') {
							<div class="ds-field hidden !mb-0 md:block">
								<label class="ds-label" for="fen-input">Position (FEN)</label>
								<div class="flex gap-2">
									<input
										#fenInput
										id="fen-input"
										class="ds-input"
										type="text"
										autocomplete="off"
										spellcheck="false"
										[value]="fen()"
										(keydown.enter)="loadFen(fenInput.value)"
									/>
									<button class="ds-btn ds-btn-secondary shrink-0" type="button" (click)="loadFen(fenInput.value)">
										Load
									</button>
								</div>
							</div>
						} @else {
							<div class="ds-field hidden !mb-0 md:block">
								<label class="ds-label" for="pgn-input">Game (PGN)</label>
								<textarea
									#pgnInput
									id="pgn-input"
									class="ds-textarea font-mono"
									spellcheck="false"
									placeholder="1. e4 e5 2. Nf3 Nc6 ..."
								></textarea>
								<button class="ds-btn ds-btn-secondary mt-2" type="button" (click)="loadPgn(pgnInput.value)">
									Load game
								</button>
							</div>
						}

						@if (saveMessage()) {
						<p class="text-sm" [class.text-danger]="saveState() === 'error'" role="status">{{ saveMessage() }}</p>
					}

					@if (error()) {
							<p class="text-sm text-danger" role="alert">{{ error() }}</p>
						}

						<button class="hidden min-h-11 items-center self-start text-sm font-medium text-mute underline-offset-4 hover:underline md:inline-flex" type="button" (click)="reset()">
							Reset to starting position
						</button>
					</div>

					<ng-content />
				</div>
			</div>

			<div class="flex shrink-0 flex-col gap-2 pb-2 lg:order-1 lg:self-start lg:pb-0">
				<!-- Phones: the board with its controls in a column beside it. -->
				<div class="flex items-start justify-center gap-2 px-2 md:block md:px-0">
					<div class="w-[min(calc(100%-3.5rem),46dvh)] md:mx-auto md:w-[min(100%,40dvh)] lg:mx-0 lg:w-[min(100%,calc(100dvh-13rem))]">
						<app-board
							[fen]="fen()"
							[orientation]="orientation()"
							[lastMove]="lastMove()"
							(moved)="onMove($event)"
						/>
					</div>
					<div class="flex shrink-0 flex-col gap-2 md:hidden">
						<button
							class="ds-btn ds-btn-outline size-11 !p-0"
							type="button"
							aria-label="Previous move"
							[disabled]="index() < 0"
							(click)="goTo(index() - 1)"
						>
							<app-icon name="prev" />
						</button>
						<button
							class="ds-btn ds-btn-outline size-11 !p-0"
							type="button"
							aria-label="Next move"
							[disabled]="index() >= moves().length - 1"
							(click)="goTo(index() + 1)"
						>
							<app-icon name="next" />
						</button>
						<button class="ds-btn ds-btn-outline size-11 !p-0" type="button" aria-label="Flip board" (click)="flip()">
							<app-icon name="flip" />
						</button>
						<button class="ds-btn ds-btn-outline size-11 !p-0" type="button" aria-label="Reset to starting position" (click)="reset()">
							<app-icon name="reset" />
						</button>
					</div>
				</div>

				<!-- Larger screens: the controls and Start under the board. -->
				<div class="items-center gap-2 px-4 max-md:hidden md:flex lg:px-0">
					<button
						class="ds-btn ds-btn-outline size-11 shrink-0 !p-0"
						type="button"
						aria-label="Previous move"
						[disabled]="index() < 0"
						(click)="goTo(index() - 1)"
					>
						<app-icon name="prev" />
					</button>
					<button
						class="ds-btn ds-btn-outline size-11 shrink-0 !p-0"
						type="button"
						aria-label="Next move"
						[disabled]="index() >= moves().length - 1"
						(click)="goTo(index() + 1)"
					>
						<app-icon name="next" />
					</button>
					<button
						class="ds-btn ds-btn-outline size-11 shrink-0 !p-0"
						type="button"
						aria-label="Flip board"
						(click)="flip()"
					>
						<app-icon name="flip" />
					</button>
					@if (signedIn()) {
						<button
							class="ds-btn ds-btn-outline size-11 shrink-0 !p-0"
							type="button"
							aria-label="Save to my library"
							[disabled]="saveState() === 'saving'"
							(click)="save()"
						>
							<app-icon [name]="saveState() === 'saved' ? 'check' : 'save'" />
						</button>
					}
					<button class="ds-btn ds-btn-primary h-11 flex-1" type="button" (click)="start.emit(fen())">
						{{ startLabel() }}
					</button>
				</div>
			</div>
		</div>
	`,
})
export class PositionPickerComponent implements OnInit {
	readonly startLabel = input('Start');
	readonly initialFen = input<string | null>(null);
	/** A saved game to open; wins over `initialFen`. */
	readonly initialGame = input<SavedGame | null>(null);
	readonly start = output<string>();

	private readonly _input = inject(PositionInputService);
	private readonly _saved = inject(SavedGamesService);
	private readonly _auth = inject(AuthService);
	protected readonly signedIn = computed(() => !!this._auth.user());
	protected readonly saveMessage = this._input.saveMessage;
	protected readonly saveState = this._input.saveState;

	protected readonly tab = this._input.tab;
	protected readonly base = signal(STARTING_FEN);
	protected readonly moves = signal<HistoryMove[]>([]);
	protected readonly index = signal(-1);
	protected readonly orientation = signal<'white' | 'black'>('white');
	protected readonly error = signal('');

	protected readonly fen = computed(() =>
		this.index() < 0 ? this.base() : this.moves()[this.index()].fenAfter,
	);
	protected readonly lastMove = computed<BoardMove | null>(() => {
		const move = this.moves()[this.index()];
		return move ? { from: move.from, to: move.to } : null;
	});

	constructor() {
		const destroyRef = inject(DestroyRef);
		this._input.active.set(true);
		destroyRef.onDestroy(() => {
			this._input.active.set(false);
			this._input.error.set('');
		});

		effect(() => this._input.fen.set(this.fen()));
		effect(() => this._input.startLabel.set(this.startLabel()));
		effect(() => this._input.error.set(this.error()));

		this._input.load$.pipe(takeUntilDestroyed(destroyRef)).subscribe(({ kind, text }) => {
			if (kind === 'fen') this.loadFen(text);
			else this.loadPgn(text);
			// the topbar editor closes only when this is empty, so publish it right away
			this._input.error.set(this.error());
		});
		this._input.save$.pipe(takeUntilDestroyed(destroyRef)).subscribe(() => void this.save());
		this._input.start$.pipe(takeUntilDestroyed(destroyRef)).subscribe(() => this.start.emit(this.fen()));
	}

	ngOnInit() {
		const game = this.initialGame();
		if (game) {
			this._openGame(game);
			return;
		}
		const fen = this.initialFen();
		if (fen && isValidFen(fen)) {
			this.base.set(fen);
			this.orientation.set(fen.includes(' b ') ? 'black' : 'white');
		}
	}

	/** Saves the board and its moves to the signed-in user's library. */
	protected async save() {
		if (this._input.saveState() === 'saving') return;
		this._input.saveState.set('saving');
		this._input.saveMessage.set('');

		const game: NewSavedGame = {
			title: this._title(),
			startFen: this.base(),
			sans: this.moves().map((move) => move.san),
			fen: this.fen(),
		};
		try {
			await this._saved.save(game);
			this._input.saveState.set('saved');
			this._input.saveMessage.set('Saved to My games.');
			setTimeout(() => this._input.saveState.set('idle'), 2500);
		} catch (error) {
			console.error('Could not save the game.', error);
			this._input.saveState.set('error');
			this._input.saveMessage.set('Could not save. Check your connection and try again.');
		}
	}

	/** "1. e4 e5 2. Nf3" for a game, or the position's side to move for a bare position. */
	private _title(): string {
		const sans = this.moves().map((move) => move.san);
		if (!sans.length) return `Position, ${this.base().includes(' b ') ? 'Black' : 'White'} to move`;
		const shown = sans.slice(0, 6).map((san, i) => (i % 2 === 0 ? `${i / 2 + 1}. ${san}` : san));
		return shown.join(' ') + (sans.length > 6 ? ' …' : '');
	}

	private _openGame(game: SavedGame) {
		const replay = new Chess(game.startFen);
		const history: HistoryMove[] = [];
		for (const san of game.sans) {
			try {
				const played = replay.move(san);
				history.push({ san, fenAfter: replay.fen(), from: played.from, to: played.to });
			} catch {
				break;
			}
		}
		this.base.set(game.startFen);
		this.moves.set(history);
		this.index.set(history.length - 1);
		this.orientation.set(this.fen().includes(' b ') ? 'black' : 'white');
	}

	protected onMove({ from, to, promotion }: BoardMove) {
		try {
			const game = new Chess(this.fen());
			const move = game.move({ from, to, promotion: promotion ?? 'q' });
			// playing from the middle of a line replaces the rest of it
			this.moves.update((list) => [
				...list.slice(0, this.index() + 1),
				{ san: move.san, fenAfter: game.fen(), from, to },
			]);
			this.index.update((i) => i + 1);
			this.error.set('');
		} catch {
			/* illegal move: the board snaps back */
		}
	}

	protected goTo(target: number) {
		this.index.set(Math.max(-1, Math.min(target, this.moves().length - 1)));
	}

	protected flip() {
		this.orientation.update((side) => (side === 'white' ? 'black' : 'white'));
	}

	protected loadFen(value: string) {
		const fen = value.trim();
		if (!isValidFen(fen)) {
			this.error.set('That FEN is not valid.');
			return;
		}
		this._setBase(fen);
	}

	protected loadPgn(value: string) {
		const parsed = parsePgn(value.trim());
		if (!parsed) {
			this.error.set('Could not read that PGN.');
			return;
		}

		const replay = new Chess(parsed.initialFen);
		const history: HistoryMove[] = parsed.moves.map((move) => {
			const played = replay.move(move.san);
			return { san: move.san, fenAfter: move.fenAfter, from: played.from, to: played.to };
		});
		this.base.set(parsed.initialFen);
		this.moves.set(history);
		this.index.set(history.length - 1);
		this.error.set('');
	}

	protected reset() {
		this._setBase(STARTING_FEN);
	}

	private _setBase(fen: string) {
		this.base.set(fen);
		this.moves.set([]);
		this.index.set(-1);
		this.error.set('');
		this.orientation.set(fen.includes(' b ') ? 'black' : 'white');
	}
}
