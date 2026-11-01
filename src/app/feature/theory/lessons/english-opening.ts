import { TheoryLessonBody } from '../theory.interface';

export const englishOpening: TheoryLessonBody = {
	slug: 'english-opening',
	idea: [
		'The English Opening starts with 1.c4. White controls d5 and the center from the side and keeps its options open. The game can become a Queen’s Gambit type of position, a Sicilian with the colors reversed, or something completely new.',
		'It suits patient players who like flexible pawn structures and positional plans. Many strong players choose it.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.c4 e5: White controls d5 from the side. Black takes the center with a pawn.',
		'2.Nc3 Nf6: White develops and adds pressure on d5. Black develops and attacks e4.',
		'3.Nf3 Nc6: White attacks e5. Black defends it.',
		'4.g3 d5: White prepares to put the king’s bishop on g2. Black strikes at the center at once.',
		'5.cxd5 Nxd5: White trades pawns. Black recaptures with the knight.',
		'6.Bg2 Nb6: the bishop looks along the long diagonal. Black retreats the knight to avoid a trade or a pin.',
		'7.O-O Be7: White castles. Black develops the bishop and prepares to castle.',
	],
	example: [
		'White has a small lead in the center and a bishop on the long diagonal, aiming at b7 and the queenside. A typical plan is to play on the queenside with a3 and b4, while keeping an eye on d5. Black keeps the center solid and develops quickly.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Control d5 and the long diagonal with the bishop on g2.',
				'Play on the queenside with a3 and b4 when it is safe.',
				'Keep your pawn structure flexible and choose a setup after seeing Black’s reply.',
				'If Black takes on c4, win the pawn back with active pieces.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Fight for the center with ...e5 and ...d5.',
				'Keep your pawn structure healthy and develop quickly.',
				'Use the d4 square. A knight on d4 can be very strong if White does not prevent it.',
				'Challenge the bishop on g2 by trading it or blocking its diagonal.',
			],
		},
		{
			heading: 'A pitfall to avoid: the d4 square',
			paragraphs: [
				'After 1.c4 e5, White has no pawn on d4 to control that square, so Black’s knight can jump there. If you play d3 and ignore it, Black’s knight sits on d4 and bothers you. Trade it off with Nxd4 when it helps, or keep an eye on it with e3.',
			],
		},
	],
	mistakes: [
		'Playing the English without a plan against ...e5.',
		'Trading the bishop on g2 without a good reason. It is White’s best piece in this setup.',
		'Forgetting that ...d5 can strike at the center at once, and answering it without a plan.',
		'Leaving the d4 square to Black’s knight.',
	],
	selfCheck: {
		question: 'Why is the English called a “Reversed Sicilian” after 1.c4 e5?',
		answer: 'White has the pawn structure of the Sicilian, but with the colors reversed and an extra move.',
	},
	questions: [
		{
			question: 'What does 1.c4 control?',
			answer: 'The d5 square, from the side.',
		},
		{
			question: 'Why do White’s g3 and Bg2 make sense?',
			answer: 'The bishop controls the long diagonal and pressures d5 and b7, and the king gets ready to castle safely.',
		},
		{
			question: 'What does Black strike with after 3.Nf3 Nc6 4.g3?',
			answer: '...d5, attacking the center at once.',
		},
	],
	takeaway: 'Control d5, put the bishop on g2, castle and choose your plan after seeing Black’s setup.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 7...Be7',
			detail: 'Open the board and compare White’s plans: d3, a3, Be3 and Rb1.',
			path: '/library/board',
			query: { fen: 'r1bqk2r/ppp1bppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq - 4 8' },
		},
		{
			title: 'English Opening games',
			detail: 'Replay real games that began with the English Opening.',
			path: '/library/games',
			query: { opening: 'English Opening' },
		},
	],
	sources: [
		{
			title: 'English Opening',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/English_Opening',
		},
	],
};
