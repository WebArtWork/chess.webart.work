import { TheoryLessonBody } from '../theory.interface';

export const caroKannDefense: TheoryLessonBody = {
	slug: 'caro-kann-defense',
	idea: [
		'The Caro-Kann Defense starts with 1.e4 c6. Black prepares ...d5 with a pawn, so the c8-bishop can come out before ...e6 closes it in. The structure is solid and healthy.',
		'It suits players who want a sound game with clear plans and fewer early dangers than in most replies to 1.e4.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 c6: Black prepares ...d5 and supports it with the c-pawn.',
		'2.d4 d5: both sides take the center.',
		'3.Nc3 dxe4: White defends e4. Black captures it.',
		'4.Nxe4 Bf5: White recaptures with the knight. Black develops the bishop outside the pawn chain, before ...e6.',
		'5.Ng3 Bg6: White attacks the bishop. Black retreats it.',
		'6.h4 h6: White threatens h5 to trap the bishop. Black plays ...h6, so the bishop can go to h7.',
		'7.Nf3 Nd7: White develops. Black develops and prepares ...Ngf6.',
		'8.h5 Bh7: White pushes the pawn. The bishop retreats to h7 and keeps an eye on the diagonal toward d3.',
	],
	example: [
		'White usually plays Bd3 to offer a trade of Black’s active bishop. Black accepts, finishes development with ...e6 and ...Ngf6, and gets a very solid position with no weaknesses.',
		'Other White tries to know: the Advance Variation, 3.e5, which gains space, and the Exchange Variation, 3.exd5 cxd5, which gives a symmetrical structure.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Develop quickly and offer a trade of Black’s active bishop with Bd3.',
				'Use the small space advantage and play in the center with c4 or Ne5 ideas.',
				'Put pieces on active squares. A knight on e5 is strong when Black’s pawns allow it.',
				'Against ...Bg6, play h4-h5 to gain space on the kingside.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Develop the light-squared bishop before closing the pawn chain with ...e6.',
				'Keep the pawn structure healthy: there are no weaknesses to attack.',
				'Counterattack in the center with ...c5 when you are ready.',
				'Trade pieces when White chases your bishop. Do not waste time.',
			],
		},
		{
			heading: 'A trap to know: the queen on e2',
			paragraphs: [
				'1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Qe2 Ngf6?? 6.Nd6#. The queen on e2 pins the pawn on e7 to the king. When the knight jumps to d6, nothing can capture it and the king has no square.',
				'After 5.Qe2, Black should play 5...e6 first.',
			],
		},
	],
	mistakes: [
		'Playing ...Ngf6 against a queen on e2 when the knight can jump to d6 (Nd6#).',
		'Closing the c8-bishop in with ...e6 before it has come out to f5 or g4.',
		'Playing too passively. The Caro-Kann is solid, but you still need ...c5 or ...e5 to fight.',
		'Forgetting White’s plan of h4-h5 against the bishop on g6.',
	],
	selfCheck: {
		question: 'Why does Black play ...Bf5 before ...e6 in the Caro-Kann?',
		answer: 'The move ...e6 would block the c8-bishop. By developing the bishop first, Black keeps it active outside the pawn chain.',
	},
	questions: [
		{
			question: 'What is the Advance Variation?',
			answer: '3.e5. White gains space, and Black attacks White’s pawn chain with ...c5.',
		},
		{
			question: 'What does ...h6 do in the main line?',
			answer: 'It gives the bishop the square h7, so White’s pawn on h5 cannot trap it.',
		},
		{
			question: 'What is the trap after 5.Qe2?',
			answer: '5...Ngf6?? 6.Nd6#. The pawn on e7 is pinned, so the knight on d6 cannot be captured.',
		},
	],
	takeaway: 'Develop the light-squared bishop first, keep a solid pawn structure and counter with ...c5.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 8...Bh7',
			detail: 'Open the board and look at White’s ideas: Bd3, Bf4 and Qe2.',
			path: '/library/board',
			query: { fen: 'r2qkbnr/pp1npppb/2p4p/7P/3P4/5NN1/PPP2PP1/R1BQKB1R w KQkq - 1 9' },
		},
		{
			title: 'Caro-Kann Defense games',
			detail: 'Replay real games that began with the Caro-Kann Defense.',
			path: '/library/games',
			query: { opening: 'Caro-Kann Defense' },
		},
	],
	sources: [
		{
			title: 'Caro–Kann Defence',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Caro%E2%80%93Kann_Defence',
		},
	],
};
