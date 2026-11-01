import { Chess } from 'chess.js';
import { GameReason, GameResult, LessonGame, LessonPlayer, Side, StandingRow } from './lesson.interface';
import { BONUS_MOVES } from './openings';

/** `10+5` is ten minutes and a five-second increment. */
export function parseClock(timeControl: string): { baseMs: number; incrementMs: number } {
	const [minutes, seconds] = timeControl.split('+').map(Number);
	return { baseMs: (minutes || 10) * 60_000, incrementMs: (seconds || 0) * 1000 };
}

/** The clock starts once both sides have moved, so a late opponent costs no time. */
export function clockRuns(game: Pick<LessonGame, 'moves'>): boolean {
	return game.moves.length >= 2;
}

export function sideToMove(game: Pick<LessonGame, 'moves'>): Side {
	return game.moves.length % 2 === 0 ? 'white' : 'black';
}

/** Time left for a side at `now` (ms since epoch): the stored time minus what the side to move has spent. */
export function remainingMs(game: LessonGame, side: Side, now: number): number {
	const stored = side === 'white' ? game.whiteMs : game.blackMs;
	if (game.result || !clockRuns(game) || sideToMove(game) !== side || !game.lastMoveAt) return stored;
	return Math.max(0, stored - Math.max(0, now - game.lastMoveAt.getTime()));
}

/** Clocks to store with a move made at `now`: the mover pays for their thinking and gets the increment. */
export function clocksAfterMove(game: LessonGame, now: number, incrementMs: number): { whiteMs: number; blackMs: number } {
	const mover = sideToMove(game);
	const left = remainingMs(game, mover, now) + (clockRuns(game) ? incrementMs : 0);
	return mover === 'white' ? { whiteMs: left, blackMs: game.blackMs } : { whiteMs: game.whiteMs, blackMs: left };
}

/** The game after the moves, with its history so repetition and the fifty-move rule work. Throws on an illegal move. */
export function replay(moves: string[]): Chess {
	const chess = new Chess();
	for (const move of moves) chess.move(move);
	return chess;
}

/** How the game stands after the last move, or `null` while it goes on. */
export function outcomeOf(chess: Chess): { result: GameResult; reason: GameReason } | null {
	if (chess.isCheckmate()) return { result: chess.turn() === 'w' ? 'black' : 'white', reason: 'checkmate' };
	if (chess.isStalemate()) return { result: 'draw', reason: 'stalemate' };
	if (chess.isDraw()) return { result: 'draw', reason: 'draw' };
	return null;
}

const plain = (san: string) => san.replace(/[+#]/g, '');

/** How many of a side's moves, from the first, are the lesson line's moves for that side. */
export function followedCount(moves: string[], side: Side, line: string[]): number {
	const parity = side === 'white' ? 0 : 1;
	const own = moves.filter((_, index) => index % 2 === parity);
	const wanted = line.filter((_, index) => index % 2 === parity);
	let count = 0;
	while (count < wanted.length && count < own.length && plain(own[count]) === plain(wanted[count])) count++;
	return count;
}

/** The bonus: the side played the lesson line's first moves, whatever the opponent did. */
export function followedLine(moves: string[], side: Side, line: string[]): boolean {
	return followedCount(moves, side, line) >= BONUS_MOVES;
}

/** 1 for a win, a half for a draw. A bye is a win. */
export function pointsOf(game: Pick<LessonGame, 'result'>, side: Side): number {
	if (game.result === 'bye') return side === 'white' ? 1 : 0;
	if (game.result === 'draw') return 0.5;
	return game.result === side ? 1 : 0;
}

/** The table: finished games only, best first. `lineOf` gives the lesson line of an opening id. */
export function standings(
	players: Pick<LessonPlayer, 'uid' | 'name'>[],
	games: LessonGame[],
	lineOf: (openingId: string) => string[] | undefined,
): StandingRow[] {
	const rows = new Map<string, StandingRow>();
	const row = (uid: string, name: string) => {
		let found = rows.get(uid);
		if (!found) {
			found = { uid, name, played: 0, points: 0, bonus: 0, total: 0 };
			rows.set(uid, found);
		}
		return found;
	};
	for (const player of players) row(player.uid, player.name);

	for (const game of games) {
		if (!game.result) continue;
		const sides: [Side, string | null, string, string][] = [
			['white', game.white, game.whiteName, game.whiteOpening],
			['black', game.black, game.blackName, game.blackOpening],
		];
		for (const [side, uid, name, openingId] of sides) {
			if (!uid) continue;
			const entry = row(uid, name);
			entry.played++;
			entry.points += pointsOf(game, side);
			const line = lineOf(openingId);
			if (game.result !== 'bye' && line && followedLine(game.moves, side, line)) entry.bonus += 0.5;
		}
	}
	for (const entry of rows.values()) entry.total = entry.points + entry.bonus;
	return [...rows.values()].sort((a, b) => b.total - a.total || b.points - a.points || a.name.localeCompare(b.name));
}
