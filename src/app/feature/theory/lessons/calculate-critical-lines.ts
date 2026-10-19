import { TheoryLessonBody } from '../theory.interface';

export const calculateCriticalLines: TheoryLessonBody = {
	slug: 'calculate-critical-lines',
	idea: [
		'There is a huge difference between “I think I’m winning” and “I checked it.” In a sharp position, you need to find the moment where everything depends on one precise move: an in-between check, a stalemate idea, a forced trade or the move order.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Decide whether the position is critical: can one move sharply change the evaluation?',
		'Find the forcing candidates for both sides.',
		'Don’t calculate to an arbitrary depth; calculate until you reach a clear, stable position.',
		'At every step, check your opponent’s checks, captures and counter-threats.',
		'At the end, look at your first move again: did you miss an alternative?',
		'After you answer, compare your evaluation with checked analysis.',
	],
	example: [
		'Start from the normal initial position and play 1.e4 e5 2.Bc4 Nc6 3.Qh5. Black considers 3...Nf6, developing with an attack on the queen. Before making that move, find White’s strongest reply.',
		'Answer: 3...Nf6?? 4.Qxf7#. The queen is protected by the bishop on c4. Black cannot capture it, block a check from the next square or move the king to safety. Attacking the queen did not force White to retreat.',
		'Compare 3...g6, which blocks the queen’s path to f7 and attacks it. After 4.Qf3, White threatens mate on f7 again, so Black must reassess. The point is to check the threat again after every reply.',
	],
	sections: [
		{
			heading: 'About the source',
			paragraphs: [
				'Dvoretsky’s Endgame Manual is about accuracy in endgame analysis. The practice suggested here is our own adaptation of the general principle, not a copy of the author’s exercises.',
			],
		},
	],
	mistakes: ['Looking only for moves that confirm your first idea.'],
	selfCheck: {
		question: 'Why is “I calculated five moves ahead” not always good calculation?',
		answer: 'Depth is useless if you missed a stronger reply by your opponent on the second move.',
	},
	practice: [
		{
			title: 'Look Ahead',
			detail: 'Calculate to a clear position, with your opponent’s best reply at every step.',
			path: '/practice/look-ahead',
		},
		{
			title: 'Is it safe?',
			detail: 'Check the opponent’s best reply before you capture or check.',
			path: '/practice/is-it-safe',
		},
		{
			title: 'See it in your head',
			detail: 'Play a few moves in your head, then answer a question about the position.',
			path: '/practice/see-it',
		},
		{
			title: 'Critical decisions',
			detail: 'Positions where one move changes the evaluation. Check the forcing moves for both sides.',
			path: '/practice/good-moves',
			query: { category: 'criticalDecision' },
		},
	],
	sources: [
		{
			title: 'Dvoretsky’s Endgame Manual',
			author: 'Mark Dvoretsky',
			site: 'New In Chess',
			url: 'https://www.newinchess.com/dvoretsky-s-endgame-manual-6270',
		},
	],
};
