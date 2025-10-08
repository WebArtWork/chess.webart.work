# 📂 Payment Logos `/sections/ecommerce/payment-logos`

Displays a row of accepted payment method logos. Useful in checkout pages or footers.

## ✅ Features

-   Renders a list of payment logos
-   Responsive layout with wrapping and spacing
-   Uses global CSS variables for theming

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/ecommerce/payment-logos/payment-logos.html",
	"logos": [
		{ "img": "/img/payments/visa.svg", "alt": "Visa" },
		{ "img": "/img/payments/mastercard.svg", "alt": "Mastercard" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="payment-logos">
	{% for logo in section.logos %}
	<div class="payment-logos__item">
		<img src="{{{logo.img}}}" alt="{{{logo.alt}}}" />
	</div>
	{% endfor %}
</div>
```

---

## 🎨 Styling Notes

-   Uses flexbox to center and wrap logos
-   Spacing scales with `--margin-scale` and `--padding-scale`
-   Logo containers leverage `--c-border`, `--c-bg-item`, and `--b-radius`
-   Logo height derives from `--icon-size` for consistent sizing

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                              |
| -------------------- | ---------------------------------------- |
| `--margin-scale`     | Controls gap between logos               |
| `--padding-scale`    | Padding around each logo                 |
| `--c-border`         | Border color of logo container           |
| `--c-bg-item`        | Background color for logo container      |
| `--b-radius`         | Rounds the logo container corners        |
| `--icon-size`        | Base size used for logo height           |
| `--bp-md`, `--bp-sm` | Breakpoints adjusting responsive spacing |

---
