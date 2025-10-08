# 📂 Mega Menu `/sections/navigation/mega-menu`

Responsive navigation component that reveals a multi-column panel on item click. Ideal for sites with many categories.

## ✅ Features

-   Top-level navigation items toggle expansive panels
-   Supports multiple link columns with optional headings
-   Mobile-friendly with stacked layout
-   Uses CSS variables for theme-driven colors, spacing, and typography

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/navigation/mega-menu/mega-menu.html",
	"items": [
		{
			"title": "Products",
			"url": "/products",
			"columns": [
				{
					"title": "Category",
					"links": [{ "title": "Item", "url": "/item" }]
				}
			]
		}
	]
}
```

## 🧱 HTML Structure

```html
<nav class="mega-menu">
	<ul class="mega-menu__list">
		{% for item in section.items %}
		<li class="mega-menu__item">
			<a href="{{{item.url}}}" class="mega-menu__toggle"
				>{{{item.title}}}</a
			>
			{% if item.columns %}
			<div class="mega-menu__content">
				{% for col in item.columns %}
				<div class="mega-menu__column">
					{% if col.title %}
					<div class="mega-menu__column-title">{{{col.title}}}</div>
					{% endif %}
					<ul class="mega-menu__links">
						{% for link in col.links %}
						<li>
							<a href="{{{link.url}}}" class="mega-menu__link"
								>{{{link.title}}}</a
							>
						</li>
						{% endfor %}
					</ul>
				</div>
				{% endfor %}
			</div>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
</nav>
```

---

## 🎨 Styling Notes

-   Layout and gaps scale with `--margin-scale` and `--padding-scale`
-   Panels use `--c-bg-item` and `--c-shadow` for background and shadow
-   Typography driven by `--ff-base`, `--ff-title`, and `--font-size`
-   Links transition color via `--transition` and `--c-primary-hover`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                        |
| ------------------------- | ---------------------------------- |
| `--ff-base`               | Base font family                   |
| `--ff-title`              | Font for column titles             |
| `--c-body`                | Menu background                    |
| `--c-bg-item`             | Panel background                   |
| `--c-shadow`              | Panel shadow                       |
| `--c-text-primary`        | Top-level item text color          |
| `--c-text-body-secondary` | Link color                         |
| `--c-primary-hover`       | Link hover color                   |
| `--font-size`             | Base font size                     |
| `--line-height`           | Line height                        |
| `--padding-scale`         | Scales padding                     |
| `--margin-scale`          | Scales gaps                        |
| `--transition`            | Link hover transition              |
| `--bp-md`                 | Responsive breakpoint for stacking |

---
