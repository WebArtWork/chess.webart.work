# 📂 Newsletter `/sections/forms/newsletter`

Simple newsletter sign-up section with optional title and description. Collects email addresses via a form.

## ✅ Features

-   Optional title and description rendered conditionally
-   Email input with customizable placeholder and submit button text
-   Responsive layout that stacks on small screens
-   Styled using global CSS variables for theming

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/forms/newsletter/newsletter.html",
	"title": "Stay Updated",
	"description": "Get the latest news right in your inbox.",
	"action": "https://example.com/subscribe",
	"placeholder": "Enter your email",
	"button": "Subscribe"
}
```

## 🧱 HTML Structure

```html
<div class="newsletter">
	{% if section.title %}
	<div class="newsletter__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="newsletter__description">{{{section.description}}}</div>
	{% endif %}
	<form class="newsletter__form" action="{{{section.action}}}" method="post">
		<input
			class="newsletter__input"
			type="email"
			name="email"
			placeholder="{{{section.placeholder}}}"
			required
		/>
		<button class="newsletter__button" type="submit">
			{{{section.button}}}
		</button>
	</form>
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Fonts and colors derive from global theme variables
-   Input and button share border radius and align side-by-side on wide screens

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                             |
| -------------------- | --------------------------------------- |
| `--padding-scale`    | Scales vertical spacing                 |
| `--margin-scale`     | Controls margins around elements        |
| `--font-size`        | Base font size for text and inputs      |
| `--line-height`      | Line height for title and description   |
| `--ff-base`          | Base font family                        |
| `--ff-second`        | Font for button text                    |
| `--c-text-primary`   | Primary text color                      |
| `--c-text-secondary` | Secondary text color                    |
| `--c-primary`        | Button background color                 |
| `--c-primary-hover`  | Button hover color                      |
| `--c-primary-cursor` | Button active color                     |
| `--c-bg-item`        | Input background color                  |
| `--c-border`         | Input border color                      |
| `--b-radius`         | Border radius for inputs and button     |
| `--transition`       | Transition timing for hover states      |
| `--bp-md`            | Breakpoint for stacking form vertically |

```

```
