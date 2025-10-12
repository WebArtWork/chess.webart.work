import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { cybersporttournamentFormComponents } from 'src/app/modules/cybersporttournament/formcomponents/cybersporttournament.formcomponents';
import { Cybersporttournament } from 'src/app/modules/cybersporttournament/interfaces/cybersporttournament.interface';
import { CybersporttournamentService } from 'src/app/modules/cybersporttournament/services/cybersporttournament.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CrudComponent } from 'wacom';

@Component({
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.scss'],
	standalone: false
})
export class PlayerComponent extends CrudComponent<
	CybersporttournamentService,
	Cybersporttournament,
	FormInterface
> {
	config = this.getConfig();

	constructor(
		public tournamentService: CybersporttournamentService,
		public userService: UserService,
		private _router: Router,
		_cybersporttournamentService: CybersporttournamentService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			cybersporttournamentFormComponents,
			_form,
			_translate,
			_cybersporttournamentService,
			'Cybersporttournament'
		);

		this.setDocuments();
	}

	play() {
		this._router.navigateByUrl(
			'/game/player/' + this._router.url.replace('/player/', '')
		);
	}

	update(tournament: Cybersporttournament) {
		this.config?.update?.(tournament);
	}

	delete(tournament: Cybersporttournament) {
		this.config?.delete?.(tournament);
	}

	profile(tournament: Cybersporttournament) {
		this._router.navigateByUrl('/tournament/' + tournament._id);
	}

	players(tournament: Cybersporttournament) {
		this._router.navigateByUrl('/players/tournament/' + tournament._id);
	}
}
