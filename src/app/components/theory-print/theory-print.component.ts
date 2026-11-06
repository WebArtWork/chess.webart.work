import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { TPipe } from '../../feature/i18n/t.pipe';
import { TheoryCard, TheoryLessonBody } from '../../feature/theory/theory.interface';

export interface PrintedLesson {
	card: TheoryCard;
	lesson: TheoryLessonBody;
}

/**
 * Lessons as plain text for paper: the title and every text block, with the answers written out.
 * Practice links, sources and buttons are left out. Shown only when printing, each lesson on a new page;
 * the page renders it just before it prints.
 */
@Component({
	selector: 'app-theory-print',
	imports: [NgTemplateOutlet, TPipe],
	template: `
		<ng-template #block let-section let-level="level">
			@switch (level) {
				@case (2) {
					<h2>{{ section.heading | t }}</h2>
				}
				@case (3) {
					<h3>{{ section.heading | t }}</h3>
				}
				@default {
					<h4>{{ section.heading | t }}</h4>
				}
			}
			@for (paragraph of section.paragraphs; track $index) {
				<p>{{ paragraph | t }}</p>
			}
			@if (section.points; as points) {
				@if (section.ordered) {
					<ol>
						@for (point of points; track $index) {
							<li>{{ point | t }}</li>
						}
					</ol>
				} @else {
					<ul>
						@for (point of points; track $index) {
							<li>{{ point | t }}</li>
						}
					</ul>
				}
			}
			@for (paragraph of section.after; track $index) {
				<p>{{ paragraph | t }}</p>
			}
			@for (part of section.parts; track part.heading) {
				<ng-container *ngTemplateOutlet="block; context: { $implicit: part, level: level + 1 }" />
			}
		</ng-template>

		@for (item of lessons(); track item.card.slug) {
			@let lesson = item.lesson;
			<article>
				<h1>{{ item.card.title | t }}</h1>
				@if (item.card.inspiredBy; as name) {
					<p class="byline">{{ 'Inspired by {name}' | t: { name: (name | t) } }}</p>
				}

				@if (lesson.note; as note) {
					<ng-container *ngTemplateOutlet="block; context: { $implicit: note, level: 3 }" />
				}
				@if (lesson.idea; as idea) {
					<h2>{{ 'Main idea' | t }}</h2>
					@for (paragraph of idea; track $index) {
						<p>{{ paragraph | t }}</p>
					}
				}
				@if (lesson.steps; as steps) {
					<h2>{{ (lesson.stepsHeading ?? 'How to think') | t }}</h2>
					<ol>
						@for (step of steps; track $index) {
							<li>{{ step | t }}</li>
						}
					</ol>
				}
				@if (lesson.example; as example) {
					<h2>{{ 'Example' | t }}</h2>
					@for (paragraph of example; track $index) {
						<p>{{ paragraph | t }}</p>
					}
				}
				@for (section of lesson.sections; track section.heading) {
					<ng-container *ngTemplateOutlet="block; context: { $implicit: section, level: 2 }" />
				}
				@if (lesson.mistakes; as mistakes) {
					<h2>{{ (mistakes.length === 1 ? 'Common mistake' : 'Common mistakes') | t }}</h2>
					<ul>
						@for (mistake of mistakes; track $index) {
							<li>{{ mistake | t }}</li>
						}
					</ul>
				}
				@if (lesson.selfCheck; as check) {
					<h2>{{ 'Check yourself' | t }}</h2>
					<p class="question">{{ check.question | t }}</p>
					<p>{{ check.answer | t }}</p>
				}
				@if (lesson.exercise; as exercise) {
					<ng-container *ngTemplateOutlet="block; context: { $implicit: exercise, level: 2 }" />
				}
				@if (lesson.questions; as questions) {
					<h2>{{ 'Questions to check yourself' | t }}</h2>
					<ol>
						@for (question of questions; track $index) {
							<li>
								<p class="question">{{ question.question | t }}</p>
								<p>{{ question.answer | t }}</p>
							</li>
						}
					</ol>
				}
				@if (lesson.takeaway; as takeaway) {
					<h2>{{ 'Key takeaway' | t }}</h2>
					<p class="question">{{ takeaway | t }}</p>
				}
			</article>
		}
	`,
	styles: `
		:host {
			display: none;
		}
		@media print {
			:host {
				display: block;
				color: #000;
				background: #fff;
				font-size: 11pt;
				line-height: 1.5;
			}
		}
		article + article {
			break-before: page;
		}
		h1 {
			margin: 0 0 4pt;
			font-size: 18pt;
			font-weight: 700;
		}
		h2 {
			margin: 14pt 0 4pt;
			font-size: 13pt;
			font-weight: 700;
			break-after: avoid;
		}
		h3,
		h4 {
			margin: 10pt 0 2pt;
			font-size: 11pt;
			font-weight: 700;
			break-after: avoid;
		}
		p {
			margin: 0 0 6pt;
		}
		ol,
		ul {
			margin: 0 0 6pt;
			padding-left: 18pt;
		}
		ol {
			list-style: decimal;
		}
		ul {
			list-style: disc;
		}
		li {
			margin-bottom: 3pt;
			break-inside: avoid;
		}
		.byline {
			color: #444;
		}
		.question {
			font-weight: 600;
		}
	`,
})
export class TheoryPrintComponent {
	readonly lessons = input.required<PrintedLesson[]>();
}
