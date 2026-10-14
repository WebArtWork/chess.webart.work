import { existsSync } from 'node:fs';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { Chess } from 'chess.js';
import type { LookAheadMove } from '../analysis/lookahead.ts';
import type { GameRecord, TrainingPosition } from './record.ts';

/**
 * The app's copy of the dataset, served at /game/ (see angular.json):
 *
 *   catalog.json   every game and puzzle in brief, plus filter counts: lists, filters, random picks
 *   daily.json     date → puzzle id, stable for past days
 *   quiz.json      self-contained quiz sets, e.g. every mate in 1 found in the games
 *   lookahead.json Look Ahead trees, built separately by `games:lookahead` and kept across rebuilds
 *   g/<id>.json    one game: moves and its puzzles with engine lines (~1 KB gzipped)
 *
 * Engine lines are stored once, in UCI; the app derives SAN with chess.js.
 */

export type PuzzleMode = 'best' | 'candidates' | 'line';

export interface AppLine {
	/** Space-separated UCI moves, the first one being the candidate move. */
	uci: string;
	/** White's point of view. */
	cp: number | null;
	mate: number | null;
}

export interface AppPuzzle {
	ply: number;
	fen: string;
	side: 'white' | 'black';
	mode: PuzzleMode;
	/** best: 1; candidates: how many good moves to find; line: your moves in the solution. */
	target: number;
	category: string;
	categories: string[];
	themes: string[];
	level: string;
	rating: number;
	quality: number;
	/** line mode: the solution, plies from `fen` (yours and the forced replies). */
	solution: string[];
	/** Engine's candidate moves, best first. */
	lines: AppLine[];
	/** The move played in the game; `line` shows how it is answered. */
	played: AppLine;
}

export interface AppGame {
	id: string;
	url: string;
	white: { name: string; rating: number; title?: string };
	black: { name: string; rating: number; title?: string };
	result: string;
	termination: string;
	date: string;
	timeControl: string;
	speed: string;
	eco: string | null;
	opening: string | null;
	/** SAN, space-separated. */
	moves: string;
	level: string;
	rating: number;
	categories: string[];
	themes: string[];
	quality: number;
	puzzles: AppPuzzle[];
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
	level: string;
	rating: number;
	categories: string[];
	themes: string[];
	quality: number;
	/** Ids of this game's puzzles, in game order. */
	puzzles: string[];
}

export interface CatalogPuzzle {
	/** `<gameId>-<ply>`. */
	id: string;
	game: string;
	ply: number;
	fen: string;
	side: 'white' | 'black';
	mode: PuzzleMode;
	target: number;
	category: string;
	categories: string[];
	themes: string[];
	level: string;
	rating: number;
	/** Opening family, e.g. "Sicilian Defense". */
	opening: string;
}

export interface Catalog {
	version: string;
	games: CatalogGame[];
	puzzles: CatalogPuzzle[];
	/** How many puzzles carry each value, for filter chips. */
	facets: Record<'category' | 'theme' | 'level' | 'mode' | 'side' | 'opening', Record<string, number>>;
}

/** A quiz puzzle that needs no game file: the position and one correct move (other mates count too). */
export interface QuizItem {
	/** `<gameId>-<ply>`. */
	id: string;
	game: string;
	ply: number;
	fen: string;
	side: 'white' | 'black';
	/** A winning move in UCI; for mate-in-1 sets any mating move is accepted. */
	move: string;
	rating: number;
	opening: string;
}

export interface QuizSets {
	mate1: QuizItem[];
}

/** A Look Ahead position: find the paths through its tree of good moves. Needs no game file. */
export interface LookAheadItem {
	/** `<gameId>-<ply>`, like the puzzle it comes from. */
	id: string;
	game: string;
	ply: number;
	fen: string;
	side: 'white' | 'black';
	rating: number;
	level: string;
	opening: string;
	/** Leaves of `tree`. */
	paths: number;
	tree: LookAheadMove[];
}

/** Days ahead the daily schedule is planned. */
const DAILY_DAYS = 400;
/** Target puzzle rating per weekday (0 = Sunday): easier early in the week, harder at the end. */
const DAILY_RATING = [1200, 900, 1050, 1150, 1250, 1350, 1450];
/** Moves within this many centipawns of the best count as good in candidate-move puzzles. */
export const GOOD_LOSS = 50;
/** Good moves a position needs to become a "find the good moves" puzzle (the Play page uses only these). */
export const MIN_GOOD_MOVES = 3;
export const LOOK_AHEAD_FILE = 'lookahead.json';

export function puzzleId(game: string, ply: number): string {
	return `${game}-${ply}`;
}

export function openingFamily(name: string | null): string {
	return (name ?? '').split(':')[0].trim() || 'Unknown opening';
}

/** Which exercise fits a position: find the best move, find the good moves, or play the line. */
export function exercise(position: TrainingPosition): { mode: PuzzleMode; target: number; solution: string[] } {
	const best = position.principalVariations[0]?.uci ?? [];
	const good = position.candidateMoves.filter((move) => move.loss <= GOOD_LOSS).length;
	if (good >= MIN_GOOD_MOVES) {
		return { mode: 'candidates', target: Math.min(good, position.candidateMoves.length), solution: [] };
	}
	const depth = position.calculationDepth;
	const tactical = position.categories.includes('calculation') || position.categories.includes('tactics');
	if (tactical && depth >= 3 && best.length >= depth) {
		const solution = best.slice(0, depth % 2 ? depth : depth + 1);
		return { mode: 'line', target: Math.ceil(solution.length / 2), solution };
	}
	return { mode: 'best', target: 1, solution: [] };
}

export function appGame(game: GameRecord): AppGame {
	return {
		id: game.id,
		url: game.url,
		white: game.white,
		black: game.black,
		result: game.result,
		termination: game.termination,
		date: game.date,
		timeControl: game.timeControl,
		speed: game.speed,
		eco: game.eco,
		opening: game.opening,
		moves: game.moves.join(' '),
		level: game.difficulty,
		rating: game.difficultyRating,
		categories: game.categories,
		themes: game.themes,
		quality: game.qualityScore,
		puzzles: game.trainingPositions.map((position) => {
			const { mode, target, solution } = exercise(position);
			return {
				ply: position.ply,
				fen: position.fen,
				side: position.sideToMove,
				mode,
				target,
				category: position.category,
				categories: position.categories,
				themes: position.themes,
				level: position.difficulty,
				rating: position.difficultyRating,
				quality: position.qualityScore,
				solution,
				lines: position.principalVariations.map((line) => ({ uci: line.uci.join(' '), cp: line.cp, mate: line.mate })),
				played: {
					uci: [position.playedMove.uci, ...(position.playedMove.refutation?.uci.slice(1) ?? [])].join(' '),
					cp: position.playedMove.cp,
					mate: position.playedMove.mate,
				},
			};
		}),
	};
}

export function buildCatalog(games: AppGame[], version: string): Catalog {
	const facets: Catalog['facets'] = { category: {}, theme: {}, level: {}, mode: {}, side: {}, opening: {} };
	const count = (facet: keyof Catalog['facets'], value: string) => (facets[facet][value] = (facets[facet][value] ?? 0) + 1);
	const puzzles: CatalogPuzzle[] = [];
	for (const game of games) {
		const opening = openingFamily(game.opening);
		for (const puzzle of game.puzzles) {
			puzzles.push({
				id: puzzleId(game.id, puzzle.ply),
				game: game.id,
				ply: puzzle.ply,
				fen: puzzle.fen,
				side: puzzle.side,
				mode: puzzle.mode,
				target: puzzle.target,
				category: puzzle.category,
				categories: puzzle.categories,
				themes: puzzle.themes,
				level: puzzle.level,
				rating: puzzle.rating,
				opening,
			});
			for (const category of puzzle.categories) count('category', category);
			for (const theme of puzzle.themes) if (!theme.startsWith('mateIn')) count('theme', theme);
			count('level', puzzle.level);
			count('mode', puzzle.mode);
			count('side', puzzle.side);
			count('opening', opening);
		}
	}
	return {
		version,
		games: games.map((game) => ({
			id: game.id,
			white: game.white.name,
			whiteRating: game.white.rating,
			black: game.black.name,
			blackRating: game.black.rating,
			result: game.result,
			date: game.date,
			speed: game.speed,
			opening: game.opening,
			plies: game.moves ? game.moves.split(' ').length : 0,
			level: game.level,
			rating: game.rating,
			categories: game.categories,
			themes: game.themes,
			quality: game.quality,
			puzzles: game.puzzles.map((puzzle) => puzzleId(game.id, puzzle.ply)),
		})),
		puzzles,
		facets,
	};
}

/**
 * Every mate in 1 in the games: the move before a checkmate that ended the game, and training
 * positions whose best line mates at once. Rated by how many other checks compete with the mate,
 * whether it is a quiet piece move, and how unusual the mating piece is.
 */
export function mateInOne(games: GameRecord[]): QuizItem[] {
	const items = new Map<string, QuizItem>();
	const add = (game: GameRecord, ply: number, fen: string, move: string) => {
		const id = puzzleId(game.id, ply);
		if (items.has(id)) return;
		const chess = new Chess(fen);
		const moves = chess.moves({ verbose: true });
		const mates = moves.filter((candidate) => candidate.san.endsWith('#'));
		const mate = mates.find((candidate) => candidate.lan === move);
		if (!mate) return;
		const otherChecks = moves.filter((candidate) => candidate.san.endsWith('+')).length;
		let rating = 500 + 45 * Math.min(otherChecks, 8);
		if (!mate.captured) rating += 80;
		if (mate.piece === 'n' || mate.piece === 'b' || mate.piece === 'p') rating += 100;
		if (mate.promotion) rating += 80;
		rating -= 50 * (mates.length - 1);
		items.set(id, {
			id,
			game: game.id,
			ply,
			fen,
			side: chess.turn() === 'w' ? 'white' : 'black',
			move,
			rating: Math.max(400, Math.min(1200, Math.round(rating / 10) * 10)),
			opening: openingFamily(game.opening),
		});
	};
	for (const game of games) {
		for (const position of game.trainingPositions) {
			const best = position.principalVariations[0];
			if (best && best.mate !== null && Math.abs(best.mate) === 1) add(game, position.ply, position.fen, best.uci[0]);
		}
		if (game.moves.at(-1)?.endsWith('#')) {
			const chess = new Chess();
			for (const san of game.moves.slice(0, -1)) chess.move(san);
			add(game, game.moves.length - 1, chess.fen(), game.uciMoves.at(-1) as string);
		}
	}
	return [...items.values()].sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Date → puzzle id. Past days keep their puzzle (even if its game was removed since); today and
 * later keep theirs while the puzzle exists. Open days get an unused puzzle near the weekday's
 * target rating, picked deterministically from the date.
 */
export function planDaily(previous: Record<string, string>, puzzles: CatalogPuzzle[], today: string): Record<string, string> {
	// the daily puzzle is a Play puzzle: find the good moves
	puzzles = puzzles.filter((puzzle) => puzzle.mode === 'candidates');
	const exists = new Set(puzzles.map((puzzle) => puzzle.id));
	const schedule: Record<string, string> = {};
	for (const [date, id] of Object.entries(previous)) {
		if (date < today || exists.has(id)) schedule[date] = id;
	}
	if (!puzzles.length) return schedule;

	const used = new Map<string, string>(); // puzzle id → last date
	for (const [date, id] of Object.entries(schedule)) if ((used.get(id) ?? '') < date) used.set(id, date);

	const day = new Date(`${today}T00:00:00Z`);
	for (let i = 0; i < DAILY_DAYS; i++, day.setUTCDate(day.getUTCDate() + 1)) {
		const date = day.toISOString().slice(0, 10);
		if (schedule[date]) continue;
		const target = DAILY_RATING[day.getUTCDay()];
		const seed = hash(date);
		// unused first, then the longest unused; closest rating; the date breaks ties
		const pick = [...puzzles].sort(
			(a, b) =>
				(used.get(a.id) ?? '').localeCompare(used.get(b.id) ?? '') ||
				Math.abs(a.rating - target) - Math.abs(b.rating - target) ||
				(hash(a.id) ^ seed) - (hash(b.id) ^ seed),
		)[0];
		schedule[date] = pick.id;
		used.set(pick.id, date);
	}
	return Object.fromEntries(Object.entries(schedule).sort(([a], [b]) => a.localeCompare(b)));
}

/**
 * Writes the app files for `games` into `dir` (src/data/game/app): staged, then swapped in, so
 * the app never sees a half-written set.
 */
export async function writeAppData(games: GameRecord[], dir: string, today = new Date().toISOString().slice(0, 10)): Promise<Catalog> {
	const staging = `${dir}.staging-${process.pid}`;
	await rm(staging, { recursive: true, force: true });
	await mkdir(path.join(staging, 'g'), { recursive: true });

	const appGames = games.map(appGame);
	for (const game of appGames) await writeFile(path.join(staging, 'g', `${game.id}.json`), JSON.stringify(game));
	const catalog = buildCatalog(appGames, new Date().toISOString());
	await writeFile(path.join(staging, 'catalog.json'), JSON.stringify(catalog));
	const quiz: QuizSets = { mate1: mateInOne(games) };
	await writeFile(path.join(staging, 'quiz.json'), JSON.stringify(quiz));

	// Look Ahead trees take long to build: keep the ones whose game is still here
	const lookAheadFile = path.join(dir, LOOK_AHEAD_FILE);
	if (existsSync(lookAheadFile)) {
		const ids = new Set(games.map((game) => game.id));
		const items = JSON.parse(await readFile(lookAheadFile, 'utf8')) as LookAheadItem[];
		await writeFile(path.join(staging, LOOK_AHEAD_FILE), JSON.stringify(items.filter((item) => ids.has(item.game))));
	}

	const dailyFile = path.join(dir, 'daily.json');
	const previous = existsSync(dailyFile) ? (JSON.parse(await readFile(dailyFile, 'utf8')) as Record<string, string>) : {};
	await writeFile(path.join(staging, 'daily.json'), JSON.stringify(planDaily(previous, catalog.puzzles, today), null, '\t') + '\n');

	const old = `${dir}.old-${process.pid}`;
	if (existsSync(dir)) await rename(dir, old);
	await rename(staging, dir);
	await rm(old, { recursive: true, force: true });
	return catalog;
}

function hash(text: string): number {
	let value = 0x811c9dc5;
	for (let i = 0; i < text.length; i++) value = Math.imul(value ^ text.charCodeAt(i), 0x01000193);
	return value >>> 0;
}
