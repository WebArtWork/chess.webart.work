# 🔍 Meta Preview `/sections/seo/meta-preview`

Meta preview section that emulates how a page might appear in search results or link previews. Displays title, URL, description, and optional image.

## ✅ Features

-   Optional image, title, url, and description
-   Responsive layout with configurable theme variables
-   Uses flexbox for layout and adapts across breakpoints

---

## 🧾 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/seo/meta-preview/meta-preview.html",
	"image": "/img/og-image.jpg",
	"title": "Page title used for preview",
	"url": "https://example.com/page",
	"description": "Optional meta description for preview"
}
```

## 🧱 HTML Structure

```html
<div class="meta-preview">
	{% if section.image %}
	<div class="meta-preview__image">
		<img src="{{{section.image}}}" alt="" />
	</div>
	{% endif %}
	<div class="meta-preview__body">
		{% if section.title %}
		<div class="meta-preview__title">{{{section.title}}}</div>
		{% endif %} {% if section.url %}
		<div class="meta-preview__url">{{{section.url}}}</div>
		{% endif %} {% if section.description %}
		<div class="meta-preview__description">{{{section.description}}}</div>
		{% endif %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Flex layout with optional image block
-   Font sizes adjust via breakpoints
-   URL and description use theme colors for consistency

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                              |
| ------------------------------- | ---------------------------------------- |
| `--margin-scale`                | Controls spacing between elements        |
| `--font-size`                   | Base font size for description           |
| `--line-height`                 | Line height for text                     |
| `--b-radius`                    | Rounds preview image                     |
| `--ff-base`                     | Font for URL and description             |
| `--ff-title`                    | Font for preview title                   |
| `--c-blue`                      | Title color                              |
| `--c-green`                     | URL color                                |
| `--c-text-body-secondary`       | Description text color                   |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in media queries for responsiveness |

---
