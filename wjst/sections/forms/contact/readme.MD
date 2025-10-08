# 📂 Contact Form `/sections/forms/contact`

Contact form section for collecting user inquiries with optional title and description. Includes name, email, and message fields with a customizable submit button.

## ✅ Features

-   Optional title and description (conditionally rendered)
-   Collects name, email, and message
-   Action URL can be customized via section data
-   Button label and placeholders configurable
-   Uses global form styles `.w-forms`

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/forms/contact/contact.html",
	"title": "Contact us",
	"description": "We would love to hear from you.",
	"action": "/contact",
	"namePlaceholder": "Your name",
	"emailPlaceholder": "you@example.com",
	"messagePlaceholder": "Your message",
	"buttonText": "Send"
}
```

## 🧱 HTML Structure

```html
<div class="contact-form">
	{% if section.title %}
	<div class="contact-form__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="contact-form__description">{{{section.description}}}</div>
	{% endif %}
	<form
		class="w-forms"
		method="post"
		{%
		if
		section.action
		%}
		action="{{{section.action}}}"
		{%
		endif
		%}
	>
		<input
			class="w-forms__input"
			type="text"
			name="name"
			placeholder="{{{section.namePlaceholder || 'Your name'}}}"
		/>
		<input
			class="w-forms__input"
			type="email"
			name="email"
			placeholder="{{{section.emailPlaceholder || 'you@example.com'}}}"
		/>
		<textarea
			class="w-forms__input"
			name="message"
			placeholder="{{{section.messagePlaceholder || 'Your message'}}}"
		></textarea>
		<div class="w-forms__btn">
			<button type="submit" class="btn btn-primary">
				{{{section.buttonText || 'Send'}}}
			</button>
		</div>
	</form>
</div>
```

---

## 🎨 Styling Notes

-   Uses `calc(... * var(--padding-scale))` and `--margin-scale` for scalable spacing
-   Typography controlled by `--font-size`, `--line-height`, and `--letter-spacing`
-   Colors pulled from `--c-text-primary` and `--c-text-body-secondary`
-   Form elements styled via global `.w-forms` component

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                |
| ------------------------------- | ------------------------------------------ |
| `--padding-scale`               | Scales bottom padding and internal spacing |
| `--margin-scale`                | Controls vertical spacing                  |
| `--font-size`                   | Base font size for description             |
| `--line-height`                 | Line height for title and description      |
| `--letter-spacing`              | Applied to title and description           |
| `--ff-base`                     | Font for description text                  |
| `--ff-title`                    | Font for title text                        |
| `--c-text-primary`              | Title and button text color                |
| `--c-text-body-secondary`       | Description text color                     |
| `--transition`                  | Used for color transitions                 |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints for responsive typography      |
