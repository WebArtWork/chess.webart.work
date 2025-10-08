import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cybersporttournamentFormComponents } from '../../formcomponents/cybersporttournament.formcomponents';
import { Cybersporttournament } from '../../interfaces/cybersporttournament.interface';
import { CybersporttournamentService } from '../../services/cybersporttournament.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './tournaments.component.html',
	styleUrls: ['./tournaments.component.scss'],
})
export class TournamentsComponent extends CrudComponent<
	CybersporttournamentService,
	Cybersporttournament,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cybersporttournamentService: CybersporttournamentService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cybersporttournamentFormComponents, _form, _translate, _cybersporttournamentService, 'Cybersporttournament');

		this.setDocuments();
	}
}
