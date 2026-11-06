import { NgTemplateOutlet } from '@angular/common';
import { afterNextRender, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HubListComponent } from '../../components/hub-list/hub-list.component';
import { IconComponent } from '../../components/icon/icon.component';
import { TheoryPrintComponent } from '../../components/theory-print/theory-print.component';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { THEORY_LESSONS } from '../../feature/theory/lessons';
import { THEORY_CATALOG, THEORY_CATEGORY_LABELS, THEORY_GROUPS } from '../../feature/theory/theory.catalog';
import { TheoryProgressService } from '../../feature/theory/theory-progress.service';

/**
 * One theory lesson, picked by the route's `lesson` data: the text, a self-check and practice links.
 * Printing gives the text only, without the practice links and sources.
 * Its translations live in /i18n/theory/<slug>/.
 */
@Component({
	imports: [HubListComponent, IconComponent, NgTemplateOutlet, RouterLink, TheoryPrintComponent, TPipe],
	templateUrl: './theory-lesson.component.html',
})
export class TheoryLessonComponent {
	private readonly _slug = inject(ActivatedRoute).snapshot.data['lesson'] as string;
	private readonly _progress = inject(TheoryProgressService);

	protected readonly card = THEORY_CATALOG.find((card) => card.slug === this._slug)!;
	protected readonly lesson = THEORY_LESSONS.find((lesson) => lesson.slug === this._slug)!;
	protected readonly categoryLabel = THEORY_CATEGORY_LABELS[this.card.category];
	protected readonly groupLabel = THEORY_GROUPS.find((group) => group.value === this.card.group)!.label;

	/** The self-check: hidden answer, then the reader's own verdict. */
	protected readonly revealed = signal(false);
	protected readonly progress = computed(() => this._progress.get(this._slug));
	/** The text-only copy for paper; added in the browser, so the prerendered page holds the lesson once. */
	protected readonly printable = signal(false);

	constructor() {
		inject(I18nService).usePage(`/i18n/theory/${this._slug}/`);
		afterNextRender(() => this.printable.set(true));
	}

	protected print() {
		window.print();
	}

	protected answer(correct: boolean) {
		this._progress.answer(this._slug, correct);
	}
}
