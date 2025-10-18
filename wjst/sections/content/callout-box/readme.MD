# 📂 Callout Box `/sections/content/callout-box`

A simple highlighted block for drawing attention to important information.
Supports an optional title and description, styled using global theme tokens.

## ✅ Features

-   Optional title and description (conditionally rendered)
-   Left-accent border to emphasize content
-   Responsive typography across breakpoints
-   Uses CSS variables for colors, fonts, spacing, and responsiveness

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/content/callout-box/callout-box.html",
	"title": "Optional callout title",
	"description": "Important information or message"
}
```

## 🧱 HTML Structure

```html
<div class="callout-box">
	{% if section.title %}
	<div class="callout-box__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="callout-box__description">{{{section.description}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Accent border and background colors are controlled via CSS variables
-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Typography inherits from global font and sizing variables
-   Breakpoints adjust font sizes for smaller screens

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `--padding-scale`         | Scales inner padding                               |
| `--margin-scale`          | Controls margin spacing for title                  |
| `--font-size`             | Base font size for description                     |
| `--line-height`           | Line height for title and description              |
| `--letter-spacing`        | Letter spacing for text                            |
| `--b-radius`              | Rounds container corners                           |
| `--ff-base`               | Font for description text                          |
| `--ff-title`              | Font for title text                                |
| `--c-bg-item`             | Background color of the callout box                |
| `--c-primary-border`      | Color of the left accent border                    |
| `--c-text-primary`        | Title text color                                   |
| `--c-text-body-secondary` | Description text color                             |
| `--bp-md`, `--bp-sm`      | Used in media queries to adjust sizes responsively |

---
