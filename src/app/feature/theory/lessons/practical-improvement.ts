import { TheoryLessonBody } from '../theory.interface';

export const practicalImprovement: TheoryLessonBody = {
	slug: 'practical-improvement',
	sections: [
		{
			heading: 'Why do players stop improving?',
			paragraphs: [
				'Many players play regularly, solve puzzles and watch training videos, yet their rating stays about the same for a long time.',
				'The problem is often not too little training but training that does not target their own specific weaknesses. For example, a player may study new openings every day while most of their losses come from dropping pieces in the middlegame.',
				'To improve, find your own mistakes, understand why they happen and train the matching skill on purpose.',
			],
		},
		{
			heading: 'Four parts of effective training',
			parts: [
				{
					heading: 'Deliberate thinking',
					paragraphs: ['Don’t play the first attractive move on autopilot. Before you decide, ask yourself:'],
					points: [
						'What is my opponent’s main threat?',
						'Which pieces, mine and my opponent’s, are under attack?',
						'Which moves would improve my position?',
						'How will my opponent reply?',
					],
					ordered: true,
					after: ['The goal is a habit: think before every important decision.'],
				},
				{
					heading: 'Focused calculation',
					paragraphs: [
						'Calculation is not an attempt to foresee every possible move. First find the promising candidate moves, then check your opponent’s most important replies.',
						'For example, if you can sacrifice a bishop for an attack, don’t rush. Check whether your opponent has a defense after which the attack fades. Look hardest at the replies that break your original idea.',
					],
				},
				{
					heading: 'Practical understanding of the position',
					paragraphs: ['A good move does not have to create an immediate threat. Sometimes the best decision is:'],
					points: [
						'Moving a knight to a stronger square.',
						'Making your king safer.',
						'Protecting a weak pawn.',
						'Preparing a favorable trade.',
						'Preparing a pawn break.',
					],
					after: ['Learn to say which problem each of your moves solves.'],
				},
				{
					heading: 'Analyzing your own mistakes',
					paragraphs: [
						'After a game, don’t stop at the engine’s evaluation. Find the moment your plan stopped working and ask yourself three questions:',
					],
					points: [
						'What was I trying to achieve?',
						'Which of my opponent’s options did I miss?',
						'What knowledge or skill would have helped me avoid the mistake?',
					],
					ordered: true,
					after: ['Your answers should decide what you train next.'],
				},
			],
		},
		{
			heading: 'How to build your own training cycle',
			paragraphs: ['Organize your improvement in five stages:'],
			points: [
				'Play a few serious games. Choose a time control that gives you time to think, for example 15+10 or longer.',
				'Analyze the games on your own. Mark the positions where you hesitated, went wrong or did not understand the plan.',
				'Check your analysis with an engine. Find the chances you missed.',
				'Name the weakness that keeps coming back, for example shallow calculation, weak endgame technique or a poor grasp of pawn structures.',
				'Do targeted training on it. Then play new games and check whether mistakes of this type have become rarer.',
			],
			ordered: true,
			after: [
				'Keep stages 2 and 3 in that order. Your own analysis shows what you saw and thought at the board; seeing the engine’s line can color your memory of what you originally considered. Record your thoughts first so you can compare them honestly.',
			],
		},
		{
			heading: 'A practical example',
			paragraphs: [
				'Imagine you have lost three games in a row. In the first, you missed your opponent’s knight fork. In the second, you lost a rook to a pin. In the third, you overlooked a mate threat.',
				'At first glance these are different mistakes. But they may share one cause: you did not check your opponent’s threats carefully enough.',
				'In that case it is more useful to train a tactical check before every move (what checks, captures and threats will my opponent have?) than to add a new opening to your repertoire.',
			],
		},
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: ['Analyze your last five games. For each one, find:'],
		points: [
			'The most important mistake.',
			'Why it happened.',
			'The skill you were missing.',
			'An exercise that would help fix the problem.',
		],
		after: [
			'Then pick one skill to train over the next week. Don’t try to fix every weakness at once: work steadily on the most important one.',
		],
	},
	questions: [
		{
			question: 'Why does playing a lot of games not always bring progress?',
			answer: 'Without analysis, more games often just repeat the same mistakes. Progress comes when you find your specific weaknesses and train them on purpose.',
		},
		{
			question: 'Why should you analyze on your own before looking at the engine?',
			answer: 'Your own analysis shows what you saw and thought during the game. Seeing the engine’s line can color your memory. Writing down your original reasoning first makes the comparison more reliable.',
		},
		{
			question: 'What matters more in calculation: finding many moves or carefully checking the promising ones?',
			answer: 'Carefully checking the promising ones, especially the replies that break your idea. Calculation is not an attempt to foresee every possible move.',
		},
		{
			question: 'How do you know which topic to train next?',
			answer: 'Look for the weakness that keeps coming back across several of your games. The three questions you ask after each game point to it.',
		},
		{
			question: 'Why look for the causes of repeated mistakes?',
			answer: 'Mistakes that look different, like a missed fork, a pin and a mate threat, can share one cause. Training against that cause helps with all of them at once.',
		},
	],
	takeaway:
		'Chess progress begins when every game becomes a source of information and every training session targets one specific weakness.',
	practice: [
		{
			title: 'Analysis board',
			detail: 'Analyze your own game first, then turn on the engine and compare.',
			path: '/library/board',
		},
		{
			title: 'My games',
			detail: 'Go through your last five games and look for the mistake that keeps coming back.',
			path: '/library/saved',
		},
		{
			title: 'Tactics',
			detail: 'If the weakness you found is tactical, train it here with a threat check before every move.',
			path: '/practice/tactics',
		},
	],
	sources: [
		{
			title: 'Journey to Grandmaster',
			author: 'IM Yevhenii Yelisieiev',
			site: 'Official website',
			url: 'https://www.journeytograndmaster.com/',
		},
	],
};
