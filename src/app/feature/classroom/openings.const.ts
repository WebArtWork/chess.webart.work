export interface Opening {
	id: string;
	/** The Theory lesson with the full text of this opening, /theory/<lesson>. */
	lesson: string;
	/** English; translated when shown, like all lesson text. */
	name: string;
	/** What the opening is about, one sentence. */
	idea: string;
	/** Moves in SAN, played from the start position: the line the bonus asks for. */
	moves: string[];
	/** One note per move, same order as `moves`. */
	notes: string[];
	/** What to aim for. */
	ideas: string[];
	/** A common trap to know about. */
	trap: string;
}

/** Own moves of the lesson line that earn the bonus (three moves for each side is six plies). */
export const BONUS_MOVES = 3;

/**
 * The openings a class teaches, in the order a new student meets them. Each has a Theory lesson with the full
 * text; the ids of the first five are stored with students' history, so they never change.
 */
export const OPENINGS: Opening[] = [
	{
		id: 'italian',
		lesson: 'italian-game',
		name: 'Italian Game',
		idea: 'Develop fast, aim at the weak f7 square and castle early.',
		moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5'],
		notes: [
			'Take the center and open lines for the queen and bishop.',
			'Black answers in the same way.',
			'Attack the e5 pawn and develop a knight.',
			'Black defends the pawn and develops too.',
			'The bishop looks at f7, the weakest point near the black king.',
			'Black copies the plan, and both sides castle next.',
		],
		ideas: [
			'Put the bishop on c4 where it eyes f7.',
			'Castle early to keep the king safe.',
			'Build the center with c3 and d4.',
		],
		trap: 'Do not grab pawns with the queen early: it loses time and often the queen.',
	},
	{
		id: 'queens-gambit',
		lesson: 'queens-gambit',
		name: "Queen's Gambit",
		idea: 'Offer a pawn to win control of the center.',
		moves: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6'],
		notes: [
			'White takes the center with the queen pawn.',
			'Black blocks it.',
			'White offers a pawn to pull the d5 pawn away.',
			'Black keeps the center solid and does not take the pawn.',
			'White adds a defender to the center.',
			'Black develops a knight and keeps an eye on e4.',
		],
		ideas: [
			'Do not worry about the pawn: you can win it back.',
			'Develop the knights, then the bishops.',
			'Keep a pawn on d4 and fight for the center.',
		],
		trap: 'If Black takes the pawn and tries to keep it, White gets quick development and a strong center.',
	},
	{
		id: 'scotch',
		lesson: 'scotch-game',
		name: 'Scotch Game',
		idea: 'Open the center early and get active pieces.',
		moves: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4'],
		notes: [
			'White takes the center.',
			'Black answers in the same way.',
			'Attack the e5 pawn and develop a knight.',
			'Black defends the pawn and develops too.',
			'White opens the center at once.',
			'Black takes the pawn, and White will recapture with the knight.',
		],
		ideas: [
			'Recapture on d4 with the knight.',
			'Use the open lines for your bishops.',
			'Do not move the same piece twice without a reason.',
		],
		trap: 'Do not bring the queen out early: Black will chase it and gain time.',
	},
	{
		id: 'sicilian',
		lesson: 'sicilian-defense',
		name: 'Sicilian Defense',
		idea: 'Black fights for the center from the side and plays for a win.',
		moves: ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4'],
		notes: [
			'White takes the center.',
			'Black attacks d4 with a flank pawn instead of copying.',
			'White develops and prepares d4.',
			'Black supports the e5 square and opens the bishop.',
			'White opens the center.',
			'Black trades a flank pawn for the central one.',
		],
		ideas: [
			'Trade the c-pawn for a central pawn.',
			'Keep the position tense and play for a win.',
			'Use the open c-file for your rooks.',
		],
		trap: 'White gets more space, so do not fall behind in development.',
	},
	{
		id: 'london',
		lesson: 'london-system',
		name: 'London System',
		idea: 'Build a solid setup you can play against almost anything.',
		moves: ['d4', 'd5', 'Bf4', 'Nf6', 'e3', 'e6'],
		notes: [
			'White takes the center with the queen pawn.',
			'Black blocks it.',
			'The bishop comes out before the pawn locks it in.',
			'Black develops a knight and eyes e4.',
			'White opens the way for the other bishop.',
			'Black closes the center and keeps a solid shape.',
		],
		ideas: [
			'Develop the bishop to f4 before playing e3.',
			'Add c3, Nbd2 and Bd3 to complete the setup.',
			'Castle kingside, then look for e4.',
		],
		trap: 'Black may attack the b2 pawn with Qb6, so be ready to defend it.',
	},
	{
		id: 'caro-kann',
		lesson: 'caro-kann-defense',
		name: 'Caro-Kann Defense',
		idea: 'Build a solid structure and bring the bishop out early.',
		moves: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4'],
		notes: [
			'White takes the center.',
			'Black prepares to play d5 with a pawn.',
			'White takes more of the center.',
			'Black strikes at the center.',
			'White defends the e4 pawn and develops a knight.',
			'Black takes the pawn, and the bishop comes out next.',
		],
		ideas: [
			'Take on e4 and develop the bishop to f5 before playing e6.',
			'Keep a solid pawn structure with no weaknesses.',
			'Counterattack with c5 when you are ready.',
		],
		trap: 'If White’s queen goes to e2, watch out for a knight jump to d6 with checkmate.',
	},
	{
		id: 'ruy-lopez',
		lesson: 'ruy-lopez',
		name: 'Ruy Lopez',
		idea: 'Pressure the knight that guards e5 and build a strong center.',
		moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6'],
		notes: [
			'White takes the center.',
			'Black answers in the same way.',
			'Attack the e5 pawn and develop a knight.',
			'Black defends the pawn and develops too.',
			'The bishop attacks the knight that defends e5.',
			'Black asks the bishop what it wants to do.',
		],
		ideas: [
			'Castle early and defend the e4 pawn with Re1.',
			'Prepare d4 with c3 to build a big center.',
			'Keep the bishop on the diagonal toward f7.',
		],
		trap: 'Do not think Bxc6 and Nxe5 wins a pawn: Black plays Qd4 and gets it back.',
	},
	{
		id: 'french',
		lesson: 'french-defense',
		name: 'French Defense',
		idea: 'Build a solid pawn chain and attack the base of White’s center.',
		moves: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6'],
		notes: [
			'White takes the center.',
			'Black prepares d5 and keeps a solid chain.',
			'White takes more of the center.',
			'Black strikes at the center.',
			'White defends e4 with a developing move.',
			'Black develops and attacks the pawn on e4.',
		],
		ideas: [
			'Attack d4 with c5, the base of White’s pawn chain.',
			'Free the bishop on c8 with b6 and Ba6, or trade it.',
			'Be ready to answer e5 with Nfd7 and c5.',
		],
		trap: 'Do not leave the bishop on c8 locked behind the e6 pawn for the whole game.',
	},
	{
		id: 'scandinavian',
		lesson: 'scandinavian-defense',
		name: 'Scandinavian Defense',
		idea: 'Take the center at once and develop with care.',
		moves: ['e4', 'd5', 'exd5', 'Qxd5', 'Nc3', 'Qa5'],
		notes: [
			'White takes the center.',
			'Black strikes at it at once.',
			'White takes the pawn.',
			'Black takes it back with the queen.',
			'White develops and attacks the queen.',
			'The queen moves to a safe square.',
		],
		ideas: [
			'Develop the bishop on c8 before playing e6.',
			'Play c6 to support the queen.',
			'Do not move the queen again without a reason.',
		],
		trap: 'Do not grab pawns with the queen: you fall behind in development.',
	},
	{
		id: 'english',
		lesson: 'english-opening',
		name: 'English Opening',
		idea: 'Control the center from the side and keep your options open.',
		moves: ['c4', 'e5', 'Nc3', 'Nf6', 'Nf3', 'Nc6'],
		notes: [
			'White controls d5 from the side.',
			'Black takes the center with a pawn.',
			'White develops and adds pressure on d5.',
			'Black develops and attacks e4.',
			'White develops and attacks e5.',
			'Black defends the pawn and develops too.',
		],
		ideas: [
			'Play g3 and Bg2 to control the long diagonal.',
			'Castle early.',
			'Choose a plan after you see Black’s setup.',
		],
		trap: 'Do not forget the d4 square: a black knight can jump there.',
	},
	{
		id: 'slav',
		lesson: 'slav-defense',
		name: 'Slav Defense',
		idea: 'Defend d5 with a pawn and keep the bishop free.',
		moves: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6'],
		notes: [
			'White takes the center with the queen pawn.',
			'Black blocks it.',
			'White attacks d5.',
			'Black defends d5 with the c-pawn and keeps the bishop free.',
			'White develops a knight.',
			'Black develops a knight too.',
		],
		ideas: [
			'Bring the bishop on c8 out to f5 before playing e6.',
			'Be ready to give the c4 pawn back.',
			'Free your game with c5 or e5.',
		],
		trap: 'Do not lock the bishop in with e6 before it has come out.',
	},
	{
		id: 'vienna',
		lesson: 'vienna-game',
		name: 'Vienna Game',
		idea: 'Develop the knight first and keep f4 in reserve.',
		moves: ['e4', 'e5', 'Nc3', 'Nf6', 'f4', 'd5'],
		notes: [
			'White takes the center.',
			'Black answers in the same way.',
			'White develops a knight and defends e4.',
			'Black develops and attacks e4.',
			'White plays the pawn break f4.',
			'Black strikes back in the center.',
		],
		ideas: [
			'Play f4 only when it is well prepared.',
			'Build the center with d4 and castle.',
			'Keep your king safe before you attack.',
		],
		trap: 'If Black takes the pawn on f4, e5 chases the knight back and White leads in development.',
	},
	{
		id: 'kings-gambit',
		lesson: 'kings-gambit',
		name: 'King’s Gambit',
		idea: 'Offer a pawn to attack fast.',
		moves: ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5'],
		notes: [
			'White takes the center.',
			'Black answers in the same way.',
			'White offers a pawn to open the f-file.',
			'Black takes the pawn.',
			'White develops and stops a check on h4.',
			'Black holds the pawn with g5.',
		],
		ideas: [
			'Develop fast and castle early.',
			'Use the open f-file.',
			'Win the pawn back when it is safe.',
		],
		trap: 'Do not leave your king in the center: the open lines work against you too.',
	},
	{
		id: 'pirc',
		lesson: 'pirc-defense',
		name: 'Pirc Defense',
		idea: 'Let White build the center, then strike at it.',
		moves: ['e4', 'd6', 'd4', 'Nf6', 'Nc3', 'g6'],
		notes: [
			'White takes the center.',
			'Black prepares to develop without taking the center.',
			'White takes more of the center.',
			'Black attacks e4.',
			'White defends e4 with a developing move.',
			'Black prepares the bishop on g7.',
		],
		ideas: [
			'Put the bishop on g7 and castle.',
			'Strike with e5 or c5 at the right moment.',
			'Be careful against f4, the Austrian Attack.',
		],
		trap: 'Do not play slowly against f4: the push e5 gains time for White.',
	},
	{
		id: 'kings-indian',
		lesson: 'kings-indian-defense',
		name: 'King’s Indian Defense',
		idea: 'Let White build the center, then attack it.',
		moves: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7'],
		notes: [
			'White takes the center with the queen pawn.',
			'Black controls e4 with a knight.',
			'White grows the center.',
			'Black prepares the bishop on g7.',
			'White develops a knight.',
			'The bishop looks along the long diagonal.',
		],
		ideas: [
			'Castle and put the bishop on g7.',
			'Break the center with e5.',
			'Attack the king with f5 later.',
		],
		trap: 'Count the moves: White’s attack on the queenside is fast, so do not play slowly.',
	},
	{
		id: 'nimzo-indian',
		lesson: 'nimzo-indian-defense',
		name: 'Nimzo-Indian Defense',
		idea: 'Pin the knight and control e4.',
		moves: ['d4', 'Nf6', 'c4', 'e6', 'Nc3', 'Bb4'],
		notes: [
			'White takes the center with the queen pawn.',
			'Black controls e4 with a knight.',
			'White takes more space.',
			'Black opens the bishop on f8.',
			'White develops a knight.',
			'Black pins the knight to the king.',
		],
		ideas: [
			'Control e4 with pieces.',
			'Trade on c3 to double White’s pawns when it helps.',
			'Castle early.',
		],
		trap: 'Do not trade the bishop on c3 for nothing: White gets the two bishops.',
	},
];

export function openingById(id: string): Opening | undefined {
	return OPENINGS.find((opening) => opening.id === id);
}

/**
 * The opening to teach a student: the first one they have not used in a class game.
 * Once they know them all, the first one comes round again as a review.
 */
export function pickOpening(known: string[]): { opening: Opening; isNew: boolean } {
	const next = OPENINGS.find((opening) => !known.includes(opening.id));
	return next ? { opening: next, isNew: true } : { opening: OPENINGS[0], isNew: false };
}
