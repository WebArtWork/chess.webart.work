# 📂 Price `/sections/ecommerce/price`

Reusable pricing block for e‑commerce interfaces. Displays the current price with optional original price and note, while supporting custom currency symbols and responsive typography.

## ✅ Features

-   Highlights current price with optional strikethrough original price
-   Supports optional currency symbol and auxiliary note
-   Responsive font sizing across breakpoints
-   Uses CSS variables for colors, fonts and spacing
-   Flex layout aligns price elements on a single line

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/ecommerce/price/price.html",
	"currency": "$",
	"current": "19.99",
	"original": "24.99",
	"note": "per item"
}
```

## 🧱 HTML Structure

```html
<div class="price">
	{% if section.original %}
	<div class="price__original">
		{% if section.currency %}<span class="price__currency"
			>{{{section.currency}}}</span
		>{% endif %}{{{section.original}}}
	</div>
	{% endif %}
	<div class="price__current">
		{% if section.currency %}<span class="price__currency"
			>{{{section.currency}}}</span
		>{% endif %}{{{section.current}}}
	</div>
	{% if section.note %}
	<div class="price__note">{{{section.note}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Currency symbol rendered smaller via `.price__currency`
-   Original price is muted and struck through when provided
-   Uses `calc(... * var(--margin-scale))` and `--font-size` for scalable sizing
-   Breakpoints adjust typography for smaller screens

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                            |
| ------------------------- | -------------------------------------- |
| `--font-size`             | Base font size for price values        |
| `--ff-base`               | Base font family                       |
| `--margin-scale`          | Spacing scale for margins              |
| `--c-primary`             | Color for current price                |
| `--c-text-body-secondary` | Color for original price               |
| `--c-text-secondary`      | Color for note                         |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive font sizing |

---
