import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { authGuard, guestGuard } from './feature/auth/auth.guard';
import { companyProfile } from './feature/company/company.data';

const page = (path: string, title: string, description: string) => ({
	pageName: title,
	meta: {
		...buildRouteMeta(companyProfile, path),
		title,
		description,
	},
});

export const routes: Routes = [
	{
		// the home page
		path: '',
		pathMatch: 'full',
		data: {
			pageName: 'Dashboard',
			meta: {
				...buildRouteMeta(companyProfile, '/'),
				title: 'Dashboard',
				titleSuffix: '',
				description:
					'A weekly plan to improve at chess: a daily puzzle, themed practice, study and game review.',
			},
		},
		loadComponent: () =>
			import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
	},
	{
		// /daily and /random (/random?id=GAME-PLY) are one page: the parent keeps a single PlayComponent
		// alive while the child route (and so the shareable URL) changes.
		path: '',
		data: {
			pageName: 'Play',
			meta: {
				...buildRouteMeta(companyProfile, '/daily'),
				title: 'Play',
				description:
					'Daily and random chess puzzles from real games: find the best move, the good moves or play out the winning line.',
			},
		},
		loadComponent: () => import('./pages/play/play.component').then((m) => m.PlayComponent),
		children: [
			{ path: 'daily', data: { mode: 'daily' }, children: [] },
			{ path: 'random', data: { mode: 'random' }, children: [] },
		],
	},
	{ path: 'dashboard', redirectTo: '' },
	{
		path: 'quiz',
		data: page(
			'/quiz',
			'Quiz',
			'Chess puzzles from real games, one after another: solve each in one try and watch your quiz rating grow.',
		),
		loadComponent: () => import('./pages/quiz/quiz.component').then((m) => m.QuizComponent),
	},
	{
		path: 'look-ahead',
		data: page(
			'/look-ahead',
			'Look Ahead',
			'Calculate three moves deep: find every good line in a position from a real game while your opponent plays the best replies.',
		),
		loadComponent: () =>
			import('./pages/look-ahead/look-ahead.component').then((m) => m.LookAheadComponent),
	},
	{
		path: 'games',
		data: page(
			'/games',
			'Games',
			'Browse real games by training focus, theme, level and opening, replay them and solve their key positions.',
		),
		loadComponent: () =>
			import('./pages/games/games.component').then((m) => m.GamesComponent),
	},
	{
		// rendered in the browser only (see app.routes.server.ts): one page serves every game
		path: 'games/:id',
		data: page('/games', 'Game', 'Replay a real game move by move and solve its training positions.'),
		loadComponent: () => import('./pages/game/game.component').then((m) => m.GameComponent),
	},
	{ path: 'analyze', redirectTo: 'library' },
	{ path: 'study', redirectTo: 'library' },
	{ path: 'saved', redirectTo: 'my-games' },
	{
		path: 'library',
		data: page(
			'/library',
			'Library',
			'Set up any position or game, pick your candidate moves and compare them with the engine. Save games to your library.',
		),
		loadComponent: () =>
			import('./pages/library/library.component').then((m) => m.LibraryComponent),
	},
	{
		path: 'my-games',
		canActivate: [authGuard],
		data: {
			pageName: 'My games',
			meta: {
				...buildRouteMeta(companyProfile, '/my-games'),
				title: 'My games',
				robots: 'noindex, nofollow',
			},
		},
		loadComponent: () => import('./pages/saved/saved.component').then((m) => m.SavedComponent),
	},
	{
		path: 'sign-in',
		canActivate: [guestGuard],
		data: {
			pageName: 'Sign in',
			meta: {
				...buildRouteMeta(companyProfile, '/sign-in'),
				title: 'Sign in',
				description: 'Sign in to waw chess with your Google account.',
				robots: 'noindex, nofollow',
			},
		},
		loadComponent: () =>
			import('./pages/sign-in/sign-in.component').then((m) => m.SignInComponent),
	},
	{
		path: 'profile',
		canActivate: [authGuard],
		data: {
			pageName: 'Profile',
			meta: {
				...buildRouteMeta(companyProfile, '/profile'),
				title: 'Profile',
				robots: 'noindex, nofollow',
			},
		},
		loadComponent: () =>
			import('./pages/profile/profile.component').then((m) => m.ProfileComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
