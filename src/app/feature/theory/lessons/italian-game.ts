import { TheoryLessonBody } from '../theory.interface';

export const italianGame: TheoryLessonBody = {
	slug: 'italian-game',
	idea: [
		'The Italian Game starts with 1.e4 e5 2.Nf3 Nc6 3.Bc4. White develops quickly and aims the bishop at f7, the weakest square near Black’s king. It is one of the oldest openings and one of the best for learning how to start a game.',
		'It suits players who like clear plans: develop the pieces, castle, then take the center with c3 and d4.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 e5: both sides take the center with a king’s pawn.',
		'2.Nf3 Nc6: White develops a knight and attacks e5. Black defends it and develops.',
		'3.Bc4 Bc5: both bishops go to an active diagonal. White’s bishop looks at f7.',
		'4.c3 Nf6: White prepares d4. Black develops and attacks e4.',
		'5.d3 d6: White keeps the center solid and opens the c1-bishop. Black supports e5.',
		'6.O-O O-O: both kings are safe. This slow, solid setup is called the Giuoco Pianissimo, the “very quiet game”.',
	],
	example: [
		'After 6...O-O, White usually plays Re1, a3 or h3 and Nbd2-f1-g3, while Black plays ...a6 and ...Ba7 to keep the bishop, then ...Re8 and ...Be6. The game stays tense. Whoever makes the central break, d4 or ...d5, at the right moment gets the better pieces.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Castle early and keep the bishop on the diagonal aimed at f7.',
				'Prepare the break d4 with c3 and d3, then play it when it wins space.',
				'Reroute the b1-knight with Nbd2-f1-g3 to support e4 and join the kingside.',
				'Do not rush an attack on f7. It needs more pieces than you have in the first ten moves.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Develop with ...Nf6, ...d6 and ...O-O, and keep the e5 pawn solid.',
				'Play ...a6 and ...Ba7 so the bishop keeps its diagonal when White prepares d4.',
				'Prepare the break ...d5 to free your position.',
				'Look out for tricks on f7 and e5, especially if you pin a knight.',
			],
		},
		{
			heading: 'A trap to know: Légal’s Mate',
			paragraphs: [
				'1.e4 e5 2.Nf3 d6 3.Bc4 Bg4 4.Nc3 g6? 5.Nxe5! Bxd1 6.Bxf7+ Ke7 7.Nd5#. The knight on f3 looks pinned to the queen, but White sacrifices the queen and mates with three minor pieces.',
				'After 4.Nc3, Black should develop with 4...Nf6 or 4...Nc6 instead of weakening the kingside.',
			],
		},
	],
	mistakes: [
		'Attacking f7 too early with Ng5 or Qf3, before the other pieces are developed.',
		'Moving the bishop again and again instead of finishing development.',
		'Leaving the king in the center after the center opens.',
		'Pinning a knight with ...Bg4 and then ignoring the tactic Nxe5 (Légal’s Mate).',
	],
	selfCheck: {
		question: 'After 1.e4 e5 2.Nf3 Nc6 3.Bc4, which Black square is the main target of White’s bishop?',
		answer: 'f7. Only the king protects it, so the bishop and the knights keep an eye on it.',
	},
	questions: [
		{
			question: 'What do c3 and d3 prepare in the quiet Italian setup?',
			answer: 'c3 prepares d4 to build a big center. d3 supports e4 and opens the c1-bishop.',
		},
		{
			question: 'Why does Black often play ...a6 and ...Ba7?',
			answer: 'To keep the bishop on the a7-g1 diagonal when White’s pawn comes to d4, instead of having to trade it.',
		},
		{
			question: 'In Légal’s Mate, what does White sacrifice?',
			answer: 'The queen, with 5.Nxe5! Bxd1. Then 6.Bxf7+ Ke7 7.Nd5# is checkmate.',
		},
	],
	takeaway: 'Develop quickly, castle, aim at f7, and then build the center with c3 and d4.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 6...O-O',
			detail: 'Open the board and test White’s ideas: Re1, h3, Nbd2 or the break d4.',
			path: '/library/board',
			query: { fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 w - - 2 7' },
		},
		{
			title: 'Italian Game games',
			detail: 'Replay real games that began with the Italian Game.',
			path: '/library/games',
			query: { opening: 'Italian Game' },
		},
	],
	sources: [
		{
			title: 'Italian Game',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Italian_Game',
		},
	],
};
