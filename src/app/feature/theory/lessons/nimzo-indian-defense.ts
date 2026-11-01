import { TheoryLessonBody } from '../theory.interface';

export const nimzoIndianDefense: TheoryLessonBody = {
	slug: 'nimzo-indian-defense',
	idea: [
		'The Nimzo-Indian Defense starts with 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4. Black pins the knight on c3, which supports e4, and fights for the center with pieces instead of pawns. It is one of the most respected replies to 1.d4.',
		'It suits players who like strategy. White often gets the two bishops, but Black gets a healthy position and good counterplay.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.d4 Nf6: both sides develop, and Black controls e4.',
		'2.c4 e6: White takes more space. Black opens the f8-bishop.',
		'3.Nc3 Bb4: White develops. Black pins the knight on c3 to the king, so White cannot easily play e4.',
		'4.e3 O-O: White opens the f1-bishop and supports the center. Black castles.',
		'5.Bd3 d5: White develops. Black takes a share of the center.',
		'6.Nf3 c5: White develops. Black attacks d4.',
		'7.O-O Nc6: White castles. Black adds pressure on d4. This is the Rubinstein system.',
	],
	example: [
		'After 7...Nc6, White often plays a3. If Black trades on c3, White gets the two bishops but doubled pawns on the c-file, and Black can attack them.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Get the two bishops and aim to play e4 to build a big center.',
				'Develop quickly and castle before Black’s counterplay starts.',
				'Ask the bishop a question with a3, or prevent doubled pawns with Qc2.',
				'If doubled pawns appear, use the open b-file and the bishops to attack.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Pin the knight and control e4 with pieces: ...Ne4 or ...d5.',
				'Trade on c3 to double White’s pawns when it helps, then attack the weak pawns on c3 and c4.',
				'Fight for the center with ...c5 and ...d5.',
				'Keep your king safe and castle early.',
			],
		},
		{
			heading: 'A pitfall to avoid: the bishop pair',
			paragraphs: [
				'After ...Bxc3, White gets two bishops, and in open positions they can be strong. Do not give up the bishop without a reason. Trade it when White’s pawns become a weakness, or when you can win the c-pawns.',
			],
		},
	],
	mistakes: [
		'Trading the bishop on c3 too early and giving White the bishop pair for nothing.',
		'Forgetting that the pin is not permanent: White can play a3 or Qc2, so know your plan.',
		'Letting White build a big center with e4 without a counter.',
		'Leaving the king in the center while White finishes development.',
	],
	selfCheck: {
		question: 'What does 3...Bb4 do?',
		answer: 'It pins the knight on c3 to the king, so White cannot easily play e4.',
	},
	questions: [
		{
			question: 'Why does White play a3?',
			answer: 'To ask the bishop to decide: trade on c3, which gives White the bishop pair, or retreat.',
		},
		{
			question: 'What is the Rubinstein system?',
			answer: '4.e3 followed by Bd3 and Nf3. It is the most common setup against the Nimzo-Indian.',
		},
		{
			question: 'How can Black punish doubled c-pawns?',
			answer: 'By attacking them with ...dxc4 and ...Qc7, and by controlling e4.',
		},
	],
	takeaway: 'Pin the knight, control e4, and be ready to trade on c3 to damage White’s pawns.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 7...Nc6',
			detail: 'Open the board and compare a3, cxd5 and Qe2 for White.',
			path: '/library/board',
			query: { fen: 'r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 2 8' },
		},
		{
			title: 'Nimzo-Indian games',
			detail: 'Replay real games that began with the Nimzo-Indian Defense.',
			path: '/library/games',
			query: { search: 'Nimzo-Indian' },
		},
	],
	sources: [
		{
			title: 'Nimzo-Indian Defence',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Nimzo-Indian_Defence',
		},
	],
};
