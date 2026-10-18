import { HubItem } from './hub.interface';

/** The Practice hub, in order. A new training mode is one more entry here plus its route. */
export const PRACTICE_ITEMS: HubItem[] = [
	{
		title: 'Daily puzzle',
		detail: 'One puzzle a day, the same for everyone. Find every good move.',
		path: '/practice/daily',
	},
	{
		title: 'Good moves',
		detail: 'Positions with several good moves. Find them all.',
		path: '/practice/good-moves',
	},
	{
		title: 'Mate in 1',
		detail: 'Find the mating move. One try per puzzle.',
		path: '/practice/mate-in-one',
	},
	{
		title: 'Mate in 3',
		detail: 'Play the mating line, move by move.',
		path: '/practice/mate-in-three',
	},
	{
		title: 'Tactics',
		detail: 'Find the best move or play the winning line.',
		path: '/practice/tactics',
	},
	{
		title: 'Look Ahead',
		detail: 'Calculate three moves deep and find every good line.',
		path: '/practice/look-ahead',
	},
];

/** The Theory hub, in order. Each lesson's text is in THEORY_LESSONS under the same slug. */
export const THEORY_ITEMS: HubItem[] = [
	{
		title: 'Candidate moves',
		detail: 'Alexander Kotov: list your options first, then calculate each one once.',
		path: '/theory/kotov',
	},
];

/** The Library hub, in order. */
export const LIBRARY_ITEMS: HubItem[] = [
	{
		title: 'Analysis board',
		detail: 'Set up a position or paste a game, pick your moves, then check them with the engine.',
		path: '/library/board',
	},
	{
		title: 'Games',
		detail: 'Real games to replay, with their key positions to solve.',
		path: '/library/games',
	},
	{
		title: 'My games',
		detail: 'Games you saved from the analysis board.',
		path: '/library/saved',
	},
];
