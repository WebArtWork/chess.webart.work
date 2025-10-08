# 📂 Product Details `/sections/ecommerce/product-details`

Full-width product detail block. Displays an image alongside title, description, price, rating and a call-to-action button. Designed for ecommerce product pages.

## ✅ Features

-   Responsive two-column layout (image and info)
-   Optional title, description, price, rating and CTA button
-   Uses CSS variables for spacing, colors, typography and breakpoints
-   Easily themeable via global design tokens

---

## 🧾 Section Data Schema

This section expects the following structure passed via `section`:

```json
{
	"src": "/sections/ecommerce/product-details/product-details.html",
	"img": "/img/product.jpg",
	"title": "Sample product title",
	"description": "Optional detailed description of the product",
	"price": "$99.99",
	"rating": "⭐️⭐️⭐️⭐️☆",
	"cta": {
		"text": "Add to cart",
		"href": "#add-to-cart"
	}
}
```

## 🧱 HTML Structure

```html
<div class="product-details">
	<div class="product-details__image">
		<img src="{{{section.img}}}" alt="{{{section.title}}}" />
	</div>
	<div class="product-details__info">
		{% if section.title %}
		<div class="product-details__title">{{{section.title}}}</div>
		{% endif %} {% if section.description %}
		<div class="product-details__description">
			{{{section.description}}}
		</div>
		{% endif %} {% if section.price %}
		<div class="product-details__price">{{{section.price}}}</div>
		{% endif %} {% if section.rating %}
		<div class="product-details__rating">{{{section.rating}}}</div>
		{% endif %} {% if section.cta %}
		<a class="product-details__cta" href="{{{section.cta.href}}}"
			>{{{section.cta.text}}}</a
		>
		{% endif %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Layout built with flexbox and collapses to single column on small screens
-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Typography leverages `--ff-title`, `--ff-base`, `--font-size`, and related variables
-   Button inherits primary colors and hover transition from theme
-   Rating uses theme yellow to highlight score

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `--padding-scale`         | Scales vertical and horizontal padding          |
| `--margin-scale`          | Controls gaps and top margins                   |
| `--font-size`             | Base font size for description and price        |
| `--line-height`           | Line height for text blocks                     |
| `--letter-spacing`        | Letter spacing for titles and description       |
| `--b-radius`              | Rounds image and button corners                 |
| `--transition`            | Applied to button hover state                   |
| `--ff-base`               | Base font family for description, price, rating |
| `--ff-title`              | Font family for product title                   |
| `--c-text-primary`        | Title text color                                |
| `--c-text-body-secondary` | Description text color                          |
| `--c-primary`             | Price color and button background               |
| `--c-primary-hover`       | Button hover color                              |
| `--c-yellow`              | Rating color                                    |
| `--bp-md`, `--bp-sm`      | Breakpoints used for responsive adjustments     |

---
