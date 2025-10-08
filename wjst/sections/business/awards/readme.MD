# 📂 Awards `/sections/business/awards`

Awards section for showcasing recognitions or achievements. Supports an optional title and description with a list of award items.

## ✅ Features

-   Optional section title and description
-   Grid layout of award items
-   Each item can include image, year and description
-   Uses CSS variables for consistent theming

---

## 🗾 Section Data Schema

```json
{
	"src": "/sections/business/awards/awards.html",
	"title": "Awards",
	"description": "Highlights of our achievements",
	"items": [
		{
			"img": "/img/trophy.svg",
			"title": "Best Startup",
			"year": "2023",
			"description": "Awarded by Example Organization"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="awards">
	{% if section.title %}
	<div class="awards__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="awards__description">{{{section.description}}}</div>
	{% endif %} {% if section.items %}
	<ul class="awards__items">
		{% for item in section.items %}
		<li class="awards__item">
			{% if item.img %}
			<img src="{{{item.img}}}" alt="" class="awards__img" />
			{% endif %} {% if item.title %}
			<div class="awards__item-title">{{{item.title}}}</div>
			{% endif %} {% if item.year %}
			<div class="awards__year">{{{item.year}}}</div>
			{% endif %} {% if item.description %}
			<div class="awards__item-text">{{{item.description}}}</div>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🌈 Styling Notes

-   Layout uses CSS Grid and adapts to viewport width
-   Spacing and typography scale with `--padding-scale`, `--margin-scale` and `--font-size`
-   Colors adapt via `--c-text-primary`, `--c-text-secondary`, `--c-text-body-secondary`, and `--c-bg-item`

---

## 🧰 Theme Variables Used (from `template.json`)

| Variable                  | Description                            |
| ------------------------- | -------------------------------------- |
| `--padding-scale`         | Scales padding values in section       |
| `--margin-scale`          | Controls margin spacing                |
| `--font-size`             | Base font size                         |
| `--line-height`           | Line height for text                   |
| `--letter-spacing`        | Letter spacing for titles and text     |
| `--ff-base`               | Base font family                       |
| `--ff-title`              | Font family for titles                 |
| `--c-text-primary`        | Primary text color                     |
| `--c-text-secondary`      | Secondary text color                   |
| `--c-text-body-secondary` | Description text color                 |
| `--c-bg-item`             | Background color for award items       |
| `--b-radius`              | Border radius for award items          |
| `--c-shadow`              | Shadow for award items                 |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive adjustments |

---
