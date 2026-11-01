import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, computed, DestroyRef, effect, ElementRef, inject, PLATFORM_ID, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { buildCanonicalUrl, CanonicalService } from '@wawjs/ngx-default';
import { LanguageService } from '@wawjs/ngx-translate';
import { environment } from '../environments/environment';
import { companyProfile } from './feature/company/company.data';
import { TPipe } from './feature/i18n/t.pipe';
import { ProgressService } from './feature/progress/progress.service';
import { ShareService } from './feature/share/share.service';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';

/** Longest the splash screen waits for the session and the account's progress. */
const SPLASH_LIMIT_MS = 8000;

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TopbarComponent, FooterComponent, TPipe],
	template: `
		<!-- The topbar and footer stay put; pages fit between them and scroll only where they grow. -->
		<div class="ds flex h-dvh flex-col overflow-hidden">
			<app-topbar />
			<main #main class="relative min-h-0 flex-1 overflow-y-auto overscroll-contain">
				<router-outlet />
			</main>
			<app-footer />

			<!-- Covers the app until the session and the account's progress are loaded, so no guest numbers flash. -->
			@if (splash()) {
				<div class="splash fixed inset-0 z-[100] grid place-items-center bg-bg" role="status" [attr.aria-label]="'Loading…' | t">
					<div class="flex flex-col items-center gap-5">
						<img class="size-16 rounded-2xl" src="logo.png" width="64" height="64" alt="" />
						<span class="size-8 animate-spin rounded-full border-[3px] border-line border-t-brand motion-reduce:animate-pulse" aria-hidden="true"></span>
					</div>
				</div>
			}
		</div>
	`,
})
export class App {
	private readonly _canonicalService = inject(CanonicalService);
	private readonly _document = inject(DOCUMENT);
	private readonly _languageService = inject(LanguageService);
	private readonly _main = viewChild.required<ElementRef<HTMLElement>>('main');
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly _progress = inject(ProgressService);
	/** Firebase did not answer in time: show the app anyway rather than a spinner for good. */
	private readonly _gaveUp = signal(false);
	protected readonly splash = computed(() => !this._progress.ready() && !this._gaveUp());

	constructor() {
		this._canonicalService.initialize();
		const destroyRef = inject(DestroyRef);
		afterNextRender(() => {
			const timer = setTimeout(() => this._gaveUp.set(true), SPLASH_LIMIT_MS);
			destroyRef.onDestroy(() => clearTimeout(timer));
		});
		void inject(ShareService).listenForLinks();

		// og:url follows the canonical URL; the SEO package sets the canonical link but not og:url
		const meta = inject(Meta);
		const router = inject(Router);
		const setOgUrl = (url: string) => meta.updateTag({ property: 'og:url', content: buildCanonicalUrl(companyProfile.siteUrl, url) });
		setOgUrl(router.url);

		// <main> is the scroller on phones, so the router's window scroll reset does not reach it
		router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				takeUntilDestroyed(),
			)
			.subscribe((event) => {
				setOgUrl(event.urlAfterRedirects);
				// the server's DOM has no scrolling
				if (this._isBrowser) this._main().nativeElement.scrollTop = 0;
			});

		effect(() => {
			const language = this._languageService.language();
			const htmlLang =
				environment.languages.find((item) => item.code === language)?.htmlLang ?? language;

			if (htmlLang) {
				this._document.documentElement.lang = htmlLang;
			}
		});
	}
}
