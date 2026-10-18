import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubListComponent } from '../../components/hub-list/hub-list.component';
import { AuthService } from '../../feature/auth/auth.service';
import { LIBRARY_ITEMS } from '../../feature/hub/hub.const';

/** The Library hub: the analysis board, the games and your saved games. */
@Component({
	imports: [HubListComponent],
	templateUrl: './library.component.html',
})
export class LibraryComponent {
	private readonly _user = inject(AuthService).user;
	protected readonly items = LIBRARY_ITEMS;
	protected readonly status = computed<Record<string, string | null>>(() => ({
		'/library/saved': this._user() === null ? 'Sign in first' : null,
	}));

	constructor() {
		// old links opened the analysis board at /library?fen=… or /library?game=…
		const query = inject(ActivatedRoute).snapshot.queryParams;
		if (query['fen'] || query['game']) {
			void inject(Router).navigate(['/library/board'], { queryParams: query, replaceUrl: true });
		}
	}
}
