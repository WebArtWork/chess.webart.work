export type Frequency = 'weekly' | 'monthly';
export type EndMode = 'never' | 'date' | 'count';

/** How often a class meets. Dates are `YYYY-MM-DD` and weekdays run Monday = 0 to Sunday = 6. */
export interface Recurrence {
	frequency: Frequency;
	/** Every N weeks or months. */
	interval: number;
	/** Weekly: every chosen day. Monthly: the first one. */
	weekdays: number[];
	/** Monthly: 1 to 4 for the first to fourth weekday of the month, -1 for the last. */
	monthWeek: number;
	/** First possible day. */
	start: string;
	endMode: EndMode;
	endDate: string;
	/** Sessions to hold before the class ends; skipped dates do not count. */
	endCount: number;
	/** Dates with no session. */
	skip: string[];
}

const DAY = 86_400_000;
/** Longest stretch of days the weekly search covers, so an empty rule cannot loop forever. */
const SEARCH_DAYS = 366 * 20;

export const isDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));

const toDay = (iso: string) => Date.parse(`${iso}T00:00:00Z`) / DAY;
const fromDay = (day: number) => new Date(day * DAY).toISOString().slice(0, 10);
/** Day number (days since 1970-01-01, a Thursday) to Monday = 0. */
const weekdayOf = (day: number) => (day + 3) % 7;

/** The first `limit` session dates on or after `from`, in order. */
export function nextSessions(rule: Recurrence, from: string, limit: number): string[] {
	if (!isDate(rule.start) || !isDate(from)) return [];
	const start = toDay(rule.start);
	const first = toDay(from);
	const skip = new Set(rule.skip);
	const last = rule.endMode === 'date' && isDate(rule.endDate) ? toDay(rule.endDate) : Infinity;
	const max = rule.endMode === 'count' ? Math.max(1, Math.floor(rule.endCount) || 1) : Infinity;
	const interval = Math.max(1, Math.floor(rule.interval) || 1);

	const days =
		rule.frequency === 'weekly'
			? weekly(start, interval, rule.weekdays)
			: monthly(start, interval, rule.weekdays[0] ?? weekdayOf(start), rule.monthWeek);

	const dates: string[] = [];
	let held = 0;
	for (const day of days) {
		if (day > last || held >= max) break;
		const iso = fromDay(day);
		if (skip.has(iso)) continue;
		held++;
		if (day >= first) {
			dates.push(iso);
			if (dates.length >= limit) break;
		}
	}
	return dates;
}

function* weekly(start: number, interval: number, weekdays: number[]): Generator<number> {
	if (!weekdays.length) return;
	const monday = start - weekdayOf(start);
	for (let day = start; day < start + SEARCH_DAYS; day++) {
		if (Math.floor((day - monday) / 7) % interval === 0 && weekdays.includes(weekdayOf(day))) yield day;
	}
}

function* monthly(start: number, interval: number, weekday: number, nth: number): Generator<number> {
	const date = new Date(start * DAY);
	const year = date.getUTCFullYear();
	const month = date.getUTCMonth();
	for (let step = 0; step < 240; step++) {
		const day = nthWeekday(year, month + step * interval, weekday, nth);
		if (day >= start) yield day;
	}
}

function nthWeekday(year: number, month: number, weekday: number, nth: number): number {
	if (nth > 0) {
		const first = Date.UTC(year, month, 1) / DAY;
		return first + ((weekday - weekdayOf(first) + 7) % 7) + (nth - 1) * 7;
	}
	const last = Date.UTC(year, month + 1, 0) / DAY;
	return last - ((weekdayOf(last) - weekday + 7) % 7);
}
