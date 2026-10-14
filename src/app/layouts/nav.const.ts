import { IconName } from '../components/icon/icon.data';

export interface NavLink {
	label: string;
	path: string;
	icon: IconName;
	/** URL prefixes that mark this link as current; defaults to `path`. */
	matches?: string[];
}

export const NAV_LINKS: NavLink[] = [
	{ label: 'Play', path: '/daily', icon: 'play', matches: ['/daily', '/random'] },
	{ label: 'Quiz', path: '/quiz', icon: 'check' },
	{ label: 'Look Ahead', path: '/look-ahead', icon: 'eye' },
	{ label: 'Games', path: '/games', icon: 'study' },
	{ label: 'Library', path: '/library', icon: 'library' },
];
