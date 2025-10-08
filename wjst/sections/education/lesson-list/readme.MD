# 📂 Lesson List `/sections/education/lesson-list`

Displays an ordered list of lessons with optional duration and completion state.

## ✅ Features

-   Optional section title
-   Renders lessons with automatic numbering
-   Supports optional duration per lesson
-   Visual hint for completed lessons
-   Uses CSS variables for fonts, spacing, colors, and responsiveness

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/education/lesson-list/lesson-list.html",
	"title": "Course Outline",
	"lessons": [
		{ "name": "Introduction", "duration": "5 min" },
		{ "name": "Deep dive", "duration": "10 min", "completed": true }
	]
}
```

## 🧱 HTML Structure

```html
<div class="lesson-list">
	{% if section.title %}
	<div class="lesson-list__title">{{{section.title}}}</div>
	{% endif %} {% if section.lessons %}
	<ul class="lesson-list__items">
		{% for lesson in section.lessons %}
		<li
			class="lesson-list__item{% if lesson.completed %} lesson-list__item--completed{% endif %}"
		>
			<div class="lesson-list__info">
				<span class="lesson-list__index">{{ loop.index }}</span>
				{% if lesson.name %}
				<span class="lesson-list__name">{{{lesson.name}}}</span>
				{% endif %}
			</div>
			{% if lesson.duration %}
			<span class="lesson-list__duration">{{{lesson.duration}}}</span>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                      |
| ------------------------- | -------------------------------- |
| `--padding-scale`         | Scales section padding           |
| `--margin-scale`          | Controls gaps between lessons    |
| `--font-size`             | Base font size                   |
| `--line-height`           | Base line height                 |
| `--letter-spacing`        | Default letter spacing           |
| `--ff-base`               | Font for lesson text             |
| `--ff-title`              | Font for title and indices       |
| `--c-text-primary`        | Title and lesson color           |
| `--c-text-secondary`      | Lesson index color               |
| `--c-text-body-secondary` | Duration text color              |
| `--c-bg-item`             | Background of lesson card        |
| `--c-shadow`              | Box shadow                       |
| `--b-radius`              | Border radius for items          |
| `--bp-md`                 | Breakpoint for responsive layout |
