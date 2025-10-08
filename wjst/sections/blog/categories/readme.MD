# 🏷️ Categories `/sections/blog/categories`

Section for displaying a list of blog categories as links with optional counts. Useful for blog sidebars or indexes.

## ✅ Features

-   Optional title and description
-   List of categories rendered dynamically
-   Each category can have a URL and optional post count
-   Responsive styling using global design tokens

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/blog/categories/categories.html",
	"title": "Browse by category",
	"description": "Optional helper text",
	"categories": [
		{ "title": "News", "url": "/blog/news", "count": 3 },
		{ "title": "Events", "url": "/blog/events" },
		{ "title": "Tutorials", "url": "/blog/tutorials", "count": 12 }
	]
}
```

## 🧱 HTML Structure

```html
<div class="categories">
	{% if section.title %}
	<div class="categories__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="categories__description">{{{section.description}}}</div>
	{% endif %} {% if section.categories %}
	<ul class="categories__list">
		{% for category in section.categories %}
		<li class="categories__item">
			{% if category.url %}
			<a href="{{{category.url}}}" class="categories__link">
				{{{category.title}}} {% if category.count %}
				<span class="categories__count">{{{category.count}}}</span>
				{% endif %}
			</a>
			{% else %}
			<span class="categories__link">
				{{{category.title}}} {% if category.count %}
				<span class="categories__count">{{{category.count}}}</span>
				{% endif %}
			</span>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Theme Variables Used

| Variable                  | Description                          |
| ------------------------- | ------------------------------------ |
| `--ff-base`               | Base font family                     |
| `--ff-title`              | Font family for section title        |
| `--font-size`             | Base font size for links             |
| `--line-height`           | Line height for text                 |
| `--letter-spacing`        | Letter spacing for text              |
| `--padding-scale`         | Scales padding values                |
| `--margin-scale`          | Scales margin values                 |
| `--b-radius`              | Border radius for items              |
| `--c-bg-item`             | Background color of category pills   |
| `--c-border`              | Border color of category pills       |
| `--c-primary-hover`       | Hover background color               |
| `--c-primary-border`      | Hover border color                   |
| `--c-text-primary`        | Text color for title and links       |
| `--c-text-secondary`      | Text color on hover                  |
| `--c-text-body-secondary` | Text color for description and count |
| `--transition`            | Transition timing function           |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive titles    |

---
