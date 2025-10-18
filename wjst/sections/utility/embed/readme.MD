# 📂 Embed `/sections/utility/embed`

Generic utility section for embedding external content such as videos, maps, or widgets. Supports an optional title and caption and renders supplied embed HTML.

## ✅ Features

-   Accepts raw embed code (iframe, widget, etc.)
-   Optional title and caption
-   Responsive 16:9 container with rounded corners
-   Uses global CSS variables for fonts, colors, and spacing

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/utility/embed/embed.html",
	"title": "Embedded video",
	"embed": "<iframe src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" allowfullscreen></iframe>",
	"caption": "Optional caption text"
}
```

## 🧱 HTML Structure

```html
<div class="embed">
	{% if section.title %}
	<div class="embed__title">{{{section.title}}}</div>
	{% endif %} {% if section.embed %}
	<div class="embed__wrapper">{{{section.embed}}}</div>
	{% endif %} {% if section.caption %}
	<div class="embed__caption">{{{section.caption}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Wrapper maintains a `16:9` ratio using padding-top trick
-   Container is centered and constrained in width
-   Title and caption respect global typography and color variables

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                       |
| ------------------------------- | ------------------------------------------------- |
| `--padding-scale`               | Scales section bottom padding                     |
| `--margin-scale`                | Spacing for title and caption                     |
| `--b-radius`                    | Rounds the embedded content container             |
| `--ff-base`                     | Base font for caption                             |
| `--ff-title`                    | Font for title                                    |
| `--font-size`                   | Caption font size                                 |
| `--line-height`                 | Caption line height                               |
| `--letter-spacing`              | Typography letter spacing                         |
| `--c-text-primary`              | Title text color                                  |
| `--c-text-body-secondary`       | Caption text color                                |
| `--transition`                  | Caption color transition                          |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in media queries for responsive title sizing |

---
