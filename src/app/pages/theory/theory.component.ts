import { Component } from '@angular/core';
import { HubListComponent } from '../../components/hub-list/hub-list.component';
import { THEORY_ITEMS } from '../../feature/hub/hub.const';

/** The Theory hub: training methods explained, each with the modes that practise it. */
@Component({
	imports: [HubListComponent],
	templateUrl: './theory.component.html',
})
export class TheoryComponent {
	protected readonly items = THEORY_ITEMS;
}
