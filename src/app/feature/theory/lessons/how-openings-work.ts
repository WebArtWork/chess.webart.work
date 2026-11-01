import { TheoryLessonBody } from '../theory.interface';

export const howOpeningsWork: TheoryLessonBody = {
	slug: 'how-openings-work',
	idea: [
		'An opening is the first 10 to 15 moves of a game, when both sides develop their pieces and fight for the center. Thousands of opening lines exist, but you only need a few, and a clear idea behind each one.',
		'This lesson explains how openings are named and grouped, what the code letters A to E mean and how to choose your first openings.',
	],
	stepsHeading: 'How to choose your first openings',
	steps: [
		'As White, choose one first move (1.e4 or 1.d4) and one or two setups.',
		'As Black, choose one reply to 1.e4 and one reply to 1.d4.',
		'Learn the plans and the typical pawn structures first. Moves come from plans.',
		'Play the opening in at least ten games before you change it.',
		'After each game, check where you left your preparation and what you learned.',
	],
	example: [
		'Say you like solid, clear positions. As White you choose 1.e4 and the Italian Game. As Black you answer 1.e4 with the Caro-Kann and 1.d4 with the Slav. That is only three openings, and a few weeks of games and study are enough to learn them well.',
	],
	sections: [
		{
			heading: 'How openings get their names',
			paragraphs: [
				'Most names come from places, people or pieces: the Italian Game, the Sicilian Defense, the Ruy Lopez (named after a Spanish priest) and the Queen’s Gambit. A few words in the name tell you what kind of opening it is:',
			],
			points: [
				'Game or Opening: a general name for the first moves, such as the Italian Game or the English Opening.',
				'Gambit: a player offers material, usually a pawn, for faster development or the initiative, such as the King’s Gambit.',
				'Defense: a name for Black’s reply to White’s first move, such as the Sicilian Defense or the Caro-Kann Defense. A defense can still be very active.',
				'System or Attack: a setup that you can play against many replies, such as the London System.',
			],
			after: [
				'A name like “Sicilian Defense: Najdorf Variation” gives the main opening and then the exact line.',
			],
		},
		{
			heading: 'The families, by first moves',
			points: [
				'1.e4 e5: open games. Both sides play in the center and the position opens quickly. Examples: the Italian Game, the Ruy Lopez, the Scotch Game and the King’s Gambit.',
				'1.e4 with another reply: semi-open games. Black avoids 1...e5. Examples: the Sicilian, French, Caro-Kann, Pirc and Scandinavian.',
				'1.d4 d5: closed or semi-closed games. Examples: the Queen’s Gambit, the Slav and the London System.',
				'1.d4 Nf6: Indian defenses. Black controls the center with pieces first. Examples: the King’s Indian and the Nimzo-Indian.',
				'1.c4, 1.Nf3 and others: flank openings, such as the English Opening.',
			],
		},
		{
			heading: 'The ECO codes',
			paragraphs: [
				'The Encyclopaedia of Chess Openings (ECO) gives every opening a code from A00 to E99, about 500 codes in all. You will see these codes in databases and on game sites. The first letter shows the family:',
			],
			points: [
				'A: flank and irregular openings, such as the English Opening, plus some 1.d4 lines.',
				'B: semi-open games, such as the Sicilian, Caro-Kann, Pirc and Scandinavian.',
				'C: open games after 1.e4 e5, and the French Defense.',
				'D: closed and semi-closed games after 1.d4 d5, such as the Queen’s Gambit and the Slav.',
				'E: Indian defenses, such as the King’s Indian and the Nimzo-Indian.',
			],
			after: ['You do not need to learn the numbers. The letter tells you the family.'],
		},
		{
			heading: 'What to know about each opening',
			paragraphs: [
				'Below 2000, understanding is worth more than memory. You do not need 20 moves of memorized theory. For each opening, learn:',
			],
			points: [
				'The first 6 to 10 moves and why they are played.',
				'The plan for both sides and the typical pawn structure.',
				'Two or three traps and tactical ideas.',
				'The usual ways the opponent can leave the main line.',
			],
		},
	],
	mistakes: [
		'Memorizing long lines without knowing the plan behind them.',
		'Changing your opening after every lost game.',
		'Trying to learn too many openings at once.',
		'Playing a gambit or a sharp line that you cannot calculate.',
		'Forgetting the opening principles when the opponent leaves the book.',
	],
	selfCheck: {
		question: 'In which ECO group is the Sicilian Defense?',
		answer: 'B, the semi-open games: 1.e4 with a reply other than 1...e5.',
	},
	questions: [
		{
			question: 'What is a gambit?',
			answer: 'An opening in which a player offers material, usually a pawn, for faster development or the initiative.',
		},
		{
			question: 'Which letter groups the open games after 1.e4 e5?',
			answer: 'C.',
		},
		{
			question: 'Why is a plan more useful than memorized moves?',
			answer: 'When the opponent leaves the book, a plan still tells you what to do, but memorized moves do not.',
		},
		{
			question: 'How many openings should a beginner start with?',
			answer: 'Three or four: one as White, and one reply each to 1.e4 and 1.d4 as Black.',
		},
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: [
			'Write down your repertoire: your first move as White, and your replies to 1.e4 and 1.d4 as Black.',
			'Then open the lessons for those openings in this section and read their plans. Play each opening in your next ten games and write down what happened.',
		],
	},
	takeaway: 'Choose a few openings, learn their plans and typical structures before the moves, and give each one enough games to judge it.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Start with the Italian Game',
			detail: 'A classic first opening for White after 1.e4 e5.',
			path: '/theory/italian-game',
		},
		{
			title: 'Browse real games',
			detail: 'See which openings are played in real games, and filter by opening.',
			path: '/library/games',
		},
	],
	sources: [
		{
			title: 'Encyclopaedia of Chess Openings',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Encyclopaedia_of_Chess_Openings',
		},
		{
			title: 'List of chess openings',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/List_of_chess_openings',
		},
	],
};
