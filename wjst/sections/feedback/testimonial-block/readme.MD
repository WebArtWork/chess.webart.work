# 📂 Testimonial Block `/sections/feedback/testimonial-block`

Displays a collection of testimonials in a responsive grid. Each item can include an optional image, quote, author, and role.

## ✅ Features

-   Optional section title
-   Responsive grid layout for testimonials
-   Supports image, quote, author, and role per item
-   Theming via global CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/feedback/testimonial-block/testimonial-block.html",
	"title": "What clients say",
	"items": [
		{
			"quote": "Great service!",
			"author": "John Doe",
			"role": "CEO, Example Inc.",
			"img": "/img/avatar.jpg"
		}
	]
}
```

---

## 🧱 HTML Structure

```html
<div class="testimonial-block">
	<div class="testimonial-block__title">...</div>
	<div class="testimonial-block__items">
		<div class="testimonial-block__item">
			<div class="testimonial-block__img"><img src="" alt="" /></div>
			<div class="testimonial-block__quote">...</div>
			<div class="testimonial-block__author">...</div>
			<div class="testimonial-block__role">...</div>
		</div>
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Uses `calc(... * var(--padding-scale))` and `--margin-scale` for scalable spacing
-   Grid layout adapts with `auto-fit` and `minmax`
-   Images and cards use `--b-radius`
-   Typography controlled via `--font-size`, `--line-height`, and `--letter-spacing`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                            |
| ------------------------- | -------------------------------------- |
| `--padding-scale`         | Scales padding values                  |
| `--margin-scale`          | Controls margin spacing                |
| `--ff-base`               | Font for body text                     |
| `--ff-title`              | Font for titles                        |
| `--b-radius`              | Rounds images and cards                |
| `--font-size`             | Base font size                         |
| `--line-height`           | Default line height                    |
| `--letter-spacing`        | Default letter spacing                 |
| `--c-bg-item`             | Background color for testimonial items |
| `--c-text-primary`        | Quote text color                       |
| `--c-text-body-secondary` | Author and role text color             |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive sizing      |
