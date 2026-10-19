import { TheoryLessonBody } from '../theory.interface';

export const initiativeAndSacrifice: TheoryLessonBody = {
	slug: 'initiative-and-sacrifice',
	idea: [
		'Sometimes you can give up material and get something in return: time, open lines, an attack on the king, active pieces. But a beautiful sacrifice is not the same as a correct one. What matters is judging the real threats and whether your opponent can give the material back or defend.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Count exactly what you are giving up.',
		'Name the compensation: a king in danger, development, open files, tempi.',
		'Check your opponent’s calmest, most solid reply.',
		'Count how many active pieces support the attack.',
		'If there is no forced win, judge honestly whether the compensation is enough.',
	],
	example: [
		'You give up a pawn to open a line toward the king, but your bishops are not developed yet. The attack may look spectacular, but it has no support. First check whether your other pieces can join in time.',
	],
	mistakes: ['Believing that any attack on the king justifies losing material.'],
	selfCheck: {
		question: 'Should you sacrifice a knight just because your opponent will have to make three defensive moves?',
		answer: 'Not necessarily. You need to check what happens after the best defense.',
	},
	practice: [
		{
			title: 'Sound sacrifice?',
			detail: 'Judge sacrifices from real games, then play the critical reply.',
			path: '/practice/sound-sacrifice',
		},
		{
			title: 'Games with sound sacrifices',
			detail: 'Replay games where a sacrifice held up under the engine’s check.',
			path: '/library/games',
			query: { sacrifice: 'sound' },
		},
		{
			title: 'Attacking games',
			detail: 'Count the pieces in each attack, then check the defender’s best reply.',
			path: '/library/games',
			query: { category: 'attack' },
		},
		{
			title: 'Tactics',
			detail: 'Before you play a sacrifice, check the calmest defense.',
			path: '/practice/tactics',
		},
	],
	sources: [
		{
			title: 'The Life and Games of Mikhail Tal',
			author: 'Mikhail Tal',
			site: 'New In Chess',
			url: 'https://www.newinchess.com/life-and-games-of-mikhail-tal',
		},
	],
};
