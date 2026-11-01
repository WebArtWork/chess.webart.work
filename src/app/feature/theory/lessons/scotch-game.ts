import { TheoryLessonBody } from '../theory.interface';

export const scotchGame: TheoryLessonBody = {
	slug: 'scotch-game',
	idea: [
		'The Scotch Game starts with 1.e4 e5 2.Nf3 Nc6 3.d4. White opens the center at once and gets active pieces instead of waiting. The main ideas are direct, so it is easy to learn.',
		'It suits players who like open positions and quick development. It also avoids the long theory of the Ruy Lopez.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 e5: both sides take the center.',
		'2.Nf3 Nc6: White attacks e5. Black defends it.',
		'3.d4 exd4: White challenges the center. Black takes the pawn.',
		'4.Nxd4 Nf6: White recaptures with the knight, which now stands in the center. Black develops and attacks e4.',
		'5.Nxc6 bxc6: White trades the knight and damages Black’s pawn structure.',
		'6.e5 Qe7: White attacks the knight on f6. Black’s queen attacks e5 and keeps the knight from coming back.',
		'7.Qe2 Nd5: White defends e5. Black puts the knight on a good central square.',
		'8.c4 Ba6: White attacks the knight again. Black’s bishop attacks the pawn on c4, which is in front of White’s queen.',
	],
	example: [
		'White has more space and a lead in development. Black has doubled pawns on the c-file, but also the two bishops and an open b-file. Both sides have chances, and the position stays sharp for many moves.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Recapture on d4 with the knight and use the open center for fast development.',
				'Develop the bishops to active squares, castle, and put the rooks in the center.',
				'Against 4...Bc5, protect the knight with Be3 and follow with c3 and Bc4.',
				'Use the space advantage, but keep the king safe.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Develop quickly with ...Nf6 or ...Bc5 and castle.',
				'After a trade on c6, use the open b-file and the bishop pair.',
				'Challenge the center with ...d6 or ...d5.',
				'Do not take too many pawns: development matters more.',
			],
		},
		{
			heading: 'A pitfall to avoid: the early queen',
			paragraphs: [
				'After 4.Nxd4, the move 4...Qh4 attacks e4, but White simply defends with 5.Nc3 and develops while Black’s queen is exposed. Bring the queen out only after your minor pieces are developed.',
			],
		},
	],
	mistakes: [
		'Recapturing on d4 with the queen. After 4.Qxd4? Nxd4, White loses the queen for a knight.',
		'Bringing the queen out early, so the opponent gains time attacking it.',
		'Moving the same piece several times without a reason.',
		'Forgetting to castle before the center fully opens.',
	],
	selfCheck: {
		question: 'After 3.d4 exd4, why must White recapture with the knight and not the queen?',
		answer: 'After 4.Qxd4? Nxd4 5.Nxd4, White has lost the queen for a knight. The knight is the safe recapture.',
	},
	questions: [
		{
			question: 'What does 3.d4 do?',
			answer: 'It opens the center at once, so White’s pieces become active.',
		},
		{
			question: 'What pawn structure does Black get after 5.Nxc6 bxc6?',
			answer: 'Doubled pawns on the c-file, but the open b-file and the two bishops in return.',
		},
		{
			question: 'What does White play against 4...Bc5?',
			answer: '5.Be3, defending the knight on d4, then c3 and Bc4.',
		},
	],
	takeaway: 'Open the center, recapture with the knight, develop fast and castle.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 8...Ba6',
			detail: 'Open the board and look for White’s best way to deal with the pin on c4.',
			path: '/library/board',
			query: { fen: 'r3kb1r/p1ppqppp/b1p5/3nP3/2P5/8/PP2QPPP/RNB1KB1R w KQkq - 1 9' },
		},
		{
			title: 'Scotch Game games',
			detail: 'Replay real games that began with the Scotch Game.',
			path: '/library/games',
			query: { opening: 'Scotch Game' },
		},
	],
	sources: [
		{
			title: 'Scotch Game',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Scotch_Game',
		},
	],
};
