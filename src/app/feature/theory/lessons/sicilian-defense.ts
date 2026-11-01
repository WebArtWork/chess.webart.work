import { TheoryLessonBody } from '../theory.interface';

export const sicilianDefense: TheoryLessonBody = {
	slug: 'sicilian-defense',
	idea: [
		'The Sicilian Defense starts with 1.e4 c5. Black does not copy White. The c-pawn attacks the d4 square from the side, so the game is unbalanced from the start: White gets more space, Black gets the open c-file and a healthy central pawn.',
		'It is the most popular reply to 1.e4 and the choice of many strong players who want to play for a win with Black.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 c5: Black attacks d4 with a flank pawn.',
		'2.Nf3 d6: White develops and prepares d4. Black opens the bishop and controls e5.',
		'3.d4 cxd4: White opens the center. Black trades the c-pawn for the d-pawn.',
		'4.Nxd4 Nf6: White recaptures with the knight. Black develops and attacks e4.',
		'5.Nc3 a6: White defends e4. Black plays the Najdorf move: ...a6 stops Nb5 and prepares ...b5.',
	],
	example: [
		'This is called the Open Sicilian, because the center opens after d4. White often attacks the kingside with Be3, f3, Qd2 and long castling, or plays calmly with Be2 and short castling. Black plays on the queenside and in the center with ...e5 or ...e6, ...b5 and ...Bb7, using the open c-file.',
		'Black has other fifth moves: 5...Nc6 (Classical), 5...g6 (Dragon) and 5...e6 (Scheveningen). When the kings castle on opposite sides, the game becomes a race, so speed matters.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Use your extra space and development, and keep the knight on d4 strong.',
				'Choose a setup: Be3, f3, Qd2 and O-O-O for a fast kingside attack, or Be2 and O-O for a calm plan.',
				'Watch Black’s break ...d5. It can free Black’s game at once.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Use the open c-file: put a rook on c8 and a knight on c6.',
				'Play on the queenside with ...b5 and ...Bb7.',
				'Aim for ...d5 or ...e5 to challenge the center.',
				'Develop first. Do not fall behind in development while White attacks.',
			],
		},
		{
			heading: 'A pitfall to avoid: the Poisoned Pawn',
			paragraphs: [
				'In the Najdorf, the line 6.Bg5 e6 7.f4 Qb6 8.Qd2 Qxb2 is famous. Black’s queen takes a pawn far from home while White’s pieces come into play. It is very sharp and needs exact knowledge.',
				'If you are not sure of the theory, do not grab pawns early. Develop with ...Qc7 and ...Nbd7 instead.',
			],
		},
	],
	mistakes: [
		'Capturing pawns with the queen while your pieces are still at home.',
		'Leaving the king in the center while White opens lines with f4 or e5.',
		'Learning long lines by heart without knowing the plan behind them.',
		'Playing a Dragon or Najdorf setup against a different White system without checking the tactics.',
	],
	selfCheck: {
		question: 'Why does Black play 1...c5 and not 1...e5?',
		answer: 'The c-pawn attacks the d4 square from the side and unbalances the game: White gets more central space, Black gets the open c-file.',
	},
	questions: [
		{
			question: 'What is an Open Sicilian?',
			answer: 'A Sicilian where White plays d4 and Black takes with ...cxd4, so the center opens.',
		},
		{
			question: 'Which move on move 5 is called the Najdorf?',
			answer: '5...a6, after 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3.',
		},
		{
			question: 'Why do both sides often castle on opposite wings?',
			answer: 'White attacks the kingside and Black attacks on the queenside. It becomes a race, so each side plays fast.',
		},
	],
	takeaway: 'Trade the c-pawn for White’s d-pawn, develop fast, use the c-file and keep your king safe.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 5...a6',
			detail: 'Open the board and test White’s sixth moves: Be3, Bg5, Be2 or f4.',
			path: '/library/board',
			query: { fen: 'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6' },
		},
		{
			title: 'Sicilian Defense games',
			detail: 'Replay real games that began with the Sicilian Defense.',
			path: '/library/games',
			query: { opening: 'Sicilian Defense' },
		},
	],
	sources: [
		{
			title: 'Sicilian Defence',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Sicilian_Defence',
		},
	],
};
