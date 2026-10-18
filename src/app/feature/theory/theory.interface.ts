import { HubItem } from '../hub/hub.interface';

export interface TheorySection {
	heading: string;
	paragraphs: string[];
	/** An optional list after the paragraphs. */
	points?: string[];
}

/** A theory lesson, served at /theory/<slug>; its hub entry lives in THEORY_ITEMS. */
export interface TheoryLesson {
	slug: string;
	title: string;
	/** Whose method it is, e.g. "Alexander Kotov". */
	author: string;
	sections: TheorySection[];
	/** Modes that train this lesson, shown at the end. */
	practice: HubItem[];
}
