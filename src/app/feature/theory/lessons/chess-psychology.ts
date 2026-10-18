import { TheoryLessonBody } from '../theory.interface';

export const chessPsychology: TheoryLessonBody = {
	slug: 'chess-psychology',
	sections: [
		{
			heading: 'Why doesn’t knowledge always turn into wins?',
			paragraphs: [
				'You can understand tactics well, know your openings and solve puzzles regularly, yet still make serious blunders in tournaments.',
				'The causes may be haste, fatigue, fear of losing or a lapse in attention.',
				'That is why mental preparation is part of chess training.',
			],
		},
		{
			heading: 'Play the position, not the rating',
			paragraphs: [
				'A higher-rated opponent can make you play too cautiously.',
				'A lower-rated opponent, on the other hand, sometimes tempts you into unsound attacks.',
				'But the right move is decided by the position, not by your opponent’s name or rating.',
				'Rule: judge the possibilities on the board, whatever result you expect.',
			],
		},
		{
			heading: 'How to react to a mistake',
			paragraphs: [
				'Say you have dropped a pawn or missed a good tactical shot.',
				'The worst reaction is to keep thinking about that mistake.',
				'A more useful order:',
			],
			points: [
				'Accept that the position has changed.',
				'Assess the new balance of forces.',
				'Look for practical chances.',
				'Keep looking for the best moves.',
				'After the game, analyze why the mistake happened.',
			],
			ordered: true,
			after: ['During the game, what matters is the next decision, not justifying the last one.'],
		},
		{
			heading: 'How to stay focused',
			paragraphs: ['Focus does not mean constant maximum tension.', 'Use a short routine before each move:'],
			points: [
				'Check the threats.',
				'Name your candidate moves.',
				'Calculate the most important lines.',
				'Check for a tactical blunder: what does your move leave unprotected?',
				'Make the move.',
			],
			ordered: true,
			after: ['Repeating this routine turns it into a stable habit.'],
		},
		{
			heading: 'Staying objective in an attack',
			paragraphs: [
				'A player who has started an attack often wants to prove the decision was right.',
				'Because of that, they may ignore the opponent’s strong defensive moves.',
				'In every attacking position, ask yourself:',
				'“What would I do in my opponent’s place to stop this attack?”',
				'This helps you avoid unsound sacrifices.',
			],
		},
		{
			heading: 'Preparing for a tournament',
			paragraphs: ['A simple routine helps:'],
			points: [
				'Get enough rest before the game.',
				'Don’t try to learn many new openings at the last minute.',
				'Review a few familiar tactical patterns.',
				'Check the time control.',
				'Set a learning goal that does not depend on the result.',
			],
			after: ['For example: “In every critical position I will find at least two candidate moves.”'],
		},
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: ['After each of your next five games, write down:'],
		points: [
			'Did you rush?',
			'Did your opponent’s rating affect your decisions?',
			'Did you lose focus after a mistake?',
			'Did you check your moves for tactical threats?',
			'Which mental habit do you need to improve?',
		],
		ordered: true,
		after: ['Then look for patterns that repeat across the five games, rather than judging yourself by the result of a single game.'],
	},
	takeaway:
		'Mental toughness in chess is the ability to bring your attention back to the position and make sound decisions, even after a setback.',
	practice: [
		{
			title: 'Daily puzzle',
			detail: 'One puzzle a day: go through the full pre-move routine before you answer.',
			path: '/practice/daily',
		},
		{
			title: 'Tactics',
			detail: 'You get one try per puzzle, so practice the routine: threats, candidates, blunder check, then move.',
			path: '/practice/tactics',
		},
	],
};
