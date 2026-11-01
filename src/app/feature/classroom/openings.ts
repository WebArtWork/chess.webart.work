import { THEORY_CATALOG } from '../theory/theory.catalog';
import { TheoryCard, TheoryLessonBody } from '../theory/theory.interface';

/** Own moves of the lesson line that earn the bonus (three moves for each side is six plies). */
export const BONUS_MOVES = 3;

/**
 * An opening a class teaches: one of the Theory hub's opening lessons, so the text, its translations
 * and the line are written once. The line is read from the lesson's steps ("3.Bc4 Bc5: ...").
 */
export interface Opening {
	/** The lesson's slug, `/theory/<id>`. */
	id: string;
	card: TheoryCard;
	lesson: TheoryLessonBody;
	/** SAN from the start position, as far as the lesson's steps spell it out. */
	moves: string[];
	/** The lesson's step for each full move, same order: `steps[0]` explains moves 1 and 2. */
	steps: string[];
}

/** Ids a student's history stored while the class had its own opening list; they are read as the lesson slug. */
const LEGACY_IDS: Record<string, string> = {
	italian: 'italian-game',
	scotch: 'scotch-game',
	sicilian: 'sicilian-defense',
	london: 'london-system',
	'caro-kann': 'caro-kann-defense',
	french: 'french-defense',
	scandinavian: 'scandinavian-defense',
	english: 'english-opening',
	slav: 'slav-defense',
	vienna: 'vienna-game',
	pirc: 'pirc-defense',
	'kings-indian': 'kings-indian-defense',
	'nimzo-indian': 'nimzo-indian-defense',
};

/** "1.e4 e5: ..." or "3.Qxd5: ...": the move number, White's move and, if there is one, Black's. */
const STEP = /^(\d+)\.\s*([^\s:]+)(?:\s+([^\s:]+))?\s*:/;

/** The moves a lesson's steps play, in order. Stops at the first step that is not the next move. */
export function movesOfSteps(steps: string[] = []): string[] {
	const moves: string[] = [];
	for (let index = 0; index < steps.length; index++) {
		const match = STEP.exec(steps[index]);
		if (!match || Number(match[1]) !== index + 1) break;
		moves.push(match[2]);
		if (!match[3]) break;
		moves.push(match[3]);
	}
	return moves;
}

/** The opening lessons of the Theory hub, in hub order, that spell out at least the bonus line. */
export function buildOpenings(lessons: TheoryLessonBody[]): Opening[] {
	return THEORY_CATALOG.filter((card) => card.group === 'openings' && card.slug !== 'how-openings-work').flatMap((card) => {
		const lesson = lessons.find((item) => item.slug === card.slug);
		const moves = movesOfSteps(lesson?.steps);
		if (!lesson?.steps || moves.length < BONUS_MOVES * 2) return [];
		return [{ id: card.slug, card, lesson, moves, steps: lesson.steps.slice(0, Math.ceil(moves.length / 2)) }];
	});
}

let loading: Promise<Opening[]> | null = null;

/** Loads the lesson texts once, when a class lesson needs them, so they stay out of the main bundle. */
export function loadOpenings(): Promise<Opening[]> {
	loading ??= import('../theory/lessons').then(({ THEORY_LESSONS }) => buildOpenings(THEORY_LESSONS));
	return loading;
}

/** The lesson slug for an id stored by this or an earlier version. */
export function resolveId(id: string): string {
	return LEGACY_IDS[id] ?? id;
}

export function openingById(openings: Opening[], id: string): Opening | undefined {
	const slug = resolveId(id);
	return openings.find((opening) => opening.id === slug);
}

/**
 * The opening to teach a student: the first one they have not used in a class game.
 * Once they know them all, the first one comes round again as a review.
 */
export function pickOpening(openings: Opening[], known: string[]): { opening: Opening; isNew: boolean } | null {
	const used = known.map(resolveId);
	const next = openings.find((opening) => !used.includes(opening.id));
	if (next) return { opening: next, isNew: true };
	return openings.length ? { opening: openings[0], isNew: false } : null;
}

/** "Italian Game" from a catalog title like "Italian Game: simple development, quick attack". */
export function openingName(title: string): string {
	return title.split(':')[0].trim();
}
