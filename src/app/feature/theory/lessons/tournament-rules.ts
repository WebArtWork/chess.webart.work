import { TheoryLessonBody } from '../theory.interface';

export const tournamentRules: TheoryLessonBody = {
	slug: 'tournament-rules',
	note: {
		heading: 'About these rules',
		paragraphs: [
			'This lesson follows the FIDE Laws of Chess, which most tournaments use. Every event publishes its own regulations, and they can change details such as the time control, the tiebreak order and how late you may arrive. Read them before round 1: on the day, the regulations decide.',
		],
	},
	idea: [
		'A tournament is more than playing chess. You need to know how opponents are chosen, how the winner is decided, how the clock works and what you may and may not do at the board.',
		'Most of the surprises in a first tournament come from small rules: a touched piece, a clock pressed with the wrong hand, a late arrival or a tiebreak nobody explained. This lesson covers the rules you will meet most often, so none of them costs you a game.',
	],
	stepsHeading: 'How to prepare for a tournament',
	steps: [
		'Read the regulations: format, number of rounds, time control, tiebreak order and the late-arrival limit.',
		'Check how pairings are published, and find your board and your color each round.',
		'Practice your time control at home with a real clock, until pressing it is automatic.',
		'Bring a pen, and a scoresheet if the organizers do not provide one. Switch your phone off completely and leave it in your bag.',
		'Learn the board rules in this lesson, so that you never have to guess.',
	],
	example: [
		'Eight players, seeded 1 to 8 by rating, play three rounds of a Swiss tournament. In round 1 the top half meets the bottom half: 1 plays 5, 2 plays 6, 3 plays 7 and 4 plays 8. Seeds 1, 2, 7 and 4 win. Seed 7 beat the favorite, seed 3.',
		'Now four players have 1 point (seeds 1, 2, 4 and 7) and four have 0 (seeds 3, 5, 6 and 8). In round 2 each group plays within itself: 1 plays 4, 2 plays 7, 3 plays 6 and 5 plays 8. Nobody meets an old opponent.',
		'Say seed 1 beats seed 4 and seed 2 draws with seed 7. Seed 1 now has 2 points and nobody else does, so in round 3 they play someone with 1.5 points, a player who has not met them. This is called a float. With only three rounds, draws leave several players close to the lead, which is why tiebreaks matter.',
	],
	sections: [
		{
			heading: '1. Tournament formats',
			paragraphs: ['The format decides who plays whom, and how many games you get.'],
			parts: [
				{
					heading: 'Swiss system',
					paragraphs: [
						'The most common format for large events. The number of rounds is fixed in advance, and everyone plays every round, win or lose. Nobody is eliminated.',
					],
					points: [
						'Round 1: players are ordered by rating, and the top half plays the bottom half.',
						'Every later round: you are paired with someone who has the same score, or a close one. Strong players meet strong players as the event goes on.',
						'You never play the same opponent twice.',
						'Colors alternate as far as possible. Normally you do not get the same color three times in a row.',
						'If the number of players is odd, one player gets a bye, which counts as a point. Nobody gets two byes.',
					],
					after: [
						'How many rounds? To be able to find one winner with a perfect score, you need enough rounds to cut the number of unbeaten players in half each time: 3 rounds for 8 players, 4 for 16, 7 for 100. Most real tournaments play 5 to 9 rounds.',
					],
				},
				{
					heading: 'Round robin',
					paragraphs: [
						'Everyone plays everyone once. With 10 players that is 9 rounds and 45 games. It is the fairest format, but it is slow, so it is used for small groups and invitational events. A double round robin gives each pair two games, one with each color.',
					],
				},
				{
					heading: 'Knockout',
					paragraphs: [
						'The loser of each match is out. Sixteen players need four rounds. A match usually has more than one game, for example two, one with each color. If the match is tied, a playoff with shorter games decides who goes through.',
					],
				},
				{
					heading: 'Team events and online arenas',
					paragraphs: [
						'In a team match, each player has a board number and plays the opponent on the same board. The result counts in two ways: game points for each board and match points for the whole team. Check which one decides the standings.',
						'Online you will often find arena tournaments: play as many games as you can in a fixed time, and earn points for wins and winning streaks. They reward activity, not careful play.',
					],
				},
			],
		},
		{
			heading: '2. Scoring and tiebreaks',
			paragraphs: [
				'A win is 1 point, a draw is ½ and a loss is 0. If your opponent does not show up, you get a forfeit win, which also counts as 1.',
				'At the end of a Swiss tournament, several players often share the same score. A tiebreak is a second number that separates them. The organizers announce the order in advance. The common ones:',
			],
			points: [
				'Buchholz: the sum of your opponents’ final scores. Playing stronger opponents counts for more. Some events use Buchholz Cut 1, which drops the lowest opponent score.',
				'Sonneborn-Berger: the scores of the opponents you beat, plus half the scores of those you drew with. It rewards wins over strong opponents.',
				'Direct encounter: the result of the game between the tied players.',
				'Number of wins: more wins ranks higher, because a win is harder to get than a draw.',
			],
			after: [
				'Here is a Buchholz example. Anna and Bohdan both finish with 3 out of 5. Anna’s opponents scored 2, 3, 3, 4 and 1, so her Buchholz is 13. Bohdan’s opponents scored 1, 2, 2, 3 and 2, so his is 10. Anna ranks higher: she played the stronger field.',
				'For Sonneborn-Berger, say Anna beat the opponents with 2 and 1 points and drew with the two with 3 points. Her score is 2 + 1 + 1.5 + 1.5 = 6.',
				'If a title or a prize still needs a single winner, a playoff decides it, usually with blitz games. Armageddon is the last resort: White gets more time, for example 5 minutes against 4, but Black wins a draw. Details vary, so check the regulations.',
			],
		},
		{
			heading: '3. Time controls and the clock',
			paragraphs: [
				'Each player has their own clock, and the clock runs only on their turn. Time controls are named by the base time per player and the increment, so 10+5 means 10 minutes plus 5 seconds added after every move.',
			],
			points: [
				'Bullet: about 1 to 2 minutes per player. Mostly online.',
				'Blitz: up to 10 minutes per player.',
				'Rapid: more than 10 and up to 60 minutes per player.',
				'Classical: 60 minutes or more per player, often with an increment. Classical games can last four to six hours.',
			],
			after: [
				'Increment and delay both give extra time, but in different ways. With an increment, a fixed number of seconds is added to your clock after you move, so time you do not use is saved. With a delay, the clock waits a few seconds at the start of each turn and only then starts running. Unused delay is lost.',
				'Press the clock with the same hand that moved the piece. Do not hover over it or press it hard. If your time runs out, you lose, unless your opponent has only a bare king and cannot ever checkmate, in which case the game is a draw.',
				'Practice with a real clock at home. A lot of games are lost by players who knew the position but not their time.',
			],
		},
		{
			heading: '4. Rules at the board',
			parts: [
				{
					heading: 'Touch-move',
					paragraphs: [
						'If you deliberately touch one of your pieces when it is your turn, you must move that piece, if it has a legal move. If you touch an opponent’s piece, you must capture it, if you can. If you touch several, you must move or capture the first one that can be moved or captured. A move is made when you release the piece on a legal square. Until then, you may still choose another square for that piece.',
						'To fix a piece that is not centered on its square, say “J’adoube” or “I adjust” first, and only on your own turn. Touching a piece without saying it counts as touching it deliberately.',
					],
				},
				{
					heading: 'Draws',
					paragraphs: [
						'To offer a draw, make your move first, then say “Draw?” before you press the clock. The offer cannot be taken back. Your opponent may accept it, or decline it by saying no or by simply making a move. Do not offer again and again. Some events do not allow draw offers before a set move number, for example move 30.',
						'A draw can also come from the position, with a claim or automatically:',
					],
					points: [
						'Threefold repetition: the same position, with the same player to move, appears three times. The moves do not have to be in a row. You must claim it: stop, and call the arbiter. Five times is an automatic draw.',
						'The 50-move rule: 50 moves by each player pass without a capture or a pawn move. You claim it. At 75 moves it is automatic.',
						'Insufficient material: neither side can checkmate with any legal moves, for example a bare king against a king and a knight. The game ends at once.',
						'Stalemate: the player to move has no legal move and is not in check.',
					],
				},
				{
					heading: 'Penalties and the arbiter',
					paragraphs: [
						'In classical and rapid games, the first illegal move gives your opponent 2 extra minutes. A second illegal move by the same player loses the game. In blitz, if your opponent notices an illegal move, they can claim a win. If you see a problem, do not argue and do not fix the position yourself. Stop the clock and call the arbiter.',
						'Many tournaments use zero tolerance for late arrival. If you are not at the board when the round starts, you may lose by forfeit. Others allow 15 or 30 minutes. Read the regulations and arrive early.',
						'In classical games you must write down every move, and your opponent’s. You may stop if you have less than 5 minutes left and no increment of 30 seconds or more. Blitz and rapid events often do not require a scoresheet.',
					],
				},
				{
					heading: 'Fair play and etiquette',
					paragraphs: ['Chess is based on trust, so tournaments take these rules seriously.'],
					points: [
						'Switch your phone off completely. In many tournaments a ringing phone loses the game.',
						'Never use an engine, notes or help from other people during a game. This includes your coach, a friend and a spectator.',
						'Do not talk to your opponent about the game, and keep quiet in the playing hall.',
						'Shake hands before the game and after it. When a game ends by resignation or an agreed draw, stop both clocks.',
						'After the game, report the result to the arbiter and sign the scoresheet. Analyze outside the playing hall.',
					],
				},
			],
		},
		{
			heading: '5. Ratings and titles',
			paragraphs: [
				'A rating is a number that estimates your strength, which the Elo system adjusts after every rated game. If you beat a stronger player, you gain more than you would for beating a weaker one, and you lose more for a loss against a weaker one. New players receive their first rating after several games against rated opponents. National and FIDE ratings are separate lists.',
				'Titles such as Candidate Master, FIDE Master, International Master and Grandmaster need a rating and results called norms, which are strong performances in tournaments with enough rated opponents. A title, once earned, stays for life.',
			],
		},
	],
	mistakes: [
		'Not reading the regulations: the tiebreak order, the time control or the late-arrival limit surprise you on the day.',
		'Touching a piece while thinking, and then trying to move another one.',
		'Offering a draw before making your move, or after pressing the clock.',
		'Pressing the clock with the other hand, or forgetting to press it at all.',
		'Making a move that repeats the position and only then claiming a draw. Call the arbiter before you move.',
		'Using a phone in the playing hall, even to check the time.',
		'Arguing with your opponent about a rule instead of calling the arbiter.',
		'Thinking a Swiss tournament eliminates players. Everyone plays all the rounds.',
	],
	selfCheck: {
		question: 'Two players in a Swiss tournament both score 4 out of 6. Whom does Buchholz rank higher?',
		answer: 'The one whose opponents scored more in total. Buchholz adds up your opponents’ final scores, so it rewards a stronger field.',
	},
	questions: [
		{
			question: 'In a Swiss tournament, can you play the same opponent twice?',
			answer: 'No. You are paired with players of the same or a close score whom you have not met.',
		},
		{
			question: 'How many rounds does a round robin with 8 players need?',
			answer: '7 rounds. Everyone plays every other player once.',
		},
		{
			question: 'You touch your knight, then see it loses a piece. Can you move something else?',
			answer: 'No. If the knight has a legal move, you must move it. Say “J’adoube” before touching a piece you only want to adjust.',
		},
		{
			question: 'When do you offer a draw?',
			answer: 'After you make your move and before you press the clock. Once made, the offer cannot be withdrawn.',
		},
		{
			question: 'Your opponent’s illegal move: what do you do in a classical game?',
			answer: 'Stop the clock and call the arbiter. The first illegal move gives you 2 extra minutes; a second one loses the game.',
		},
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: [
			'Find the regulations of a tournament in your area, or a past one. Write down the format, the number of rounds, the time control, the tiebreak order and the late-arrival limit.',
			'Then play a game at home with a real clock at 10+5. Practice every board rule from this lesson: touch-move, offering a draw after your move and pressing the clock with the right hand. Write the game down as you play.',
		],
	},
	takeaway: 'Read the regulations, know how pairings and tiebreaks work, practice with a real clock, and when something goes wrong at the board, stop the clock and call the arbiter.',
	practice: [
		{
			title: 'Write a game down',
			detail: 'Play a game on the analysis board and record it move by move, as you would on a scoresheet.',
			path: '/library/board',
		},
		{
			title: 'Chess basics',
			detail: 'Review how the pieces move and how moves are written before your first tournament.',
			path: '/practice/chess-basics',
		},
	],
	sources: [
		{
			title: 'FIDE Laws of Chess',
			author: 'FIDE',
			site: 'FIDE Handbook',
			url: 'https://handbook.fide.com/chapter/E012023',
		},
		{
			title: 'Swiss-system tournament',
			author: 'Wikipedia',
			site: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Swiss-system_tournament',
		},
	],
};
