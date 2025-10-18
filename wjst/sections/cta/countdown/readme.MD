# 📂 Countdown `/sections/cta/countdown`

Call to action section with a live countdown timer. Displays an optional title, description, time remaining until a specified date, and an optional button.

## ✅ Features

-   Live-updating countdown timer
-   Optional title, description, and button
-   Responsive layout and typography
-   Utilizes global design tokens and CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/cta/countdown/countdown.html",
	"title": "Event starts soon",
	"description": "Join us before time runs out!",
	"endDate": "2024-12-31T23:59:59",
	"buttonText": "Register now",
	"buttonUrl": "/register"
}
```

## 🧱 HTML Structure

```html
<div class="countdown">
	{% if section.title %}
	<div class="countdown__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="countdown__description">{{{section.description}}}</div>
	{% endif %}
	<div class="countdown__timer" data-countdown="{{{section.endDate}}}">
		<div class="countdown__unit">
			<div class="countdown__value countdown__days">00</div>
			<div class="countdown__label">Days</div>
		</div>
		<div class="countdown__unit">
			<div class="countdown__value countdown__hours">00</div>
			<div class="countdown__label">Hours</div>
		</div>
		<div class="countdown__unit">
			<div class="countdown__value countdown__minutes">00</div>
			<div class="countdown__label">Minutes</div>
		</div>
		<div class="countdown__unit">
			<div class="countdown__value countdown__seconds">00</div>
			<div class="countdown__label">Seconds</div>
		</div>
	</div>
	{% if section.buttonText %}
	<a href="{{{section.buttonUrl}}}" class="countdown__button"
		>{{{section.buttonText}}}</a
	>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Typography adapts via global variables and breakpoints
-   Button inherits primary colors and hover state from theme
-   Timer values shrink and stack on narrow viewports

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                               |
| ------------------------- | ----------------------------------------- |
| `--padding-scale`         | Scales padding values                     |
| `--margin-scale`          | Controls margin spacing                   |
| `--font-size`             | Base font size for description and labels |
| `--line-height`           | Line height for title and description     |
| `--letter-spacing`        | Applied to title and description          |
| `--ff-base`               | Font for description text                 |
| `--ff-title`              | Font for title text                       |
| `--ff-second`             | Font for timer numbers                    |
| `--c-text-primary`        | Title and timer value color               |
| `--c-text-secondary`      | Label color                               |
| `--c-text-body-secondary` | Description color                         |
| `--c-primary`             | Button background color                   |
| `--c-primary-hover`       | Button hover background color             |
| `--c-text-primary`        | Button text color                         |
| `--b-radius`              | Button border radius                      |
| `--transition`            | Button transition effect                  |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive adjustments    |

---
