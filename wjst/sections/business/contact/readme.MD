# 📂 Contact `/sections/business/contact`

Contact section for displaying business contact information such as address, phone, and email. Each item is optional.

## ✅ Features

-   Optional title and description
-   Renders address, phone, and email if provided
-   Uses Material Icons to illustrate contact methods
-   Responsive typography and spacing via CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/business/contact/contact.html",
	"title": "Get in touch",
	"description": "We would love to hear from you.",
	"address": "123 Main St, Anytown",
	"phone": "+1 (555) 123-4567",
	"email": "info@example.com"
}
```

## 🧱 HTML Structure

```html
<div class="contact">
	{% if section.title %}
	<div class="contact__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="contact__description">{{{section.description}}}</div>
	{% endif %}
	<div class="contact__details">
		{% if section.address %}
		<div class="contact__item">
			<span class="material-icons">location_on</span>
			<span>{{{section.address}}}</span>
		</div>
		{% endif %} {% if section.phone %}
		<div class="contact__item">
			<span class="material-icons">phone</span>
			<span>{{{section.phone}}}</span>
		</div>
		{% endif %} {% if section.email %}
		<div class="contact__item">
			<span class="material-icons">email</span>
			<span>{{{section.email}}}</span>
		</div>
		{% endif %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Uses `calc(... * var(--padding-scale))` and `--margin-scale` for spacing
-   Icons scale with `--icon-size`
-   Typography adapts via breakpoints and `--font-size`
-   Colors driven by `--c-text-primary` and `--c-text-body-secondary`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                             |
| ------------------------------- | --------------------------------------- |
| `--padding-scale`               | Scales bottom padding and internal gaps |
| `--margin-scale`                | Controls vertical spacing and gaps      |
| `--font-size`                   | Base font size for text                 |
| `--line-height`                 | Line height for text                    |
| `--letter-spacing`              | Applied to title and items              |
| `--icon-size`                   | Base size for material icons            |
| `--ff-base`                     | Font for description and items          |
| `--ff-title`                    | Font for the title                      |
| `--c-text-primary`              | Title and icon color                    |
| `--c-text-body-secondary`       | Description and details text color      |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints for responsive typography   |
| `--transition`                  | Transition for color changes            |
