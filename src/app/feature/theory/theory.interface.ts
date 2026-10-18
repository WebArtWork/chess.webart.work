import { HubItem } from '../hub/hub.interface';

export type TheoryCategory =
	| 'opening'
	| 'calculation'
	| 'understanding'
	| 'learning'
	| 'system'
	| 'strategy'
	| 'practical'
	| 'defense'
	| 'endgame'
	| 'attack'
	| 'visualization'
	| 'psychology'
	| 'improvement';

/** Hub blocks: the basics, the thinking styles of famous players and coaches, then the Ukrainian chess school. */
export type TheoryGroup = 'fundamentals' | 'masters' | 'ukrainian';

/**
 * A lesson's card on the Theory hub, and its route /theory/<slug>. Kept apart from the lesson text
 * (TheoryLessonBody) so the hub and the routes do not load every lesson.
 */
export interface TheoryCard {
	slug: string;
	group: TheoryGroup;
	title: string;
	/** Masters lessons: whose chess ideas inspired it; the lesson is our own material, not their course. */
	inspiredBy?: string;
	category: TheoryCategory;
	/** The skill it trains, e.g. "Organizing your calculation". */
	skill: string;
	/** Suggested rating range; an editorial guide, not an official limit. */
	level: [number, number];
	minutes: number;
}

/**
 * A block of text. `parts` nest one level as sub-headings (and a second level as bold labels),
 * `ordered` turns the points into a numbered list.
 */
export interface TheorySection {
	heading: string;
	paragraphs?: string[];
	points?: string[];
	ordered?: boolean;
	/** Paragraphs after the list. */
	after?: string[];
	parts?: TheorySection[];
}

/** A book or page for further reading. Titles stay as published. */
export interface TheorySource {
	title: string;
	author: string;
	/** Where the link goes, e.g. "Batsford Books" or "WorldCat". */
	site: string;
	url: string;
}

/**
 * A lesson's text, in English; the Ukrainian is in /i18n/theory/<slug>/ua.json, keyed by the English.
 * The page shows, in order and when present: note, idea, steps, example, sections, mistakes,
 * self-check, exercise, questions, takeaway, practice, sources.
 */
export interface TheoryLessonBody {
	slug: string;
	/** Shown first, when the lesson needs a caveat (e.g. what it does not claim). */
	note?: TheorySection;
	idea?: string[];
	/** 'How to think' or 'How to train'. */
	stepsHeading?: string;
	steps?: string[];
	example?: string[];
	sections?: TheorySection[];
	mistakes?: string[];
	selfCheck?: { question: string; answer: string };
	/** Control questions, each with a short answer the reader can reveal. */
	questions?: { question: string; answer: string }[];
	/** A task to do away from the page, e.g. in your own games. */
	exercise?: TheorySection;
	/** The lesson in one sentence, shown last. */
	takeaway?: string;
	/** Modes that train it; existing pages with filters. */
	practice: HubItem[];
	sources?: TheorySource[];
}
