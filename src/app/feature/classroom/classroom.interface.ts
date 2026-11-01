/** What the class form edits, and what is saved in `classes/{id}`. */
export interface ClassInput {
	title: string;
	/** Meeting days, Monday = 0 to Sunday = 6. */
	days: number[];
	/** Local start time, 24h, e.g. `17:00`. */
	time: string;
	/** Minutes. */
	duration: number;
	/** Game clock as minutes per player + seconds added per move, e.g. `10+5`. */
	timeControl: string;
	isPublic: boolean;
	/** Class mates, lower case. They see the class once they sign in with this email. */
	emails: string[];
}

/** A class as stored in Firestore. */
export interface ClassItem extends ClassInput {
	id: string;
	ownerUid: string;
	/** The creator's name and email, copied when the class is saved so class mates can see who leads it. Empty on older classes until the owner saves them again. */
	ownerName: string;
	ownerEmail: string;
	createdAt: Date | null;
}
