import { NgOptimizedImage } from '@angular/common';
import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { AnalysisSettingsComponent } from '../../components/analysis-settings/analysis-settings.component';
import { IconComponent } from '../../components/icon/icon.component';
import { GamesToolbarService } from '../../feature/chess/games-toolbar.service';
import { PlayModeService } from '../../feature/chess/play-mode.service';
import { PositionInputService } from '../../feature/chess/position-input.service';
import { AuthService } from '../../feature/auth/auth.service';
import { ProgressService } from '../../feature/progress/progress.service';
import { NavStateService } from '../nav-state.service';
import { NAV_LINKS } from '../nav.const';

@Component({
	selector: 'app-topbar',
	imports: [AnalysisSettingsComponent, IconComponent, NgOptimizedImage, RouterLink],
	templateUrl: './topbar.component.html',
	// no box of its own, so the sticky header sticks to the page, not to this element
	host: { class: 'contents' },
})
export class TopbarComponent {
	private readonly _auth = inject(AuthService);
	private readonly _router = inject(Router);
	protected readonly playMode = inject(PlayModeService);
	protected readonly nav = inject(NavStateService);
	protected readonly input = inject(PositionInputService);
	protected readonly games = inject(GamesToolbarService);

	private readonly _editor = viewChild<ElementRef<HTMLDialogElement>>('editor');
	private readonly _settingsDialog = viewChild<ElementRef<HTMLDialogElement>>('settingsDialog');
	protected readonly draft = signal('');

	protected readonly links = NAV_LINKS;
	protected readonly user = this._auth.user;
	protected readonly progress = inject(ProgressService);
	/** Name of the current page, from the active route's `pageName` data. */
	protected openEditor() {
		this.input.error.set('');
		this.draft.set(this.input.tab() === 'fen' ? this.input.fen() : '');
		this._editor()?.nativeElement.showModal();
	}

	protected openSettings() {
		this._settingsDialog()?.nativeElement.showModal();
	}

	protected closeSettings() {
		this._settingsDialog()?.nativeElement.close();
	}

	protected closeEditor() {
		this._editor()?.nativeElement.close();
	}

	protected load() {
		this.input.load(this.input.tab(), this.draft());
		if (!this.input.error()) this.closeEditor();
	}

	protected pickTab(tab: 'fen' | 'pgn') {
		this.input.tab.set(tab);
		this.draft.set(tab === 'fen' ? this.input.fen() : '');
		this.input.error.set('');
	}

	protected readonly pageName = toSignal(
		this._router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			startWith(null),
			map(() => _pageName(this._router.routerState.snapshot.root)),
		),
		{ initialValue: '' },
	);

	constructor() {
		// restores the Firebase session after first paint, so the profile button can show the photo
		afterNextRender(() => void this._auth.whenReady());
	}
}

function _pageName(route: ActivatedRouteSnapshot): string {
	let current: ActivatedRouteSnapshot | null = route;
	let name = '';
	while (current) {
		name = (current.data['pageName'] as string | undefined) ?? name;
		current = current.firstChild;
	}
	return name;
}
