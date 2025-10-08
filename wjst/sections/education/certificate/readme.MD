# 📂 Certificate `/sections/education/certificate`

Certificate section for showcasing a course or program completion. Displays recipient, course title and issuing details inside a styled card.

## ✅ Features

-   Optional title, recipient, course name and meta info
-   Responsive layout using CSS variables and breakpoints
-   Centralized theming via global design tokens

---

## 📞 Section Data Schema

```json
{
	"src": "/sections/education/certificate/certificate.html",
	"title": "Certificate of Completion",
	"recipient": "John Doe",
	"course": "Intro to Web Development",
	"issuer": "Web Art Work Academy",
	"date": "2024-01-01",
	"id": "ABC123"
}
```

## 🧱 HTML Structure

```html
<div class="certificate">
	{% if section.title %}
	<div class="certificate__title">{{{section.title}}}</div>
	{% endif %} {% if section.recipient %}
	<div class="certificate__recipient">{{{section.recipient}}}</div>
	{% endif %} {% if section.course %}
	<div class="certificate__course">{{{section.course}}}</div>
	{% endif %} {% if section.issuer or section.date %}
	<div class="certificate__meta">
		{% if section.issuer %}<span class="certificate__issuer"
			>{{{section.issuer}}}</span
		>{% endif %} {% if section.date %}<span class="certificate__date"
			>{{{section.date}}}</span
		>{% endif %}
	</div>
	{% endif %} {% if section.id %}
	<div class="certificate__id">{{{section.id}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable                  | Description                            |
| ------------------------- | -------------------------------------- |
| `--padding-scale`         | Scales padding values in card          |
| `--margin-scale`          | Controls spacing between elements      |
| `--font-size`             | Base font size for course text         |
| `--line-height`           | Line height for all text               |
| `--letter-spacing`        | Letter spacing for title and text      |
| `--b-radius`              | Rounds the card corners                |
| `--c-border`              | Border color of certificate card       |
| `--c-bg-item`             | Background color of certificate card   |
| `--c-text-primary`        | Main title and recipient text color    |
| `--c-text-body-secondary` | Color for course, meta and id text     |
| `--ff-base`               | Font for body text                     |
| `--ff-title`              | Font for title text                    |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive adjustments |

---
