import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { cybersportsessionFormComponents } from 'src/app/modules/cybersportsession/formcomponents/cybersportsession.formcomponents';
import { Cybersportsession } from 'src/app/modules/cybersportsession/interfaces/cybersportsession.interface';
import { CybersportsessionService } from 'src/app/modules/cybersportsession/services/cybersportsession.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CrudComponent } from 'wacom';

@Component({
	templateUrl: './tournament.component.html',
	styleUrls: ['./tournament.component.scss'],
	standalone: false
})
export class TournamentComponent extends CrudComponent<
	CybersportsessionService,
	Cybersportsession,
	FormInterface
> {
	config = this.getConfig();

	constructor(
		public sessionService: CybersportsessionService,
		public userService: UserService,
		private _router: Router,
		_cybersportsessionService: CybersportsessionService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			cybersportsessionFormComponents,
			_form,
			_translate,
			_cybersportsessionService,
			'Cybersportsession'
		);

		this.setDocuments();
	}

	create() {
		this.config?.create?.();
	}

	update(game: Cybersportsession) {
		this.config?.update?.(game);
	}

	delete(game: Cybersportsession) {
		this.config?.delete?.(game);
	}

	profile(game: Cybersportsession) {
		this._router.navigateByUrl('/game/' + game._id);
	}
}
