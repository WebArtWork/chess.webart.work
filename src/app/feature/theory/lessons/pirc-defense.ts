import { TheoryLessonBody } from '../theory.interface';

export const pircDefense: TheoryLessonBody = {
	slug: 'pirc-defense',
	idea: [
		'In the Pirc Defense (1.e4 d6 2.d4 Nf6 3.Nc3 g6) Black lets White build a big center and plans to attack it later. The bishop on g7 becomes a strong piece on the long diagonal. The Modern Defense (1...g6 first) is a similar idea with a different move order.',
		'It suits flexible players who like to counterattack. It has more theory than it seems, and White has several sharp tries, so you must know the plan.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 d6: Black prepares to develop without taking the center yet.',
		'2.d4 Nf6: White takes the center. Black attacks e4.',
		'3.Nc3 g6: White defends e4 with a developing move. Black prepares the bishop on g7.',
		'4.Nf3 Bg7: White develops. The bishop looks along the long diagonal.',
		'5.Be2 O-O: White prepares to castle. Black castles.',
		'6.O-O c6: White castles. Black prepares ...Qc7 and the break ...e5, or ...b5.',
	],
	example: [
		'Black’s next ideas are ...Nbd7, ...Qc7 and the break ...e5 to challenge the center. White has more space, but if White does not keep the center under control, Black gets counterplay.',
		'White’s sharpest try is the Austrian Attack, 4.f4. White gets a huge center and a quick attack, so Black must counter at once with ...Bg7, ...O-O and a break such as ...c5 or ...e5.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Use the space of a big center: e4, d4 and later e5.',
				'Choose a setup: the calm Classical one with Be2 and O-O, or the sharp one with f4 and Bd3.',
				'Develop quickly and castle before you attack.',
				'Watch Black’s breaks ...e5 and ...c5 and be ready to answer them.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Develop quickly and castle. Your king is safe on g8 behind the bishop.',
				'Prepare the break ...e5 with ...Nbd7 and ...c6, or play ...c5.',
				'Use the bishop on g7 along the long diagonal and try not to trade it.',
				'Stay alert against the Austrian Attack: do not play slowly.',
			],
		},
		{
			heading: 'A pitfall to avoid: the Austrian Attack',
			paragraphs: [
				'After 4.f4, White has pawns on e4, d4 and f4. If Black plays slowly, the push e5 gains time and the attack on the kingside arrives first. Counter in the center right away, with ...c5 or ...e5, and keep your pieces developing.',
			],
		},
	],
	mistakes: [
		'Playing passively and never striking at the center with ...e5 or ...c5.',
		'Trading the bishop on g7, which is Black’s best piece.',
		'Playing without a plan against 4.f4.',
		'As White, pushing pawns without developing the pieces.',
	],
	selfCheck: {
		question: 'What is the difference between the Pirc and the Modern Defense?',
		answer: 'In the Pirc, Black plays ...Nf6 early. In the Modern, Black plays ...g6 and ...Bg7 first and keeps the knight flexible.',
	},
	questions: [
		{
			question: 'Which pawn break does Black aim for in the Classical Pirc?',
			answer: '...e5, or sometimes ...c5.',
		},
		{
			question: 'What is the Austrian Attack?',
			answer: '4.f4. White builds a very big center and attacks.',
		},
		{
			question: 'Why does Black play ...d6 and ...g6 and not ...d5?',
			answer: 'Black prefers to let White build the center, then attacks it later with pieces and pawn breaks.',
		},
	],
	takeaway: 'Let White build the center, put the bishop on g7 and strike with ...e5 or ...c5.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 6...c6',
			detail: 'Open the board and compare White’s choices: a4, Re1 and Qd3.',
			path: '/library/board',
			query: { fen: 'rnbq1rk1/pp2ppbp/2pp1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 0 7' },
		},
		{
			title: 'Pirc Defense games',
			detail: 'Replay real games that began with the Pirc Defense.',
			path: '/library/games',
			query: { opening: 'Pirc Defense' },
		},
	],
	sources: [
		{
			title: 'Pirc Defence',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Pirc_Defence',
		},
	],
};
