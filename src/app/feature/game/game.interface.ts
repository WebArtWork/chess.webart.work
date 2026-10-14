/**
 * The games dataset as served at /game/ (built by tools/chess-import from src/data/game/games.json):
 * catalog.json, daily.json, quiz.json, lookahead.json and one g/<id>.json per game.
 */

import { Side } from '../chess/chess.interface';

export type PuzzleMode = 'best' | 'candidates' | 'line';

export type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type PuzzleCategory =
	| 'tactics'
	| 'calculation'
	| 'candidateMoves'
	| 'positional'
	| 'attack'
	| 'defense'
	| 'endgame'
	| 'criticalDecision';

/** An engine line; scores are from White's point of view. */
export interface EngineLine {
	/** Space-separated UCI moves; the first one is the candidate move. */
	uci: string;
	cp: number | null;
	mate: number | null;
}

export interface PuzzleData {
	/** Half-moves played before this position; the game continued with move `ply`. */
	ply: number;
	fen: string;
	side: Side;
	mode: PuzzleMode;
	/** best: 1; candidates: good moves to find; line: your moves in the solution. */
	target: number;
	category: PuzzleCategory;
	categories: PuzzleCategory[];
	themes: string[];
	level: Level;
	rating: number;
	quality: number;
	/** line mode: UCI plies from `fen`, yours first, ending on your move. */
	solution: string[];
	/** Best first. */
	lines: EngineLine[];
	/** The move played in the game, with how it is answered. */
	played: EngineLine;
}

export interface Player {
	name: string;
	rating: number;
	title?: string;
}

export interface GameData {
	id: string;
	url: string;
	white: Player;
	black: Player;
	result: string;
	termination: string;
	date: string;
	timeControl: string;
	speed: string;
	eco: string | null;
	opening: string | null;
	/** SAN, space-separated. */
	moves: string;
	level: Level;
	rating: number;
	categories: PuzzleCategory[];
	themes: string[];
	quality: number;
	puzzles: PuzzleData[];
}

export interface CatalogGame {
	id: string;
	white: string;
	whiteRating: number;
	black: string;
	blackRating: number;
	result: string;
	date: string;
	speed: string;
	opening: string | null;
	plies: number;
	level: Level;
	rating: number;
	categories: PuzzleCategory[];
	themes: string[];
	quality: number;
	/** Puzzle ids in game order. */
	puzzles: string[];
}

export interface CatalogPuzzle {
	/** `<gameId>-<ply>`. */
	id: string;
	game: string;
	ply: number;
	fen: string;
	side: Side;
	mode: PuzzleMode;
	target: number;
	category: PuzzleCategory;
	categories: PuzzleCategory[];
	themes: string[];
	level: Level;
	rating: number;
	/** Opening family, e.g. "Sicilian Defense". */
	opening: string;
}

export type FacetKey = 'category' | 'theme' | 'level' | 'mode' | 'side' | 'opening';

export interface Catalog {
	version: string;
	games: CatalogGame[];
	puzzles: CatalogPuzzle[];
	/** Puzzles per value, for filter chips. */
	facets: Record<FacetKey, Record<string, number>>;
}

/** A puzzle with the game it comes from. */
export interface Puzzle {
	id: string;
	game: GameData;
	puzzle: PuzzleData;
}

/** Filter values; an empty list means any. */
export interface PuzzleFilters {
	category: string[];
	theme: string[];
	level: string[];
	mode: string[];
	side: string[];
	opening: string[];
	/** Text searched in opening and player names. */
	search: string;
}

/** A quiz puzzle that needs no game file: the position and one correct move. */
export interface QuizItem {
	/** `<gameId>-<ply>`. */
	id: string;
	game: string;
	ply: number;
	fen: string;
	side: Side;
	/** A winning move in UCI; in mate-in-1 sets any mating move counts. */
	move: string;
	rating: number;
	opening: string;
}

/** quiz.json: self-contained quiz sets. */
export interface QuizSets {
	mate1: QuizItem[];
}

/** A Look Ahead move: yours, the opponent's best reply, and your good moves after it. */
export interface LookAheadMove {
	/** UCI. */
	move: string;
	/** UCI; null on your last move or when the game is over. */
	reply: string | null;
	/** Empty at the end of a path. */
	next: LookAheadMove[];
}

/** lookahead.json: positions with a tree of good moves, three of your moves deep. */
export interface LookAheadItem {
	/** `<gameId>-<ply>`. */
	id: string;
	game: string;
	ply: number;
	fen: string;
	side: Side;
	rating: number;
	level: Level;
	opening: string;
	/** Paths to find: the leaves of `tree`. */
	paths: number;
	tree: LookAheadMove[];
}
