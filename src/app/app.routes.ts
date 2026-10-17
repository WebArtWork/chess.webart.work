import { Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { authGuard, guestGuard } from './feature/auth/auth.guard';
import { companyProfile } from './feature/company/company.data';

const page = (path: string, pageName: string) => ({
	pageName,
	meta: buildRouteMeta(companyProfile, path),
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
				title: companyProfile.title,
				titleSuffix: '',
			},
		},
		loadComponent: () =>
			import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
	},
	{
		// /daily and /random (/random?id=GAME-PLY) are one page: the parent keeps a single PlayComponent
		// alive while the child route (and so the shareable URL) changes.
		path: '',
		data: { pageName: 'Play' },
		loadComponent: () => import('./pages/play/play.component').then((m) => m.PlayComponent),
		children: [
			{ path: 'daily', data: { ...page('/daily', 'Play'), mode: 'daily' }, children: [] },
			{ path: 'random', data: { ...page('/random', 'Play'), mode: 'random' }, children: [] },
		],
	},
	{ path: 'dashboard', redirectTo: '' },
	{
		path: 'quiz',
		data: page('/quiz', 'Quiz'),
		loadComponent: () => import('./pages/quiz/quiz.component').then((m) => m.QuizComponent),
	},
	{
		path: 'look-ahead',
		data: page('/look-ahead', 'Look Ahead'),
		loadComponent: () =>
			import('./pages/look-ahead/look-ahead.component').then((m) => m.LookAheadComponent),
	},
	{
		path: 'games',
		data: page('/games', 'Games'),
		loadComponent: () => import('./pages/games/games.component').then((m) => m.GamesComponent),
	},
	{
		// rendered in the browser only (see app.routes.server.ts): one page serves every game
		path: 'games/:id',
		data: page('/games/:id', 'Game'),
		loadComponent: () => import('./pages/game/game.component').then((m) => m.GameComponent),
	},
	{ path: 'analyze', redirectTo: 'library' },
	{ path: 'study', redirectTo: 'library' },
	{ path: 'saved', redirectTo: 'my-games' },
	{
		path: 'library',
		data: page('/library', 'Library'),
		loadComponent: () =>
			import('./pages/library/library.component').then((m) => m.LibraryComponent),
	},
	{
		path: 'my-games',
		canActivate: [authGuard],
		data: page('/my-games', 'My games'),
		loadComponent: () => import('./pages/saved/saved.component').then((m) => m.SavedComponent),
	},
	{
		path: 'sign-in',
		canActivate: [guestGuard],
		data: page('/sign-in', 'Sign in'),
		loadComponent: () =>
			import('./pages/sign-in/sign-in.component').then((m) => m.SignInComponent),
	},
	{
		path: 'profile',
		canActivate: [authGuard],
		data: page('/profile', 'Profile'),
		loadComponent: () =>
			import('./pages/profile/profile.component').then((m) => m.ProfileComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
