# 📂 Two Column Text `/sections/content/two-column-text`

Two column text block for presenting parallel content. Renders an optional section title followed by two text columns.

## ✅ Features

-   Optional section title
-   Columns accept optional title and text
-   Responsive grid layout using CSS variables
-   Theming powered by global design tokens

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/content/two-column-text/two-column-text.html",
	"title": "Optional section title",
	"columns": [
		{
			"title": "Left column title",
			"text": "Left column text"
		},
		{
			"title": "Right column title",
			"text": "Right column text"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="two-column-text">
	{% if section.title %}
	<div class="two-column-text__title">{{{section.title}}}</div>
	{% endif %} {% if section.columns %}
	<div class="two-column-text__columns">
		{% for col in section.columns %}
		<div class="two-column-text__column">
			{% if col.title %}
			<div class="two-column-text__column-title">{{{col.title}}}</div>
			{% endif %} {% if col.text %}
			<div class="two-column-text__column-text">{{{col.text}}}</div>
			{% endif %}
		</div>
		{% endfor %}
	</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Grid adjusts automatically via `repeat(auto-fit, minmax(280px, 1fr))`
-   Typography driven by global design tokens
-   Section title resizes at responsive breakpoints

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                               |
| ------------------------------- | ----------------------------------------- |
| `--padding-scale`               | Scales section padding                    |
| `--margin-scale`                | Controls spacing between columns and text |
| `--font-size`                   | Base font size for column text            |
| `--line-height`                 | Line height for titles and text           |
| `--letter-spacing`              | Letter spacing for titles and text        |
| `--ff-base`                     | Font for column text                      |
| `--ff-title`                    | Font for section and column titles        |
| `--c-text-primary`              | Title text color                          |
| `--c-text-body-secondary`       | Column text color                         |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints for responsive title sizing   |
