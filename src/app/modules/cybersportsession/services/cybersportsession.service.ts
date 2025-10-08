import { Injectable } from '@angular/core';
import { Cybersportsession } from '../interfaces/cybersportsession.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CybersportsessionService extends CrudService<Cybersportsession> {
	constructor() {
		super({
			name: 'cybersportsession',
		});
	}
}
