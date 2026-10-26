import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { CONTACT_EMAIL, SOURCE_URL } from '../../feature/legal/legal.const';

/** The support page linked from the App Store and Google Play listings. Its translations live in /i18n/pages/support/. */
@Component({
	imports: [RouterLink, TPipe],
	templateUrl: './support.component.html',
})
export class SupportComponent {
	protected readonly email = CONTACT_EMAIL;
	protected readonly issuesUrl = SOURCE_URL + '/issues';

	constructor() {
		inject(I18nService).usePage('/i18n/pages/support/');
	}
}
