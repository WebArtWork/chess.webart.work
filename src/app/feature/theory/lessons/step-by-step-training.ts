import { TheoryLessonBody } from '../theory.interface';

export const stepByStepTraining: TheoryLessonBody = {
	slug: 'step-by-step-training',
	idea: [
		'One motif is easier to learn in several similar but not identical positions than in a very complex combination right away. The difficulty should grow step by step: recognize → apply → combine with another motif.',
	],
	stepsHeading: 'How to train',
	steps: [
		'Choose one theme, for example the pin.',
		'Recognize the motif in a simple position.',
		'Solve 3–5 new puzzles with this motif in different parts of the board.',
		'Try a position where the motif is there but does not work.',
		'Move on to a puzzle where you have to combine the pin with a deflection.',
		'Come back to the theme next week.',
	],
	example: [
		'A white knight on e5 attacks c6, c4, d7, f7, g6, g4, d3 and f3. A black king on d7 and queen on f7 would both be attacked: that is a fork. Before calling it a material win, check whether Black can capture the knight or answer the check in another way that saves the queen. The next step is to find a preparatory move that creates a fork.',
		'The two targets of a knight fork always stand on squares of the same color, so they can never be next to each other on a rank or file.',
	],
	mistakes: ['Studying complex combinations before you can tell the basic motifs apart.'],
	selfCheck: {
		question: 'Why is a puzzle where a familiar combination does not work also useful?',
		answer: 'It teaches you to check the conditions for the motif instead of repeating a pattern automatically.',
	},
	practice: [
		{
			title: 'Mate in 1',
			detail: 'Start with the simplest step: spot the mate in one move.',
			path: '/practice/mate-in-one',
		},
		{
			title: 'Games with forks',
			detail: 'See the fork in real games, on different squares and with different pieces.',
			path: '/library/games',
			query: { theme: 'fork' },
		},
		{
			title: 'Games with pins',
			detail: 'One motif at a time: the pin in many different positions.',
			path: '/library/games',
			query: { theme: 'pin' },
		},
		{
			title: 'Tactics',
			detail: 'Then apply the motifs in mixed puzzles and check that they really work.',
			path: '/practice/tactics',
		},
	],
	sources: [
		{
			title: 'Chess Steps (Stappenmethode)',
			author: 'Rob Brunia and Cor van Wijgerden',
			site: 'Official website',
			url: 'https://www.stappenmethode.nl/en/index.php',
		},
	],
};
