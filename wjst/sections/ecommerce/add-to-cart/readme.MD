# 🛒 Add to Cart `/sections/ecommerce/add-to-cart`

Interactive add-to-cart block for product pages. Includes quantity controls and updates a global cart counter.

## ✅ Features

-   Optional price display
-   Quantity stepper with increase/decrease buttons
-   Adds selected quantity to global cart count
-   Responsive layout for small screens
-   Theming via CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/ecommerce/add-to-cart/add-to-cart.html",
	"id": "sku-1",
	"price": "$19.99",
	"button": "Add to cart"
}
```

## 🧱 HTML Structure

```html
<div class="add-to-cart" data-product-id="{{{section.id}}}">
	{% if section.price %}
	<div class="add-to-cart__price">{{{section.price}}}</div>
	{% endif %}
	<div class="add-to-cart__controls">
		<button
			class="add-to-cart__btn add-to-cart__btn--decrease"
			aria-label="Decrease quantity"
		>
			&minus;
		</button>
		<input
			class="add-to-cart__quantity"
			type="number"
			min="1"
			value="{{{section.quantity || 1}}}"
		/>
		<button
			class="add-to-cart__btn add-to-cart__btn--increase"
			aria-label="Increase quantity"
		>
			+
		</button>
	</div>
	<button class="add-to-cart__submit">
		{{{section.button || 'Add to cart'}}}
	</button>
</div>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable             | Description                                  |
| -------------------- | -------------------------------------------- |
| `--ff-base`          | Base font for the component                  |
| `--ff-title`         | Font for price and button                    |
| `--font-size`        | Base font size                               |
| `--padding-scale`    | Scales internal padding                      |
| `--margin-scale`     | Scales gaps and margins                      |
| `--b-radius`         | Border radius for controls and button        |
| `--transition`       | Transition for hover states                  |
| `--c-text-primary`   | Text color for price and button              |
| `--c-primary`        | Background color for submit button           |
| `--c-primary-hover`  | Hover color for submit button and controls   |
| `--c-primary-border` | Border for submit button                     |
| `--c-bg-item`        | Background for quantity controls             |
| `--c-border`         | Border color for quantity controls           |
| `--bp-sm`            | Breakpoint for stacking layout on small view |

---

## ⚙️ JavaScript Behaviour

JS initializes quantity steppers and updates a `[data-cart-count]` element with total items added.
