import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		// Depends on the signed-in user, which only exists in the browser.
		path: 'library/saved',
		renderMode: RenderMode.Client,
	},
	{
		path: 'profile',
		renderMode: RenderMode.Client,
	},
	{
		// One page for every game, filled from /game/g/<id>.json in the browser.
		path: 'library/games/:id',
		renderMode: RenderMode.Client,
	},
	{
		// old URLs, redirected in the browser so their query params (?id=, ?type=) carry over
		path: 'games/:id',
		renderMode: RenderMode.Client,
	},
	...['daily', 'random', 'quiz', 'look-ahead', 'games', 'analyze', 'study', 'my-games', 'saved'].map((path) => ({
		path,
		renderMode: RenderMode.Client as const,
	})),
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
