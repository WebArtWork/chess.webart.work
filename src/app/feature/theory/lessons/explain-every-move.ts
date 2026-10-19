import { TheoryLessonBody } from '../theory.interface';

export const explainEveryMove: TheoryLessonBody = {
	slug: 'explain-every-move',
	idea: [
		'A move becomes a useful lesson when you can say why it was played. Even a strong computer suggestion teaches little if it is not clear what it changes in the position.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Name the concrete problem in the position: an undefended piece, a weak square, lagging development, a king in danger.',
		'Say what should change after your move.',
		'Ask how your opponent will reply and what changes after that reply.',
		'Keep the short-term tactical goal apart from the longer strategic plan.',
		'After the game, pick five key moves and explain them in your own words.',
	],
	example: [
		'You put a rook on a half-open file, a file with no friendly pawn but an enemy pawn still on it. A weak explanation: “rooks belong on files.” A stronger one: “the rook attacks the backward pawn on this file. I want to add a second attacker, but first I must check whether my opponent can defend the pawn in time or trade it off.” On a fully open file, there are no pawns of either color; look for entry squares and targets beyond the file itself.',
	],
	mistakes: ['Making up a nice explanation after the engine has already shown you the answer.'],
	selfCheck: {
		question: 'What shows understanding better: memorizing 12 opening moves or explaining the purpose of three key ones?',
		answer: 'Explaining the purpose; memorizing is useful too, but it does not replace understanding.',
	},
	practice: [
		{
			title: 'Spot the feature',
			detail: 'Name the structure behind a move: weak pawns, outposts and open files.',
			path: '/practice/spot-the-feature',
		},
		{
			title: 'Games',
			detail: 'Pick a game, stop at the key moves and say why each one was played.',
			path: '/library/games',
		},
	],
	sources: [
		{
			title: 'Understanding Chess Move by Move',
			author: 'John Nunn',
			site: 'WorldCat',
			url: 'https://search.worldcat.org/title/Understanding-chess-move-by-move/oclc/50497051',
		},
	],
};
