import { TheoryLessonBody } from '../theory.interface';

export const pawnStructures: TheoryLessonBody = {
	slug: 'pawn-structures',
	sections: [
		{
			heading: 'Why do pawns decide the plan?',
			paragraphs: [
				'Pawns only move forward. A pawn move can never be taken back, so each one can change the character of the position for a long time.',
				'The placement of both sides’ pawns is called the pawn structure. It shows where your pieces have good squares, which files may open and on which flank you should play.',
			],
		},
		{
			heading: 'The main types of structure',
			parts: [
				{
					heading: 'Isolated pawn',
					paragraphs: [
						'An isolated pawn has no friendly pawns on the files next to it. The most important case is an isolated pawn in the center, for example on d4.',
					],
					parts: [
						{
							heading: 'Advantages',
							points: [
								'It gives your pieces space and activity, for example the e5 and c5 squares for the knights.',
								'It often makes a central break possible with the advance d5.',
							],
						},
						{
							heading: 'Disadvantages',
							points: [
								'Other pawns cannot defend it.',
								'The square in front of it (d5) can be a strong blockading square. With no white c- or e-pawn, White cannot challenge a piece there with an adjacent pawn. Black must still check piece attacks, exchanges and tactical threats.',
								'In simplified positions it can become a weakness.',
							],
							after: ['The right plan depends on how active the pieces are and whether the pawn can advance safely.'],
						},
					],
				},
				{
					heading: 'Doubled pawns',
					paragraphs: [
						'Doubled pawns are two pawns of the same color on one file.',
						'They are sometimes weak: they cannot protect each other, and the front pawn blocks the rear one. But they can also open a file for the rooks or strengthen control of important squares.',
						'For example, if White’s c-pawn is still on c2, bxc3 leaves doubled pawns on c2 and c3. The c3-pawn supports d4. If White has no other b-pawn and Black still has one, the b-file becomes half-open for White’s rook.',
						'Don’t treat doubled pawns as bad automatically.',
					],
				},
				{
					heading: 'Backward pawn',
					paragraphs: [
						'A backward pawn lags behind neighboring friendly pawns and cannot safely advance to join them. It often lacks pawn support, and the square in front of it is controlled by the opponent. Being behind another pawn alone does not make a pawn weak.',
						'A typical example is Black’s d6-pawn in the Sicilian after ...e5: the c-pawn is gone, the e-pawn has advanced, and White’s e4-pawn controls d5.',
						'Such a pawn can become a long-term target, especially on a half-open file. The square in front of it becomes a good post for an enemy piece.',
					],
				},
				{
					heading: 'Passed pawn',
					paragraphs: [
						'A passed pawn has no enemy pawns in front of it, either on its own file or on the files next to it. For now only pieces can stop it, by blockading or capturing it, though later pawn captures can change the structure.',
						'A passed pawn often becomes more dangerous as it approaches promotion, especially in an endgame. But support, blockade and king activity matter more than its rank alone. An unsupported advance may simply lose it.',
					],
				},
				{
					heading: 'Pawn chain',
					paragraphs: [
						'Pawns that protect each other along a diagonal form a chain. For example, after 1.e4 e6 2.d4 d5 3.e5 in the French Defense, White’s pawns on d4 and e5 form a chain.',
						'The base of the chain is its rear pawn, which no other pawn protects. It is often the key target: weaken the base, and the whole chain suffers. In the French Defense, Black attacks the base d4 with ...c5.',
					],
				},
			],
		},
		{
			heading: 'How to build a plan from the structure',
			paragraphs: ['First, answer these questions:'],
			points: [
				'Where are the weak pawns?',
				'Which squares make good posts for knights because no enemy pawn can attack them?',
				'Which files may open?',
				'Who has more space, and on which flank?',
				'Which pawn breaks are possible?',
			],
			ordered: true,
			after: ['Then choose a plan that fits the position.'],
		},
		{
			heading: 'An example of a strategic decision',
			paragraphs: [
				'Imagine a position where White has an isolated pawn on d4, active pieces and a chance to prepare the advance d5.',
				'Black wants to blockade the pawn, ideally with a knight on d5, trade pieces and slowly build up pressure on d4.',
				'White usually wants to preserve active attacking pieces and prepare d5. A trade that removes a blockader or wins time can still help White. Black wants to reduce White’s activity and target d4, but should avoid exchanges that release the pawn or give White a favorable endgame.',
				'One structure, two different strategic plans.',
			],
		},
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: ['Take three of your own games and find in each one:'],
		points: ['The weakest pawn.', 'The best square for a knight.', 'A possible pawn break.', 'One plan for each side.'],
		after: ['Then compare your conclusions with an engine analysis of the game.'],
	},
	takeaway: 'The pawn structure points the way, but the final plan also depends on piece activity and concrete tactics.',
	practice: [
		{
			title: 'Spot the feature',
			detail: 'Tap the isolated, doubled, backward and passed pawns, the outposts and the half-open files.',
			path: '/practice/spot-the-feature',
		},
		{
			title: 'Games with an isolated queen pawn',
			detail: 'Replay games with an isolated d-pawn and see how both sides play around it.',
			path: '/library/games',
			query: { structure: 'iqp' },
		},
		{
			title: 'Positional games',
			detail: 'See how strong players build their plans around the pawns.',
			path: '/library/games',
			query: { category: 'positional' },
		},
	],
};
