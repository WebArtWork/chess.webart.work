import { inject } from '@angular/core';
import { RedirectFunction, Router, Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { authGuard, guestGuard } from './feature/auth/auth.guard';
import { companyProfile } from './feature/company/company.data';
import { THEORY_ITEMS } from './feature/hub/hub.const';
import { HubParent } from './feature/hub/hub.interface';

/** A redirect that keeps the query params, which a plain `redirectTo` string drops on the server. */
const moved =
	(path: string): RedirectFunction =>
	({ queryParams }) =>
		inject(Router).createUrlTree([path], { queryParams });

const page = (path: string, pageName: string) => ({
	pageName,
	meta: buildRouteMeta(companyProfile, path),
});

/** The hub a mode page belongs to, for the topbar back link. */
const PRACTICE: HubParent = { path: '/practice', label: 'Practice' };
const THEORY: HubParent = { path: '/theory', label: 'Theory' };
const LIBRARY: HubParent = { path: '/library', label: 'Library' };

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
	{ path: 'dashboard', redirectTo: '' },
	{
		path: 'practice',
		children: [
			{
				path: '',
				pathMatch: 'full',
				data: page('/practice', 'Practice'),
				loadComponent: () =>
					import('./pages/practice/practice.component').then((m) => m.PracticeComponent),
			},
			{
				// Daily and Good moves are one page: the parent keeps a single PlayComponent alive while
				// the child route (and so the shareable URL) changes.
				path: '',
				loadComponent: () => import('./pages/play/play.component').then((m) => m.PlayComponent),
				children: [
					{
						path: 'daily',
						data: { ...page('/practice/daily', 'Daily puzzle'), mode: 'daily', parent: PRACTICE, studyLink: true },
						children: [],
					},
					{
						path: 'good-moves',
						data: { ...page('/practice/good-moves', 'Good moves'), mode: 'random', parent: PRACTICE, studyLink: true },
						children: [],
					},
				],
			},
			{
				path: 'mate-in-one',
				data: { ...page('/practice/mate-in-one', 'Mate in 1'), quiz: 'mate1', parent: PRACTICE },
				loadComponent: () => import('./pages/quiz/quiz.component').then((m) => m.QuizComponent),
			},
			{
				path: 'mate-in-three',
				data: { ...page('/practice/mate-in-three', 'Mate in 3'), quiz: 'mate3', parent: PRACTICE },
				loadComponent: () => import('./pages/quiz/quiz.component').then((m) => m.QuizComponent),
			},
			{
				path: 'tactics',
				data: { ...page('/practice/tactics', 'Tactics'), quiz: 'mixed', parent: PRACTICE },
				loadComponent: () => import('./pages/quiz/quiz.component').then((m) => m.QuizComponent),
			},
			{
				path: 'look-ahead',
				data: { ...page('/practice/look-ahead', 'Look Ahead'), parent: PRACTICE },
				loadComponent: () =>
					import('./pages/look-ahead/look-ahead.component').then((m) => m.LookAheadComponent),
			},
		],
	},
	{
		path: 'theory',
		children: [
			{
				path: '',
				pathMatch: 'full',
				data: page('/theory', 'Theory'),
				loadComponent: () => import('./pages/theory/theory.component').then((m) => m.TheoryComponent),
			},
			// one prerendered page per lesson; the slug is the last part of its hub path
			...THEORY_ITEMS.map((item) => {
				const slug = item.path.split('/').pop()!;
				return {
					path: slug,
					data: { ...page(item.path, item.title), lesson: slug, parent: THEORY },
					loadComponent: () =>
						import('./pages/theory-lesson/theory-lesson.component').then((m) => m.TheoryLessonComponent),
				};
			}),
		],
	},
	{
		path: 'library',
		children: [
			{
				path: '',
				pathMatch: 'full',
				data: page('/library', 'Library'),
				loadComponent: () =>
					import('./pages/library/library.component').then((m) => m.LibraryComponent),
			},
			{
				path: 'board',
				data: { ...page('/library/board', 'Analysis board'), parent: LIBRARY },
				loadComponent: () => import('./pages/board/board.component').then((m) => m.BoardPageComponent),
			},
			{
				path: 'games',
				data: { ...page('/library/games', 'Games'), parent: LIBRARY },
				loadComponent: () => import('./pages/games/games.component').then((m) => m.GamesComponent),
			},
			{
				// rendered in the browser only (see app.routes.server.ts): one page serves every game
				path: 'games/:id',
				data: { ...page('/library/games/:id', 'Game'), parent: { path: '/library/games', label: 'Games' } },
				loadComponent: () => import('./pages/game/game.component').then((m) => m.GameComponent),
			},
			{
				path: 'saved',
				canActivate: [authGuard],
				data: { ...page('/library/saved', 'My games'), parent: LIBRARY },
				loadComponent: () => import('./pages/saved/saved.component').then((m) => m.SavedComponent),
			},
		],
	},
	{
		path: 'privacy',
		data: page('/privacy', 'Privacy'),
		loadComponent: () => import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
	},
	{
		path: 'licenses',
		data: page('/licenses', 'Licenses'),
		loadComponent: () => import('./pages/licenses/licenses.component').then((m) => m.LicensesComponent),
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

	// Old URLs, kept working for shared links; query params (?id=, ?category=, ?ply=) carry over.
	{ path: 'daily', pathMatch: 'full', redirectTo: moved('/practice/daily') },
	{ path: 'random', pathMatch: 'full', redirectTo: moved('/practice/good-moves') },
	{
		path: 'quiz',
		pathMatch: 'full',
		redirectTo: ({ queryParams }) => {
			const { type, ...rest } = queryParams;
			const mode = type === 'mate3' ? 'mate-in-three' : type === 'mixed' ? 'tactics' : 'mate-in-one';
			return inject(Router).createUrlTree(['/practice', mode], { queryParams: rest });
		},
	},
	{ path: 'look-ahead', pathMatch: 'full', redirectTo: moved('/practice/look-ahead') },
	{ path: 'games', pathMatch: 'full', redirectTo: moved('/library/games') },
	{ path: 'games/:id', redirectTo: ({ params, queryParams }) => inject(Router).createUrlTree(['/library/games', params['id']], { queryParams }) },
	{ path: 'analyze', pathMatch: 'full', redirectTo: moved('/library/board') },
	{ path: 'study', pathMatch: 'full', redirectTo: moved('/library/board') },
	{ path: 'my-games', pathMatch: 'full', redirectTo: moved('/library/saved') },
	{ path: 'saved', pathMatch: 'full', redirectTo: moved('/library/saved') },
	{
		path: '**',
		redirectTo: '',
	},
];
