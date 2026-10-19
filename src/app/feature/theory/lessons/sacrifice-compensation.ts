import { TheoryLessonBody } from '../theory.interface';

export const sacrificeCompensation: TheoryLessonBody = {
	slug: 'sacrifice-compensation',
	sections: [
		{
			heading: 'Material is not the only value',
			paragraphs: [
				'The queen, rooks, bishops, knights and pawns have rough values, but chess is not just counting points. A sacrifice can be justified if you get something real in return: a mating attack, time, strong passed pawns, active pieces.',
				'Still, the words “initiative” and “pressure” do not make every sacrifice correct. Giving up material without a convincing follow-up is usually dangerous.',
			],
		},
		{
			heading: 'Tell three kinds of sacrifice apart',
			paragraphs: ['Use these descriptions to explain your idea. Tactical and positional describe the compensation; speculative describes your uncertainty about it. They can overlap.'],
			parts: [
				{
					heading: 'Tactical sacrifice',
					paragraphs: [
						'The justification is a concrete forcing sequence: checkmate, a material gain, a favorable resulting position or a forced draw when you need one. Here exact calculation decides. Recovering the sacrificed material alone does not prove the resulting position is good.',
					],
				},
				{
					heading: 'Positional sacrifice',
					paragraphs: [
						'You give up material for long-term advantages, such as a strong outpost, active pieces or a broken pawn shield around the enemy king. There may be no forcing sequence that recovers the material or settles the result. You still need concrete calculation, then an assessment of what lasts and how the opponent can defend.',
					],
				},
				{
					heading: 'Speculative sacrifice',
					paragraphs: [
						'You give up material without being certain that the compensation is sufficient. The sacrifice may turn out to be sound or unsound. Practical difficulty for the defender is a factor, but hoping for a mistake is not evidence that the sacrifice works.',
					],
				},
			],
		},
		{
			heading: 'Four signs of real compensation',
			points: [
				'Activity: do your pieces get more useful squares and gain tempi after the sacrifice?',
				'The enemy king’s safety: can you calculate concrete, dangerous threats, rather than just point at an exposed king?',
				'Time: does your opponent have to answer your threats for several moves, with no chance to finish development?',
				'Durability: does the compensation remain if your opponent plays the strongest defensive moves, offers trades or gives material back?',
			],
			after: [
				'The last question matters most. If one calm defensive move leaves you without the material and without an attack, the sacrifice is probably a mistake.',
			],
		},
		{
			heading: 'How to test a sacrifice',
			points: [
				'Name the concrete goal of the sacrifice: mate, gaining time, creating a passed pawn, taking an open file.',
				'Look not only at accepting the sacrifice but also at declining it.',
				'After it is accepted, calculate the strongest defensive replies.',
				'Find the position where the forcing moves run out. Is the compensation enough there?',
				'Check whether a simpler move without a sacrifice keeps your advantage.',
			],
			ordered: true,
		},
		{
			heading: 'An example of thinking',
			paragraphs: [
				'A training situation: you can give up a pawn to open a file toward the enemy king, but your opponent can bring one piece back to defend.',
				'Weak reasoning: “Open files are always strong.”',
				'Better reasoning: “After the pawn is taken, my rook gets the g-file and my bishop controls an important diagonal. But can my opponent cover the entry square in time? What happens if the knight goes back to the king?”',
				'Judge the concrete speed of the attack against the speed of the defense: count how many moves each side needs. The beauty of the sacrifice is not an argument.',
			],
		},
	],
	exercise: {
		heading: 'Exercises',
		parts: [
			{
				heading: 'Exercise A: Material against initiative',
				paragraphs: [
					'Find a position in your own games where you could give up a pawn. Write down two lines: the sacrifice accepted and the sacrifice declined. In each, name the compensation that is left.',
				],
			},
			{
				heading: 'Exercise B: The best defense',
				paragraphs: [
					'Before you analyze any sacrifice, take your opponent’s side. Name three defensive ideas yourself, then check them with an engine.',
				],
			},
			{
				heading: 'Exercise C: Is the sacrifice needed?',
				paragraphs: [
					'Compare the sacrifice with a quiet alternative. Calculate the forcing replies before judging either option. Stop at a position you can reasonably evaluate, not after a fixed number of moves. If the position remains unclear, name the uncertainty instead of claiming the sacrifice works.',
				],
			},
		],
	},
	questions: [
		{
			question: 'How is a tactical sacrifice different from a positional one?',
			answer: 'A tactical sacrifice has a concrete forcing justification, which may also be a forced draw. A positional sacrifice relies on lasting compensation without a forcing sequence that settles the outcome. Both require calculation; positional sacrifices also require an evaluation of the remaining imbalance.',
		},
		{
			question: 'Why should you check your opponent declining the material?',
			answer: 'Your opponent does not have to accept. Declining may avoid the attack, but may also concede space or time. Evaluate both choices. A sound offer need not win when declined; it must still leave an acceptable result for the goal of the sacrifice.',
		},
		{
			question: 'Which sign shows that the compensation may not last?',
			answer: 'One calm defensive move, a trade of your attacking pieces or giving the material back leaves you with neither the material nor an attack.',
		},
		{
			question: 'Can you call a sacrifice objectively correct just because your opponent did not refute it?',
			answer: 'No. Your opponent may simply have missed the defense. A sacrifice is correct only if it holds against the strongest defense.',
		},
	],
	takeaway: 'A good sacrifice has a concrete justification that holds up against the strongest defense.',
	practice: [
		{
			title: 'Sound sacrifice?',
			detail: 'Sound, unsound or unclear? Judge the compensation, then play the critical reply.',
			path: '/practice/sound-sacrifice',
		},
		{
			title: 'Games with sacrifices',
			detail: 'Replay games with a sacrifice the engine called sound or unclear.',
			path: '/library/games',
			query: { sacrifice: 'sound,unclear' },
		},
		{
			title: 'Who is better?',
			detail: 'Weigh material against activity in quiet positions.',
			path: '/practice/who-is-better',
		},
		{
			title: 'Look Ahead',
			detail: 'Calculate to the point where the forcing moves run out, then judge the position there.',
			path: '/practice/look-ahead',
		},
	],
	sources: [
		{
			title: 'Perfect Your Chess',
			author: 'Andrei Volokitin and Vladimir Grabinsky',
			site: 'Google Books (Gambit, 2007)',
			url: 'https://books.google.com/books/about/Perfect_Your_Chess.html?id=X9eIGAAACAAJ',
		},
	],
};
