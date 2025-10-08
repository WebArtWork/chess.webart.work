# 📂 Mission `/sections/business/mission`

Mission section for presenting a company's mission statement and supporting values.

## ✅ Features

-   Optional title and mission statement (conditionally rendered)
-   Optional list of mission items with icon, title, and text
-   Responsive layout and typography across breakpoints
-   Uses CSS variables for colors, fonts, spacing, and transitions
-   Centralized theming support via global design tokens

---

## 🧾 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/business/mission/mission.html",
	"title": "Our Mission",
	"statement": "Short mission statement here.",
	"items": [
		{
			"icon": "/img/target.svg",
			"title": "Value title",
			"text": "Supporting text for this mission point"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="mission">
	{% if section.title %}
	<div class="mission__title">{{{section.title}}}</div>
	{% endif %} {% if section.statement %}
	<div class="mission__statement">{{{section.statement}}}</div>
	{% endif %} {% if section.items %}
	<ul class="mission__list">
		{% for item in section.items %}
		<li class="mission__item">
			{% if item.icon %}
			<img src="{{{item.icon}}}" alt="" class="mission__icon" />
			{% endif %}
			<div class="mission__content">
				{% if item.title %}
				<div class="mission__item-title">{{{item.title}}}</div>
				{% endif %} {% if item.text %}
				<div class="mission__item-text">{{{item.text}}}</div>
				{% endif %}
			</div>
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Flexbox list wraps items and centers them
-   Typography and colors leverage CSS variables
-   Responsive font sizing controlled via breakpoints

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                         |
| ------------------------------- | ----------------------------------- |
| `--padding-scale`               | Scales vertical spacing             |
| `--margin-scale`                | Controls gaps and margins           |
| `--font-size`                   | Base font size for text             |
| `--line-height`                 | Line height for title and text      |
| `--letter-spacing`              | Applied to title and statement      |
| `--transition`                  | Statement color transition          |
| `--ff-base`                     | Font for statement and items        |
| `--ff-title`                    | Font for titles                     |
| `--c-text-primary`              | Title text color                    |
| `--c-text-body-secondary`       | Statement and item text color       |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints for responsive behavior |

---
