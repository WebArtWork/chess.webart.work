import { Service, signal } from '@angular/core';
import { Subject } from 'rxjs';

/** Connects the Games page with the topbar controls shown on phones (count, shuffle, filters). */
@Service()
export class GamesToolbarService {
	/** The Games page is on screen. */
	readonly active = signal(false);
	/** Matching games; null while loading. */
	readonly count = signal<number | null>(null);
	/** Number of filter options switched on. */
	readonly filterCount = signal(0);

	readonly shuffle$ = new Subject<void>();
	readonly filters$ = new Subject<void>();
}
