import { Service, signal } from '@angular/core';
import { Subject } from 'rxjs';

/** Connects the Theory hub with its topbar category button. */
@Service()
export class TheoryToolbarService {
	/** The Theory hub is on screen. */
	readonly active = signal(false);
	/** A category filter is switched on. */
	readonly filtered = signal(false);

	readonly categories$ = new Subject<void>();
}
