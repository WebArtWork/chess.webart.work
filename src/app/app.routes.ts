import { inject } from '@angular/core';
import { RedirectFunction, Router, Routes } from '@angular/router';
import { buildRouteMeta } from '@wawjs/ngx-default';
import { authGuard, guestGuard } from './feature/auth/auth.guard';
import { companyProfile } from './feature/company/company.data';
import { THEORY_CATALOG } from './feature/theory/theory.catalog';

/** A redirect that keeps the query params, which a plain `redirectTo` string drops on the server. */
const moved =
	(path: string): RedirectFunction =>
	({ queryParams }) =>
		inject(Router).createUrlTree([path], { queryParams });

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
						data: { ...page('/practice/daily', 'Daily puzzle'), mode: 'daily', studyLink: true },
						children: [],
					},
					{
						path: 'good-moves',
						data: { ...page('/practice/good-moves', 'Good moves'), mode: 'random', studyLink: true },
						children: [],
					},
				],
			},
			{
				path: 'mate-in-one',
				data: { ...page('/practice/mate-in-one', 'Mate in 1'), practice: 'mate1' },
				loadComponent: () => import('./pages/puzzle-practice/puzzle-practice.component').then((m) => m.PuzzlePracticeComponent),
			},
			{
				path: 'mate-in-three',
				data: { ...page('/practice/mate-in-three', 'Mate in 3'), practice: 'mate3' },
				loadComponent: () => import('./pages/puzzle-practice/puzzle-practice.component').then((m) => m.PuzzlePracticeComponent),
			},
			{
				path: 'tactics',
				data: { ...page('/practice/tactics', 'Tactics'), practice: 'mixed' },
				loadComponent: () => import('./pages/puzzle-practice/puzzle-practice.component').then((m) => m.PuzzlePracticeComponent),
			},
			{
				path: 'look-ahead',
				data: { ...page('/practice/look-ahead', 'Look Ahead') },
				loadComponent: () =>
					import('./pages/look-ahead/look-ahead.component').then((m) => m.LookAheadComponent),
			},
			{
				path: 'endgames',
				data: { ...page('/practice/endgames', 'Endgame technique'), practice: 'endgame' },
				loadComponent: () =>
					import('./pages/puzzle-practice/puzzle-practice.component').then((m) => m.PuzzlePracticeComponent),
			},
			{
				path: 'review',
				data: page('/practice/review', 'Review'),
				loadComponent: () => import('./pages/review/review.component').then((m) => m.ReviewComponent),
			},
			{
				path: 'threats',
				data: page('/practice/threats', 'What’s the threat?'),
				loadComponent: () => import('./pages/threats/threats.component').then((m) => m.ThreatsComponent),
			},
			{
				path: 'who-is-better',
				data: page('/practice/who-is-better', 'Who is better?'),
				loadComponent: () =>
					import('./pages/who-is-better/who-is-better.component').then((m) => m.WhoIsBetterComponent),
			},
			{
				path: 'spot-the-feature',
				data: page('/practice/spot-the-feature', 'Spot the feature'),
				loadComponent: () =>
					import('./pages/spot-the-feature/spot-the-feature.component').then((m) => m.SpotTheFeatureComponent),
			},
			{
				path: 'is-it-safe',
				data: page('/practice/is-it-safe', 'Is it safe?'),
				loadComponent: () => import('./pages/is-it-safe/is-it-safe.component').then((m) => m.IsItSafeComponent),
			},
			{
				path: 'see-it',
				data: page('/practice/see-it', 'See it in your head'),
				loadComponent: () => import('./pages/see-it/see-it.component').then((m) => m.SeeItComponent),
			},
			{
				path: 'opening-moves',
				data: page('/practice/opening-moves', 'Opening moves'),
				loadComponent: () =>
					import('./pages/opening-moves/opening-moves.component').then((m) => m.OpeningMovesComponent),
			},
			{
				path: 'chess-basics',
				data: page('/practice/chess-basics', 'Chess basics'),
				loadComponent: () =>
					import('./pages/chess-basics/chess-basics.component').then((m) => m.ChessBasicsComponent),
			},
			{
				path: 'sound-sacrifice',
				data: page('/practice/sound-sacrifice', 'Sound sacrifice?'),
				loadComponent: () =>
					import('./pages/sound-sacrifice/sound-sacrifice.component').then((m) => m.SoundSacrificeComponent),
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
			// one prerendered page per lesson
			...THEORY_CATALOG.map((card) => ({
				path: card.slug,
				data: { ...page(`/theory/${card.slug}`, card.title), lesson: card.slug },
				loadComponent: () =>
					import('./pages/theory-lesson/theory-lesson.component').then((m) => m.TheoryLessonComponent),
			})),
			// the first lesson's old address
			{ path: 'kotov', redirectTo: '/theory/candidate-moves' },
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
				data: { ...page('/library/board', 'Analysis board') },
				loadComponent: () => import('./pages/board/board.component').then((m) => m.BoardPageComponent),
			},
			{
				path: 'games',
				data: { ...page('/library/games', 'Games') },
				loadComponent: () => import('./pages/games/games.component').then((m) => m.GamesComponent),
			},
			{
				// rendered in the browser only (see app.routes.server.ts): one page serves every game
				path: 'games/:id',
				data: { ...page('/library/games/:id', 'Game') },
				loadComponent: () => import('./pages/game/game.component').then((m) => m.GameComponent),
			},
			{
				path: 'saved',
				canActivate: [authGuard],
				data: { ...page('/library/saved', 'My games') },
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
