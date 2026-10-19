import { TheoryLessonBody } from '../theory.interface';

export const ccto: TheoryLessonBody = {
	slug: 'ccto',
	sections: [
		{
			heading: 'Why you need an order of thinking',
			paragraphs: [
				'In a game you could consider dozens of moves. Without an order, you risk spending your time on side ideas and missing a simple tactic.',
				'CCTO gives you four places to look for moves:',
			],
			points: [
				'C: Checks.',
				'C: Captures.',
				'T: Threats.',
				'O: Optimization, improving your position.',
			],
			after: [
				'It is not a rule that you must play moves in this order, and it does not replace calculation. It is a simple way to search the position systematically so you don’t miss a promising option.',
				'Before you start, check your opponent’s immediate threats.',
			],
		},
		{
			heading: 'Checks: look at every check',
			paragraphs: [
				'A check requires an immediate legal answer: capture the checking piece, block the line when possible, or move the king. First notice every legal check, including sacrifices. Then decide which deserve deeper calculation, especially:',
			],
			points: [
				'Checks that also attack another piece.',
				'Discovered checks.',
				'Double checks.',
				'Checks with a sacrifice.',
				'Checks that drive the king onto a dangerous square.',
			],
			after: [
				'But not every check is good. A pointless check can help your opponent move the king to safety or bring a piece into play with tempo.',
				'Example: you are attacking the king and can give check with your queen. Before you do, see whether your opponent can block the check with a piece that attacks your queen at the same time. A check is not good just because it forces a reply.',
				'Key question: what changes after the check and your opponent’s strongest reply?',
			],
		},
		{
			heading: 'Captures: check every capture',
			paragraphs: [
				'Captures change the material balance and often open lines for the pieces. But whether a trade pays off depends on more than the value of the pieces. Before you capture, ask:',
			],
			points: [
				'Is the piece I want to take protected?',
				'What can my opponent recapture with?',
				'Will there be a tactic after the trade?',
				'Will I weaken my own king?',
				'Which side will have the more active position after the trade?',
			],
			ordered: true,
			after: [
				'Example: your bishop can take your opponent’s knight. It looks like an even trade. But after the recapture your opponent may get an open file for a rook or the bishop pair. An even trade in material can still be a bad trade.',
				'Key question: will my position be better after the whole sequence of captures?',
			],
		},
		{
			heading: 'Threats: create threats',
			paragraphs: [
				'A threatening move creates a concrete danger: if your opponent ignores it, you win something or break through on the next move. It does not have to win anything right away. Common examples:',
			],
			points: [
				'Attacking an unprotected piece.',
				'A double attack.',
				'A mate threat.',
				'Attacking a weak pawn once more, so it can no longer be held.',
				'Creating a passed pawn that threatens to promote.',
			],
			after: [
				'A strong threat can limit your opponent’s choices. But they may ignore it with a stronger check, counter-threat or favorable trade. Test the threat against those replies.',
				'Example: your rook stands on an open file and your queen supports it. Instead of trading at once, you bring your second rook to the same file. If the entry square is accessible and the invasion creates a concrete danger, you threaten to invade on the seventh rank. Otherwise, doubling rooks is preparation rather than an immediate threat. You have not won material yet, but you have raised the pressure and given your opponent a concrete problem.',
				'Key question: what will my opponent have to deal with after my move?',
			],
		},
		{
			heading: 'Optimization: improve your position',
			paragraphs: [
				'Not every position has a combination or a strong threat. In quiet positions, improve your pieces step by step. Optimization can mean:',
			],
			points: [
				'Rerouting your worst-placed piece.',
				'Strengthening your control of the center.',
				'Making your king safer.',
				'Taking an open file.',
				'Setting up a strong outpost for a knight.',
				'Preparing a good pawn break.',
				'Fixing a weakness in your own position.',
			],
			after: [
				'Example: your knight stands on the edge of the board and hardly takes part in the game. There is no tactic. You can spend a few moves bringing the knight closer to the center. Such a plan can be stronger than forcing an attack that is not there.',
				'Key question: which of my pieces works worst, and how can I make it more useful?',
			],
		},
		{
			heading: 'Using CCTO in a real game',
			paragraphs: ['A thinking routine for one move:'],
			points: [
				'Understand your opponent’s last move. What changed? Is there a new threat, an unprotected piece, a newly opened line? If they threaten mate, deal with that first.',
				'Look at the checks and calculate the replies. Don’t give a check just because you can.',
				'Look at the captures: good trades, sacrifices, tactics. Calculate the replies, not only your first capture.',
				'If nothing wins at once, look for a threat your opponent will have to answer.',
				'Look for a positional improvement: your least active piece, weak squares, a long-term plan. Sometimes the quiet move is the strongest.',
				'Pick the best candidates from all four places and compare them by concrete lines, not by the type of move.',
				'Before you move, ask: what is my opponent’s strongest reply, and am I missing a simple tactic?',
			],
			ordered: true,
		},
	],
	mistakes: [
		'Always giving check when you can. CCTO asks you to look at checks, not to prefer them.',
		'Judging a capture by material alone. Weigh piece activity, king safety and the positional consequences too.',
		'Making threats without looking at your opponent’s plan. Your threat may be slower or weaker than theirs.',
		'Ignoring quiet moves. A strong defensive or positional move sometimes beats every forcing line.',
		'Stopping the calculation after the first reply. Evaluate the position at the end of the important line.',
	],
	exercise: {
		heading: 'Exercise',
		parts: [
			{
				heading: 'Exercise 1. Finding checks',
				paragraphs: [
					'Take any tactical position. Find every legal check, then decide which ones deserve calculating. The goal is to notice the options, not to play the first check you see.',
				],
			},
			{
				heading: 'Exercise 2. Analyzing captures',
				paragraphs: [
					'In a position of your choice, find every capture. For each promising one, calculate at least your opponent’s strongest reply. Decide which captures pay off and which cause you problems.',
				],
			},
			{
				heading: 'Exercise 3. Creating a threat',
				paragraphs: [
					'Pick a position with no obvious combination. Look for up to three moves that create concrete threats. Explain how your opponent can answer each one. If no sound threat exists, say so and choose a useful improvement instead.',
				],
			},
			{
				heading: 'Exercise 4. Positional improvement',
				paragraphs: [
					'Take a quiet, roughly equal position. Find the least active piece on each side. Suggest a two- or three-move plan to improve yours.',
				],
			},
			{
				heading: 'Exercise 5. The whole routine',
				paragraphs: ['In a training game, find a critical moment and write down every stage:'],
				points: [
					'Your opponent’s threat.',
					'Possible checks.',
					'Promising captures.',
					'Threats you can create.',
					'Positional improvements.',
					'Your best two or three candidates.',
					'Your final decision.',
				],
				ordered: true,
				after: ['Then check your evaluation with an engine.'],
			},
		],
	},
	questions: [
		{
			question: 'What do the four letters of CCTO stand for?',
			answer: 'Checks, Captures, Threats, Optimization: checks, captures, threats and improving your position.',
		},
		{
			question: 'Why is a check not always the best move?',
			answer: 'A pointless check can help your opponent bring the king to safety or develop a piece with tempo. What matters is the position after the check and the strongest reply.',
		},
		{
			question: 'What consequences should you check before trading pieces?',
			answer: 'Whether the piece is protected, how your opponent recaptures, whether a tactic follows, whether your king gets weaker and who will be more active after the trade.',
		},
		{
			question: 'How is a threat different from a general improvement of your position?',
			answer: 'A threat creates a specific consequence if ignored. Your opponent may defend or meet it with something stronger. A general improvement may make your position better without creating an immediate concrete threat.',
		},
		{
			question: 'What should you do if there are no good checks, captures or direct threats?',
			answer: 'Improve your position: reroute your worst piece, make your king safer, fix a weakness or prepare a pawn break.',
		},
		{
			question: 'Why check your opponent’s last move before your own calculation?',
			answer: 'It may have created a threat, even a mate threat, or left a piece unprotected. Your own ideas are worth little if you miss what changed.',
		},
		{
			question: 'Can a quiet positional move be stronger than a forcing one?',
			answer: 'Yes. When the forcing lines lead nowhere or your opponent’s threat must be stopped, a quiet defensive or improving move is often the strongest.',
		},
	],
	takeaway:
		'CCTO does not replace calculation, but it makes your search systematic: forcing moves first, then threats and quiet improvements, so you are less likely to miss an important option.',
	practice: [
		{
			title: 'What’s the threat?',
			detail: 'Before your own checks and captures, name what the opponent threatens, then stop it.',
			path: '/practice/threats',
		},
		{
			title: 'Mate in 1',
			detail: 'Start with the checks: look at every check before anything else.',
			path: '/practice/mate-in-one',
		},
		{
			title: 'Tactics',
			detail: 'Go through checks, captures and threats before you pick a move.',
			path: '/practice/tactics',
		},
		{
			title: 'Good moves',
			detail: 'Collect candidates from all four places, including one quiet move.',
			path: '/practice/good-moves',
		},
	],
	sources: [
		{
			title: 'CCTO Rule in Chess: Checks. Captures. Threats. Optimization.',
			author: 'Darko Polimac',
			site: 'Chess.com forum',
			url: 'https://www.chess.com/forum/view/chess-lessons/ccto-rule-in-chess-checks-captures-threats-optimization',
		},
	],
};
