import { TheoryLessonBody } from '../theory.interface';

export const blockadeAndOutposts: TheoryLessonBody = {
	slug: 'blockade-and-outposts',
	idea: [
		'Not every weakness has to be attacked at once. Sometimes it works better to stop a weak pawn from moving and put a strong piece in front of it. That square can become an outpost for a knight or a center of pressure.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Find an opponent’s pawn that could become passed or support a pawn break.',
		'Pick the square in front of it where you can set up a blockade.',
		'Think about which piece holds that square best.',
		'Make sure the blockading piece is supported.',
		'Later, attack other weaknesses: it is harder for your opponent to break free.',
	],
	example: [
		'Your opponent has an isolated pawn. If you cannot win it safely at once, consider putting a knight on the protected square in front of it. The pawn cannot advance, and the knight attacks the squares around it.',
	],
	mistakes: ['Occupying a beautiful outpost that your opponent can easily chase away with a pawn.'],
	selfCheck: {
		question: 'Why can a protected knight in front of an isolated pawn be stronger than an immediate trade?',
		answer: 'It restricts the pawn’s movement and at the same time makes your pieces active.',
	},
	practice: [
		{
			title: 'Spot the feature',
			detail: 'Find the outposts and passed pawns: the squares to blockade and the pieces to put there.',
			path: '/practice/spot-the-feature',
		},
		{
			title: 'Games with passed pawns',
			detail: 'Watch how passed pawns are pushed, and how they are stopped.',
			path: '/library/games',
			query: { structure: 'passedPawn' },
		},
		{
			title: 'Positional games',
			detail: 'Look for blockading pieces and outposts, and ask why they stand there.',
			path: '/library/games',
			query: { category: 'positional' },
		},
	],
	sources: [
		{
			title: 'My System',
			author: 'Aron Nimzowitsch',
			site: 'Simon & Schuster',
			url: 'https://www.simonandschuster.com/books/My-System/Aron-Nimzowitsch/Chess-Classics/9789197600538',
		},
	],
};
