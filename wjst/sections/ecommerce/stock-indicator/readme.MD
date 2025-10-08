# 📂 Stock Indicator `/sections/ecommerce/stock-indicator`

Displays product availability with a progress bar and status text. Useful for communicating inventory levels like "In stock" or "Low stock".

## ✅ Features

-   Dynamic progress bar reflecting stock percentage
-   Conditional status text for in, low, or out-of-stock states
-   Customizable labels and thresholds
-   Responsive layout and theme-aware styling via CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/ecommerce/stock-indicator/stock-indicator.html",
	"quantity": 42,
	"max": 100,
	"low": 10,
	"labels": {
		"in": "In stock",
		"low": "Low stock",
		"out": "Out of stock"
	}
}
```

## 🧱 HTML Structure

```html
{% set qty = section.quantity or 0 %} {% set max = section.max or 100 %} {% set
low = section.low or 10 %} {% set percent = (qty / max) * 100 %}
<div class="stock-indicator">
	<div class="stock-indicator__bar">
		<div
			class="stock-indicator__progress{% if qty <= 0 %} stock-indicator__progress--out{% elseif qty <= low %} stock-indicator__progress--low{% else %} stock-indicator__progress--in{% endif %}"
			style="width: {{{percent}}}%"
		></div>
	</div>
	{% if qty <= 0 %}
	<div class="stock-indicator__status stock-indicator__status--out">
		{{{ section.labels.out | default("Out of stock") }}}
	</div>
	{% elseif qty <= low %}
	<div class="stock-indicator__status stock-indicator__status--low">
		{{{ section.labels.low | default("Low stock") }}}
	</div>
	{% else %}
	<div class="stock-indicator__status stock-indicator__status--in">
		{{{ section.labels.in | default("In stock") }}}
	</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Uses `--c-success`, `--c-alert`, and `--c-error` for status colors
-   Width of progress bar is driven inline via percentage calculation
-   Responsive: switches to vertical layout below `--bp-md`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable           | Description                              |
| ------------------ | ---------------------------------------- |
| `--margin-scale`   | Spacing between bar and label            |
| `--ff-base`        | Font family for text                     |
| `--c-bg-item`      | Background for the empty bar             |
| `--b-radius`       | Rounding for the bar                     |
| `--transition`     | Progress animation                       |
| `--c-success`      | Color for in-stock state                 |
| `--c-alert`        | Color for low-stock state                |
| `--c-error`        | Color for out-of-stock state             |
| `--font-size`      | Base text size for status                |
| `--line-height`    | Line height for status                   |
| `--letter-spacing` | Letter spacing for status                |
| `--bp-md`          | Breakpoint for mobile layout adjustments |

---
