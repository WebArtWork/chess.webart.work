import { TheoryLessonBody } from '../theory.interface';

export const pieceManeuvering: TheoryLessonBody = {
	slug: 'piece-maneuvering',
	sections: [
		{
			heading: 'What a maneuver is',
			paragraphs: [
				'A maneuver is a purposeful series of moves that brings a piece to a better square or helps another piece do its job.',
				'Not every win starts with a combination. Often a strong player frees their pieces step by step until the opponent runs out of comfortable ways to defend.',
			],
		},
		{
			heading: 'Start with your worst-placed piece',
			paragraphs: [
				'Your queen and rook may be active while a knight stands on the edge of the board with no real target. Ask:',
			],
			points: [
				'Which of my pieces takes the least part in the game?',
				'Which square would make it more useful?',
				'Is there a safe route to that square?',
				'Can I afford the time to get it there?',
			],
			after: [
				'Don’t improve a piece while your opponent threatens mate or to win material. Always check the tactics first.',
			],
		},
		{
			heading: 'Typical strategic maneuvers',
			parts: [
				{
					heading: 'Rerouting a knight',
					paragraphs: [
						'A knight is often effective on an outpost: a useful advanced square that enemy pawns cannot readily challenge, ideally supported by your pawn. Check whether an enemy piece can exchange it and whether it has useful targets. In closed positions it often needs three or four moves to get there, so plan the whole route. A classic example is the Ruy Lopez regrouping Nb1–d2–f1–g3.',
					],
				},
				{
					heading: 'Opening a diagonal for a bishop',
					paragraphs: [
						'A bishop often looks passive not because it is weak, but because pawns block its diagonal. Before you look for a bishop move, consider preparing a pawn advance or a trade that opens the diagonal, or bringing the bishop outside its pawn chain.',
					],
				},
				{
					heading: 'Taking an open file',
					paragraphs: [
						'A rook is usually more active on an open file. But occupying the file is not enough: you need to know where the rook can invade, often the seventh rank, and what exactly it will attack there.',
					],
				},
				{
					heading: 'Creating a second weakness',
					paragraphs: [
						'If your opponent has reliably defended one weak point, move the fight to the other flank. Then the defenders have to split their forces between two tasks.',
					],
				},
			],
		},
		{
			heading: 'How to judge a maneuver',
			paragraphs: ['Check four things:'],
			points: [
				'Goal: what does the piece gain on its new square?',
				'Route: how many moves does it take, and which squares must the piece pass?',
				'Cost in time: what can your opponent do meanwhile?',
				'Stability: can your opponent easily drive the piece away from its new square?',
			],
			ordered: true,
			after: ['If tactical threats appear along the way, change the maneuver.'],
		},
		{
			heading: 'An example of thinking',
			paragraphs: [
				'A training position: White has a knight on a3, and the central square d5 could become an outpost. The route a3–c4–e3–d5 looks attractive, but check it square by square. A black pawn already on b5 attacks c4, so the knight may be captured there. A black pawn able to reach c6 or e6 could challenge d5. Also check whether a threat appears on the other flank during those three moves. If c4 is unsafe, the route a3–c2–e3–d5 takes just as long. It is an alternative only if every landing square is available and safe when the knight reaches it.',
				'A plan with a beautiful end square does not work if its route is tactically impossible. A strong maneuver is a real path, not just a desired square. Maneuvering is a steady fight for useful squares, not moving pieces around at random.',
			],
		},
	],
	exercise: {
		heading: 'Exercises',
		parts: [
			{
				heading: 'Exercise A: The worst piece',
				paragraphs: [
					'In three quiet positions from your own games, find your least active piece. Suggest one concrete route to improve it.',
				],
			},
			{
				heading: 'Exercise B: Two weaknesses',
				paragraphs: [
					'Find a position where your opponent has one obvious weakness. Explain how creating a second weakness could increase the pressure.',
				],
			},
			{
				heading: 'Exercise C: Time matters',
				paragraphs: [
					'Compare a short maneuver with a long one. Which keeps the initiative better? Does your opponent have a forcing reply that ruins the plan?',
				],
			},
		],
	},
	questions: [
		{
			question: 'Why can a piece on an active square matter more than a pawn advance?',
			answer: 'A pawn move cannot be taken back and may leave weak squares behind, while a better piece adds pressure and keeps your structure flexible. A pawn break often works only once the pieces are ready.',
		},
		{
			question: 'How is a good outpost for a knight different from a temporary square?',
			answer: 'A useful outpost is difficult for enemy pawns to challenge and ideally has friendly pawn support. That makes it stable against pawn attacks, but an enemy piece may still exchange the knight. Check its targets and the consequences of that exchange.',
		},
		{
			question: 'Why create a second weakness?',
			answer: 'A second target can stretch defenders, especially if your pieces can switch between targets faster than theirs. It creates chances to break through, not a guaranteed win. Both targets must be accessible.',
		},
		{
			question: 'What makes a maneuver too slow?',
			answer: 'Too many moves on the route, an opponent who uses that time for a break or an attack, or a target square they can take away before your piece arrives.',
		},
	],
	takeaway: 'Improve your pieces with a concrete goal, and count the time it takes.',
	practice: [
		{
			title: 'Positional games',
			detail: 'Follow one piece through a game: where did it start, where did it go, and why?',
			path: '/library/games',
			query: { category: 'positional' },
		},
		{
			title: 'Endgame games',
			detail: 'Watch how the winner brings the king and pieces closer and creates a second weakness.',
			path: '/library/games',
			query: { category: 'endgame' },
		},
		{
			title: 'Analysis board',
			detail: 'Pick your worst piece, choose a target square, and check the route square by square.',
			path: '/library/board',
		},
	],
	sources: [
		{
			title: 'Adrian Mikhalchishin',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Adrian_Mikhalchishin',
		},
	],
};
