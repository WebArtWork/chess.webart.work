# 📂 Feature List `/sections/content/feature-list`

Feature list block for highlighting product benefits or service capabilities. Supports an optional title and description followed by a responsive list of feature items.

## ✅ Features

-   Optional title and description (conditionally rendered)
-   Items accept optional icon, title and text
-   Responsive grid layout using CSS variables
-   Theming powered by global design tokens

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/content/feature-list/feature-list.html",
	"title": "Optional section title",
	"description": "Optional paragraph or supporting intro text",
	"items": [
		{
			"icon": "/img/icon.svg",
			"title": "Feature title",
			"text": "Short feature description"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="feature-list">
	{% if section.title %}
	<div class="feature-list__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="feature-list__description">{{{section.description}}}</div>
	{% endif %} {% if section.items %}
	<ul class="feature-list__items">
		{% for item in section.items %}
		<li class="feature-list__item">
			{% if item.icon %}
			<img src="{{{item.icon}}}" alt="" class="feature-list__icon" />
			{% endif %}
			<div class="feature-list__content">
				{% if item.title %}
				<div class="feature-list__item-title">{{{item.title}}}</div>
				{% endif %} {% if item.text %}
				<div class="feature-list__item-text">{{{item.text}}}</div>
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
-   Grid adjusts automatically via `repeat(auto-fit, minmax(...))`
-   Icons sized via `--icon-size`
-   Items inherit background color and shadow from global tokens

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                        |
| ------------------------- | ---------------------------------- |
| `--padding-scale`         | Scales section padding             |
| `--margin-scale`          | Controls spacing between elements  |
| `--font-size`             | Base font size for text            |
| `--line-height`           | Line height for titles and text    |
| `--letter-spacing`        | Applied to titles and text         |
| `--b-radius`              | Rounds feature item containers     |
| `--ff-base`               | Font for description and item text |
| `--ff-title`              | Font for section and item titles   |
| `--icon-size`             | Dimensions for item icons          |
| `--c-text-primary`        | Title text color                   |
| `--c-text-body-secondary` | Description and item text color    |
| `--c-bg-item`             | Background of each feature item    |
| `--c-shadow`              | Shadow applied to feature items    |
| `--bp-md`                 | Breakpoint for mobile adjustments  |
