import { Service, signal } from '@angular/core';
import { Subject } from 'rxjs';

/** Connects the Theory hub with its topbar buttons: print and category. */
@Service()
export class TheoryToolbarService {
	/** The Theory hub is on screen. */
	readonly active = signal(false);
	/** A category filter is switched on. */
	readonly filtered = signal(false);

	readonly categories$ = new Subject<void>();

	/** The print icon was tapped. */
	readonly print$ = new Subject<void>();
	/** The lesson texts are loading for printing; the print icon waits. */
	readonly preparing = signal(false);
}
