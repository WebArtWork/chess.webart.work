import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HubListComponent } from '../../components/hub-list/hub-list.component';
import { IconComponent } from '../../components/icon/icon.component';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';
import { THEORY_LESSONS } from '../../feature/theory/lessons';
import { THEORY_CATALOG, THEORY_CATEGORY_LABELS } from '../../feature/theory/theory.catalog';
import { TheoryProgressService } from '../../feature/theory/theory-progress.service';

/**
 * One theory lesson, picked by the route's `lesson` data: the text, a self-check and practice links.
 * Its translations live in /i18n/theory/<slug>/.
 */
@Component({
	imports: [HubListComponent, IconComponent, NgTemplateOutlet, RouterLink, TPipe],
	templateUrl: './theory-lesson.component.html',
})
export class TheoryLessonComponent {
	private readonly _slug = inject(ActivatedRoute).snapshot.data['lesson'] as string;
	private readonly _progress = inject(TheoryProgressService);

	protected readonly card = THEORY_CATALOG.find((card) => card.slug === this._slug)!;
	protected readonly lesson = THEORY_LESSONS.find((lesson) => lesson.slug === this._slug)!;
	protected readonly categoryLabel = THEORY_CATEGORY_LABELS[this.card.category];

	/** The self-check: hidden answer, then the reader's own verdict. */
	protected readonly revealed = signal(false);
	protected readonly progress = computed(() => this._progress.get(this._slug));

	constructor() {
		inject(I18nService).usePage(`/i18n/theory/${this._slug}/`);
	}

	protected answer(correct: boolean) {
		this._progress.answer(this._slug, correct);
	}
}
