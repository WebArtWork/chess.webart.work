import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CybersporttournamentService } from '../../services/cybersporttournament.service';
import { Cybersporttournament } from '../../interfaces/cybersporttournament.interface';

@Component({
	selector: 'cybersporttournament-selector',
	templateUrl: './cybersporttournament-selector.component.html',
	styleUrls: ['./cybersporttournament-selector.component.scss'],
	imports: [SelectModule],
})
export class CybersporttournamentSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cybersporttournament[] {
		return this._cybersporttournamentService.cybersporttournaments;
	}

	constructor(private _cybersporttournamentService: CybersporttournamentService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
