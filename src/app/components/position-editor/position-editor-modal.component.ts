import { Component, inject, OnInit, signal } from '@angular/core';
import { PositionInputService } from '../../feature/chess/position-input.service';
import { TPipe } from '../../feature/i18n/t.pipe';

/**
 * The full-screen editor for the position field, in the ngx-ui modal (opened from the topbar on phones).
 * Load sits below the text. ModalService sets `close` on the instance.
 */
@Component({
	selector: 'app-position-editor-modal',
	imports: [TPipe],
	template: `
		<div class="flex h-full min-h-[60dvh] flex-col gap-3">
			<h2 id="position-editor-title" class="sr-only">{{ 'Load a position' | t }}</h2>
			<div class="flex gap-2" role="group" [attr.aria-label]="'Import a position' | t">
				<button
					class="ds-chip"
					type="button"
					[attr.aria-pressed]="input.tab() === 'fen'"
					(click)="pickTab('fen')"
				>
					FEN
				</button>
				<button
					class="ds-chip"
					type="button"
					[attr.aria-pressed]="input.tab() === 'pgn'"
					(click)="pickTab('pgn')"
				>
					PGN
				</button>
			</div>

			<label class="sr-only" for="position-editor">{{
				(input.tab() === 'fen' ? 'Position (FEN)' : 'Game (PGN)') | t
			}}</label>
			<textarea
				id="position-editor"
				class="ds-textarea min-h-0 flex-1 font-mono"
				autofocus
				spellcheck="false"
				[placeholder]="
					input.tab() === 'fen'
						? 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
						: '1. e4 e5 2. Nf3 Nc6 ...'
				"
				[value]="draft()"
				(input)="draft.set($any($event.target).value)"
			></textarea>

			@if (input.error()) {
				<p class="text-sm text-danger" role="alert">{{ input.error() | t }}</p>
			}

			<button class="ds-btn ds-btn-primary ds-btn-lg w-full" type="button" (click)="load()">
				{{ 'Load' | t }}
			</button>
		</div>
	`,
})
export class PositionEditorModalComponent implements OnInit {
	// set by ModalService
	close!: () => void;

	protected readonly input = inject(PositionInputService);
	protected readonly draft = signal('');

	ngOnInit() {
		this.input.error.set('');
		this.draft.set(this.input.tab() === 'fen' ? this.input.fen() : '');
	}

	protected pickTab(tab: 'fen' | 'pgn') {
		this.input.tab.set(tab);
		this.draft.set(tab === 'fen' ? this.input.fen() : '');
		this.input.error.set('');
	}

	protected load() {
		this.input.load(this.input.tab(), this.draft());
		if (!this.input.error()) this.close();
	}
}
