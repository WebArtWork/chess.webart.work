import { TheoryLessonBody } from '../theory.interface';

export const boardVisualization: TheoryLessonBody = {
	slug: 'board-visualization',
	note: {
		heading: 'An important note',
		paragraphs: [
			'János Flesch is known for his blindfold chess displays, but this lesson is not presented as a method he documented. It is our own original training routine on visualization, inspired by the tradition of blindfold chess.',
			'You do not need to play blindfold games to benefit. The goal here is to track a short line accurately.',
		],
	},
	idea: [
		'To calculate lines better, it helps to keep the position of the pieces in your head after a few moves. This skill grows through small exercises, not by trying to play a whole game with your eyes closed right away.',
	],
	stepsHeading: 'How to train',
	steps: [
		'Look at the board for 15 seconds.',
		'Hide it and name the squares of two pieces you chose.',
		'Picture one legal move by a knight or a rook.',
		'Say which squares that piece controls after the move.',
		'Show the board again and check yourself.',
		'When this is easy, add a second move and another piece.',
	],
	example: [
		'A knight stands on e4. Without looking at the board, name every square it could go to on an empty board: c3, c5, d2, d6, f2, f6, g3, g5. In a real position, a friendly piece on a destination square prevents that move. A knight jumps over intervening pieces, but it still cannot move if doing so leaves its own king in check.',
	],
	mistakes: ['Raising the difficulty while you still mix up squares regularly.'],
	selfCheck: {
		question: 'Why show the board again after an imagined move?',
		answer: 'So you don’t lock in a wrong mental picture of the position.',
	},
	practice: [
		{
			title: 'Look Ahead',
			detail: 'Hold the position in your head as the tree grows move by move.',
			path: '/practice/look-ahead',
		},
		{
			title: 'Mate in 3',
			detail: 'Calculate the whole mating line before you move.',
			path: '/practice/mate-in-three',
		},
	],
	sources: [
		{
			title: 'Blindfold Chess: History, Psychology, Techniques, Champions, World Records, and Important Games',
			author: 'Eliot Hearst and John Knott',
			site: 'blindfoldchess.net',
			url: 'https://www.blindfoldchess.net/',
		},
		{
			title: 'Blindfold Chess – history, psychology, champions, records',
			author: 'ChessBase',
			site: 'ChessBase news',
			url: 'https://en.chessbase.com/post/blindfold-che-history-psychology-champions-records/1',
		},
	],
};
