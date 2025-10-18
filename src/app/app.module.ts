import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/app/core/core.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './core/theme/guest/guest.component';
import { PublicComponent } from './core/theme/public/public.component';
import { UserComponent } from './core/theme/user/user.component';
// config
import { environment } from 'src/environments/environment';
import { MetaGuard, WacomModule } from 'wacom';
// guards
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminsGuard } from './core/guards/admins.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';

const routes: Routes = [
	// {
	// 	path: '',
	// 	redirectTo: '/sign',
	// 	pathMatch: 'full'
	// },
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: '',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Game'
					}
				},
				loadChildren: () =>
					import('./pages/user/game/game.module').then(
						(m) => m.GameModule
					)
			},
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UserComponent,
		children: [
			/* user */
			{
				path: 'player',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Player'
					}
				},
				loadChildren: () =>
					import('./pages/user/player/player.module').then(
						(m) => m.PlayerModule
					)
			},
			{
				path: 'game',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Game'
					}
				},
				loadChildren: () =>
					import('./pages/user/game/game.module').then(
						(m) => m.GameModule
					)
			},
			{
				path: 'tournament',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Tournament'
					}
				},
				loadChildren: () =>
					import('./pages/user/tournament/tournament.module').then(
						(m) => m.TournamentModule
					)
			},
			{
				path: 'tournaments',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Tournaments'
					}
				},
				loadChildren: () =>
					import('./pages/user/tournaments/tournaments.module').then(
						(m) => m.TournamentsModule
					)
			},
			{
				path: 'players',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Players'
					}
				},
				loadChildren: () =>
					import('./pages/user/players/players.module').then(
						(m) => m.PlayersModule
					)
			},
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		]
	},
	{
		path: '',
		component: PublicComponent,
		children: [
			/* user */
			{
				path: 'document',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Document'
					}
				},
				loadChildren: () =>
					import('./pages/guest/document/document.module').then(
						(m) => m.DocumentModule
					)
			},
			{
				path: 'components',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Components'
					}
				},
				loadChildren: () =>
					import('./pages/guest/components/components.module').then(
						(m) => m.ComponentsModule
					)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'games',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Games'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cybersportsession/pages/games/games.routes'
					).then((r) => r.gamesRoutes)
			},
			{
				path: 'tournaments',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Tournaments'
					}
				},
				loadChildren: () =>
					import(
						'./modules/cybersporttournament/pages/tournaments/tournaments.routes'
					).then((r) => r.tournamentsRoutes)
			},
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		GuestComponent,
		UserComponent,
		PublicComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: environment.meta.title,
					favicon: environment.meta.favicon,
					description: environment.meta.description,
					titleSuffix: ' | ' + environment.meta.title,
					'og:image': environment.meta.image
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			},
			alert: {
				alerts: {
					/* alerts */
				}
			},
			loader: {
				loaders: {
					/* loaders */
				}
			},
			popup: {
				popups: {
					/* popups */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		/* providers */
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
