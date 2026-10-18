import { TheoryLessonBody } from '../theory.interface';

export const strategicPlans: TheoryLessonBody = {
	slug: 'strategic-plans',
	sections: [
		{
			heading: 'Why is a plan hard to find?',
			paragraphs: [
				'A puzzle often tells you “mate in two”, so you already know what to look for. In a game nobody tells you whether a tactic exists. Sometimes the best move is a quiet knight reroute or the preparation of a pawn break.',
				'Strategy starts with the question “What in this position matters for a long time?”, not “What can I attack right now?”. Weak squares, open files, bad bishops and strong knights point the way.',
			],
		},
		{
			heading: 'Five features to look at',
			parts: [
				{
					heading: 'Weak squares',
					paragraphs: [
						'A strategically weak square is one the defending side cannot easily control with pawns and the opponent may be able to use. For example, with Black’s c- and e-pawns on c5 and e5, neither can attack d5. That makes d5 a potential white outpost. Still check whether Black has another pawn on c6 or e6, can change the structure through captures, or can exchange a piece occupying d5. A square without pawn protection is not automatically usable or decisive.',
						'A weak square only matters if one of your pieces can use it.',
					],
				},
				{
					heading: 'Piece activity',
					paragraphs: [
						'Compare not only material but how many useful squares each piece controls. A bishop shut in by its own pawns can be worth less than a knight on a central outpost.',
					],
				},
				{
					heading: 'Pawn breaks',
					paragraphs: [
						'A pawn advance can open a file or change the structure so that passive pieces come to life. Don’t push a pawn just to do something: first ask which line or square it will open, for you and for your opponent.',
					],
				},
				{
					heading: 'Where the kings are',
					paragraphs: [
						'A plan against a king safely castled behind intact pawns is different from a plan against a king still stuck in the center.',
					],
				},
				{
					heading: 'Possible trades',
					paragraphs: [
						'Judge a trade by what the pieces do, not by their nominal value. A bishop and a knight are both worth about three pawns, but if you give your active bishop for your opponent’s passive knight, you can lose important pressure.',
					],
				},
			],
		},
		{
			heading: 'How to choose a plan',
			points: [
				'Safety: is there a check, a capture or a tactical threat for either side? If so, calculate it first.',
				'Read the structure: which pawns are backward, isolated or weak, and where is a pawn break possible?',
				'Find your worst piece: which piece has no useful job?',
				'Form two plans, for example taking an open file or preparing a pawn break.',
				'Choose the plan your opponent will find hardest to stop: check their strongest reply.',
				'Find the first concrete move. A plan is made of real moves, not of the words “improve the position”.',
			],
			ordered: true,
		},
		{
			heading: 'An example of thinking',
			paragraphs: [
				'Imagine a quiet position. White has two rooks, one of them on the half-open c-file. Black has a weak pawn on c6. There is no immediate combination.',
				'Poor reasoning: “I must attack the pawn at any cost.”',
				'Better reasoning: “Can I double my rooks on the c-file? How many times is c6 defended, and can I attack it once more? Will my maneuver give Black’s knight a strong square?” If direct pressure gives nothing, first improve your worst-placed piece.',
				'A plan is worth something when you can explain how it improves your position and what your opponent will do in reply.',
			],
		},
	],
	exercise: {
		heading: 'Exercises',
		parts: [
			{
				heading: 'Exercise A: Two plans',
				paragraphs: [
					'Take a quiet position from one of your own games. Write down two realistic plans, the advantage of each and your opponent’s best reply to each.',
				],
			},
			{
				heading: 'Exercise B: Trade or not?',
				paragraphs: [
					'Find a position where you can trade a bishop for a knight. Explain whose piece is more active, which squares the trade will weaken and what happens to the pawns.',
				],
			},
			{
				heading: 'Exercise C: A weakness and how to use it',
				paragraphs: [
					'Find a weak pawn or square. Name two or three possible moves that increase the pressure on it, then check them on the analysis board.',
				],
			},
		],
	},
	questions: [
		{
			question: 'Why, in a quiet position, is it often more important to assess weak squares than to look for an immediate attack?',
			answer: 'A sound attack needs useful lines, targets and enough active pieces. Weak squares and pawns can suggest how to build those conditions even when no immediate combination exists.',
		},
		{
			question: 'Why is not every trade that is even in material a good one?',
			answer: 'Pieces of equal value can do very different jobs. Trading your active piece for a passive one can cost you pressure the material count does not show.',
		},
		{
			question: 'What does “a plan must have a first concrete move” mean?',
			answer: 'You should be able to name the move that starts the plan now. “Improve the position” without a move is a wish, not a plan.',
		},
		{
			question: 'When should a strategic decision wait for tactical calculation?',
			answer: 'Whenever either side has a check, a capture or a direct threat. Calculate it first: a good plan is worth nothing if you lose material on the next move.',
		},
	],
	takeaway: 'First understand the features of the position, then choose a goal, and only then look for the move.',
	practice: [
		{
			title: 'Positional games',
			detail: 'Stop before a quiet move, name the weak squares and the worst piece, then guess the plan.',
			path: '/library/games',
			query: { category: 'positional' },
		},
		{
			title: 'Analysis board',
			detail: 'Set up a quiet position from your game, write two plans and check the first move of each with the engine.',
			path: '/library/board',
		},
	],
	sources: [
		{
			title: '400 Chess Strategy Puzzles',
			author: 'Martyn Kravtsiv',
			site: 'Google Books (Gambit, 2024)',
			url: 'https://books.google.com/books/about/400_Chess_Strategy_Puzzles.html?id=zNFW0AEACAAJ',
		},
	],
};
