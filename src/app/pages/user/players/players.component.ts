import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { userFormComponents } from 'src/app/modules/user/formcomponents/user.formcomponents';
import { User } from 'src/app/modules/user/interfaces/user.interface';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CrudComponent } from 'wacom';

@Component({
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss'],
	standalone: false
})
export class PlayersComponent extends CrudComponent<
	UserService,
	User,
	FormInterface
> {
	config = this.getConfig();

	constructor(
		public userService: UserService,
		private _router: Router,
		_translate: TranslateService,
		_form: FormService
	) {
		super(userFormComponents, _form, _translate, userService, 'User');

		this.setDocuments();
	}

	profile(user: User) {
		this._router.navigateByUrl('/player/' + user._id);
	}
}
