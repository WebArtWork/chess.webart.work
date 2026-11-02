import { Service, signal } from '@angular/core';
import { Subject } from 'rxjs';

/** `records` is reached from the tournament view, so it has no icon in the topbar. */
export type LessonView = 'theory' | 'game' | 'tournament' | 'records';

/** Connects the lesson page with the view and ready icons in the topbar. */
@Service()
export class LessonToolbarService {
	/** The lesson page is on screen. */
	readonly active = signal(false);
	readonly view = signal<LessonView>('theory');
	/** The student pressed "ready to play". */
	readonly ready = signal(false);
	/** The lesson is open and the student has joined, so Ready can be pressed. */
	readonly canReady = signal(false);

	/** The topbar's Ready button was pressed; the page saves it. */
	readonly toggleReady$ = new Subject<void>();
}
