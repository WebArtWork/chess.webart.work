import { TheoryLessonBody } from '../theory.interface';

export const stopRepeatingMistakes: TheoryLessonBody = {
	slug: 'stop-repeating-mistakes',
	sections: [
		{
			heading: 'Why mistakes repeat',
			paragraphs: [
				'Many players have knowledge they don’t use at the board. They easily solve a simple double attack in a puzzle but miss the same motif in their own game.',
				'The cause is sometimes not a lack of knowledge but inconsistent thinking: the player starts carrying out their own plan without checking what their opponent’s last move changed.',
				'To make fewer mistakes, you need a simple habit that you can really repeat throughout the game.',
			],
		},
		{
			heading: 'The pre-move check',
			points: [
				'Look at your opponent’s threats. Is there a check, a capture, a mating idea or an attack on an unprotected piece?',
				'Find your own options. Do you have a check, a good capture, a threat or a useful positional move?',
				'Check the most dangerous reply. Imagine that your opponent knows your idea and wants to refute it.',
				'Look at unprotected pieces. After the move you have chosen, will a piece or pawn be left open to a favorable capture or tactic? An undefended piece is not necessarily hanging, and a defended piece may still be lost if its defender is pinned or overloaded. Remember that the piece you move stops guarding its old squares.',
				'Only then make the move.',
			],
			ordered: true,
			after: [
				'A short check that you actually do beats a long list you run through mechanically. It does not guarantee that you won’t make mistakes, but it helps you notice obvious threats earlier.',
			],
		},
		{
			heading: 'The most common causes of blunders',
			parts: [
				{
					heading: '“I only saw my own idea”',
					paragraphs: [
						'You wanted to attack the queen, but your opponent had an in-between check. Fix: before you move, find the strongest reply.',
					],
				},
				{
					heading: '“I forgot about an unprotected piece”',
					paragraphs: [
						'The piece stood unprotected for several moves and you got used to it. Fix: keep track of which of your pieces are unprotected, and look again every time a pawn move or a trade opens a diagonal or a file.',
					],
				},
				{
					heading: '“I rushed because of the clock”',
					paragraphs: [
						'In time trouble you can’t calculate everything. Fix: even when time is short, keep a minimum check: checks, captures, direct threats.',
					],
				},
				{
					heading: '“I stopped thinking after a mistake”',
					paragraphs: [
						'After losing a pawn, you want to win it back at once. Fix: evaluate the position afresh and play the best move available, not the most emotional one.',
					],
				},
			],
		},
		{
			heading: 'Analyze the cause, not just the result',
			paragraphs: [
				'After the game, the engine shows you the mistake. Your next question is: “Why exactly did I make it?”',
				'Write down one of the causes:',
			],
			points: [
				'I missed a threat.',
				'I calculated a line wrongly.',
				'I misjudged the position.',
				'I lost focus.',
				'I managed my time badly.',
			],
			after: [
				'The same drop in the engine’s evaluation can come from different causes, so the way to train will be different too.',
			],
		},
		{
			heading: 'Build a correction cycle',
			points: [
				'Play a few games with enough time to think.',
				'From each one, pick the single most instructive mistake.',
				'Find the cause that repeats.',
				'Do a short block of training on exactly that problem.',
				'Play new games and check whether mistakes of that kind have become rarer.',
			],
			ordered: true,
			after: [
				'Don’t judge success by results alone. You can lose to a strong opponent yet play more carefully and make fewer blunders.',
			],
		},
	],
	exercise: {
		heading: 'Exercises',
		parts: [
			{
				heading: 'Exercise A: Threat check',
				paragraphs: [
					'Take ten positions from your games or puzzles, each one right after your opponent’s move. In each, first write down your opponent’s most dangerous idea. Only then look for your move.',
				],
			},
			{
				heading: 'Exercise B: Think for your opponent',
				paragraphs: [
					'In your games, before you make the move you have chosen, identify the reply you think is strongest. After the game, compare it with the analysis.',
				],
			},
			{
				heading: 'Exercise C: A log of repeats',
				paragraphs: [
					'For one week, tag every blunder with one type: threat, calculation, evaluation, focus or time. At the end of the week, pick one topic for the next.',
				],
			},
		],
	},
	questions: [
		{
			question: 'How is missing a threat different from a mistake in a complex calculation?',
			answer: 'Missing an immediate threat may mean you skipped a safety check or did not recognize the pattern. A calculation mistake may involve a missed reply, a wrong move order or an inaccurate mental position. These can overlap. Train the actual cause, not just the label.',
		},
		{
			question: 'Why put yourself in your opponent’s place before you move?',
			answer: 'To find the reply that refutes your idea. If you look only at your own plan, it is easy to miss an in-between check or a counterattack.',
		},
		{
			question: 'Why doesn’t the engine’s evaluation alone explain the cause of a mistake?',
			answer: 'It shows how much the move cost, not why you played it. The same drop can come from a missed threat, a wrong calculation, a misjudgment, a lapse in focus or time trouble.',
		},
		{
			question: 'How can you tell whether your training has helped?',
			answer: 'Play new games and see whether mistakes of the type you trained have become rarer. The result of a single game is not the measure.',
		},
	],
	takeaway: 'Steady progress begins with checking your own decisions the same way, move after move.',
	practice: [
		{
			title: 'Tactics',
			detail: 'One try per puzzle: run the pre-move check before every answer.',
			path: '/practice/tactics',
		},
		{
			title: 'Daily puzzle',
			detail: 'One puzzle a day: first name your opponent’s most dangerous idea, then find your move.',
			path: '/practice/daily',
		},
		{
			title: 'My games',
			detail: 'For each recent game, write down the cause of the main blunder and look for the one that repeats.',
			path: '/library/saved',
		},
	],
	sources: [
		{
			title: 'GM Igor Smirnov: biography',
			author: 'Remote Chess Academy',
			site: 'Remote Chess Academy',
			url: 'https://chess-teacher.com/gm-smirnov/',
		},
	],
};
