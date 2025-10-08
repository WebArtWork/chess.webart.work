# 📂 Media Text `/sections/content/media-text`

Section displaying an image or video alongside text content. Ideal for highlighting features, articles, or any content that pairs visuals with copy.

## ✅ Features

-   Flexible media slot (image or video)
-   Optional title and text content
-   Responsive layout that stacks on smaller screens
-   Uses global CSS variables for typography, spacing, and colors

---

## 🧾 Section Data Schema

This section expects the following data structure:

```json
{
	"src": "/sections/content/media-text/media-text.html",
	"img": "/img/sample.jpg",
	"title": "Optional section title",
	"text": "Optional descriptive text that accompanies the media"
}
```

## 🧱 HTML Structure

```html
<div class="media-text">
	<div class="media-text__media">
		<img src="{{{section.img}}}" alt="" />
	</div>
	<div class="media-text__content">
		{% if section.title %}
		<div class="media-text__title">{{{section.title}}}</div>
		{% endif %} {% if section.text %}
		<div class="media-text__text">{{{section.text}}}</div>
		{% endif %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Layout uses `flex` and collapses to column on smaller screens
-   Spacing and typography scale via CSS variables like `--padding-scale` and `--font-size`
-   Media block accepts both `img` and `video` elements and clips via `--b-radius`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                     |
| ------------------------------- | ----------------------------------------------- |
| `--padding-scale`               | Scales gap and padding within the section       |
| `--margin-scale`                | Controls top margin for text block              |
| `--font-size`                   | Base font size for text content                 |
| `--line-height`                 | Line height for title and text                  |
| `--letter-spacing`              | Applied to title and text                       |
| `--b-radius`                    | Rounds media container                          |
| `--transition`                  | Transition for text color changes               |
| `--ff-base`                     | Font for text                                   |
| `--ff-title`                    | Font for title                                  |
| `--c-text-primary`              | Title text color                                |
| `--c-text-body-secondary`       | Body text color                                 |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Media query breakpoints for responsive behavior |

---
