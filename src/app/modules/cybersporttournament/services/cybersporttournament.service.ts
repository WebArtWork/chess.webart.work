import { Injectable } from '@angular/core';
import { Cybersporttournament } from '../interfaces/cybersporttournament.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CybersporttournamentService extends CrudService<Cybersporttournament> {
	constructor() {
		super({
			name: 'cybersporttournament',
		});
	}
}
