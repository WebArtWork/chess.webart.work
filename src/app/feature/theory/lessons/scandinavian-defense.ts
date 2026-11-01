import { TheoryLessonBody } from '../theory.interface';

export const scandinavianDefense: TheoryLessonBody = {
	slug: 'scandinavian-defense',
	idea: [
		'The Scandinavian Defense starts with 1.e4 d5. Black challenges the center at once. After 2.exd5 Qxd5 3.Nc3 the queen has to move again, but she finds a safe square, and Black can develop calmly.',
		'It suits beginners and club players: there is little theory, and the plans are simple. The price is that White gets some extra time and space, so Black must develop carefully.',
	],
	stepsHeading: 'The first moves',
	steps: [
		'1.e4 d5: Black strikes at the center at once.',
		'2.exd5 Qxd5: White takes the pawn. Black recaptures with the queen.',
		'3.Nc3 Qa5: White develops with tempo and attacks the queen. Black moves it to a safe square.',
		'4.d4 Nf6: White takes the center. Black develops a knight.',
		'5.Nf3 c6: White develops. Black supports the queen and prepares ...Bf5.',
		'6.Bc4 Bf5: White develops the bishop. Black develops the bishop outside the pawn chain, before ...e6.',
		'7.Bd2 e6: White finishes developing the minor pieces. Black builds a solid pawn center.',
	],
	example: [
		'Black will castle after ...Be7 or ...Bb4, and the queen goes to c7 or stays on a5. White has a small space advantage, and Black has a solid position without weak pawns.',
	],
	sections: [
		{
			heading: 'Plans for White',
			points: [
				'Develop with tempo against the queen: Nc3, d4, Nf3 and Bc4.',
				'Use your space advantage and castle quickly.',
				'Look for jumps like Nb5 or Nd5 when Black’s pieces are not ready.',
				'Trade Black’s active bishop on f5 if it helps, or take away its squares.',
			],
		},
		{
			heading: 'Plans for Black',
			points: [
				'Develop the light-squared bishop with ...Bf5 or ...Bg4 before playing ...e6.',
				'Keep the queen safe on a5, d6 or d8, and be ready to trade or retreat.',
				'Play ...c6 to support the queen and the center, then castle.',
				'Strike with ...e5 or ...c5 when your pieces are ready.',
			],
		},
		{
			heading: 'A pitfall to avoid: the early queen',
			paragraphs: [
				'The queen comes out on move 2, so every extra queen move costs time. After 4.d4, ideas like Bd2 and Nb5 can bother a queen on a5. Check each queen move and do not leave her where a minor piece can attack her with tempo.',
			],
		},
	],
	mistakes: [
		'Moving the queen several times and falling behind in development.',
		'Taking pawns with the queen while the other pieces are still at home.',
		'Closing the c8-bishop in with ...e6 before it has come out to f5 or g4.',
		'Forgetting that the queen on a5 can be attacked by Bd2, Nb5 and b4 ideas.',
	],
	selfCheck: {
		question: 'Why does White play 3.Nc3 after 2...Qxd5?',
		answer: 'It develops a knight and attacks the queen, so White gains a tempo.',
	},
	questions: [
		{
			question: 'Where can the queen go after 3.Nc3?',
			answer: 'Most often to a5 or d6, and d8 is also safe.',
		},
		{
			question: 'Why is ...c6 a useful move for Black?',
			answer: 'It supports the queen and the center, controls b5 and d5, and prepares ...Bf5 and ...e6.',
		},
		{
			question: 'What should Black do with the c8-bishop?',
			answer: 'Develop it outside the pawn chain with ...Bf5 or ...Bg4 before playing ...e6.',
		},
	],
	takeaway: 'Take the center, move the queen with care, get the light-squared bishop out and keep a solid pawn structure.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the position after 7...e6',
			detail: 'Open the board and look at White’s ideas: Qe2, Ne5, O-O and a4.',
			path: '/library/board',
			query: { fen: 'rn2kb1r/pp3ppp/2p1pn2/q4b2/2BP4/2N2N2/PPPB1PPP/R2QK2R w KQkq - 0 8' },
		},
		{
			title: 'Scandinavian Defense games',
			detail: 'Replay real games that began with the Scandinavian Defense.',
			path: '/library/games',
			query: { opening: 'Scandinavian Defense' },
		},
	],
	sources: [
		{
			title: 'Scandinavian Defence',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Scandinavian_Defense',
		},
	],
};
