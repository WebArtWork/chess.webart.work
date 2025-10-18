# \ud83d\udcc2 Banner `/sections/cta/banner`

Prominent call-to-action banner for highlighting promotions or important actions. Displays a title, optional description, and button.

## \u2705 Features

-   Optional title, description, and button (conditionally rendered)
-   Responsive typography and spacing
-   Centralized theming support via global design tokens

---

## \ud83d\uddcf\ufe0f Section Data Schema

```json
{
	"src": "/sections/cta/banner/banner.html",
	"title": "Ready to get started?",
	"description": "Sign up today and enjoy all the benefits.",
	"button": { "url": "/signup", "label": "Get Started" }
}
```

## \ud83e\uddf1 HTML Structure

```html
<div class="banner">
	{% if section.title %}
	<div class="banner__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="banner__description">{{{section.description}}}</div>
	{% endif %} {% if section.button %}
	<div class="banner__action">
		<a href="{{{section.button.url}}}" class="banner__button"
			>{{{section.button.label}}}</a
		>
	</div>
	{% endif %}
</div>
```

---

## \ud83c\udfa8 Styling Notes

-   Uses `--c-primary` for the banner background and `--c-text-primary` for text
-   Button background uses `--c-secondary` and transitions to `--c-primary-hover` on hover
-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Responsive font sizes adjust at `--bp-md` and `--bp-sm`

---

## \ud83e\udde9 Theme Variables Used (from `template.json`)

| Variable             | Description                               |
| -------------------- | ----------------------------------------- |
| `--padding-scale`    | Scales padding values in the banner       |
| `--margin-scale`     | Controls margin spacing                   |
| `--font-size`        | Base font size for description and button |
| `--line-height`      | Line height for text                      |
| `--letter-spacing`   | Letter spacing for title and description  |
| `--b-radius`         | Rounds banner and button corners          |
| `--transition`       | Transition speed for button hover         |
| `--ff-base`          | Font for description and button           |
| `--ff-title`         | Font for title text                       |
| `--c-primary`        | Banner background color                   |
| `--c-secondary`      | Button background color                   |
| `--c-primary-hover`  | Button hover background                   |
| `--c-text-primary`   | Text color                                |
| `--bp-md`, `--bp-sm` | Breakpoints for responsive adjustments    |
