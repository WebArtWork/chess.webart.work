# 📂 RSVP `/sections/forms/rsvp`

RSVP form section for collecting attendee responses. Includes basic fields for name, email, and attendance choice, with customizable submit action and button text.

## ✅ Features

-   Optional title and description
-   Centered, responsive form layout
-   Accessible labels and inputs
-   Styled via CSS variables for easy theming

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/forms/rsvp/rsvp.html",
	"title": "RSVP",
	"description": "Let us know if you can make it!",
	"action": "/rsvp",
	"buttonText": "Send"
}
```

## 🧱 HTML Structure

```html
<div class="rsvp">
	{% if section.title %}
	<div class="rsvp__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="rsvp__description">{{{section.description}}}</div>
	{% endif %}
	<form class="rsvp__form" action="{{{section.action}}}" method="post">
		<div class="rsvp__field">
			<label class="rsvp__label" for="rsvp-name">Name</label>
			<input
				class="rsvp__input"
				type="text"
				id="rsvp-name"
				name="name"
				required
			/>
		</div>
		<div class="rsvp__field">
			<label class="rsvp__label" for="rsvp-email">Email</label>
			<input
				class="rsvp__input"
				type="email"
				id="rsvp-email"
				name="email"
				required
			/>
		</div>
		<div class="rsvp__field">
			<label class="rsvp__label" for="rsvp-attending">Attending</label>
			<select class="rsvp__select" id="rsvp-attending" name="attending">
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</div>
		<button class="rsvp__button" type="submit">
			{{{section.buttonText}}}
		</button>
	</form>
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Form inputs and buttons inherit global typography and color variables
-   Inputs highlight using `--c-primary-border` on focus
-   Responsive typography adjusts at configured breakpoints

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                              |
| ------------------------------- | ---------------------------------------- |
| `--padding-scale`               | Controls section and input padding       |
| `--margin-scale`                | Spacing between elements                 |
| `--font-size`                   | Base font size for text and inputs       |
| `--line-height`                 | Line height for all text                 |
| `--letter-spacing`              | Applied to title and description         |
| `--ff-base`                     | Font for form text                       |
| `--ff-title`                    | Font for section title                   |
| `--b-radius`                    | Rounds inputs and button                 |
| `--c-border`                    | Default border color for inputs          |
| `--c-bg-item`                   | Background color of input fields         |
| `--c-placeholder`               | Placeholder text color                   |
| `--c-text-secondary`            | Input text color                         |
| `--c-text-primary`              | Title and button text color              |
| `--c-text-body-secondary`       | Description text color                   |
| `--c-primary`                   | Button background color                  |
| `--c-primary-hover`             | Button hover state                       |
| `--c-primary-cursor`            | Button active state                      |
| `--c-primary-border`            | Input border color on focus              |
| `--transition`                  | Transition timing for interactive states |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints for responsive adjustments   |

---
