import { TheoryLessonBody } from '../theory.interface';

export const ruyLopez: TheoryLessonBody = {
	slug: 'ruy-lopez',
	idea: [
		'The Ruy Lopez, also called the Spanish Game, starts with 1.e4 e5 2.Nf3 Nc6 3.Bb5. The bishop does not threaten e5 at once, but it attacks the knight that defends it. This builds long-term pressure on Black’s center.',
		'It is played at every level, from club games to world championship matches. It rewards patience: the plans are clear, but the positions stay rich for many moves.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 e5: both sides take the center.',
		'2.Nf3 Nc6: White attacks e5. Black defends it with the knight.',
		'3.Bb5 a6: the bishop attacks the knight that defends e5. Black asks the bishop what it wants to do.',
		'4.Ba4 Nf6: White keeps the pressure. Black develops and attacks e4.',
		'5.O-O Be7: White castles. Black develops the bishop and prepares to castle.',
		'6.Re1 b5: the rook defends e4. Black drives the bishop back.',
		'7.Bb3 d6: the bishop keeps its diagonal toward f7. Black supports e5.',
		'8.c3 O-O: White prepares d4. Black castles. This is the Closed Ruy Lopez.',
	],
	example: [
		'White’s idea is to play d4 and build a big center. Black’s ideas are ...Na5 to trade White’s strong bishop, and ...c5 or ...d5 to challenge the center.',
		'In the Exchange Variation, 4.Bxc6 dxc6 5.O-O, White damages Black’s pawns and aims for a better ending with a healthy kingside pawn majority. Black has the two bishops in return.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Prepare d4 with c3 and h3, then open the center when your pieces are ready.',
				'Keep the bishop on b3 (or c2), where it supports the center.',
				'Reroute the knight with Nbd2-f1-g3 to reach the kingside.',
				'In the Exchange Variation, aim for an endgame where your pawn majority counts.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Develop with ...Nf6, ...Be7 and ...O-O, then support e5 with ...d6.',
				'Play ...Na5 to challenge the bishop, then ...c5 to fight for d4.',
				'Look for ...d5 when it equalizes in the center.',
				'Keep e5 protected. It is the key pawn of the whole structure.',
			],
		},
		{
			heading: 'A trap to know: Noah’s Ark Trap',
			paragraphs: [
				'1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.d4 b5 6.Bb3 Nxd4 7.Nxd4 exd4 8.Qxd4? c5 9.Qd5 Be6 10.Qc6+ Bd7 11.Qd5 c4. The pawns on c5 and c4 attack the bishop on b3, and White loses it for two pawns.',
				'After 7...exd4, White should not grab the pawn with the queen.',
			],
		},
	],
	mistakes: [
		'Thinking that 4.Bxc6 dxc6 5.Nxe5 wins a pawn. Black plays ...Qd4, attacks the knight and the pawn on e4, and regains the pawn.',
		'Forgetting to defend e4 before Black can play ...Nxe4.',
		'Opening the center with d4 before the king is safe.',
		'Pushing ...a6 and ...b5 without a plan, which leaves the queenside weaker.',
	],
	selfCheck: {
		question: 'In the Ruy Lopez, which piece does the bishop on b5 attack?',
		answer: 'The knight on c6. It defends the pawn on e5, so the bishop attacks e5 indirectly.',
	},
	questions: [
		{
			question: 'What does 6.Re1 defend?',
			answer: 'The e4 pawn, so Black cannot win it with ...Nxe4.',
		},
		{
			question: 'What is the main idea of the Exchange Variation?',
			answer: 'White trades the bishop for the knight on c6 to damage Black’s pawns, and aims for a better ending with a kingside pawn majority.',
		},
		{
			question: 'What happens in Noah’s Ark Trap?',
			answer: 'Black plays ...c5 and ...c4 and traps the bishop on b3, winning it for two pawns.',
		},
	],
	takeaway: 'Pressure the defender of e5, castle, defend e4 and prepare d4.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 8...O-O',
			detail: 'Open the board and test White’s ideas: h3, d4 or Nbd2.',
			path: '/library/board',
			query: { fen: 'r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 1 9' },
		},
		{
			title: 'Ruy Lopez games',
			detail: 'Replay real games that began with the Ruy Lopez.',
			path: '/library/games',
			query: { opening: 'Ruy Lopez' },
		},
	],
	sources: [
		{
			title: 'Ruy Lopez',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Ruy_Lopez',
		},
	],
};
