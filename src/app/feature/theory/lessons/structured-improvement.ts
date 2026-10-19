import { TheoryLessonBody } from '../theory.interface';

export const structuredImprovement: TheoryLessonBody = {
	slug: 'structured-improvement',
	idea: [
		'Reading a rule does not mean you have learned to use it. A good cycle: study the topic → see an example → practice → check yourself → go back to your mistakes.',
	],
	stepsHeading: 'How to train',
	steps: [
		'Write down the goal of one session: for example, finding the weakest piece.',
		'Study one clear idea, without mixing it with five other topics.',
		'Work through a demonstration example of your own.',
		'Solve 5 puzzles without hints and without looking at the engine’s evaluation.',
		'For each mistake, write down the cause: missed a check, mixed up the move order, overlooked a defense.',
		'A few days later, retry the missed positions and solve new ones with the same ideas. Include a few mixed review positions to check that you recognize the theme without a hint.',
	],
	example: [
		'In a set of five puzzles, you solve three correctly. In the other two, you miss an in-between check. Review why those checks work, then practice a short set of in-between moves. Later, test the skill in mixed puzzles where the theme is hidden.',
	],
	mistakes: ['Counting how many lessons you have finished instead of how well you have learned them.'],
	selfCheck: {
		question: 'What helps your progress more: 30 puzzles with no review or 10 puzzles with your mistakes explained?',
		answer: 'Often the second, because you find out what exactly keeps you from finding the solution.',
	},
	practice: [
		{
			title: 'Review',
			detail: 'Repeat what you missed on a schedule: after 1, 3 and 7 days.',
			path: '/practice/review',
		},
		{
			title: 'Daily puzzle',
			detail: 'One puzzle a day, without hints. If you miss it, write down why.',
			path: '/practice/daily',
		},
		{
			title: 'Tactics',
			detail: 'Solve a short set without hints, then go back over every mistake.',
			path: '/practice/tactics',
		},
		{
			title: 'Weekly plan',
			detail: 'Plan your week: one goal per session, and time to review your weak spots.',
			path: '/',
		},
	],
	sources: [
		{
			title: 'Build Up Your Chess 1: The Fundamentals',
			author: 'Artur Yusupov',
			site: 'Quality Chess (sample PDF)',
			url: 'https://qualitychess.co.uk/ebooks/Build-up-Your-Chess-1-exceprt.pdf',
		},
	],
};
