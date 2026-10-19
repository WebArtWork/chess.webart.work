import { TheoryLessonBody } from '../theory.interface';

export const analyzingYourGames: TheoryLessonBody = {
	slug: 'analyzing-your-games',
	sections: [
		{
			heading: 'Why is analyzing your own games so important?',
			paragraphs: [
				'Every game you play shows your strengths and weaknesses.',
				'Puzzles train specific skills. Your own games show how you use those skills when nobody tells you the theme and the clock is running.',
				'Just looking at the engine’s evaluation is not enough. You need to understand why you made the wrong decision and how to avoid a similar mistake.',
			],
		},
		{
			heading: 'Analyze without the engine first',
			paragraphs: ['After the game, go through it on your own. Find:'],
			points: [
				'The moment you left your opening knowledge.',
				'The first difficult strategic choice.',
				'The critical tactical positions.',
				'Positions you may have misjudged.',
				'Chances you missed.',
				'The moment the game turned, and why.',
			],
			after: ['Write down what you were thinking during the game, ideally right after it, while you still remember.'],
		},
		{
			heading: 'Identify the type of mistake',
			parts: [
				{
					heading: 'Tactical mistake',
					paragraphs: [
						'You missed a concrete blow, check, capture or threat.',
						'Training: puzzles on that tactical motif.',
					],
				},
				{
					heading: 'Calculation mistake',
					paragraphs: [
						'You found the right candidate but calculated the line wrongly.',
						'Training: calculation exercises where you check your opponent’s strongest replies to the end of the line.',
					],
				},
				{
					heading: 'Strategic mistake',
					paragraphs: [
						'You chose the wrong plan or misread the long-term features of the position.',
						'Training: studying pawn structures and typical plans.',
					],
				},
				{
					heading: 'Opening mistake',
					paragraphs: [
						'You placed your pieces badly or did not understand the main ideas of the opening.',
						'Training: studying typical positions, not just memorizing moves.',
					],
				},
				{
					heading: 'Endgame mistake',
					paragraphs: [
						'You did not know the standard method to defend or to convert an advantage.',
						'Training: endgame exercises on that theme.',
					],
				},
				{
					heading: 'Practical mistake',
					paragraphs: [
						'You knew the right idea, or would have seen the threat, but you rushed, used your time badly or skipped the check.',
						'Training: training games with a fixed check before every move.',
					],
				},
			],
		},
		{
			heading: 'Using a chess engine',
			paragraphs: ['Turn on the engine (for example, Stockfish) only after your own analysis. The engine helps you:'],
			points: [
				'Find tactical chances you missed.',
				'Check the lines you calculated.',
				'Compare your candidate moves with its choice.',
				'Find the turning points of the game.',
			],
			after: ['But the engine’s evaluation does not explain why you made the mistake. Put the reason into your own words.'],
		},
		{
			heading: 'Training journal',
			paragraphs: ['For every game, write down:'],
			points: [
				'Date: when the game was played.',
				'Time control: rapid, blitz or classical.',
				'Color: White or Black.',
				'Opening: its name or the main pawn structure.',
				'Result: win, draw or loss.',
				'Main mistake: a short description.',
				'Cause: what led to the mistake.',
				'Lesson: what you learned.',
				'Next training: a specific topic.',
			],
			after: ['Over time, the journal will show which problems come up most often.'],
		},
		{
			heading: 'How to build a personal training plan',
			paragraphs: ['After analyzing 10–20 games, sort your mistakes by type. For example:'],
			points: [
				'Tactical mistakes: 40%.',
				'Wrong strategic plans: 25%.',
				'Endgame problems: 20%.',
				'Other mistakes: 15%.',
			],
			after: [
				'This is only an example, not a norm for every player.',
				'If most of your mistakes are tactical, give tactics a bigger share of your training. If you often let an advantage slip in the endgame, work more on endgames.',
				'Your training should match the problems you actually have.',
			],
		},
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: ['Pick one of your lost games.'],
		points: [
			'Go through it without the engine.',
			'Find three critical moments.',
			'Write down two or three candidate moves for each moment.',
			'Explain why you chose the move you played.',
			'Check those positions with the engine.',
			'Identify the most instructive mistake and its likely cause. A loss may have several causes, and the final error may not be the most useful one to study.',
			'Set one focused training task, then revisit a similar position a few days later.',
		],
		ordered: true,
	},
	takeaway:
		'What helps you most is not the number of games you play but the ability to turn your own mistakes into concrete training tasks.',
	practice: [
		{
			title: 'Review',
			detail: 'Let the engine find the mistakes in your saved games and bring them back as puzzles.',
			path: '/practice/review',
		},
		{
			title: 'Analysis board',
			detail: 'Paste your game as PGN, name your candidates, then compare them with the engine.',
			path: '/library/board',
		},
		{
			title: 'My games',
			detail: 'Pick a recent game, ideally a loss, and go through it without the engine first.',
			path: '/library/saved',
		},
	],
};
