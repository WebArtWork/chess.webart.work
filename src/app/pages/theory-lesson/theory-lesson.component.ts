import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubListComponent } from '../../components/hub-list/hub-list.component';
import { THEORY_LESSONS } from '../../feature/theory/theory.const';

/** One theory lesson, picked by the route's `lesson` data. */
@Component({
	imports: [HubListComponent],
	templateUrl: './theory-lesson.component.html',
})
export class TheoryLessonComponent {
	protected readonly lesson = THEORY_LESSONS.find((lesson) => lesson.slug === inject(ActivatedRoute).snapshot.data['lesson'])!;
}
