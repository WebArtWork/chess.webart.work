import { TheoryLessonBody } from '../theory.interface';

export const clearEndgameThinking: TheoryLessonBody = {
	slug: 'clear-endgame-thinking',
	idea: [
		'When you have an advantage, you do not always need to attack. Sometimes the safest way is to trade active enemy pieces, activate your king and push a pawn through. But simplifying only helps when the final position is really good for you.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Name your advantage: extra material, an active king, a strong passed pawn.',
		'Picture the position after the trade you are considering.',
		'Ask which pawns will remain and who will create a passed pawn first.',
		'Don’t trade pieces automatically: some trades turn a win into a draw.',
		'Before entering a pawn endgame, calculate king routes, pawn races and whose move it will be. Opposition is a tool for reaching useful squares, not a guarantee of a win.',
	],
	example: [
		'You are a pawn up. Trading queens often lowers the risk of an attack on your king. But king activity, pawn structure and access to targets decide whether the extra pawn is enough.',
		'Try this complete position: White king c6, pawn c7; Black king a7; White to move. There are no other pieces. What happens after 1.c8=Q?',
		'Answer: it is stalemate. Black is not in check, but a8 and b8 are controlled by the queen, b7 and b6 by White’s king, and a6 by the queen. Instead, 1.c8=R avoids stalemate: Black must play 1...Ka6, and White has a winning king-and-rook ending. Check the opponent’s legal replies even when promotion looks routine.',
	],
	mistakes: ['Rushing to trade without seeing the drawing fortress.'],
	selfCheck: {
		question: 'Is it always good to trade pieces when you are a pawn up?',
		answer: 'No. You need to evaluate the specific endgame.',
	},
	practice: [
		{
			title: 'Endgame puzzles',
			detail: 'Before you trade, picture the position after the trade and judge it.',
			path: '/practice/good-moves',
			query: { category: 'endgame' },
		},
		{
			title: 'Endgame games',
			detail: 'At each trade, judge whether the endgame after it is really better.',
			path: '/library/games',
			query: { category: 'endgame' },
		},
	],
	sources: [
		{
			title: 'Chess Fundamentals',
			author: 'José Raúl Capablanca',
			site: 'Project Gutenberg',
			url: 'https://www.gutenberg.org/ebooks/33870',
		},
	],
};
