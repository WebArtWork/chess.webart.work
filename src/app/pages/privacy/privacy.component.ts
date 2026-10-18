import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_EMAIL } from '../../feature/legal/legal.const';

/**
 * The privacy policy. Keep it in step with what the app stores: AccountService, firestore.rules
 * and the wawchess_* keys in localStorage.
 */
@Component({
	imports: [RouterLink],
	templateUrl: './privacy.component.html',
})
export class PrivacyComponent {
	protected readonly updated = '18 October 2026';
	protected readonly email = CONTACT_EMAIL;
}
