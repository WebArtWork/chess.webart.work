import type { Category, Difficulty, Speed } from '../config.ts';
import type { CandidateGame, GameAnalysis } from '../analysis/game.ts';
import { cpLoss, whiteCp, type PositionAnalysis } from '../analysis/position.ts';
import { speedOf } from '../pgn/filter.ts';

export interface Player {
	name: string;
	rating: number;
	title?: string;
}

export interface MoveRef {
	san: string;
	uci: string;
}

/** Scores are from White's point of view; `loss` is centipawns the side to move gives up vs the best move. */
export interface CandidateMove extends MoveRef {
	rank: number;
	cp: number | null;
	mate: number | null;
	loss: number;
}

export interface Variation {
	rank: number;
	cp: number | null;
	mate: number | null;
	san: string[];
	uci: string[];
}

export interface TrainingPosition {
	/** Half-moves played before this position; the move to find is `moves[ply]`. */
	ply: number;
	moveNumber: number;
	sideToMove: 'white' | 'black';
	fen: string;
	category: Category;
	categories: Category[];
	themes: string[];
	difficulty: Difficulty;
	difficultyRating: number;
	qualityScore: number;
	bestMove: MoveRef;
	/** The opponent's best answer to the best move. */
	bestReply: MoveRef | null;
	playedMove: CandidateMove & { isBest: boolean; refutation: Variation | null };
	candidateMoves: CandidateMove[];
	principalVariations: Variation[];
	/** Plies of calculation needed to see the point of the best move. */
	calculationDepth: number;
	engineDepth: number;
}

export interface GameRecord {
	id: string;
	url: string;
	white: Player;
	black: Player;
	result: string;
	termination: string;
	date: string;
	timeControl: string;
	speed: Speed;
	eco: string | null;
	opening: string | null;
	pgn: string;
	/** SAN, one entry per half-move. */
	moves: string[];
	/** UCI, aligned with `moves`. */
	uciMoves: string[];
	plyCount: number;
	difficulty: Difficulty;
	difficultyRating: number;
	categories: Category[];
	themes: string[];
	qualityScore: number;
	uniquenessScore: number;
	/** When the batch that added this game started; games are kept in import order. */
	importedAt: string;
	trainingPositions: TrainingPosition[];
}

export function buildRecord(game: CandidateGame, analysis: GameAnalysis, uniqueness: number, importedAt: string): GameRecord {
	const h = game.headers;
	return {
		id: game.id,
		url: `https://lichess.org/${game.id}`,
		white: player(h['White'], h['WhiteElo'], h['WhiteTitle']),
		black: player(h['Black'], h['BlackElo'], h['BlackTitle']),
		result: h['Result'],
		termination: h['Termination'] ?? '',
		date: isoDate(h),
		timeControl: h['TimeControl'],
		speed: speedOf(h['TimeControl']) as Speed,
		eco: h['ECO'] && h['ECO'] !== '?' ? h['ECO'] : null,
		opening: h['Opening'] && h['Opening'] !== '?' ? h['Opening'] : null,
		pgn: toPgn(h, game.san),
		moves: game.san,
		uciMoves: game.uci,
		plyCount: game.san.length,
		difficulty: analysis.difficulty,
		difficultyRating: analysis.difficultyRating,
		categories: analysis.categories,
		themes: analysis.themes,
		qualityScore: analysis.quality,
		uniquenessScore: uniqueness,
		importedAt,
		trainingPositions: analysis.positions.map((position) => trainingPosition(position)),
	};
}

function trainingPosition(position: PositionAnalysis): TrainingPosition {
	const side = position.sideToMove;
	const bestCp = position.lines[0].cp;
	const candidateMoves: CandidateMove[] = position.lines.slice(0, 5).map((line, i) => ({
		rank: i + 1,
		san: line.san[0],
		uci: line.uci[0],
		...whiteCp(line.cp, line.mate, side),
		loss: cpLoss(bestCp, line.cp),
	}));
	const principalVariations: Variation[] = position.lines.slice(0, 5).map((line, i) => ({
		rank: i + 1,
		...whiteCp(line.cp, line.mate, side),
		san: line.san,
		uci: line.uci,
	}));
	const best = position.lines[0];
	const played = position.played;
	const isBest = played ? played.uci === best.uci[0] : false;
	return {
		ply: position.ply,
		moveNumber: Math.floor(position.ply / 2) + 1,
		sideToMove: side === 'w' ? 'white' : 'black',
		fen: position.fen,
		category: position.category,
		categories: position.categories,
		themes: position.motifs,
		difficulty: position.difficulty,
		difficultyRating: position.difficultyRating,
		qualityScore: position.quality,
		bestMove: { san: best.san[0], uci: best.uci[0] },
		bestReply: best.san.length > 1 ? { san: best.san[1], uci: best.uci[1] } : null,
		playedMove: played
			? {
					rank: candidateMoves.find((move) => move.uci === played.uci)?.rank ?? 0,
					san: played.san,
					uci: played.uci,
					...whiteCp(played.cp, played.mate, side),
					loss: cpLoss(bestCp, played.cp),
					isBest,
					refutation:
						!isBest && played.line && played.line.san.length > 1
							? { rank: 0, ...whiteCp(played.cp, played.mate, side), san: played.line.san, uci: played.line.uci }
							: null,
				}
			: { rank: 0, san: '', uci: '', cp: null, mate: null, loss: 0, isBest: false, refutation: null },
		candidateMoves,
		principalVariations,
		calculationDepth: position.calcDepth,
		engineDepth: position.depth,
	};
}

function player(name: string | undefined, rating: string | undefined, title: string | undefined): Player {
	const result: Player = { name: name ?? '?', rating: Number(rating) || 0 };
	if (title) result.title = title;
	return result;
}

function isoDate(h: Record<string, string>): string {
	const date = (h['UTCDate'] ?? h['Date'] ?? '').replaceAll('.', '-');
	return h['UTCTime'] ? `${date}T${h['UTCTime']}Z` : date;
}

const PGN_HEADERS = [
	'Event',
	'Site',
	'Date',
	'Round',
	'White',
	'Black',
	'Result',
	'UTCDate',
	'UTCTime',
	'WhiteElo',
	'BlackElo',
	'WhiteTitle',
	'BlackTitle',
	'ECO',
	'Opening',
	'TimeControl',
	'Termination',
];

/** Headers and moves of the original game, without clock and eval comments. */
export function toPgn(h: Record<string, string>, san: string[]): string {
	const headers = PGN_HEADERS.filter((key) => h[key] !== undefined).map(
		(key) => `[${key} "${h[key].replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"]`,
	);
	const moves = san.map((move, i) => (i % 2 === 0 ? `${i / 2 + 1}. ${move}` : move));
	return `${headers.join('\n')}\n\n${[...moves, h['Result']].join(' ')}\n`;
}
