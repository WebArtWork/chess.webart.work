# 📂 Image `/sections/media/image`

Standalone image section with optional caption.

## ✅ Features

-   Displays a responsive image
-   Optional caption beneath the image
-   Styling uses CSS variables for theme consistency
-   Responsive sizing via breakpoints

---

## 🧾 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/media/image/image.html",
	"img": "/img/sample.jpg",
	"alt": "Descriptive alt text",
	"caption": "Optional caption text"
}
```

## 🧱 HTML Structure

```html
<div class="image">
	<div class="image__img">
		<img src="{{{section.img}}}" alt="{{{section.alt}}}" />
	</div>
	{% if section.caption %}
	<div class="image__caption">{{{section.caption}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Uses `calc(... * var(--padding-scale))` and `--margin-scale` for scalable spacing
-   Image wrapper is centered and clipped with `--b-radius`
-   Caption text adapts to breakpoints via `--font-size` and media queries

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                   |
| ------------------------------- | --------------------------------------------- |
| `--padding-scale`               | Scales padding values in section              |
| `--margin-scale`                | Controls margin spacing for caption           |
| `--font-size`                   | Base font size for caption                    |
| `--line-height`                 | Line height for caption                       |
| `--letter-spacing`              | Applied to caption                            |
| `--b-radius`                    | Rounds the image container                    |
| `--transition`                  | Caption color transition                      |
| `--ff-base`                     | Font for caption text                         |
| `--c-text-body-secondary`       | Caption text color                            |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in media queries to adjust caption sizes |

---
