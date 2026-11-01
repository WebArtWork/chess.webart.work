import { TheoryLessonBody } from '../theory.interface';

export const frenchDefense: TheoryLessonBody = {
	slug: 'french-defense',
	idea: [
		'The French Defense starts with 1.e4 e6 2.d4 d5. Black builds a solid pawn chain and challenges White’s center at once. The positions are often closed, so the plans are clearer than in open games.',
		'Its main drawback is the bishop on c8, which is shut in behind the e6 pawn. Freeing it is one of the main themes of the opening.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 e6: Black prepares ...d5 and keeps a solid pawn chain.',
		'2.d4 d5: both sides have pawns in the center. The pawn on e4 is attacked.',
		'3.Nc3 Nf6: White defends e4. Black attacks it again.',
		'4.Bg5 Be7: White pins the knight to the queen. Black breaks the pin with the bishop.',
		'5.e5 Nfd7: White gains space and attacks the knight. Black moves it and prepares ...c5.',
		'6.Bxe7 Qxe7: White trades Black’s good dark-squared bishop. Black recaptures with the queen.',
		'7.f4 O-O: White supports e5 and builds a big center. Black castles.',
		'8.Nf3 c5: White develops. Black attacks d4, the base of White’s pawn chain.',
	],
	example: [
		'White has more space and can attack on the kingside. Black is a little cramped, but has a clear target: the d4 pawn. Black usually adds pressure with ...Nc6 and ...cxd4, and later plays ...f6 to attack the head of the chain on e5.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Use your space advantage and keep e5 strong with f4 and Nf3.',
				'Attack on the kingside, because Black is cramped there.',
				'Keep d4 safe. Black will attack it again and again.',
				'Do not trade the pawn on e5 without a good reason.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Attack the base of White’s chain: d4, with ...c5, ...Nc6 and ...Qb6.',
				'Free the c8-bishop with ...b6 and ...Ba6, or trade it.',
				'Strike at the head of the chain with ...f6 when White’s pieces are not ready.',
				'Do not stay passive. A French that only waits is hard to hold.',
			],
		},
		{
			heading: 'A pitfall to avoid: the bad bishop',
			paragraphs: [
				'If Black never finds a role for the c8-bishop, it stays locked behind the e6 pawn and Black plays a piece down for the whole game. Think about it early: plan ...b6 and ...Ba6, or open the position with ...c5 and ...dxe4.',
			],
		},
	],
	mistakes: [
		'Leaving the c8-bishop locked up for the whole game.',
		'Playing quietly as Black. The French needs ...c5 and often ...f6 to break the chain.',
		'Attacking the head of the chain first. Attack its base on d4 before the pawn on e5.',
		'Putting pieces on passive squares as White and forgetting that d4 is under constant pressure.',
	],
	selfCheck: {
		question: 'In the French, which pawn is the base of White’s chain, and how does Black attack it?',
		answer: 'The pawn on d4. Black attacks it with ...c5, ...Nc6 and ...Qb6.',
	},
	questions: [
		{
			question: 'Which Black bishop is the problem piece in the French, and why?',
			answer: 'The bishop on c8, because the pawn on e6 blocks its diagonal.',
		},
		{
			question: 'What does 5.e5 do?',
			answer: 'It gains space and attacks the knight on f6. It also locks the center, so both sides play on the wings.',
		},
		{
			question: 'Name two plans for Black in this line.',
			answer: '...c5 against the pawn on d4, and ...f6 against the pawn on e5.',
		},
	],
	takeaway: 'Build the chain, attack d4 with ...c5, free the c8-bishop and watch White’s space on the kingside.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 8...c5',
			detail: 'Open the board and compare dxc5 with keeping the tension on d4.',
			path: '/library/board',
			query: { fen: 'rnb2rk1/pp1nqppp/4p3/2ppP3/3P1P2/2N2N2/PPP3PP/R2QKB1R w KQ - 0 9' },
		},
		{
			title: 'French Defense games',
			detail: 'Replay real games that began with the French Defense.',
			path: '/library/games',
			query: { opening: 'French Defense' },
		},
	],
	sources: [
		{
			title: 'French Defence',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/French_Defence',
		},
	],
};
