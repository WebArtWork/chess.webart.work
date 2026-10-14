import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { CompanyService } from '../../feature/company/company.service';
import { NavStateService } from '../nav-state.service';
import { NAV_LINKS } from '../nav.const';

@Component({
	selector: 'app-footer',
	imports: [IconComponent, RouterLink],
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	protected readonly company = inject(CompanyService).company;
	/** Bottom bar order: Games, Library, Look Ahead, Quiz, Play (Play nearest the thumb). The topbar keeps Play first. */
	protected readonly links = ['Games', 'Library', 'Look Ahead', 'Quiz', 'Play'].map(
		(label) => NAV_LINKS.find((link) => link.label === label)!,
	);
	protected readonly nav = inject(NavStateService);
	protected readonly year = new Date().getFullYear();
}
