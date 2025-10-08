# 📂 Quote `/sections/feedback/quote`

Simple quote block for highlighting user feedback or testimonials. Supports optional avatar and author attribution.

## ✅ Features

-   Optional avatar image
-   Conditionally rendered quote and author fields
-   Responsive typography with CSS variables
-   Theme-aware colors and spacing

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/feedback/quote/quote.html",
	"img": "/img/avatar.jpg",
	"quote": "An inspiring message goes here.",
	"author": "Name, Company"
}
```

## 🧱 HTML Structure

```html
<div class="quote">
	{% if section.img %}
	<div class="quote__img">
		<img src="{{{section.img}}}" alt="" />
	</div>
	{% endif %} {% if section.quote %}
	<div class="quote__text">{{{section.quote}}}</div>
	{% endif %} {% if section.author %}
	<div class="quote__author">{{{section.author}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing uses `calc(... * var(--padding-scale))` and `--margin-scale`
-   Quote text is italicized and wrapped with `open-quote` / `close-quote`
-   Avatar uses `--b-radius` for rounded corners
-   Colors and fonts sourced from CSS variables for consistent theming

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `--padding-scale`         | Scales padding values in section                |
| `--margin-scale`          | Controls margin spacing                         |
| `--font-size`             | Base font size for quote                        |
| `--line-height`           | Line height for quote                           |
| `--letter-spacing`        | Letter spacing for quote                        |
| `--b-radius`              | Rounds the avatar image                         |
| `--ff-base`               | Font for quote text                             |
| `--ff-title`              | Font for author name                            |
| `--c-text-primary`        | Quote text color                                |
| `--c-text-body-secondary` | Author text color                               |
| `--bp-md`, `--bp-sm`      | Used in media queries for responsive typography |
