import { TheoryLessonBody } from '../theory.interface';

export const viennaGame: TheoryLessonBody = {
	slug: 'vienna-game',
	idea: [
		'The Vienna Game starts with 1.e4 e5 2.Nc3. White develops the knight first and keeps the option of f4, a pawn break that opens the f-file and attacks Black’s center. Unlike the Italian Game or the Ruy Lopez, it does not commit the bishop yet.',
		'It suits players who like to attack and want an opening with less theory than the Ruy Lopez. Black must be careful, because White’s ideas are direct.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 e5: both sides take the center.',
		'2.Nc3 Nf6: White develops the knight and guards e4. Black develops and attacks e4.',
		'3.f4 d5: this is the Vienna Gambit. White prepares to attack the center. Black strikes back in the center at once.',
		'4.fxe5 Nxe4: White takes the pawn. Black takes the pawn on e4 with the knight.',
		'5.Nf3 Be7: White develops. Black prepares to castle.',
		'6.d4 O-O: White builds a big center. Black castles.',
		'7.Bd3 f5: White attacks the knight on e4. Black defends it with ...f5.',
	],
	example: [
		'After 8.exf6 the game becomes sharp: White has more space, and Black has active pieces. If you want a quieter game, play 3.Bc4 or 3.g3 instead of 3.f4.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Use the break f4 at the right moment to open the f-file and attack e5.',
				'Build a big center with d4 and develop quickly.',
				'Castle early and keep the king safe before you attack.',
				'Trade off Black’s active knight on e4 with Bd3 and Qe2.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Strike back in the center with ...d5 as soon as White plays f4.',
				'Develop quickly with ...Nc6 and ...Be7, and castle.',
				'Pin or trade the knight on c3 with ...Bb4 when it helps.',
				'Keep your king safe and do not open the f-file for White without a reason.',
			],
		},
		{
			heading: 'A pitfall to avoid: taking the pawn on f4',
			paragraphs: [
				'After 3.f4, the move 3...exf4? is too greedy: 4.e5 Qe7 5.Qe2 Ng8 6.Nf3 pushes Black’s knight back and gives White a big lead in development. Answer 3.f4 with 3...d5 instead.',
			],
		},
	],
	mistakes: [
		'Playing f4 and then leaving the king in the center.',
		'Taking the pawn with ...exf4 and falling behind in development.',
		'Forgetting ...d5. It is Black’s main way to equalize against f4.',
		'Leaving the knight on e4 unsupported after ...Nxe4.',
	],
	selfCheck: {
		question: 'What is the idea of 2.Nc3 in the Vienna Game?',
		answer: 'It defends e4 and prepares f4 without committing the king’s knight or the bishops yet.',
	},
	questions: [
		{
			question: 'What is the Vienna Gambit?',
			answer: '3.f4 after 2.Nc3 Nf6. White offers to open the f-file, and Black replies ...d5.',
		},
		{
			question: 'Which quiet alternatives to 3.f4 does White have?',
			answer: '3.Bc4 and 3.g3.',
		},
		{
			question: 'Why is 3...exf4 risky for Black?',
			answer: 'After 4.e5 the knight is chased back, and White develops with tempo.',
		},
	],
	takeaway: 'Develop with Nc3, play f4 when it is well prepared, and meet ...d5 with a fight for the center.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 7...f5',
			detail: 'Open the board and compare 8.exf6 with other moves for White.',
			path: '/library/board',
			query: { fen: 'rnbq1rk1/ppp1b1pp/8/3pPp2/3Pn3/2NB1N2/PPP3PP/R1BQK2R w KQ f6 0 8' },
		},
		{
			title: 'Vienna Game games',
			detail: 'Replay real games that began with the Vienna Game.',
			path: '/library/games',
			query: { opening: 'Vienna Game' },
		},
	],
	sources: [
		{
			title: 'Vienna Game',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Vienna_Game',
		},
	],
};
