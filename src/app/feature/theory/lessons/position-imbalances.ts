import { TheoryLessonBody } from '../theory.interface';

export const positionImbalances: TheoryLessonBody = {
	slug: 'position-imbalances',
	idea: [
		'Not every advantage is measured in pawns. One player has the more active bishop, the other a better pawn structure; one controls an open file, the other has a protected passed pawn. A plan starts with the differences between the two sides.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Compare material and king safety.',
		'Compare how active the pieces are and where their best squares are.',
		'Find weak pawns, squares and files.',
		'Decide which advantage can be used right now.',
		'State your plan in one sentence.',
		'Check that your opponent cannot wreck this plan with tactics.',
	],
	example: [
		'You have a knight, your opponent has a bishop, and the center is blocked. The idea is to find a strong square for the knight. But if your opponent can open the center on the next move, you have to deal with that threat first.',
	],
	mistakes: ['Making a strategic move without first checking for checks and tactical threats.'],
	selfCheck: {
		question: 'Are two bishops always stronger than two knights?',
		answer: 'No. What matters is how open the position is, the pawn structure and the squares available.',
	},
	practice: [
		{
			title: 'Positional games',
			detail: 'Before a key move, name one advantage for each side, then guess the plan.',
			path: '/library/games',
			query: { category: 'positional' },
		},
		{
			title: 'Analysis board',
			detail: 'Write down the imbalances and a one-sentence plan, then check it for tactics with the engine.',
			path: '/library/board',
		},
	],
	sources: [
		{
			title: 'How to Reassess Your Chess (4th edition)',
			author: 'Jeremy Silman',
			site: 'WorldCat',
			url: 'https://search.worldcat.org/search?q=How+to+Reassess+Your+Chess+Jeremy+Silman',
		},
	],
};
