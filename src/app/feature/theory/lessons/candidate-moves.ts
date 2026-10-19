import { TheoryLessonBody } from '../theory.interface';

export const candidateMoves: TheoryLessonBody = {
	slug: 'candidate-moves',
	idea: [
		'The first attractive idea is not always the strongest. Before you calculate far ahead, decide which moves are worth checking at all. Candidate moves are plausible options worth comparing. Two to four is a useful starting range in a difficult position, not a quota. Sometimes only one move works; sometimes you need to widen the search.',
		'Soviet grandmaster Alexander Kotov described this method in Think Like a Grandmaster (1971). He noticed that many players calculate in a muddle: they look at one move, jump to another, come back to the first and in the end play something they never checked.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Look at what your opponent threatens right now. Do you need to respond at once?',
		'Find the forcing ideas: checks, captures, direct threats.',
		'Add one quiet move that improves your worst piece or protects a weakness.',
		'Choose 2–4 moves to check; don’t calculate ten random moves.',
		'For each candidate, picture your opponent’s strongest reply.',
		'Compare the final positions: material, king safety, activity, weaknesses.',
	],
	example: [
		'You see a chance to attack your opponent’s queen. But first you notice that your back rank is weak. The candidates: attack the queen, protect the back rank, trade off your opponent’s active piece. Even without an exact line it is clear: you need to evaluate all three ideas, not play the attack at once.',
	],
	sections: [
		{
			heading: 'Kotov’s tree of analysis',
			paragraphs: [
				'Each candidate is the start of a branch. For each one, find your opponent’s best reply, then your best answer to it, and so on until the position is clear enough to judge. Where the opponent has two strong replies, the branch splits.',
				'Use the tree to organize your work: examine a candidate, summarize the result, then compare another. Avoid restarting the same line without learning anything. But do return to a branch if you discover a missed defense or a new tactical idea. Order helps, and so does revising a line when you find something new.',
			],
		},
		{
			heading: 'How to use it in your games',
			paragraphs: [
				'Strong players do not draw a full tree for every move. Use the whole method in critical positions: when there is a capture or a check in the air, when the position changes character, or when you are about to commit to a plan. In quiet positions, a short list of candidates and a blunder check is enough.',
			],
		},
	],
	mistakes: [
		'Starting a new line every few seconds, in no order.',
		'Stopping at the first good move. A good move is not always the best one; check the other candidates first.',
		'Forgetting the opponent. Every branch needs the opponent’s best reply, not the one you hope for.',
		'Calculating one line for too long, then playing a move you never checked because the clock is low. Kotov described this trap himself.',
	],
	selfCheck: {
		question: 'You have found a beautiful sacrifice. What should you do before playing it?',
		answer: 'Add at least one alternative candidate and check the strongest defense against the sacrifice.',
	},
	practice: [
		{
			title: 'Good moves',
			detail: 'Find every good move in a position before you commit.',
			path: '/practice/good-moves',
		},
		{
			title: 'Look Ahead',
			detail: 'Build the tree three moves deep, with the best replies.',
			path: '/practice/look-ahead',
		},
		{
			title: 'See it in your head',
			detail: 'Keep the position in your head while you check each candidate.',
			path: '/practice/see-it',
		},
	],
	sources: [
		{
			title: 'Think Like a Grandmaster',
			author: 'Alexander Kotov',
			site: 'Batsford Books',
			url: 'https://www.batsfordbooks.com/book/think-like-a-grandmaster/',
		},
	],
};
