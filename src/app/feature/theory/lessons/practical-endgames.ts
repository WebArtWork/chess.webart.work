import { TheoryLessonBody } from '../theory.interface';

export const practicalEndgames: TheoryLessonBody = {
	slug: 'practical-endgames',
	idea: [
		'In the endgame, too much speed often does harm. When your opponent has no urgent counterplay and your advantage is stable, you can improve your king and pieces before forcing matters. But a pawn break is not the only danger: rook activity, checks, king entry and a blockade may also demand an immediate response.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Make sure your opponent has no immediate passed-pawn threat or tactical resource.',
		'Activate your king if it is safe.',
		'Put your pieces on squares where they defend and attack at the same time.',
		'Fix one of your opponent’s weaknesses.',
		'Try to create a second weakness in another part of the board.',
		'Look for a favorable break or trade at each stage. Do not postpone a concrete win just to complete the plan.',
	],
	example: [
		'Your rook is more active, but all your opponent’s pawns are protected. If you attack one pawn right away, your opponent will have time to defend it. Try to make them defend both sides of the board at once.',
	],
	mistakes: ['Pushing a pawn before your pieces are ready to support it.'],
	selfCheck: {
		question: 'What does “two weaknesses” mean?',
		answer: 'Two targets that are harder for your opponent to defend at the same time than one.',
	},
	practice: [
		{
			title: 'Endgame technique',
			detail: 'Train one endgame family at a time: pawn, rook, minor piece or queen.',
			path: '/practice/endgames',
		},
		{
			title: 'Endgame games',
			detail: 'Replay endgames and ask at each step: where is the second weakness?',
			path: '/library/games',
			query: { category: 'endgame' },
		},
		{
			title: 'Endgame puzzles',
			detail: 'Before you pick a move, decide on your plan for the next few moves.',
			path: '/practice/good-moves',
			query: { category: 'endgame' },
		},
	],
	sources: [
		{
			title: 'Endgame Strategy',
			author: 'Mikhail Shereshevsky',
			site: 'New In Chess',
			url: 'https://www.newinchess.com/chess-endgame-strategy-shereshevsky',
		},
	],
};
