export interface PlanDay {
	/** 0 = Sunday, matching `Date.getDay()`. */
	day: number;
	label: string;
	title: string;
	detail: string;
	minutes: number;
	action: string;
	path: string;
	query?: Record<string, string>;
}

/** Every day starts with the daily puzzle; the focus below is the extra work for that day. */
export const DAILY_MINUTES = 5;

export const WEEK_PLAN: PlanDay[] = [
	{
		day: 1,
		label: 'Mon',
		title: 'Mate in 1',
		detail: 'A run of mates in one. Check every check before you move.',
		minutes: 10,
		action: 'Start the quiz',
		path: '/quiz',
	},
	{
		day: 2,
		label: 'Tue',
		title: 'Candidate moves',
		detail: 'Three positions with several good moves. Name them all before you commit.',
		minutes: 20,
		action: 'Practice candidate moves',
		path: '/random',
	},
	{
		day: 3,
		label: 'Wed',
		title: 'Tactics',
		detail: 'Tactics from real games, one try each. See the replies before you move.',
		minutes: 15,
		action: 'Start the quiz',
		path: '/quiz',
		query: { type: 'mixed' },
	},
	{
		day: 4,
		label: 'Thu',
		title: 'Critical decisions',
		detail: 'Three positions where the game turned. Find every move that keeps it.',
		minutes: 15,
		action: 'Practice decisions',
		path: '/random',
		query: { category: 'criticalDecision' },
	},
	{
		day: 5,
		label: 'Fri',
		title: 'Endgames',
		detail: 'Three endgames. Count pawns, activate the king, then name your moves.',
		minutes: 15,
		action: 'Practice endgames',
		path: '/random',
		query: { category: 'endgame' },
	},
	{
		day: 6,
		label: 'Sat',
		title: 'A whole game',
		detail: 'Replay one game from start to end and solve its key positions on the way.',
		minutes: 25,
		action: 'Browse games',
		path: '/games',
	},
	{
		day: 0,
		label: 'Sun',
		title: 'Your own game',
		detail: 'Load a game you played and check its critical moments with the engine.',
		minutes: 20,
		action: 'Open Library',
		path: '/library',
	},
];
