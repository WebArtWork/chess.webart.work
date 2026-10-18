import { TheoryLessonBody } from '../theory.interface';

export const decisionMaking: TheoryLessonBody = {
	slug: 'decision-making',
	sections: [
		{
			heading: 'Why does a good player not always find the best move?',
			paragraphs: [
				'In a real game your time is limited. Even experienced players cannot calculate every possible line. So success depends not only on chess knowledge but also on choosing what to calculate.',
				'A strong practical player can tell critical positions from ordinary ones.',
			],
		},
		{
			heading: 'Spot the critical moments',
			paragraphs: ['A position usually needs extra attention when:'],
			points: [
				'A material sacrifice is possible.',
				'A series of forcing moves begins.',
				'You have to decide whether to trade queens.',
				'One of the kings comes under threat.',
				'The pawn structure can be changed for good.',
				'You have to choose between attack and defense.',
			],
			after: ['These are the moments to spend more of your time on.'],
		},
		{
			heading: 'A decision-making routine',
			paragraphs: [
				'In a critical moment, go through all six steps carefully. In a quiet position, shorten the routine: check what changed, identify a useful improvement and test the strongest reply. Keep the final blunder check. Quiet-looking positions can still contain tactics.',
			],
			parts: [
				{
					heading: 'Step 1. Check the threats',
					paragraphs: [
						'Before you look for your own ideas, work out what your opponent wants to do. Look especially closely at checks, captures and direct threats.',
					],
				},
				{
					heading: 'Step 2. Evaluate the position',
					paragraphs: ['Look at material, piece activity, king safety, the pawn structure and weak squares.'],
				},
				{
					heading: 'Step 3. Find candidate moves',
					paragraphs: ['Choose two or three promising moves. You do not need to analyze every legal move equally deeply.'],
				},
				{
					heading: 'Step 4. Calculate your opponent’s replies',
					paragraphs: ['For each candidate, look for your opponent’s strongest reply, not the one you hope for.'],
				},
				{
					heading: 'Step 5. Decide',
					paragraphs: [
						'Compare the positions at the end of each line: material, king safety, activity. Choose the move that leads to the best one.',
					],
				},
				{
					heading: 'Step 6. Check for tactics',
					paragraphs: [
						'Before you make the move, look once more at the position after it. What checks, captures and threats will your opponent have?',
					],
				},
			],
		},
		{
			heading: 'Time management',
			paragraphs: ['There is no set number of seconds per move. Three principles help:'],
			points: [
				'Don’t spend too long on an obvious decision.',
				'Keep time in reserve for the hard moments late in the game.',
				'In a critical position, spend your time calculating, not going over the same thought again and again.',
			],
		},
		{
			heading: 'When should you simplify?',
			paragraphs: [
				'The usual rule is that the side ahead in material should trade pieces. But not every trade helps that side. Before you trade, ask yourself:',
			],
			points: [
				'Will I keep my material advantage?',
				'Will my king be safer?',
				'Will my opponent get a dangerous passed pawn?',
				'Am I heading into a known draw or a position with no realistic way through? Opposite-colored bishop endings can offer strong drawing chances, even a pawn or two down, but are not automatically drawn. With queens or rooks still present, opposite-colored bishops can also strengthen an attack.',
				'Will my opponent’s pieces become more active?',
			],
			ordered: true,
		},
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: ['In your next training game, after each of your opponent’s moves, answer three questions in your head:'],
		points: [
			'What is their main threat?',
			'What are my two most promising moves?',
			'What is the strongest reply to each?',
		],
		after: [
			'After the game, find the three decisions you spent the most time on. Was the position really critical, and did the extra time change your choice?',
		],
	},
	takeaway:
		'A strong practical player does not try to calculate everything but correctly picks out the decisions that deserve the most attention.',
	practice: [
		{
			title: 'Critical decisions',
			detail: 'Positions where one decision matters: go through all six steps before you move.',
			path: '/practice/good-moves',
			query: { category: 'criticalDecision' },
		},
		{
			title: 'Look Ahead',
			detail: 'Calculate your opponent’s strongest replies, not the ones you hope for.',
			path: '/practice/look-ahead',
		},
		{
			title: 'Good moves',
			detail: 'Find two or three candidate moves before you commit to one.',
			path: '/practice/good-moves',
		},
	],
};
