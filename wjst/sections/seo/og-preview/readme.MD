# 📂 OG Preview `/sections/seo/og-preview`

Open Graph preview card section for displaying link metadata (image, title, description, and URL). Useful for showing how links will appear when shared on social platforms.

## ✅ Features

-   Optional URL, title, description, and image
-   Responsive layout that stacks on smaller screens
-   Uses global CSS variables for typography, colors, spacing, and breakpoints
-   Themed through `template.json` variables

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/seo/og-preview/og-preview.html",
	"image": "/img/preview.png",
	"url": "example.com/article",
	"title": "Link preview title",
	"description": "Short summary used for social preview"
}
```

## 🧱 HTML Structure

```html
<div class="og-preview">
	{% if section.image %}
	<div class="og-preview__image">
		<img src="{{{section.image}}}" alt="" />
	</div>
	{% endif %}
	<div class="og-preview__content">
		{% if section.url %}
		<div class="og-preview__url">{{{section.url}}}</div>
		{% endif %} {% if section.title %}
		<div class="og-preview__title">{{{section.title}}}</div>
		{% endif %} {% if section.description %}
		<div class="og-preview__description">{{{section.description}}}</div>
		{% endif %}
	</div>
</div>
```

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                              |
| ------------------------- | ---------------------------------------- |
| `--ff-base`               | Base font for description                |
| `--ff-title`              | Font for the title                       |
| `--padding-scale`         | Controls padding in the content area     |
| `--margin-scale`          | Controls spacing for description and URL |
| `--font-size`             | Base font size for text                  |
| `--line-height`           | Line height for text                     |
| `--letter-spacing`        | Letter spacing for text                  |
| `--c-bg-item`             | Card background color                    |
| `--c-border`              | Border color                             |
| `--c-text-primary`        | Title text color                         |
| `--c-text-secondary`      | Description text color                   |
| `--c-text-body-secondary` | URL text color                           |
| `--b-radius`              | Card border radius                       |
| `--bp-md`                 | Breakpoint for stacking layout           |

---
