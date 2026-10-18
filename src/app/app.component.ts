import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, effect, ElementRef, inject, PLATFORM_ID, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { CanonicalService } from '@wawjs/ngx-default';
import { LanguageService } from '@wawjs/ngx-translate';
import { environment } from '../environments/environment';
import { FooterComponent } from './layouts/footer/footer.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TopbarComponent, FooterComponent],
	template: `
		<!-- The topbar and footer stay put; pages fit between them and scroll only where they grow. -->
		<div class="ds flex h-dvh flex-col overflow-hidden">
			<app-topbar />
			<main #main class="relative min-h-0 flex-1 overflow-y-auto overscroll-contain">
				<router-outlet />
			</main>
			<app-footer />
		</div>
	`,
})
export class App {
	private readonly _canonicalService = inject(CanonicalService);
	private readonly _document = inject(DOCUMENT);
	private readonly _languageService = inject(LanguageService);
	private readonly _main = viewChild.required<ElementRef<HTMLElement>>('main');
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	constructor() {
		this._canonicalService.initialize();

		// <main> is the scroller on phones, so the router's window scroll reset does not reach it
		inject(Router)
			.events.pipe(
				filter((event) => event instanceof NavigationEnd),
				takeUntilDestroyed(),
			)
			.subscribe(() => {
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
