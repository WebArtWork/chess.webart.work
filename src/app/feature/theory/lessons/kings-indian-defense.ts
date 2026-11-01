import { TheoryLessonBody } from '../theory.interface';

export const kingsIndianDefense: TheoryLessonBody = {
	slug: 'kings-indian-defense',
	idea: [
		'In the King’s Indian Defense, Black lets White build a big center with pawns on c4, d4 and e4, then attacks it with pieces and pawn breaks. The bishop on g7 becomes a very powerful piece.',
		'It suits fighting players who like to attack the king. It is sharp and rich in plans, but you must know the plan, not only the moves.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.d4 Nf6: Black controls e4 and does not take the center with pawns yet.',
		'2.c4 g6: White grows the center. Black prepares to put the bishop on g7.',
		'3.Nc3 Bg7: White develops. The bishop looks along the long diagonal.',
		'4.e4 d6: White takes a big center. Black prepares ...e5 and opens the c8-bishop.',
		'5.Nf3 O-O: White develops. Black castles and the king is safe.',
		'6.Be2 e5: Black strikes at the center at once.',
	],
	example: [
		'The usual continuation is 7.O-O Nc6 8.d5 Ne7. White plays on the queenside with c5, while Black plays ...Nd7, ...f5 and ...g5 to attack the king. This is the typical King’s Indian race: both kings are castled, and each side pushes pawns on its own wing.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Use your space: push c5 to open lines on the queenside.',
				'Keep the center strong with Be3 and Qd2 and close it with d5 when the moment is right.',
				'Keep your pieces near the king. Black’s attack with ...f5 comes quickly.',
				'Count the tempi. Your queenside attack must be faster than Black’s kingside attack.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Attack with ...f5, then ...g5 and ...f4, against the king.',
				'Use the bishop on g7 and the knights to hit the center.',
				'Break the center with ...e5 and, in some lines, ...c5.',
				'Keep your own king safe and support pawn pushes with pieces.',
			],
		},
		{
			heading: 'A pitfall to avoid: the pawn race',
			paragraphs: [
				'In the main line, both sides attack on opposite wings. If Black’s attack is too slow, White’s queenside play arrives first. Do not waste a move: every tempo counts in a pawn race.',
			],
		},
	],
	mistakes: [
		'Learning the moves without the plan (...f5 and the kingside attack).',
		'Attacking too slowly, so White’s c5 push arrives first.',
		'Trading the bishop on g7. It is Black’s best piece in this opening.',
		'Pushing kingside pawns without piece support, which only weakens your king.',
	],
	selfCheck: {
		question: 'Why does Black let White build a big center in the King’s Indian?',
		answer: 'Black plans to attack the center later with pieces and pawn breaks. A big center can become a target.',
	},
	questions: [
		{
			question: 'What does the bishop on g7 do?',
			answer: 'It controls the long diagonal and supports the break ...e5.',
		},
		{
			question: 'What is Black’s main pawn break in the classical line?',
			answer: '...f5, followed by ...g5 and ...f4 to attack the king.',
		},
		{
			question: 'What is White’s main plan after d5?',
			answer: 'Push c5 and open the queenside.',
		},
	],
	takeaway: 'Let White build the center, then strike with ...e5 and ...f5 and attack the king quickly.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 6...e5',
			detail: 'Open the board and compare White’s choices: O-O, d5 and dxe5.',
			path: '/library/board',
			query: { fen: 'rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ - 0 7' },
		},
		{
			title: 'King’s Indian games',
			detail: 'Replay real games that began with the King’s Indian Defense.',
			path: '/library/games',
			query: { search: 'King\'s Indian' },
		},
	],
	sources: [
		{
			title: 'King’s Indian Defence',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/King%27s_Indian_Defence',
		},
	],
};
