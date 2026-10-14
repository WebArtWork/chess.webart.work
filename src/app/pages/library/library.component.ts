import { isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalysisSettingsComponent } from '../../components/analysis-settings/analysis-settings.component';
import { BoardArrow, BoardComponent, BoardMove } from '../../components/board/board.component';
import { IconComponent } from '../../components/icon/icon.component';
import { PositionPickerComponent } from '../../components/position-picker/position-picker.component';
import { Analysis } from '../../feature/chess/analysis';
import { formatEval, sideToMove } from '../../feature/chess/chess.util';
import { EngineService } from '../../feature/chess/engine.service';
import { SavedGame } from '../../feature/chess/chess.interface';
import { PositionInputService } from '../../feature/chess/position-input.service';
import { SavedGamesService } from '../../feature/chess/saved-games.service';
import { StudySession } from '../../feature/chess/study.session';

/** Pick candidate moves for a position, then compare them against the engine. */
@Component({
	imports: [AnalysisSettingsComponent, BoardComponent, IconComponent, PositionPickerComponent],
	templateUrl: './library.component.html',
})
export class LibraryComponent {
	private readonly _engine = inject(EngineService);

	private readonly _route = inject(ActivatedRoute);
	private readonly _saved = inject(SavedGamesService);

	protected readonly initialFen = this._route.snapshot.queryParamMap.get('fen');
	/** A saved game to open, from /library?game=ID. */
	private readonly _gameId = this._route.snapshot.queryParamMap.get('game');
	protected readonly initialGame = signal<SavedGame | null>(null);
	protected readonly loadingGame = signal(!!this._gameId && isPlatformBrowser(inject(PLATFORM_ID)));
	private readonly _input = inject(PositionInputService);
	protected readonly settings = this._input.settings;
	protected readonly session = signal<StudySession | null>(null);
	protected readonly format = formatEval;
	protected readonly arrows = computed<BoardArrow[]>(() => {
		const study = this.session();
		if (!study) return [];
		const arrow = (uci: string, brush: BoardArrow['brush']): BoardArrow => ({
			from: uci.slice(0, 2),
			to: uci.slice(2, 4),
			brush,
		});
		const own = study.candidates().map((c) => arrow(c.move, 'blue'));
		const best = study.phase() === 'done' ? study.topMoves().map((m) => arrow(m.move, 'green')) : [];
		return [...best, ...own];
	});

	constructor() {
		const id = this._gameId;
		if (!id || !this.loadingGame()) return;
		this._saved
			.get(id)
			.then((game) => this.initialGame.set(game))
			.catch((error) => console.error('Could not open the saved game.', error))
			.finally(() => this.loadingGame.set(false));
	}

	protected start(fen: string) {
		const settings = this.settings();
		const analysis = new Analysis(fen, this._engine, this._engine.goCommand(settings));
		this.session.set(new StudySession(analysis, settings.minCandidates, settings.topMoves));
	}

	protected onMove({ from, to }: BoardMove) {
		this.session()?.addCandidate(from, to);
	}

	protected reset() {
		this.session.set(null);
	}

	protected side(fen: string) {
		return sideToMove(fen);
	}
}
