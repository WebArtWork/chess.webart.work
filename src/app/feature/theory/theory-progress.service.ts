import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID, Service, signal } from '@angular/core';

const STORAGE_KEY = 'wawchess_theory';

export interface LessonProgress {
	/** Last self-check answer: true when the reader got it right. */
	checked?: boolean;
}

/** Theory self-check results, per lesson slug, kept in the browser like the daily results. */
@Service()
export class TheoryProgressService {
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	readonly lessons = signal<Record<string, LessonProgress>>(this._load());

	get(slug: string): LessonProgress {
		return this.lessons()[slug] ?? {};
	}

	answer(slug: string, correct: boolean) {
		const next = { ...this.lessons(), [slug]: { ...this.get(slug), checked: correct } };
		this.lessons.set(next);
		if (!this._isBrowser) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
		} catch {
			// storage full or blocked: the result lasts for this visit only
		}
	}

	private _load(): Record<string, LessonProgress> {
		if (!this._isBrowser) return {};
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? (JSON.parse(raw) as Record<string, LessonProgress>) : {};
		} catch {
			return {};
		}
	}
}
