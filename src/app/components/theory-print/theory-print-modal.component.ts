import { Component, computed, OnInit, signal } from '@angular/core';
import { TPipe } from '../../feature/i18n/t.pipe';
import { TheoryCard } from '../../feature/theory/theory.interface';

export interface PrintPickerGroup {
	value: string;
	label: string;
	cards: Pick<TheoryCard, 'slug' | 'title'>[];
}

/**
 * The lessons to print, in the ngx-ui modal (see TheoryComponent.openPrint): every hub block with its lessons
 * and a checkbox for each. The checkbox of a block selects or clears all of its lessons.
 * ModalService sets `groups`, `initial`, `close` and `onPrint` on the instance after it is created.
 */
@Component({
	selector: 'app-theory-print-modal',
	imports: [TPipe],
	template: `
		<div class="flex flex-col gap-3">
			<h2 id="print-title" class="text-lg font-semibold">
				{{ 'Select lessons to print' | t }}
			</h2>
			<div class="flex flex-wrap items-center gap-2">
				<button
					class="ds-btn ds-btn-outline ds-btn-sm"
					type="button"
					(click)="setAll(true)"
				>
					{{ 'Select all' | t }}
				</button>
				<button
					class="ds-btn ds-btn-outline ds-btn-sm"
					type="button"
					(click)="setAll(false)"
				>
					{{ 'Clear selection' | t }}
				</button>
				<span class="text-sm text-mute" role="status">{{
					'{count} of {total} selected' | t: { count: count(), total: total }
				}}</span>
			</div>

			<div class="max-h-[50dvh] overflow-y-auto">
				@for (group of groups; track group.value) {
					<details class="border-b border-line">
						<summary class="flex cursor-pointer items-center justify-between gap-3">
							<label
								class="flex min-h-11 flex-1 items-center gap-3"
								(click)="$event.stopPropagation()"
							>
								<input
									type="checkbox"
									class="size-5 accent-brand"
									[checked]="state(group) === 'all'"
									[indeterminate]="state(group) === 'some'"
									(change)="toggleGroup(group, checked($event))"
								/>
								<span class="font-medium">{{ group.label | t }}</span>
							</label>
							<span class="text-sm text-mute"
								>{{ selectedIn(group) }}/{{ group.cards.length }}</span
							>
						</summary>
						<ul class="pb-2">
							@for (card of group.cards; track card.slug) {
								<li>
									<label class="flex min-h-11 items-start gap-3 py-2 pl-8">
										<input
											type="checkbox"
											class="mt-0.5 size-5 shrink-0 accent-brand"
											[checked]="selected().has(card.slug)"
											(change)="toggle(card.slug, checked($event))"
										/>
										<span>{{ card.title | t }}</span>
									</label>
								</li>
							}
						</ul>
					</details>
				}
			</div>

			<div class="flex flex-wrap justify-end gap-2">
				<button class="ds-btn ds-btn-outline" type="button" (click)="close()">
					{{ 'Cancel' | t }}
				</button>
				<button
					class="ds-btn ds-btn-primary"
					type="button"
					[disabled]="count() === 0"
					(click)="print()"
				>
					{{ 'Print selected' | t }}
				</button>
			</div>
		</div>
	`,
})
export class TheoryPrintModalComponent implements OnInit {
	// set by ModalService
	close!: () => void;
	groups: PrintPickerGroup[] = [];
	/** The lessons that start selected. */
	initial: string[] = [];
	/** Starts the print for the chosen lessons, in hub order. */
	onPrint!: (slugs: string[]) => void;

	protected readonly selected = signal(new Set<string>());
	protected readonly count = computed(() => this.selected().size);
	protected total = 0;

	ngOnInit() {
		this.selected.set(new Set(this.initial));
		this.total = this.groups.reduce((sum, group) => sum + group.cards.length, 0);
	}

	protected checked(event: Event) {
		return (event.target as HTMLInputElement).checked;
	}

	protected selectedIn(group: PrintPickerGroup) {
		return group.cards.filter((card) => this.selected().has(card.slug)).length;
	}

	protected state(group: PrintPickerGroup) {
		const n = this.selectedIn(group);
		return n === 0 ? 'none' : n === group.cards.length ? 'all' : 'some';
	}

	protected toggle(slug: string, on: boolean) {
		this.selected.update((set) => {
			const next = new Set(set);
			if (on) next.add(slug);
			else next.delete(slug);
			return next;
		});
	}

	protected toggleGroup(group: PrintPickerGroup, on: boolean) {
		this.selected.update((set) => {
			const next = new Set(set);
			for (const card of group.cards) {
				if (on) next.add(card.slug);
				else next.delete(card.slug);
			}
			return next;
		});
	}

	protected setAll(on: boolean) {
		this.selected.set(
			new Set(on ? this.groups.flatMap((group) => group.cards.map((card) => card.slug)) : []),
		);
	}

	protected print() {
		// keep the reading order of the hub
		const slugs = this.groups
			.flatMap((group) => group.cards.map((card) => card.slug))
			.filter((slug) => this.selected().has(slug));
		this.close();
		this.onPrint(slugs);
	}
}
