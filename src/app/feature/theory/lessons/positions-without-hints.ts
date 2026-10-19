import { TheoryLessonBody } from '../theory.interface';

export const positionsWithoutHints: TheoryLessonBody = {
	slug: 'positions-without-hints',
	sections: [
		{
			heading: 'The trap of themed puzzles',
			paragraphs: [
				'If the diagram says “find the queen sacrifice”, half the work is done for you: your brain starts looking for sacrifices. A real game may have no combination at all. You have to decide for yourself whether to attack, defend, simplify or play positionally.',
				'That is why it pays to solve positions without a theme: no “tactics”, “endgame” or “mate” label. The goal is to make training closer to making decisions at the board.',
			],
		},
		{
			heading: 'The first question: what has changed?',
			paragraphs: ['Your opponent has just moved. Before you suggest your own move, find out:'],
			points: [
				'What did the move start to attack or defend?',
				'Which lines did it open or close?',
				'Is anything left unprotected?',
				'Has a tactical resource appeared?',
				'Have the possible pawn breaks changed?',
			],
			after: ['Even a quiet move can change the plans of both sides.'],
		},
		{
			heading: 'Tell four kinds of decision apart',
			paragraphs: [
				'Tactical: find a concrete sequence of checks, captures and threats. One mistake in the line can lose material at once.',
				'Defensive: stop the most important threat, bring a piece back into play, trade your opponent’s attacking piece or create a counter-threat.',
				'Positional: find a better route for a piece, take an open file, improve the pawn structure.',
				'Technical: convert an advantage, often in the endgame: choose the right trade, activate the king, create a passed pawn.',
				'A position does not always need just one kind: a strong defensive move can create a tactical threat at the same time.',
			],
		},
		{
			heading: 'A working routine',
			points: [
				'Establish the material balance and how safe both kings are.',
				'Name your opponent’s most dangerous idea.',
				'Make a short list of candidates: one forcing move and one defensive or positional move, if they really exist.',
				'Calculate concrete lines for the most promising candidates.',
				'Evaluate the final positions: material, activity, kings, pawns.',
				'State your conclusion in your own words: “I play X because…; on Y I answer Z.”',
			],
			ordered: true,
		},
		{
			heading: 'An example of thinking',
			paragraphs: [
				'Your opponent has just offered a queen trade. You have a small space advantage but a backward pawn.',
				'Don’t decline the trade automatically because “attacking with queens is more fun”. And don’t accept it automatically because “the endgame is simpler”.',
				'First compare the two outcomes. Will your weak pawn be easier to attack after the trade? Will your king become more active? Who will control the open files? The decision comes from the concrete position.',
			],
		},
	],
	exercise: {
		heading: 'Exercises',
		parts: [
			{
				heading: 'Exercise A: No theme',
				paragraphs: [
					'Pick 5 positions at random from different stages of your own games. Don’t look at the analysis. For each one, first name the kind of decision it needs, then choose a move.',
				],
			},
			{
				heading: 'Exercise B: Defense or counterattack?',
				paragraphs: [
					'In a position where your opponent threatens to win material, compare a direct defense with an active counter-threat. Find your opponent’s strongest reply to both.',
				],
			},
			{
				heading: 'Exercise C: Explain your answer',
				paragraphs: [
					'Choose a move and explain it in no more than two sentences. Then check with an engine that you have not missed a tactical refutation.',
				],
			},
		],
	},
	questions: [
		{
			question: 'Why does the word “mate” above a puzzle help you solve it but make the training less like a game?',
			answer: 'It tells you what kind of solution to look for, so you skip the hardest step: deciding what the position needs. In a game nobody tells you whether a combination exists.',
		},
		{
			question: 'When can declining a queen trade be a mistake?',
			answer: 'When the endgame suits you: your king becomes active, you control the open files and your weak pawn is no easier to attack. Declining only to keep attacking chances ignores the position.',
		},
		{
			question: 'Why do positional problems sometimes have several acceptable moves?',
			answer: 'In a quiet position no forced line decides the game, and several moves can serve the same sound plan equally well. What matters is the idea and that the move allows no tactic.',
		},
		{
			question: 'What should you evaluate when a calculated line ends?',
			answer: 'The final position: material, piece activity, king safety and pawns. Stopping at the last capture without judging the position is not a finished calculation.',
		},
	],
	takeaway: 'In a real position, first understand the problem, and only then look for its solution.',
	practice: [
		{
			title: 'Who is better?',
			detail: 'No hint, no task: just judge the position, then see the engine’s view.',
			path: '/practice/who-is-better',
		},
		{
			title: 'Good moves',
			detail: 'Random positions with no theme shown: name the kind of decision before you choose a move.',
			path: '/practice/good-moves',
		},
		{
			title: 'Critical decisions',
			detail: 'Positions where one decision matters: attack, defend, improve or simplify?',
			path: '/practice/good-moves',
			query: { category: 'criticalDecision' },
		},
		{
			title: 'Daily puzzle',
			detail: 'Before you solve, decide whether the position needs an attack, a defense or a quiet move.',
			path: '/practice/daily',
		},
	],
	sources: [
		{
			title: 'Perfect Your Chess',
			author: 'Andrei Volokitin and Vladimir Grabinsky',
			site: 'Google Books (Gambit, 2007)',
			url: 'https://books.google.com/books/about/Perfect_Your_Chess.html?id=X9eIGAAACAAJ',
		},
		{
			title: 'Vladimir Grabinsky: biography',
			author: 'Vladimir Grabinsky',
			site: 'Coach’s website',
			url: 'https://www.grandcoach.com/en/coach/biography/',
		},
	],
};
