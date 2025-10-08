# 📂 Variant Selector `/sections/ecommerce/variant-selector`

Interactive selector for choosing between product variants such as color or size.
Displays image and price of the active variant and updates instantly when a new
option is selected.

## ✅ Features

-   Optional title
-   Renders buttons for variant options
-   Supports color swatches and labels
-   Displays image and price for the selected variant
-   No page reloads — selection handled in JavaScript

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/ecommerce/variant-selector/variant-selector.html",
	"title": "Choose a variant",
	"options": [
		{
			"label": "Red",
			"color": "#ff0000",
			"img": "/img/red.jpg",
			"price": "$19.99"
		},
		{
			"label": "Blue",
			"color": "#0000ff",
			"img": "/img/blue.jpg",
			"price": "$21.99"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="variant-selector">
	<div class="variant-selector__title">...</div>
	<div class="variant-selector__options">
		<button class="variant-selector__option" data-img="" data-price="">
			<span class="variant-selector__swatch"></span>
			<span class="variant-selector__label"></span>
		</button>
	</div>
	<div class="variant-selector__display">
		<img class="variant-selector__image" src="" alt="" />
		<div class="variant-selector__price"></div>
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Uses global CSS variables for colors, typography, spacing and responsiveness
-   Active option styled using `--c-primary` and `--c-text-primary`
-   Responsive adjustments at the `--bp-md` breakpoint

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                          |
| -------------------- | ------------------------------------ |
| `--ff-base`          | Base font family                     |
| `--ff-title`         | Title font family                    |
| `--font-size`        | Base font size                       |
| `--line-height`      | Base line height                     |
| `--letter-spacing`   | Letter spacing                       |
| `--padding-scale`    | Scales padding                       |
| `--margin-scale`     | Scales margin                        |
| `--c-text-primary`   | Primary text color                   |
| `--c-text-secondary` | Secondary text color                 |
| `--c-primary`        | Primary brand color                  |
| `--c-white`          | White background for options         |
| `--c-border`         | Border color                         |
| `--b-radius`         | Border radius for elements           |
| `--transition`       | Transition timing                    |
| `--bp-md`            | Medium breakpoint for responsiveness |

---
