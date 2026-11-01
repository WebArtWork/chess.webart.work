import { ClassItem } from './classroom.interface';

/** English names, Monday first; translated when shown. */
export const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const WEEKDAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const DURATIONS = [30, 45, 60, 90, 120];
/** The clocks Lichess and Chess.com offer most, grouped the way they name them. */
export const TIME_CONTROLS = [
	{ group: 'Bullet', options: ['1+0', '2+1'] },
	{ group: 'Blitz', options: ['3+0', '3+2', '5+0', '5+3'] },
	{ group: 'Rapid', options: ['10+0', '10+5', '15+10'] },
	{ group: 'Classical', options: ['30+0', '30+20'] },
];
export const DEFAULT_TIME_CONTROL = '10+5';

/**
 * The next `count` lessons that have not finished yet, soonest first, in the device's time zone.
 * A lesson in progress still counts, so the first one can be "now".
 */
export function upcomingLessons(
	item: Pick<ClassItem, 'days' | 'time' | 'duration'>,
	now: Date,
	count: number,
): Date[] {
	const [hours, minutes] = item.time.split(':').map(Number);
	if (!item.days.length || Number.isNaN(hours) || Number.isNaN(minutes)) return [];

	const lessons: Date[] = [];
	// a weekly class is always found within 8 days (the extra day covers a lesson in progress)
	for (let offset = 0; offset < 8 + 7 * count && lessons.length < count; offset++) {
		const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);
		if (!item.days.includes((day.getDay() + 6) % 7)) continue;
		const start = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes);
		if (start.getTime() + item.duration * 60_000 > now.getTime()) lessons.push(start);
	}
	return lessons;
}

type Translate = (text: string) => string;

/** "Mon, Wed" for the list. */
export const shortDays = (item: Pick<ClassItem, 'days'>, t: Translate) =>
	item.days.map((day) => t(WEEKDAYS_SHORT[day] ?? '')).join(', ');

/** "Monday, Wednesday" for the class page. */
export const longDays = (item: Pick<ClassItem, 'days'>, t: Translate) =>
	item.days.map((day) => t(WEEKDAYS[day] ?? '')).join(', ');
