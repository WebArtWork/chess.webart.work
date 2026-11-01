/** `classes/{classId}/lessons/{lessonId}`: one sitting of a class. The latest one is the live lesson. */
export interface LessonItem {
	id: string;
	/** `finished` once the owner ends the tournament; the lesson stays readable. */
	status: 'open' | 'finished';
	createdAt: Date | null;
}

/** `.../lessons/{lessonId}/players/{uid}`: a class member who opened the lesson. */
export interface LessonPlayer {
	uid: string;
	name: string;
	/** The opening picked for this student when they joined. */
	openingId: string;
	ready: boolean;
}

export type GameResult = 'white' | 'black' | 'draw' | 'bye';

/** How a game ended: `checkmate`, `stalemate` and `draw` come with a move; the rest are claimed by a player. */
export type GameReason = 'checkmate' | 'stalemate' | 'draw' | 'resign' | 'agreement' | 'time';

export type Side = 'white' | 'black';

/**
 * `.../lessons/{lessonId}/games/{gameId}`: one pairing of a round. Moves are SAN from the start position.
 * The clocks hold the time left after the last move; the side to move spends time since `lastMoveAt`.
 */
export interface LessonGame {
	id: string;
	round: number;
	white: string;
	/** `null` for a bye: the player gets a point without playing. */
	black: string | null;
	whiteName: string;
	blackName: string;
	whiteOpening: string;
	blackOpening: string;
	moves: string[];
	whiteMs: number;
	blackMs: number;
	lastMoveAt: Date | null;
	result: GameResult | null;
	reason: GameReason | null;
	/** Uid of the player who offered a draw. */
	drawOffer: string | null;
}

/** A game before it is saved: the owner creates it when a round starts. */
export type NewLessonGame = Omit<LessonGame, 'id' | 'lastMoveAt'>;

export interface StandingRow {
	uid: string;
	name: string;
	played: number;
	/** From results; a bye counts as a win. */
	points: number;
	/** Half a point for each game that followed the lesson line. */
	bonus: number;
	total: number;
}
