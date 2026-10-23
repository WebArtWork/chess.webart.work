import { TheoryLessonBody } from '../theory.interface';

export const openingPrinciples: TheoryLessonBody = {
	slug: 'opening-principles',
	sections: [
		{
			heading: 'What is a good opening?',
			paragraphs: [
				'The opening is the first stage of the game. Both players develop their pieces, fight for the center and get the king to safety.',
				'The main goal of the opening is not necessarily to get an advantage. It is to build a position where your pieces work together.',
				'Knowing twenty moves of a popular opening does not guarantee good play. It matters much more to understand why those moves are played.',
			],
		},
		{
			heading: 'Five basic principles',
			parts: [
				{
					heading: 'Control the center',
					paragraphs: [
						'The central squares d4, e4, d5 and e5 matter most. A piece near the center controls more squares: a knight on f3 covers eight squares, including d4 and e5, while a knight on h3 covers only four.',
						'You can control the center with pieces, not only with pawns.',
					],
				},
				{
					heading: 'Develop your minor pieces',
					paragraphs: [
						'Early in the game, bring your knights and bishops out to active squares.',
						'For example, after 1.e4 e5 2.Nf3 Nc6 3.Bc4 the knight attacks e5, the bishop aims at f7, and the kingside is clear for castling.',
					],
				},
				{
					heading: 'Keep your king safe',
					paragraphs: [
						'Castling early usually takes the king out of the center and helps connect the rooks.',
						'But don’t castle automatically. If the pawns in front of the king have already moved, or files are opening on that flank, the king may walk into an attack.',
					],
				},
				{
					heading: 'Don’t waste tempi',
					paragraphs: [
						'Moving the same piece again and again lets your opponent finish development first.',
						'The exception is a repeat move with a concrete tactical or positional purpose, such as winning material or meeting a threat.',
					],
				},
				{
					heading: 'Develop your pieces in harmony',
					paragraphs: [
						'A strong opening is more than a set of good moves. Your pieces should support each other and work toward a common goal.',
					],
				},
			],
		},
		{
			heading: 'How to think before an opening move',
			paragraphs: ['Before each move, ask yourself:'],
			points: [
				'What does my opponent threaten?',
				'Which piece is undeveloped or worst placed, and can I improve it?',
				'How well do I control the center?',
				'Is my king safe?',
				'What plan does my move support?',
			],
			ordered: true,
		},
	],
	mistakes: [
		'Bringing the queen out early without a concrete reason: your opponent gains tempi by attacking it.',
		'Grabbing pawns instead of developing.',
		'Ignoring your opponent’s threats.',
		'Repeating memorized moves on autopilot, even after your opponent has left the familiar line.',
		'Attacking too early with too few pieces.',
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: [
			'Look at this opening: 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5. It is White’s move.',
			'Compare three options: 4.O-O, 4.c3 and 4.Nc3.',
			'Each of these moves has its own idea. Explain which plan each one supports before reading on.',
			'Feedback: 4.O-O brings the king to safety and puts the rook on f1. 4.c3 prepares d4, but leaves development and castling to finish; Black can challenge the center with ...Nf6. 4.Nc3 develops a piece and controls d5 and e4, but it takes the c3-square from the c-pawn, so preparing d4 becomes harder. All three are reasonable. Explain a likely Black reply as well as White’s plan.',
		],
	},
	takeaway: 'In the opening, understand what the position needs instead of just memorizing a sequence of moves.',
	practice: [
		{
			title: 'Opening moves',
			detail: 'Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.',
			path: '/practice/opening-moves',
		},
		{
			title: 'Try the exercise position',
			detail: 'Open the position after 3...Bc5 and compare 4.O-O, 4.c3 and 4.Nc3 yourself.',
			path: '/library/board',
			query: { fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4' },
		},
	],
};
