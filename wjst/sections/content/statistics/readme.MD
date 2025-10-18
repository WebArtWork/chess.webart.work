# 📂 Statistics `/sections/content/statistics`

Display key metrics or figures in a responsive grid. Each item shows a highlighted value and an optional label.

## ✅ Features

-   Optional section title and description
-   Responsive grid of statistic items
-   Values and labels styled using global design tokens
-   Uses CSS variables for spacing, typography and colors

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/content/statistics/statistics.html",
	"title": "Optional section title",
	"description": "Optional description text",
	"items": [
		{
			"value": "42%",
			"label": "Conversion rate"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="statistics">
	{% if section.title %}
	<div class="statistics__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="statistics__description">{{{section.description}}}</div>
	{% endif %} {% if section.items %}
	<ul class="statistics__items">
		{% for item in section.items %}
		<li class="statistics__item">
			{% if item.value %}
			<div class="statistics__value">{{{item.value}}}</div>
			{% endif %} {% if item.label %}
			<div class="statistics__label">{{{item.label}}}</div>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales via `--padding-scale` and `--margin-scale`
-   Grid adjusts automatically with `repeat(auto-fit, minmax(...))`
-   Typography and colors sourced from theme variables

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                          |
| ------------------------------- | ------------------------------------ |
| `--padding-scale`               | Scales section padding               |
| `--margin-scale`                | Controls spacing between items       |
| `--font-size`                   | Base font size for labels            |
| `--line-height`                 | Line height for text                 |
| `--letter-spacing`              | Applied to titles, values and labels |
| `--ff-base`                     | Base font family for descriptions    |
| `--ff-title`                    | Font family for titles and values    |
| `--c-text-primary`              | Color for titles and values          |
| `--c-text-body-secondary`       | Color for description and labels     |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in responsive breakpoints       |

---
