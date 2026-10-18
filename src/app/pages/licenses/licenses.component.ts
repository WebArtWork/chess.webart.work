import { Component } from '@angular/core';
import { CREDITS, SOURCE_URL } from '../../feature/legal/legal.const';

/** The app's license, its source code and credits for the work it builds on. */
@Component({
	templateUrl: './licenses.component.html',
})
export class LicensesComponent {
	protected readonly credits = CREDITS;
	protected readonly sourceUrl = SOURCE_URL;
	protected readonly sourceLabel = SOURCE_URL.replace('https://', '');
}
