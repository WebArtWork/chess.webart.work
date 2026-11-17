import { Component, Signal, WritableSignal } from '@angular/core';
import { TPipe } from '../../feature/i18n/t.pipe';
import { EMPTY_FILTERS, FilterKey, FilterOption } from '../../feature/game/game.const';
import { PuzzleFilters } from '../../feature/game/game.interface';

export interface FilterGroup {
	key: FilterKey;
	label: string;
	options: FilterOption[];
}

/**
 * The game filters, in the ngx-ui modal (opened from the Games page). It edits the page's `filters` signal
 * directly, so the list behind it updates as the chips are tapped.
 * ModalService sets `filters`, `openings`, `groups`, `matches`, `activeCount` and `close` on the instance.
 */
@Component({
	selector: 'app-games-filters-modal',
	imports: [TPipe],
	template: `
		<div class="flex flex-col gap-4">
			<h2 id="filters-title" class="text-lg font-semibold">{{ 'Filters' | t }}</h2>
			<p class="text-sm text-mute">
				{{
					'Games with at least one puzzle that matches. Numbers show how many puzzles each option has.'
						| t
				}}
			</p>

			<fieldset class="flex flex-col gap-2">
				<legend class="mb-2 text-sm font-medium text-mute">
					{{ 'Opening or player' | t }}
				</legend>
				<div class="ds-field !mb-0">
					<label class="sr-only" for="game-search">{{
						'Search openings and players' | t
					}}</label>
					<input
						id="game-search"
						class="ds-input"
						type="search"
						[placeholder]="'Search, e.g. Najdorf' | t"
						autocomplete="off"
						[value]="filters().search"
						(input)="setSearch($any($event.target).value)"
					/>
				</div>
				<div class="flex flex-wrap gap-2">
					@for (option of openings(); track option.value) {
						<button
							class="ds-chip"
							type="button"
							[attr.aria-pressed]="isActive('opening', option.value)"
							(click)="toggle('opening', option.value)"
						>
							{{ option.label }}
						</button>
					}
				</div>
			</fieldset>

			@for (group of groups(); track group.key) {
				<fieldset class="flex flex-col gap-2">
					<legend class="mb-2 text-sm font-medium text-mute">{{ group.label }}</legend>
					<div class="flex flex-wrap gap-2">
						@for (option of group.options; track option.value) {
							<button
								class="ds-chip"
								type="button"
								[attr.aria-pressed]="isActive(group.key, option.value)"
								(click)="toggle(group.key, option.value)"
							>
								{{ option.label }}
							</button>
						}
					</div>
				</fieldset>
			}

			<div class="grid grid-cols-[auto_1fr] gap-2 border-t border-line pt-4">
				<button
					class="ds-btn ds-btn-outline"
					type="button"
					[disabled]="!activeCount()"
					(click)="clear()"
				>
					{{ 'Clear' | t }}
				</button>
				<button class="ds-btn ds-btn-primary" type="button" (click)="close()">
					{{ 'Show {count} game|Show {count} games' | t: { count: matches().length } }}
				</button>
			</div>
		</div>
	`,
})
export class GamesFiltersModalComponent {
	// set by ModalService
	close!: () => void;
	filters!: WritableSignal<PuzzleFilters>;
	openings!: Signal<FilterOption[]>;
	groups!: Signal<FilterGroup[]>;
	matches!: Signal<unknown[]>;
	activeCount!: Signal<number>;

	protected isActive(key: FilterKey, value: string): boolean {
		return this.filters()[key].includes(value);
	}

	protected toggle(key: FilterKey, value: string) {
		this.filters.update((filters) => ({
			...filters,
			[key]: filters[key].includes(value)
				? filters[key].filter((item) => item !== value)
				: [...filters[key], value],
		}));
	}

	protected setSearch(value: string) {
		this.filters.update((filters) => ({ ...filters, search: value }));
	}

	protected clear() {
		this.filters.set({ ...EMPTY_FILTERS });
	}
}
