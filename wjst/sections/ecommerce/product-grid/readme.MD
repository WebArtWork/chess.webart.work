# 📂 Product Grid `/sections/ecommerce/product-grid`

Responsive grid for showcasing products. Each item supports an image, title, price and optional rating, making it ideal for e-commerce listings.

## ✅ Features

-   Responsive grid layout using CSS Grid
-   Optional image, price and rating per product
-   Hover elevation effect on product cards
-   Uses global CSS variables for theming and spacing

---

## 🧾 Section Data Schema

This section expects the following structure:

```json
{
	"src": "/sections/ecommerce/product-grid/product-grid.html",
	"items": [
		{
			"img": "/img/product.png",
			"title": "Product name",
			"url": "/product-url",
			"price": "$49",
			"rating": "★★★★☆"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="product-grid">
	{% for item in section.items %}
	<article class="product-grid__item">
		{% if item.img %}
		<div class="product-grid__image">
			<img src="{{{item.img}}}" alt="{{{item.title}}}" />
		</div>
		{% endif %}
		<div class="product-grid__body">
			{% if item.title %}
			<h3 class="product-grid__title">
				{% if item.url %}
				<a href="{{{item.url}}}">{{{item.title}}}</a>
				{% else %} {{{item.title}}} {% endif %}
			</h3>
			{% endif %} {% if item.price %}
			<div class="product-grid__price">{{{item.price}}}</div>
			{% endif %} {% if item.rating %}
			<div class="product-grid__rating">{{{item.rating}}}</div>
			{% endif %}
		</div>
	</article>
	{% endfor %}
</div>
```

---

## 🎨 Styling Notes

-   Grid layout adapts with `repeat(auto-fit, minmax(280px, 1fr))`
-   Spacing scaled via `--padding-scale` and `--margin-scale`
-   Typography and colors sourced from global CSS variables
-   Media queries adjust layout at `--bp-md` and `--bp-sm`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                              |
| ------------------------- | ---------------------------------------- |
| `--padding-scale`         | Controls section padding                 |
| `--margin-scale`          | Gap between grid items                   |
| `--ff-base`               | Base font for body text                  |
| `--ff-title`              | Font for product titles                  |
| `--b-radius`              | Card border radius                       |
| `--c-bg-item`             | Card background color                    |
| `--c-border`              | Card border color                        |
| `--c-shadow`              | Box shadow on hover                      |
| `--c-text-primary`        | Title and price color                    |
| `--c-text-body-secondary` | Rating color                             |
| `--c-primary-hover`       | Hover state for title links              |
| `--font-size`             | Base font size for price and rating      |
| `--line-height`           | Line height for product title            |
| `--letter-spacing`        | Letter spacing for product title         |
| `--bp-md`, `--bp-sm`      | Responsive breakpoints for grid collapse |

---
