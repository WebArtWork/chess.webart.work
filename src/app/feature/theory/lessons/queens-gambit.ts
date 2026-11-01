import { TheoryLessonBody } from '../theory.interface';

export const queensGambit: TheoryLessonBody = {
	slug: 'queens-gambit',
	idea: [
		'The Queen’s Gambit starts with 1.d4 d5 2.c4. White offers a pawn to pull Black’s d5 pawn away and take control of the center. It is not a true gambit: if Black takes the pawn, White can usually win it back.',
		'It is the main opening after 1.d4, so every player meets it often. It is also a good school for pawn structure and the fight for the center.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.d4 d5: both sides take the center with the queen’s pawn.',
		'2.c4 e6: White attacks d5. Black defends it solidly. This is the Queen’s Gambit Declined.',
		'3.Nc3 Nf6: White develops and adds pressure on d5. Black develops and also guards d5.',
		'4.Bg5 Be7: White pins the knight to the queen. Black breaks the pin.',
		'5.e3 O-O: White opens the f1-bishop and supports the center. Black castles.',
		'6.Nf3 Nbd7: both sides complete the kingside setup. Black develops the queen’s knight.',
	],
	example: [
		'White usually continues with Qc2, Bd3 and Rc1, planning the central break e4 or the pawn push c5. Black prepares the freeing break ...c5 or ...e5 and keeps the position solid.',
		'Black has other second moves: 2...c6 (the Slav, solid, keeping the c8-bishop free) and 2...dxc4 (the Queen’s Gambit Accepted, taking the pawn and giving back the center).',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Build a strong center with e3, Nf3, Bd3 and Qc2 or Rc1.',
				'Aim for the break e4 to open the position when your pieces are ready.',
				'Use the bishop on g5 to pressure the knight on f6 and the pawn on e7.',
				'If Black takes on c4, win the pawn back with e3 and Bxc4.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Keep the d5 pawn protected and develop solidly.',
				'Free the position with ...c5 or ...e5, or with ...dxc4 at the right moment.',
				'Develop the c8-bishop with ...b6 and ...Bb7, or after ...dxc4.',
				'Black is slightly cramped, so trading pieces helps, especially knights.',
			],
		},
		{
			heading: 'A trap to know: the Elephant Trap',
			paragraphs: [
				'1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Nbd7 5.cxd5 exd5 6.Nxd5?? Nxd5! 7.Bxd8 Bb4+ 8.Qd2 Bxd2+ 9.Kxd2 Kxd8. White grabbed a pawn and took the queen, but Black wins the queen back with check and ends up a piece ahead for a pawn.',
			],
		},
	],
	mistakes: [
		'Taking on d5 with the knight in the Elephant Trap (6.Nxd5??).',
		'Trying to hold the extra pawn if you take on c4. White usually wins it back with e3, Bxc4 or a4.',
		'Forgetting that ...e6 closes in the c8-bishop. Plan its development.',
		'Playing e4 too early, before the pieces are developed.',
	],
	selfCheck: {
		question: 'Why is the Queen’s Gambit not a true gambit?',
		answer: 'If Black takes on c4, White can win the pawn back, for example with e3 and Bxc4.',
	},
	questions: [
		{
			question: 'What does 2.c4 attack?',
			answer: 'The d5 pawn. White wants to remove it and control the center.',
		},
		{
			question: 'What is the Slav Defense?',
			answer: '2...c6. It defends d5 with a pawn and keeps the c8-bishop free.',
		},
		{
			question: 'What is the Elephant Trap?',
			answer: 'After ...Nbd7, 6.Nxd5?? Nxd5 7.Bxd8 Bb4+ and Black wins the queen back and ends a piece ahead.',
		},
	],
	takeaway: 'Offer the c-pawn to win the center, develop with e3 and Nf3, and aim for the break e4.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 6...Nbd7',
			detail: 'Open the board and compare Qc2, Rc1 and cxd5 for White.',
			path: '/library/board',
			query: { fen: 'r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 3 7' },
		},
		{
			title: 'Queen’s Gambit games',
			detail: 'Replay real games that began with the Queen’s Gambit Declined.',
			path: '/library/games',
			query: { opening: 'Queen\'s Gambit Declined' },
		},
	],
	sources: [
		{
			title: 'Queen’s Gambit',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Queen%27s_Gambit',
		},
	],
};
