import { LessonGame } from './lesson.interface';
import { pointsOf } from './lesson-play';

export interface SwissPlayer {
	uid: string;
	name: string;
	/** Game points so far; the lesson bonus does not count for pairing. */
	points: number;
	/** Games as white minus games as black, so the one who had fewer whites gets white. */
	balance: number;
}

export interface SwissRound {
	/** White first. */
	pairs: [white: SwissPlayer, black: SwissPlayer][];
	/** Plays nobody this round and scores a point. */
	bye: SwissPlayer | null;
}

/** Stops the search for a pairing in a class that is too big to try every way. */
const MAX_STEPS = 50_000;

const key = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

/** What the next round's pairing needs to know about the games so far. */
export function swissHistory(games: LessonGame[]): { met: Set<string>; byes: Set<string>; points: Map<string, number>; balance: Map<string, number> } {
	const met = new Set<string>();
	const byes = new Set<string>();
	const points = new Map<string, number>();
	const balance = new Map<string, number>();
	const add = (map: Map<string, number>, uid: string, value: number) => map.set(uid, (map.get(uid) ?? 0) + value);
	for (const game of games) {
		if (game.black) {
			met.add(key(game.white, game.black));
			add(balance, game.white, 1);
			add(balance, game.black, -1);
		} else {
			byes.add(game.white);
		}
		if (!game.result) continue;
		add(points, game.white, pointsOf(game, 'white'));
		if (game.black) add(points, game.black, pointsOf(game, 'black'));
	}
	return { met, byes, points, balance };
}

/**
 * Swiss pairing for one round: players with the same score meet, nobody meets twice, colours even out.
 * With an odd number the lowest player who has not had a bye sits out. Returns `null` when everyone
 * still available has already met, which ends the tournament.
 */
export function pairRound(players: SwissPlayer[], met: Set<string>, byes: Set<string>): SwissRound | null {
	if (players.length < 2) return null;
	const ranked = [...players].sort((a, b) => b.points - a.points || a.name.localeCompare(b.name) || a.uid.localeCompare(b.uid));
	let steps = 0;

	const pair = (rest: SwissPlayer[]): [SwissPlayer, SwissPlayer][] | null => {
		if (!rest.length) return [];
		if (++steps > MAX_STEPS) return null;
		const [first, ...others] = rest;
		for (let i = 0; i < others.length; i++) {
			if (met.has(key(first.uid, others[i].uid))) continue;
			const tail = pair(others.filter((_, index) => index !== i));
			if (tail) return [[first, others[i]], ...tail];
		}
		return null;
	};

	const attempt = (bye: SwissPlayer | null): SwissRound | null => {
		const found = pair(ranked.filter((player) => player !== bye));
		if (!found) return null;
		return {
			pairs: found.map(([a, b]): [SwissPlayer, SwissPlayer] => (b.balance < a.balance ? [b, a] : [a, b])),
			bye,
		};
	};

	if (ranked.length % 2 === 0) return attempt(null);
	// the lowest player without a bye first, then anyone who had one if nothing else works
	const order = [...ranked].reverse();
	for (const bye of [...order.filter((p) => !byes.has(p.uid)), ...order.filter((p) => byes.has(p.uid))]) {
		const round = attempt(bye);
		if (round) return round;
	}
	return null;
}
