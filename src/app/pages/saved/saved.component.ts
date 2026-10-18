import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BoardComponent } from '../../components/board/board.component';
import { IconComponent } from '../../components/icon/icon.component';
import { SavedGame } from '../../feature/chess/chess.interface';
import { SavedGamesService } from '../../feature/chess/saved-games.service';
import { sideToMove } from '../../feature/chess/chess.util';
import { TPipe } from '../../feature/i18n/t.pipe';

/** The signed-in user's saved games. */
@Component({
	imports: [BoardComponent, DatePipe, IconComponent, RouterLink, TPipe],
	templateUrl: './saved.component.html',
})
export class SavedComponent {
	private readonly _saved = inject(SavedGamesService);

	protected readonly games = signal<SavedGame[]>([]);
	protected readonly loading = signal(true);
	protected readonly failed = signal(false);
	/** The game whose Delete was pressed once; a second press confirms. */
	protected readonly confirming = signal<string | null>(null);

	constructor() {
		this._saved
			.list()
			.then((games) => this.games.set(games))
			.catch((error) => {
				console.error('Could not load saved games.', error);
				this.failed.set(true);
			})
			.finally(() => this.loading.set(false));
	}

	protected side(fen: string) {
		return sideToMove(fen);
	}

	protected async remove(game: SavedGame) {
		if (this.confirming() !== game.id) {
			this.confirming.set(game.id);
			return;
		}
		this.confirming.set(null);
		try {
			await this._saved.remove(game.id);
			this.games.update((list) => list.filter((item) => item.id !== game.id));
		} catch (error) {
			console.error('Could not delete the game.', error);
			this.failed.set(true);
		}
	}
}
