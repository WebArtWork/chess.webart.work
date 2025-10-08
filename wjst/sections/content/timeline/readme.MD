# 📂 Timeline `/sections/content/timeline`

Vertical timeline for displaying chronological events or steps. Supports optional title and description with a list of items each containing time, label, and text.

## ✅ Features

-   Optional title and description
-   Items rendered as vertical timeline
-   Responsive layout and typography
-   Uses CSS variables for theming and spacing

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/content/timeline/timeline.html",
	"title": "Optional section title",
	"description": "Optional description text",
	"items": [
		{ "time": "2023", "label": "Started", "text": "Project kick-off" },
		{ "time": "2024", "label": "Launch", "text": "First release" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="timeline">
	{% if section.title %}
	<div class="timeline__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="timeline__description">{{{section.description}}}</div>
	{% endif %} {% if section.items %}
	<ul class="timeline__items">
		{% for item in section.items %}
		<li class="timeline__item">
			{% if item.time %}
			<div class="timeline__time">{{{item.time}}}</div>
			{% endif %} {% if item.label %}
			<div class="timeline__label">{{{item.label}}}</div>
			{% endif %} {% if item.text %}
			<div class="timeline__text">{{{item.text}}}</div>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Timeline line and bullets inherit colors from `--c-border` and `--c-primary`
-   Spacing scaled using `--padding-scale` and `--margin-scale`
-   Fonts and colors driven by global theme variables
-   Media queries adapt title and description at breakpoints

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                         |
| ------------------------- | ----------------------------------- |
| `--padding-scale`         | Scales padding within the timeline  |
| `--margin-scale`          | Controls margin spacing             |
| `--font-size`             | Base font size for text             |
| `--line-height`           | Line height for text                |
| `--letter-spacing`        | Letter spacing for text             |
| `--ff-base`               | Font for body text                  |
| `--ff-title`              | Font for section title and time     |
| `--c-text-primary`        | Title and time text color           |
| `--c-text-secondary`      | Label text color                    |
| `--c-text-body-secondary` | Description and item text color     |
| `--c-border`              | Border color for the timeline line  |
| `--c-primary`             | Color for timeline bullet markers   |
| `--transition`            | Transition used for text color fade |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive sizing   |

---
