# 📂 Testimonial `/sections/content/testimonial`

A testimonial block featuring an optional image, quote text, and author attribution.

## ✅ Features

-   Optional image avatar
-   Quote text with author
-   Responsive typography and spacing
-   Uses CSS variables for colors, fonts, and spacing
-   Centralized theming support via global design tokens

---

## 🧾 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/content/testimonial/testimonial.html",
	"img": "/img/avatar.jpg",
	"quote": "Optional quote text",
	"author": "Optional author name"
}
```

## 🧱 HTML Structure

```html
<div class="testimonial">
	{% if section.img %}
	<div class="testimonial__img">
		<img src="{{{section.img}}}" alt="" />
	</div>
	{% endif %}
	<div class="testimonial__content">
		{% if section.quote %}
		<div class="testimonial__quote">{{{section.quote}}}</div>
		{% endif %} {% if section.author %}
		<div class="testimonial__author">{{{section.author}}}</div>
		{% endif %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Image is centered and clipped with `border-radius`
-   Uses `calc(... * var(--padding-scale))` and `--margin-scale` for scalable spacing
-   Quote and author typography adapt across breakpoints
-   Theme variables control fonts, colors, and responsive breakpoints

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `--padding-scale`         | Scales padding values in section                   |
| `--margin-scale`          | Controls margin spacing                            |
| `--font-size`             | Base font size for quote                           |
| `--line-height`           | Line height for quote                              |
| `--letter-spacing`        | Letter spacing for quote                           |
| `--b-radius`              | Rounds the image container                         |
| `--ff-base`               | Font for quote text                                |
| `--ff-title`              | Font for author name                               |
| `--c-text-primary`        | Quote text color                                   |
| `--c-text-body-secondary` | Author text color                                  |
| `--bp-md`, `--bp-sm`      | Used in media queries to adjust sizes responsively |

---
