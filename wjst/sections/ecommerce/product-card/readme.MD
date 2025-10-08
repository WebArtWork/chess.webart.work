# 🛒 Product Card `/sections/ecommerce/product-card`

Reusable product card for e-commerce listings. Displays product image, title, price, rating, and an optional action button.

## ✅ Features

-   Optional title, price, rating, and button (all conditionally rendered)
-   Responsive image container with theme-based styling
-   Utilizes CSS variables for typography, colors, and spacing
-   Breakpoint-aware adjustments for smaller screens

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/ecommerce/product-card/product-card.html",
	"img": "/img/product.jpg",
	"title": "Product name",
	"price": "$19.99",
	"rating": "4.5/5",
	"btnText": "Add to cart"
}
```

## 🧱 HTML Structure

```html
<div class="product-card">
	<div class="product-card__img">
		<img src="{{{section.img}}}" alt="{{{section.title}}}" />
	</div>
	{% if section.title %}
	<div class="product-card__title">{{{section.title}}}</div>
	{% endif %} {% if section.price %}
	<div class="product-card__price">{{{section.price}}}</div>
	{% endif %} {% if section.rating %}
	<div class="product-card__rating">{{{section.rating}}}</div>
	{% endif %} {% if section.btnText %}
	<button class="product-card__btn">{{{section.btnText}}}</button>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Card background and border use `--c-bg-item` and `--c-border`
-   Spacing controlled with `--padding-scale` and `--margin-scale`
-   Title and button utilize `--ff-title` and `--ff-base` fonts
-   Button colors derive from `--c-primary` and `--c-primary-hover`
-   Responsive tweaks applied at `--bp-md` and `--bp-sm`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                         |
| ------------------------- | ----------------------------------- |
| `--ff-base`               | Base font for text                  |
| `--ff-title`              | Font for product title              |
| `--font-size`             | Base font size                      |
| `--padding-scale`         | Scales padding values               |
| `--margin-scale`          | Scales margin values                |
| `--b-radius`              | Rounds card and image corners       |
| `--c-bg-item`             | Card background color               |
| `--c-border`              | Border color                        |
| `--c-text-primary`        | Title and button text color         |
| `--c-text-secondary`      | Hover text color for button         |
| `--c-text-body-secondary` | Rating text color                   |
| `--c-primary`             | Price and button background color   |
| `--c-primary-hover`       | Button hover background color       |
| `--c-primary-border`      | Button border color                 |
| `--transition`            | Transition timing for hover effects |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive styles   |
