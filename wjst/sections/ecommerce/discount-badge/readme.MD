# 📂 Discount Badge `/sections/ecommerce/discount-badge`

A badge to highlight a percentage discount with optional label text.

## ✅ Features

-   Displays discount value with optional label
-   Responsive typography and spacing
-   Uses CSS variables for colors, fonts, and spacing
-   Hover state driven by theme variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/ecommerce/discount-badge/discount-badge.html",
	"discount": 20,
	"label": "OFF"
}
```

## 🧱 HTML Structure

```html
<div class="discount-badge">
	{% if section.discount %}
	<span class="discount-badge__value">-{{{section.discount}}}%</span>
	{% endif %} {% if section.label %}
	<span class="discount-badge__label">{{{section.label}}}</span>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Background and hover colors use `--c-error` and `--c-error-hover`
-   Typography and spacing rely on global design tokens
-   Responsive sizing at `--bp-md`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable           | Description                   |
| ------------------ | ----------------------------- |
| `--ff-base`        | Font for badge text           |
| `--font-size`      | Base font size                |
| `--line-height`    | Line height                   |
| `--letter-spacing` | Letter spacing                |
| `--padding-scale`  | Controls padding              |
| `--margin-scale`   | Space between value and label |
| `--b-radius`       | Border radius                 |
| `--c-error`        | Background color              |
| `--c-error-hover`  | Hover background color        |
| `--c-text-primary` | Text color                    |
| `--bp-md`          | Responsive breakpoint         |
| `--transition`     | Transition duration           |
