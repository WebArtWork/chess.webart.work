import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		// Depends on the signed-in user, which only exists in the browser.
		path: 'my-games',
		renderMode: RenderMode.Client,
	},
	{
		path: 'profile',
		renderMode: RenderMode.Client,
	},
	{
		// One page for every game, filled from /game/g/<id>.json in the browser.
		path: 'games/:id',
		renderMode: RenderMode.Client,
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
