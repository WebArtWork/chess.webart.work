/** A mode page's hub, for the topbar back link (route data `parent`). */
export interface HubParent {
	path: string;
	label: string;
}

/** One row on a hub page (Practice, Library). */
export interface HubItem {
	title: string;
	detail: string;
	path: string;
	query?: Record<string, string>;
}
