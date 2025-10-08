import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { cybersportsessionFormComponents } from '../../formcomponents/cybersportsession.formcomponents';
import { Cybersportsession } from '../../interfaces/cybersportsession.interface';
import { CybersportsessionService } from '../../services/cybersportsession.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss'],
})
export class GamesComponent extends CrudComponent<
	CybersportsessionService,
	Cybersportsession,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_cybersportsessionService: CybersportsessionService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(cybersportsessionFormComponents, _form, _translate, _cybersportsessionService, 'Cybersportsession');

		this.setDocuments();
	}
}
