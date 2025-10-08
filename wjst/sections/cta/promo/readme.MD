# 📂 Promo `/sections/cta/promo`

Promotional call-to-action section with optional image, title, description and button.

## ✅ Features

-   Optional image, title, description and button (conditionally rendered)
-   Responsive layout and typography
-   Uses CSS variables for colors, fonts, spacing and breakpoints
-   Button styles based on global theme tokens

---

## 🧾 Section Data Schema

This section expects the following data:

```json
{
	"src": "/sections/cta/promo/promo.html",
	"img": "/img/promo.png",
	"title": "Special Offer",
	"description": "Short promo or marketing message",
	"button": {
		"text": "Get started",
		"href": "/signup"
	}
}
```

## 🧱 HTML Structure

```html
<div class="promo">
	{% if section.img %}
	<div class="promo__img">
		<img src="{{{section.img}}}" alt="" />
	</div>
	{% endif %} {% if section.title %}
	<div class="promo__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="promo__description">{{{section.description}}}</div>
	{% endif %} {% if section.button %}
	<div class="promo__action">
		<a href="{{{section.button.href}}}" class="promo__btn"
			>{{{section.button.text}}}</a
		>
	</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing uses `--padding-scale` and `--margin-scale` for flexible sizing
-   Typography controlled via `--font-size`, `--line-height`, and `--letter-spacing`
-   Button uses `--c-primary-hover` / `--c-primary-cursor` for states
-   Responsive adjustments through `--bp-lg`, `--bp-md`, `--bp-sm`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `--padding-scale`               | Scales padding values in section               |
| `--margin-scale`                | Controls margin spacing                        |
| `--font-size`                   | Base font size for description and button      |
| `--line-height`                 | Line height for text                           |
| `--letter-spacing`              | Applied to title and description               |
| `--b-radius`                    | Rounds the image and button                    |
| `--transition`                  | Used for hover transitions                     |
| `--ff-base`                     | Base font for description and button           |
| `--ff-title`                    | Font for title text                            |
| `--c-text-primary`              | Title text color                               |
| `--c-text-body-secondary`       | Description text color                         |
| `--c-primary-hover`             | Button background color                        |
| `--c-primary-cursor`            | Button hover background color                  |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Media query breakpoints for responsive styling |
