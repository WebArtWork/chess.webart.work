import { TheoryLesson } from './theory.interface';

/** Lesson texts, by slug. Only the lesson page imports this, so the text stays out of the main bundle. */
export const THEORY_LESSONS: TheoryLesson[] = [
	{
		slug: 'kotov',
		title: 'Candidate moves and the tree of analysis',
		author: 'Alexander Kotov',
		sections: [
			{
				heading: 'The idea',
				paragraphs: [
					'Soviet grandmaster Alexander Kotov described this method in Think Like a Grandmaster (1971). He noticed that many players calculate in a muddle: they look at one move, jump to another, come back to the first and in the end play something they never checked.',
					'His answer is a fixed order of work. First list the moves worth considering, the candidate moves. Then calculate each one, once and in turn. Only then compare them and choose.',
				],
			},
			{
				heading: 'Step 1: list your candidate moves',
				paragraphs: [
					'Before calculating anything, name every move worth a closer look. Usually there are two to four. Naming them all first stops the first idea you see from taking over.',
					'A quick way to find them is to look at forcing moves first, then at the moves your plan calls for.',
				],
				points: [
					'Checks, captures and threats, for you and for your opponent.',
					'Moves that meet your opponent’s threat.',
					'Moves that improve your worst piece or follow your plan.',
				],
			},
			{
				heading: 'Step 2: build the tree of analysis',
				paragraphs: [
					'Each candidate is the start of a branch. For each one, find your opponent’s best reply, then your best answer to it, and so on until the position is clear enough to judge. Where the opponent has two strong replies, the branch splits.',
					'Kotov’s rule is to go through each branch once. Finish one candidate, give its final position a verdict, then move on to the next. Jumping back and forth wastes time and lets you forget what you already found.',
				],
			},
			{
				heading: 'Step 3: compare and choose',
				paragraphs: [
					'Put the verdicts next to each other and play the move with the best one. If two moves are about equal, choose the simpler one, the one with fewer ways to go wrong.',
					'Before you touch the piece, look once more at your opponent’s checks, captures and threats after your move. Most blunders are a reply nobody looked at.',
				],
			},
			{
				heading: 'Mistakes to avoid',
				paragraphs: [],
				points: [
					'Stopping at the first good move. A good move is not always the best one; check the other candidates first.',
					'Forgetting the opponent. Every branch needs the opponent’s best reply, not the one you hope for.',
					'Calculating one line for too long, then playing a move you never checked because the clock is low. Kotov described this trap himself.',
					'Going too deep. Stop a branch as soon as you can judge it.',
				],
			},
			{
				heading: 'How to use it in your games',
				paragraphs: [
					'Strong players do not draw a full tree for every move. Use the whole method in critical positions: when there is a capture or a check in the air, when the position changes character, or when you are about to commit to a plan. In quiet positions, a short list of candidates and a blunder check is enough.',
					'The habit grows with practice. The modes below train each step.',
				],
			},
		],
		practice: [
			{
				title: 'Good moves',
				detail: 'Step 1: find every good move in a position before you commit.',
				path: '/practice/good-moves',
			},
			{
				title: 'Look Ahead',
				detail: 'Step 2: build the tree three moves deep, with the best replies.',
				path: '/practice/look-ahead',
			},
			{
				title: 'Analysis board',
				detail: 'Step 3: pick your candidates in any position, then compare them with the engine.',
				path: '/library/board',
			},
		],
	},
];
