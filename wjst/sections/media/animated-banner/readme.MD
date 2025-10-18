# 📂 Animated Banner `/sections/media/animated-banner`

Animated banner for highlighting content with a background image and overlay text. The image slowly zooms while optional title and subtitle are displayed.

## ✅ Features

-   Background image with subtle zoom animation
-   Optional title and subtitle
-   Overlay color uses theme variables
-   Responsive typography and spacing

---

## 📝 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/media/animated-banner/animated-banner.html",
	"img": "/img/sample.jpg",
	"title": "Banner title",
	"subtitle": "Optional subtitle text"
}
```

## 🧱 HTML Structure

```html
<div class="animated-banner">
	<div class="animated-banner__media">
		<img src="{{{section.img}}}" alt="" />
	</div>
	<div class="animated-banner__content">
		{% if section.title %}
		<div class="animated-banner__title">{{{section.title}}}</div>
		{% endif %} {% if section.subtitle %}
		<div class="animated-banner__subtitle">{{{section.subtitle}}}</div>
		{% endif %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Uses `--padding-scale` and `--margin-scale` for spacing
-   Background image zooms via `@keyframes banner-zoom`
-   `::before` overlay leverages `--c-primary` for tint
-   Title color transitions to `--c-primary-hover` on hover

---

## 🧹 Theme Variables Used (from `template.json`)

| Variable                        | Description                     |
| ------------------------------- | ------------------------------- |
| `--padding-scale`               | Scales banner padding           |
| `--margin-scale`                | Controls spacing above subtitle |
| `--b-radius`                    | Rounds banner corners           |
| `--ff-base`                     | Base font for banner            |
| `--ff-title`                    | Title font                      |
| `--font-size`                   | Subtitle font size              |
| `--line-height`                 | Line height for text            |
| `--letter-spacing`              | Title letter spacing            |
| `--c-text-primary`              | Text color                      |
| `--c-primary`                   | Overlay background color        |
| `--c-primary-hover`             | Title hover color               |
| `--transition`                  | Hover transition duration       |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Responsive breakpoints          |

---
