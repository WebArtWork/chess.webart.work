# 📂 Intro `/sections/content/intro`

Intro section for general use at the top of a page or block. Supports an image, optional title, and description — ideal for introducing content or setting context.

## ✅ Features

-   Optional title and description (conditionally rendered)
-   Supports responsive image
-   Layout and typography adapt across breakpoints
-   Uses CSS variables for colors, fonts, spacing, and responsiveness
-   Centralized theming support via global design tokens

---

## 🧾 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/content/intro/intro.html",
	"img": "/img/logo.svg",
	"title": "Optional section title",
	"description": "Optional paragraph or supporting intro text"
}
```

## 🧱 HTML Structure

```html
<div class="intro">
	<div class="intro__img">
		<img src="{{{section.img}}}" alt="" />
	</div>

	{% if section.title %}
	<div class="intro__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="intro__description">{{{section.description}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Uses `calc(... * var(--padding-scale))` and `--margin-scale` for scalable spacing
-   Font sizing adapts via breakpoints and `--font-size`
-   `intro__description` is limited to `70ch` for optimal readability
-   Image is responsive, centered, and clipped with `border-radius`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `--padding-scale`               | Scales padding values in section                   |
| `--margin-scale`                | Controls margin spacing                            |
| `--font-size`                   | Base font size for description                     |
| `--line-height`                 | Line height for title and description              |
| `--letter-spacing`              | Applied to title and description                   |
| `--b-radius`                    | Rounds the image container                         |
| `--transition`                  | Used in description hover/fade behavior            |
| `--ff-base`                     | Font for description text                          |
| `--ff-title`                    | Font for title text                                |
| `--c-text-primary`              | Title text color                                   |
| `--c-text-body-secondary`       | Description text color                             |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in media queries to adjust sizes responsively |

---
