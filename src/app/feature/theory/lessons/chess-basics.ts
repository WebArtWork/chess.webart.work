import { TheoryLessonBody } from '../theory.interface';

export const chessBasics: TheoryLessonBody = {
	slug: 'chess-basics',
	note: {
		heading: 'About the notation in this app',
		paragraphs: [
			'This app writes moves in English algebraic notation in every language: K king, Q queen, R rook, B bishop, N knight. Ukrainian books often use other letters (Кр, Ф, Т, С, К), but the system is the same. Learn one set of letters and use it everywhere here.',
		],
	},
	idea: [
		'Before tactics and plans, you need three things to be automatic: how each piece moves, roughly what each piece is worth, and how to read and write a move.',
		'Notation is how chess players talk to each other. It lets you replay any game from a book, record your own games and find your mistakes later.',
	],
	sections: [
		{
			heading: 'The board',
			paragraphs: [
				'The board has 64 squares. Place it so that each player has a light square in the right-hand corner.',
				'Files are the columns, named a to h from White’s left to right. Ranks are the rows, numbered 1 to 8 from White’s side. Every square has a name: file first, then rank, like e4 or g7.',
				'White’s pieces start on ranks 1 and 2, Black’s on ranks 7 and 8. The queen starts on a square of her own color: the white queen on d1, the black queen on d8. White moves first.',
			],
		},
		{
			heading: 'How each piece moves',
			paragraphs: ['No piece may move onto a square taken by one of its own pieces. A piece captures by moving onto an enemy piece’s square, which removes that piece from the board.'],
			parts: [
				{
					heading: 'King (K)',
					paragraphs: ['One square in any direction. The king may never move onto a square the opponent attacks.'],
				},
				{
					heading: 'Queen (Q)',
					paragraphs: ['Any number of squares in a straight line: along a rank, a file or a diagonal. She cannot jump over pieces.'],
				},
				{
					heading: 'Rook (R)',
					paragraphs: ['Any number of squares along a rank or a file, until a piece is in the way.'],
				},
				{
					heading: 'Bishop (B)',
					paragraphs: ['Any number of squares diagonally. A bishop stays on squares of one color for the whole game, so each side has a light-squared and a dark-squared bishop.'],
				},
				{
					heading: 'Knight (N)',
					paragraphs: [
						'In an L: two squares in one direction, then one square to the side. The knight is the only piece that jumps over other pieces. It always lands on a square of the other color.',
					],
				},
				{
					heading: 'Pawn (no letter)',
					paragraphs: [
						'One square straight forward; from its starting square it may move one or two. It captures one square diagonally forward. A piece right in front of a pawn blocks it. Pawns never move backward.',
					],
				},
			],
		},
		{
			heading: 'Special moves',
			parts: [
				{
					heading: 'Castling',
					paragraphs: [
						'The king moves two squares toward a rook, and that rook jumps to the square the king crossed. Kingside castling (with the h-rook) is short, queenside castling (with the a-rook) is long.',
					],
					points: [
						'Neither the king nor that rook has moved yet.',
						'The squares between them are empty.',
						'The king is not in check, and it does not cross or land on a square the opponent attacks.',
					],
				},
				{
					heading: 'Promotion',
					paragraphs: [
						'A pawn that reaches the last rank becomes a queen, rook, bishop or knight of the same color, as you choose. Almost always a queen. You may have two queens or more.',
					],
				},
				{
					heading: 'En passant',
					paragraphs: [
						'If an enemy pawn moves two squares from its starting square and lands right beside your pawn, your pawn may capture it as if it had moved only one square. You may do this only on the very next move.',
					],
				},
			],
		},
		{
			heading: 'Check, checkmate and stalemate',
			points: [
				'Check: the king is attacked. You must get out of check at once: move the king, capture the attacker or block the line.',
				'Checkmate: the king is in check and there is no way out. The game is over; the side that gave mate wins.',
				'Stalemate: the side to move is not in check but has no legal move. The game is a draw, even if one side has far more material.',
			],
		},
		{
			heading: 'What the pieces are worth',
			paragraphs: ['Points help you judge a trade. Count what you give and what you get.'],
			points: ['Pawn: 1', 'Knight: 3', 'Bishop: 3', 'Rook: 5', 'Queen: 9', 'King: no points. It is never traded; losing it means losing the game.'],
			after: [
				'So giving a rook (5) for a knight (3) loses 2 points, and a knight and a bishop together (6) are usually worth more than a rook (5).',
				'Points are a guide, not a law. An active piece is worth more than a passive one, two bishops work well together, and checkmate counts more than any material.',
			],
		},
		{
			heading: 'How a move is written',
			paragraphs: ['A move is written as the piece letter and the square it goes to: Nf3 means a knight moves to f3. Then a few signs are added when needed:'],
			points: [
				'Pawn moves have no letter, just the square: e4.',
				'x is a capture: Bxc6. A pawn capture starts with the file the pawn came from: exd5.',
				'+ is check: Qh5+. # is checkmate: Qxf7#.',
				'O-O is kingside castling, O-O-O is queenside castling.',
				'=Q is promotion: e8=Q means the pawn reaches e8 and becomes a queen.',
			],
		},
		{
			heading: 'When two pieces can go to the same square',
			paragraphs: [
				'Sometimes two pieces of the same kind can reach the same square. Then Rd1 is not enough: we add just enough to show which one moves.',
			],
			points: [
				'If they stand on different files, add the file of the piece that moves. Rooks on a1 and f1, the a1-rook goes to d1: Rad1. Knights on b1 and f3, the b1-knight goes to d2: Nbd2.',
				'If they stand on the same file, add the rank instead. Rooks on a1 and a5, the a1-rook goes to a3: R1a3. Knights on g1 and g5, the g5-knight goes to f3: N5f3.',
				'Only if neither the file nor the rank alone is enough, write the whole starting square. With queens on e4, h4 and h1, the h4-queen to e1 is Qh4e1. This is rare.',
				'Captures and checks keep their signs: Raxd8# means the a-file rook captures on d8 with checkmate.',
			],
			ordered: true,
			after: ['Add the extra letter or number only when it is needed. If only one rook can reach d1, write Rd1.'],
		},
		{
			heading: 'Writing down a game',
			paragraphs: [
				'Each move number covers one move by White and one by Black. Three dots after the number mean a move by Black written on its own. A result closes the record: 1-0 White won, 0-1 Black won, ½-½ a draw.',
				'Here is the shortest common trap, the Scholar’s Mate, written down and explained:',
			],
			points: [
				'1.e4 e5: both players move the king’s pawn two squares.',
				'2.Bc4 Nc6: White’s bishop aims at f7; Black develops a knight.',
				'3.Qh5 Nf6??: the queen also aims at f7. Black attacks the queen but misses the threat. ?? marks a blunder.',
				'4.Qxf7#: the queen captures on f7, protected by the bishop. Checkmate, 1-0.',
			],
			after: [
				'Comments after a move: ! a good move, !! a brilliant one, ? a mistake, ?? a blunder, !? interesting, ?! dubious.',
				'3...g6 instead of 3...Nf6?? would have blocked the queen’s path to f7.',
			],
		},
	],
	mistakes: [
		'Writing the knight as K. K is the king; the knight is N.',
		'Adding P for pawn moves (Pe4). Pawn moves have no letter.',
		'Writing the square a piece comes from instead of the square it goes to.',
		'Writing Rd1 when both rooks can reach d1, or adding the file when only one can.',
		'Forgetting x, + or #. They help you read your own game later.',
		'Counting the king as material, or trading a rook for a knight because both are “just pieces”.',
		'Reading the board from the wrong side: from Black’s side, a1 is in the top-right corner.',
	],
	selfCheck: {
		question: 'White has rooks on a1 and f1 and plays the f1-rook to d1. How is the move written?',
		answer: 'Rfd1. Both rooks can reach d1 and they are on different files, so the file of the rook that moves is added.',
	},
	questions: [
		{
			question: 'Which piece can jump over other pieces?',
			answer: 'Only the knight.',
		},
		{
			question: 'You give a bishop and get a rook. Did you win or lose material?',
			answer: 'You won about 2 points: a rook is 5, a bishop 3.',
		},
		{
			question: 'What is the difference between O-O and O-O-O?',
			answer: 'O-O is castling kingside (short, with the h-rook). O-O-O is castling queenside (long, with the a-rook).',
		},
		{
			question: 'Two knights stand on g1 and g5, and the g1-knight goes to f3. How is it written?',
			answer: 'N1f3. Both knights are on the g-file, so the rank of the moving knight is added.',
		},
		{
			question: 'What does 15...Qxe4+ mean?',
			answer: 'On Black’s 15th move, the queen captures on e4 with check.',
		},
	],
	exercise: {
		heading: 'Exercise',
		paragraphs: [
			'Set up a board, or open the analysis board, and play through 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O.',
			'Say every move aloud as you play it: which piece, from where, to where, and what each sign means.',
			'Then play a short game against a friend or the app and write down every move on paper. Afterwards, replay it from your notes. If you cannot, find where the record went wrong.',
		],
	},
	takeaway: 'Know how each piece moves and what it is worth, and write every game down: piece letter, square, and only the extra signs that are needed.',
	practice: [
		{
			title: 'Chess basics',
			detail: 'Multiple choice: how the pieces move, what they are worth and how moves are written, including two rooks on one line.',
			path: '/practice/chess-basics',
		},
		{
			title: 'Try the exercise game',
			detail: 'Open the analysis board, play 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O and watch how each move is written.',
			path: '/library/board',
		},
		{
			title: 'Mate in 1',
			detail: 'Once the moves are easy: find the checkmate in one move.',
			path: '/practice/mate-in-one',
		},
	],
	sources: [
		{
			title: 'FIDE Laws of Chess, Appendix C: Algebraic notation',
			author: 'FIDE',
			site: 'FIDE Handbook',
			url: 'https://handbook.fide.com/chapter/E012023',
		},
	],
};
