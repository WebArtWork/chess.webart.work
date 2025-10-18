# 📂 Syllabus `/sections/education/syllabus`

Section for displaying a course syllabus. Supports optional section title, modules with durations and descriptions, and nested lesson lists.

## ✅ Features

-   Optional section title
-   Modules with optional duration and description
-   Nested lesson lists with optional durations
-   Responsive typography via CSS variables
-   Uses global design tokens for spacing, colors, and fonts

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/education/syllabus/syllabus.html",
	"title": "Course Syllabus",
	"modules": [
		{
			"title": "Module title",
			"duration": "1h 20m",
			"description": "Optional module description",
			"lessons": [
				{ "title": "Lesson one", "duration": "10m" },
				{ "title": "Lesson two" }
			]
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="syllabus">
	{% if section.title %}
	<div class="syllabus__title">{{{section.title}}}</div>
	{% endif %} {% if section.modules %}
	<ul class="syllabus__list">
		{% for module in section.modules %}
		<li class="syllabus__module">
			<div class="syllabus__module-header">
				{% if module.title %}
				<div class="syllabus__module-title">{{{module.title}}}</div>
				{% endif %} {% if module.duration %}
				<div class="syllabus__module-duration">
					{{{module.duration}}}
				</div>
				{% endif %}
			</div>
			{% if module.description %}
			<div class="syllabus__module-description">
				{{{module.description}}}
			</div>
			{% endif %} {% if module.lessons %}
			<ul class="syllabus__lessons">
				{% for lesson in module.lessons %}
				<li class="syllabus__lesson">
					<span class="syllabus__lesson-title"
						>{{{lesson.title}}}</span
					>
					{% if lesson.duration %}
					<span class="syllabus__lesson-duration"
						>{{{lesson.duration}}}</span
					>
					{% endif %}
				</li>
				{% endfor %}
			</ul>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable                  | Description                           |
| ------------------------- | ------------------------------------- |
| `--padding-scale`         | Scales vertical padding               |
| `--margin-scale`          | Controls spacing between blocks       |
| `--ff-base`               | Base font for text                    |
| `--ff-title`              | Font for the section title            |
| `--font-size`             | Base font size for lessons and text   |
| `--line-height`           | Line height for module descriptions   |
| `--c-text-primary`        | Title and item text color             |
| `--c-text-secondary`      | Duration text color                   |
| `--c-text-body-secondary` | Module description color              |
| `--c-border`              | Divider line color                    |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive typography |

---
