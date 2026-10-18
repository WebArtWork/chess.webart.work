import { Service, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { DEFAULT_SETTINGS } from '../../components/analysis-settings/analysis-settings.component';
import { AnalysisSettings } from './chess.interface';

export type InputKind = 'fen' | 'pgn';

/**
 * Connects the position picker on Study with the topbar controls shown on phones
 * (the position editor, engine settings and start), which are the same controls moved out of the page.
 */
@Service()
export class PositionInputService {
	/** A position picker is on screen. */
	readonly active = signal(false);
	readonly tab = signal<InputKind>('fen');
	/** FEN of the board in the picker; shown in the topbar field. */
	readonly fen = signal('');
	readonly error = signal('');

	/** Engine limits for Study. */
	readonly settings = signal<AnalysisSettings>({ ...DEFAULT_SETTINGS });

	readonly startLabel = signal('Start');

	/** Result of the last save, shown by the picker and the topbar Save icon. */
	readonly saveState = signal<'idle' | 'saving' | 'saved' | 'error'>('idle');
	readonly saveMessage = signal('');

	readonly save$ = new Subject<void>();
	readonly load$ = new Subject<{ kind: InputKind; text: string }>();
	readonly start$ = new Subject<void>();

	load(kind: InputKind, text: string) {
		this.load$.next({ kind, text });
	}

	save() {
		this.save$.next();
	}

	start() {
		this.start$.next();
	}
}
