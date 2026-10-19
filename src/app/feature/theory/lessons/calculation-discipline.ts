import { TheoryLessonBody } from '../theory.interface';

export const calculationDiscipline: TheoryLessonBody = {
	slug: 'calculation-discipline',
	sections: [
		{
			heading: 'Why “I saw everything” is not a reliable answer',
			paragraphs: [
				'A player often says: “I calculated this line.” Then the analysis shows they only pictured their own strong moves. They missed the opponent’s best reply, and by the end of the line some pieces stood on the wrong squares in their head.',
				'Calculation is not quickly imagining a combination. It is a disciplined check of a concrete sequence of moves.',
			],
		},
		{
			heading: 'Separate choosing candidates from calculating',
			paragraphs: [
				'Before you go deep into a line, make a short list of promising moves. Otherwise you can spend a lot of time on the first attractive idea and forget a better alternative.',
				'A rough order:',
			],
			points: [
				'Check your opponent’s immediate threat.',
				'Note the checks, captures and other forcing moves for both sides.',
				'Choose 2–3 candidates, if the position gives you a choice.',
				'For each one, look for your opponent’s best reply.',
				'Compare the final positions.',
			],
			ordered: true,
			after: [
				'In a forced situation there may be only one legal or acceptable move. Don’t invent alternatives for the sake of it.',
			],
		},
		{
			heading: 'Keep the board in your head accurate',
			paragraphs: ['When you calculate without moving the pieces, check with special care:'],
			points: [
				'Which pieces have already been traded.',
				'Which lines the pawns have opened or closed.',
				'Which pieces are left unprotected after each capture.',
				'Which squares a piece that has moved no longer guards.',
				'In-between moves, especially checks.',
				'Whose move it is in the final position.',
			],
			after: [
				'If you lose the thread, go back to the last position you remember for certain. A short line calculated correctly is worth more than a long one with a mistake in it.',
			],
		},
		{
			heading: 'A tree of lines without chaos',
			paragraphs: [
				'Don’t try to calculate ten random branches at once.',
				'For each candidate, pick your opponent’s most important replies: checks, captures, strong defensive moves. If one reply refutes your idea and you have no adequate answer, you can drop the candidate. In a worse position, keep it for comparison if the alternatives may be worse still. If the line stays promising, check it deeper.',
				'Aim to reach a stable position you can evaluate, after checking forcing replies and important quiet defenses. Sometimes your clock or the complexity prevents that. Mark the line as uncertain and compare its risks with the alternatives rather than pretending it is settled.',
				'The most dangerous mistake is to stop the moment your own move looks good, before you have checked your opponent’s reply.',
			],
		},
		{
			heading: 'Evaluate the final position',
			paragraphs: ['Calculation does not end with “I win a pawn.” Find out:'],
			points: [
				'Is my king in danger?',
				'Has one of my pieces been left defenseless?',
				'Who has the initiative?',
				'Can the extra material actually be converted?',
				'Does my opponent have counterplay: passed pawns or a perpetual check?',
			],
			after: ['Only then compare the candidates.'],
		},
		{
			heading: 'A sample training routine',
			paragraphs: ['Take a complex position from a real game that you have not analyzed yet.'],
			points: [
				'2 minutes: write down the candidates.',
				'5 minutes: calculate the most important branches without moving the pieces.',
				'2 minutes: write down your final evaluations and choose a move.',
				'After you decide: check the lines on a board and with an engine.',
			],
			after: ['The times are an example, not a universal norm. For harder positions, give yourself more.'],
		},
	],
	exercise: {
		heading: 'Exercises',
		parts: [
			{
				heading: 'Exercise A: Write the line down',
				paragraphs: [
					'Pick a position with two plausible candidates. Write down both branches move by move without moving the pieces. Then play them out on a board: check that every move is legal and that the final position is the one you pictured.',
				],
			},
			{
				heading: 'Exercise B: The strongest defense',
				paragraphs: [
					'Find a tactical position with a tempting check or sacrifice. Take your opponent’s side and look for the most accurate defense.',
				],
			},
			{
				heading: 'Exercise C: Evaluate the end',
				paragraphs: [
					'After each branch you write down, give a short verdict: White is better, roughly equal or Black is better. Then explain why.',
				],
			},
		],
	},
	questions: [
		{
			question: 'Why find candidates before you calculate deeply?',
			answer: 'Otherwise you can spend your time on the first attractive idea and never look at a better alternative. A short list keeps the calculation focused.',
		},
		{
			question: 'What does it mean to calculate “for your opponent”?',
			answer: 'At every step, look for your opponent’s best reply, as if they knew your idea and wanted to refute it, not the reply you hope for.',
		},
		{
			question: 'When can a line be considered checked well enough?',
			answer: 'When you have answered your opponent’s checks, captures and strong defenses and reached a quiet position you can evaluate, not just a moment where your own move looks good.',
		},
		{
			question: 'Why does winning a pawn not always mean a better position?',
			answer: 'Your king may be in danger, a piece may be left defenseless, or your opponent may get the initiative, passed pawns or a perpetual check. Evaluate the whole final position, not just the material.',
		},
	],
	takeaway:
		'Good calculation means accuracy, checking the strongest defense and a reasoned evaluation of the final position.',
	practice: [
		{
			title: 'Look Ahead',
			detail: 'Build the tree with your opponent’s best reply at every step, then evaluate the final position.',
			path: '/practice/look-ahead',
		},
		{
			title: 'Is it safe?',
			detail: 'Before a capture or check, check the reply. If it fails, show the refutation.',
			path: '/practice/is-it-safe',
		},
		{
			title: 'See it in your head',
			detail: 'Calculate without moving the pieces, then answer about the new position.',
			path: '/practice/see-it',
		},
		{
			title: 'Tactics',
			detail: 'Before you move, look for the strongest defense against your idea.',
			path: '/practice/tactics',
		},
	],
	sources: [
		{
			title: 'Mykhaylo Oleksiyenko',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Mykhaylo_Oleksiyenko',
		},
	],
};
