import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID, Service, signal } from '@angular/core';

const STORAGE_KEY = 'wawchess_quiz';
const START_RATING = 1000;
/** Puzzles kept in the "recent" strip and history. */
const RECENT = 30;
/** Search windows around the rating, widened until a fresh puzzle is found. */
const WINDOWS = [100, 200, 400, 800];

export interface QuizResult {
	id: string;
	solved: boolean;
	/** Rating change; 0 for retries. */
	delta: number;
}

export interface QuizStats {
	rating: number;
	/** Highest rating reached. */
	best: number;
	played: number;
	solved: number;
	streak: number;
	bestStreak: number;
	/** Ids of every rated puzzle, so none comes back. */
	seen: string[];
	recent: QuizResult[];
}

const EMPTY: QuizStats = {
	rating: START_RATING,
	best: START_RATING,
	played: 0,
	solved: 0,
	streak: 0,
	bestStreak: 0,
	seen: [],
	recent: [],
};

/** Quiz rating and history, kept in the browser like the daily results. */
@Service()
export class QuizService {
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	readonly stats = signal<QuizStats>(this._load());

	/** A fresh puzzle near the player's rating, widening the window when none is left. */
	pick<T extends { id: string; rating: number }>(puzzles: T[], excludeId?: string): T | null {
		const { rating, seen } = this.stats();
		const seenIds = new Set(seen);
		let pool = puzzles.filter((puzzle) => !seenIds.has(puzzle.id) && puzzle.id !== excludeId);
		// every puzzle played: start over rather than stop
		if (!pool.length) pool = puzzles.filter((puzzle) => puzzle.id !== excludeId);
		for (const window of WINDOWS) {
			const near = pool.filter((puzzle) => Math.abs(puzzle.rating - rating) <= window);
			if (near.length) return near[Math.floor(Math.random() * near.length)];
		}
		return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
	}

	/** Records a first attempt and returns the rating change. */
	record(puzzle: { id: string; rating: number }, solved: boolean): number {
		const stats = this.stats();
		const expected = 1 / (1 + 10 ** ((puzzle.rating - stats.rating) / 400));
		// move faster while the rating is still finding its level
		const k = stats.played < 20 ? 48 : 24;
		const delta = Math.round(k * ((solved ? 1 : 0) - expected)) || (solved ? 1 : -1);
		const rating = Math.max(100, stats.rating + delta);
		const streak = solved ? stats.streak + 1 : 0;
		this._save({
			rating,
			best: Math.max(stats.best, rating),
			played: stats.played + 1,
			solved: stats.solved + (solved ? 1 : 0),
			streak,
			bestStreak: Math.max(stats.bestStreak, streak),
			seen: [...stats.seen.filter((id) => id !== puzzle.id), puzzle.id],
			recent: [...stats.recent, { id: puzzle.id, solved, delta: rating - stats.rating }].slice(-RECENT),
		});
		return rating - stats.rating;
	}

	private _save(stats: QuizStats) {
		this.stats.set(stats);
		if (!this._isBrowser) return;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
		} catch {
			/* storage unavailable */
		}
	}

	private _load(): QuizStats {
		if (!this._isBrowser) return { ...EMPTY };
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? { ...EMPTY, ...(JSON.parse(raw) as Partial<QuizStats>) } : { ...EMPTY };
		} catch {
			return { ...EMPTY };
		}
	}
}
