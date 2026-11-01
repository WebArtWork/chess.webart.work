import { TheoryLessonBody } from '../theory.interface';

export const slavDefense: TheoryLessonBody = {
	slug: 'slav-defense',
	idea: [
		'The Slav Defense starts with 1.d4 d5 2.c4 c6. Black defends d5 with the c-pawn instead of the e-pawn, so the c8-bishop stays free to develop. It is a very solid reply to the Queen’s Gambit.',
		'It suits players who want a sound structure and clear plans. It is one of the most respected defenses at every level.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.d4 d5: both sides take the center.',
		'2.c4 c6: White attacks d5. Black defends it with the c-pawn and keeps the bishop free.',
		'3.Nf3 Nf6: both sides develop a knight.',
		'4.Nc3 dxc4: White adds pressure on d5. Black takes the pawn.',
		'5.a4 Bf5: White stops ...b5. Black develops the bishop outside the pawn chain.',
		'6.e3 e6: White opens the f1-bishop to win the pawn back. Black closes the center, now that the bishop is out.',
		'7.Bxc4 Bb4: White wins the pawn back. Black pins the knight on c3.',
	],
	example: [
		'After 8.O-O Nbd7, Black’s position is solid and has no weaknesses. White has a small lead in development and the center. Black plans ...Bg6, ...O-O and a break such as ...c5 or ...e5 to equalize.',
		'If Black plays 4...e6 instead of 4...dxc4, the game becomes the Semi-Slav, which is sharper.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Win back the c4 pawn and use the space it gives you.',
				'Develop quickly and castle, then prepare the central break e4.',
				'Use the bishops actively, and watch for a bishop on g5 or d3.',
				'Keep the queenside under control with a4 and Qc2.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Develop the c8-bishop to f5 or g4 before you play ...e6.',
				'Be ready to give the c4 pawn back instead of weakening your position.',
				'Free the game with ...c5 or ...e5 when your pieces are ready.',
				'Keep a solid pawn structure without weaknesses.',
			],
		},
		{
			heading: 'A pitfall to avoid: holding the pawn',
			paragraphs: [
				'The move 5.a4 stops ...b5, so Black cannot hold the extra pawn. Do not weaken your position just to keep it. Develop your pieces, and let White win the pawn back.',
			],
		},
	],
	mistakes: [
		'Playing ...e6 before the c8-bishop has come out, which locks it in (unless you want the Semi-Slav).',
		'Trying to hold the c4 pawn at all costs.',
		'Leaving the king in the center after White wins the pawn back.',
		'Ignoring White’s central break e4.',
	],
	selfCheck: {
		question: 'What is the main advantage of the Slav over the Queen’s Gambit Declined?',
		answer: 'The c8-bishop is not locked behind the e6 pawn. Black can develop it to f5 or g4 first.',
	},
	questions: [
		{
			question: 'What does 2...c6 do?',
			answer: 'It defends d5 and prepares ...dxc4 and ...Bf5.',
		},
		{
			question: 'What is the Semi-Slav?',
			answer: 'The setup after 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 e6, with pawns on c6, d5 and e6.',
		},
		{
			question: 'Which move stops Black from holding the pawn with ...b5?',
			answer: '5.a4.',
		},
	],
	takeaway: 'Defend d5 with ...c6, bring out the c8-bishop first and be ready to give the pawn back.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 7...Bb4',
			detail: 'Open the board and look at White’s ideas: O-O, Qe2 and Bd2.',
			path: '/library/board',
			query: { fen: 'rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQK2R w KQkq - 1 8' },
		},
		{
			title: 'Slav Defense games',
			detail: 'Replay real games that began with the Slav Defense.',
			path: '/library/games',
			query: { opening: 'Slav Defense' },
		},
	],
	sources: [
		{
			title: 'Slav Defense',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Slav_Defense',
		},
	],
};
