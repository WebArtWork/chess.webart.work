import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CybersportsessionService } from '../../services/cybersportsession.service';
import { Cybersportsession } from '../../interfaces/cybersportsession.interface';

@Component({
	selector: 'cybersportsession-selector',
	templateUrl: './cybersportsession-selector.component.html',
	styleUrls: ['./cybersportsession-selector.component.scss'],
	imports: [SelectModule],
})
export class CybersportsessionSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cybersportsession[] {
		return this._cybersportsessionService.cybersportsessions;
	}

	constructor(private _cybersportsessionService: CybersportsessionService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
