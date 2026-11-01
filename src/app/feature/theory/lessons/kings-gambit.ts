import { TheoryLessonBody } from '../theory.interface';

export const kingsGambit: TheoryLessonBody = {
	slug: 'kings-gambit',
	idea: [
		'The King’s Gambit starts with 1.e4 e5 2.f4. White offers the f-pawn to open the f-file and pull away Black’s e5 pawn, in order to build a big center and attack. It was the most popular opening of the 19th century, and it is still great fun to play.',
		'It suits players who love open, tactical positions. It is risky for both sides, because White’s king is exposed, so accuracy matters.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 e5: both sides take the center.',
		'2.f4 exf4: White offers a pawn. Black accepts it. This is the King’s Gambit Accepted.',
		'3.Nf3 g5: White develops and stops ...Qh4+. Black holds the extra pawn with ...g5.',
		'4.h4 g4: White attacks the pawn on g5. Black pushes it and attacks the knight.',
		'5.Ne5 Nf6: the knight lands on e5. Black develops and attacks e4.',
	],
	example: [
		'The usual continuation is 6.Bc4 d5 7.exd5 Bd6. Black has an extra pawn, and White has the initiative and open lines. Both sides need exact play, and a single slip can lose quickly.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Develop fast and use the open f-file. Castle early.',
				'Support e4 and build a center with d4 and Nc3.',
				'Aim the bishop at f7 with Bc4, and attack the weak king.',
				'Win back the pawn on f4 when it is safe.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Keep the extra pawn only if it is safe. A quick ...d5 gives the pawn back and frees your game.',
				'Develop your pieces and castle quickly.',
				'Know what ...g5 and ...g4 do: they weaken your own king.',
				'If you do not know the theory, decline with 2...Bc5 or 2...d5.',
			],
		},
		{
			heading: 'A famous idea: the Muzio Gambit',
			paragraphs: [
				'1.e4 e5 2.f4 exf4 3.Nf3 g5 4.Bc4 g4 5.O-O gxf3 6.Qxf3. White gives a whole knight for a big lead in development and open lines against the black king. It is a famous attacking idea, and it is dangerous to face without knowing the theory.',
				'As Black, you can avoid it by declining the gambit (2...Bc5 or 2...d5) or by playing 3...Be7 or 3...d6.',
			],
		},
	],
	mistakes: [
		'Playing the King’s Gambit and not castling: the king is exposed.',
		'As White, forgetting that ...Qh4+ is possible after ...exf4 if you do not develop the knight to f3 in time.',
		'As Black, holding every pawn instead of developing the pieces.',
		'Pushing pawns on the kingside without calculating the consequences.',
	],
	selfCheck: {
		question: 'What does White offer with 2.f4, and what does White get in return?',
		answer: 'The f-pawn. After 2...exf4 White gets an open f-file, a chance for the center with d4, and fast development.',
	},
	questions: [
		{
			question: 'What does 3.Nf3 prevent?',
			answer: '3...Qh4+, a check on the e1-h4 diagonal.',
		},
		{
			question: 'What is the Muzio Gambit?',
			answer: '4.Bc4 g4 5.O-O, where White sacrifices a knight for a fast attack.',
		},
		{
			question: 'Name two ways for Black to decline the gambit.',
			answer: '2...Bc5, and 2...d5 (the Falkbeer Counter-Gambit).',
		},
	],
	takeaway: 'Offer the f-pawn, develop fast and castle. As Black, accept only if you can keep your king safe.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 5...Nf6',
			detail: 'Open the board and look at White’s options: Bc4, d4 and Nc3.',
			path: '/library/board',
			query: { fen: 'rnbqkb1r/pppp1p1p/5n2/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 2 6' },
		},
		{
			title: 'King’s Gambit games',
			detail: 'Replay real games that began with the King’s Gambit.',
			path: '/library/games',
			query: { search: 'King\'s Gambit' },
		},
	],
	sources: [
		{
			title: 'King’s Gambit',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/King%27s_Gambit',
		},
	],
};
