# 📂 Text Block `/sections/content/text-block`

A generic text section with an optional title and supporting description.
Useful for standalone paragraphs or introducing other content blocks.

## ✅ Features

-   Optional title and description (conditionally rendered)
-   Centered layout with constrained text width
-   Responsive typography across breakpoints
-   Uses CSS variables for colors, fonts, spacing, and responsiveness

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/content/text-block/text-block.html",
	"title": "Optional block title",
	"description": "Supporting paragraph of text"
}
```

## 🧱 HTML Structure

```html
<div class="text-block">
	{% if section.title %}
	<div class="text-block__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="text-block__description">{{{section.description}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Text is centered, and the description is limited to `70ch` for readability
-   Typography inherits from global font and sizing variables
-   Breakpoints adjust font sizes for smaller screens

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                   |
| ------------------------------- | --------------------------------------------- |
| `--padding-scale`               | Scales bottom padding                         |
| `--margin-scale`                | Controls margin spacing for title             |
| `--font-size`                   | Base font size for description                |
| `--line-height`                 | Line height for title and description         |
| `--letter-spacing`              | Letter spacing for text                       |
| `--ff-base`                     | Font for description text                     |
| `--ff-title`                    | Font for title text                           |
| `--c-text-primary`              | Title text color                              |
| `--c-text-body-secondary`       | Description text color                        |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Media query breakpoints for responsive sizing |

---
