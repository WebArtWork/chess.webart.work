# 📂 Application `/sections/forms/application`

Reusable application form section with basic fields and customizable labels. Ideal for job or membership applications.

## ✅ Features

-   Optional title, description and submit label
-   Fields for name, email, phone, position, resume upload and message
-   Responsive layout driven by CSS variables
-   Theming support via global design tokens

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/forms/application/application.html",
	"title": "Apply to join us",
	"description": "Fill out the form and our team will be in touch",
	"submit": "Send Application"
}
```

## 🧱 HTML Structure

```html
<div class="application">
	{% if section.title %}
	<div class="application__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="application__description">{{{section.description}}}</div>
	{% endif %}
	<form
		class="application__form"
		action=""
		method="post"
		enctype="multipart/form-data"
	>
		<div class="application__field">
			<label class="application__label" for="app-name">Full Name</label>
			<input
				class="application__input"
				type="text"
				id="app-name"
				name="name"
				placeholder="Your name"
			/>
		</div>
		<div class="application__field">
			<label class="application__label" for="app-email">Email</label>
			<input
				class="application__input"
				type="email"
				id="app-email"
				name="email"
				placeholder="email@example.com"
			/>
		</div>
		<div class="application__field">
			<label class="application__label" for="app-phone">Phone</label>
			<input
				class="application__input"
				type="tel"
				id="app-phone"
				name="phone"
				placeholder="+1 234 567 890"
			/>
		</div>
		<div class="application__field">
			<label class="application__label" for="app-position"
				>Position</label
			>
			<input
				class="application__input"
				type="text"
				id="app-position"
				name="position"
				placeholder="Position applying for"
			/>
		</div>
		<div class="application__field">
			<label class="application__label" for="app-resume">Resume</label>
			<input
				class="application__input"
				type="file"
				id="app-resume"
				name="resume"
			/>
		</div>
		<div class="application__field">
			<label class="application__label" for="app-message">Message</label>
			<textarea
				class="application__textarea"
				id="app-message"
				name="message"
				rows="4"
				placeholder="Cover letter or message"
			></textarea>
		</div>
		<button class="application__submit" type="submit">
			{{{section.submit || 'Submit Application'}}}
		</button>
	</form>
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Typography uses `--ff-title` and `--ff-base`
-   Inputs adapt theme colors for background, text and borders
-   Submit button transitions via `--transition`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                            | Description                   |
| ----------------------------------- | ----------------------------- |
| `--padding-scale`                   | Controls vertical padding     |
| `--margin-scale`                    | Controls gaps and margins     |
| `--font-size`                       | Base font size                |
| `--line-height`                     | Text line height              |
| `--letter-spacing`                  | Letter spacing for all text   |
| `--b-radius`                        | Rounds inputs and buttons     |
| `--c-border`                        | Default input border color    |
| `--c-primary` / `--c-primary-hover` | Submit button colors          |
| `--c-text-primary`                  | Primary text and button color |
| `--c-text-body-secondary`           | Description text color        |
| `--c-bg-item`                       | Input background color        |
| `--c-placeholder`                   | Placeholder text color        |
| `--transition`                      | Button hover transition       |
| `--ff-base`                         | Font for body text            |
| `--ff-title`                        | Font for title text           |
| `--bp-lg`, `--bp-md`, `--bp-sm`     | Responsive breakpoints        |

---
