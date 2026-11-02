import { NgOptimizedImage } from '@angular/common';
import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { AnalysisSettingsComponent } from '../../components/analysis-settings/analysis-settings.component';
import { EmailQrComponent } from '../../components/email-qr/email-qr.component';
import { IconComponent } from '../../components/icon/icon.component';
import { IconName } from '../../components/icon/icon.data';
import { LessonToolbarService, LessonView } from '../../feature/classroom/lesson-toolbar.service';
import { GamesToolbarService } from '../../feature/chess/games-toolbar.service';
import { PlayModeService } from '../../feature/chess/play-mode.service';
import { PositionInputService } from '../../feature/chess/position-input.service';
import { AuthService } from '../../feature/auth/auth.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { TheoryToolbarService } from '../../feature/theory/theory-toolbar.service';
import { ProgressService } from '../../feature/progress/progress.service';
import { ShareService } from '../../feature/share/share.service';
import { NavStateService } from '../nav-state.service';
import { NAV_LINKS } from '../nav.const';

@Component({
	selector: 'app-topbar',
	imports: [AnalysisSettingsComponent, EmailQrComponent, IconComponent, NgOptimizedImage, RouterLink, TPipe],
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
	protected readonly theory = inject(TheoryToolbarService);
	protected readonly lesson = inject(LessonToolbarService);
	protected readonly lessonViews: { id: LessonView; label: string; icon: IconName }[] = [
		{ id: 'theory', label: 'Theory', icon: 'study' },
		{ id: 'game', label: 'Game', icon: 'play' },
		{ id: 'tournament', label: 'Tournament', icon: 'trophy' },
	];

	private readonly _editor = viewChild<ElementRef<HTMLDialogElement>>('editor');
	private readonly _settingsDialog = viewChild<ElementRef<HTMLDialogElement>>('settingsDialog');
	protected readonly draft = signal('');

	protected readonly links = NAV_LINKS;
	protected readonly user = this._auth.user;
	protected readonly progress = inject(ProgressService);
	protected readonly sharing = inject(ShareService);

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

	/** The active route's data, deepest level winning: page name and Study link. */
	protected readonly route = toSignal(
		this._router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			startWith(null),
			map(() => _routeData(this._router.routerState.snapshot.root)),
		),
		{ initialValue: {} as TopbarData },
	);

	constructor() {
		// restores the Firebase session after first paint, so the profile button can show the photo
		afterNextRender(() => void this._auth.whenReady());
	}
}

interface TopbarData {
	pageName?: string;
	/** Puzzle pages that offer "Study this position". */
	studyLink?: boolean;
	/** Pages that put a plus button in the bar, linking here. */
	createPath?: string;
	/** Pages that put a button in the bar showing the user's email as a QR code. */
	emailQr?: boolean;
}

function _routeData(route: ActivatedRouteSnapshot): TopbarData {
	let current: ActivatedRouteSnapshot | null = route;
	let data: TopbarData = {};
	while (current) {
		data = { ...data, ...(current.data as TopbarData) };
		current = current.firstChild;
	}
	return data;
}
