import { TheoryLessonBody } from '../theory.interface';

export const londonSystem: TheoryLessonBody = {
	slug: 'london-system',
	idea: [
		'The London System starts with 1.d4 and 2.Bf4. White develops the dark-squared bishop outside the pawn chain, then builds the same compact setup with e3, c3, Nf3, Nbd2 and Bd3, whatever Black plays.',
		'It suits players who want to spend little time on theory. It is very common in club games and online.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.d4 d5: both sides take the center.',
		'2.Bf4 Nf6: White puts the bishop outside the pawn chain, before playing e3. Black develops.',
		'3.e3 e6: White opens the way for the other bishop. Black builds a solid center.',
		'4.Nf3 c5: White develops. Black attacks d4.',
		'5.c3 Nc6: White supports d4. Black adds pressure on it.',
		'6.Nbd2 Bd6: White completes the setup. Black challenges White’s active bishop.',
		'7.Bg3 O-O: White keeps the bishop. If Black trades it, White recaptures with the h-pawn and opens the h-file. Black castles.',
	],
	example: [
		'White’s plan is to play Bd3, then Qe2 or Qc2, and finally the break e4, or the jump Ne5. The London is solid, but it is not passive: the ideas Ne5 and e4 give White real attacking chances.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Develop the bishop to f4 before playing e3, or it gets locked in.',
				'Complete the setup with c3, Nbd2 and Bd3, then castle.',
				'Prepare the break e4 with Nbd2, Bd3 and Qe2, or jump to e5 with the knight.',
				'If Black attacks the bishop with ...Bd6 or ...Nh5, keep it with Bg3.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Hit the center from the side with ...c5 and ...Qb6.',
				'Attack the b2 pawn. It is the weak point of the setup.',
				'Challenge the bishop with ...Bd6 or ...Nh5.',
				'Use your own central pawns to take space. White’s setup is slow.',
			],
		},
		{
			heading: 'A pitfall to avoid: the b2 pawn',
			paragraphs: [
				'After 1.d4 d5 2.Bf4 c5 3.e3 Qb6, the b2 pawn is attacked and the c1-bishop is no longer there to defend it. Do not ignore the threat. Defend with 4.Qc1 or 4.b3.',
			],
		},
	],
	mistakes: [
		'Playing e3 before Bf4, so the bishop is shut in behind its own pawn.',
		'Ignoring ...Qb6 and losing the b2 pawn.',
		'Playing the setup on autopilot and not checking Black’s tactics.',
		'Forgetting the attack in the center. Ne5 and e4 are the plans that give White winning chances.',
	],
	selfCheck: {
		question: 'Why does White play Bf4 before e3 in the London?',
		answer: 'After e3, the c1-bishop is locked behind the pawn. Developing it first keeps it active outside the pawn chain.',
	},
	questions: [
		{
			question: 'Which pawn is the usual target for Black in the London?',
			answer: 'The pawn on b2, attacked by ...Qb6.',
		},
		{
			question: 'What does White do if Black plays ...Bd6 against the bishop on f4?',
			answer: 'White plays Bg3. If Black trades on g3, White recaptures with hxg3 and gets an open h-file.',
		},
		{
			question: 'What are White’s typical central ideas?',
			answer: 'The jump Ne5 and the pawn break e4.',
		},
	],
	takeaway: 'Bishop first, then e3, c3, Nf3, Nbd2 and Bd3, and look for Ne5 or e4.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 7...O-O',
			detail: 'Open the board and look for White’s ideas: Bd3, Ne5 and Qe2.',
			path: '/library/board',
			query: { fen: 'r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/2P1PNB1/PP1N1PPP/R2QKB1R w KQ - 5 8' },
		},
		{
			title: 'London System games',
			detail: 'Replay real games that began with the London System.',
			path: '/library/games',
			query: { search: 'London' },
		},
	],
	sources: [
		{
			title: 'London System',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/London_System',
		},
	],
};
