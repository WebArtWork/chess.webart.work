# 📂 Exit Modal `/sections/cta/exit-modal`

Exit intent modal triggered when the user moves the cursor outside the page or scrolls past the first viewport. Displays an optional title, description, and call-to-action button.

## ✅ Features

-   Appears once on exit intent or after scrolling beyond one screen height
-   Optional title, description, and button
-   Close icon hides the modal
-   Uses CSS variables for styling and responsiveness

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/cta/exit-modal/exit-modal.html",
	"title": "Wait, before you go!",
	"description": "Sign up to stay updated",
	"button": { "label": "Subscribe", "url": "/signup" }
}
```

## 🧱 HTML Structure

```html
<div class="exit-modal" id="exitModal">
	<div class="exit-modal__content">
		<div class="exit-modal__close" id="exitModalClose">&times;</div>
		{% if section.title %}
		<div class="exit-modal__title">{{{section.title}}}</div>
		{% endif %} {% if section.description %}
		<div class="exit-modal__description">{{{section.description}}}</div>
		{% endif %} {% if section.button %}
		<a href="{{{section.button.url}}}" class="exit-modal__button"
			>{{{section.button.label}}}</a
		>
		{% endif %}
	</div>
</div>
```

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                       |
| ------------------------- | --------------------------------- |
| `--c-shadow`              | Overlay background color          |
| `--c-bg-item`             | Modal content background          |
| `--c-text-primary`        | Title and button text color       |
| `--c-text-body-secondary` | Description text color            |
| `--c-text-secondary`      | Close button color                |
| `--c-primary`             | Button background color           |
| `--c-primary-hover`       | Button hover background           |
| `--ff-title`              | Font for modal title              |
| `--ff-base`               | Font for description              |
| `--font-size`             | Base font size for description    |
| `--line-height`           | Description line height           |
| `--padding-scale`         | Scales padding values             |
| `--margin-scale`          | Scales margin values              |
| `--b-radius`              | Modal and button border radius    |
| `--transition`            | Button hover transition           |
| `--bp-md`                 | Responsive breakpoint for padding |
