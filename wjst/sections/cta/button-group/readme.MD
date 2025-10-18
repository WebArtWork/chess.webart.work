# 📂 Button Group `/sections/cta/button-group`

Call-to-action section that renders a flexible group of buttons.

## ✅ Features

-   Optional title and description
-   Renders any number of buttons passed in data
-   Each button supports optional `href` and modifier class
-   Responsive layout that stacks on small screens
-   Uses global CSS variables for spacing, fonts and colors

---

## 🗾 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/cta/button-group/button-group.html",
	"title": "Optional heading",
	"description": "Optional supporting text",
	"buttons": [
		{ "text": "Primary action", "href": "#", "modifier": "btn--success" },
		{ "text": "Secondary", "href": "#", "modifier": "btn--second" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="button-group">
	{% if section.title %}
	<div class="button-group__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="button-group__description">{{{section.description}}}</div>
	{% endif %} {% if section.buttons %}
	<div class="button-group__wrapper">
		{% for btn in section.buttons %} {% if btn.href %}
		<a
			href="{{{btn.href}}}"
			class="btn{% if btn.modifier %} {{{btn.modifier}}}{% endif %}"
		>
			{{{btn.text}}}
		</a>
		{% else %}
		<button class="btn{% if btn.modifier %} {{{btn.modifier}}}{% endif %}">
			{{{btn.text}}}
		</button>
		{% endif %} {% endfor %}
	</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Typography uses `--ff-base`, `--ff-title`, `--font-size`, `--line-height`, and `--letter-spacing`
-   Colors pulled from `--c-text-primary` and `--c-text-body-secondary`
-   Buttons rely on existing `.btn` component styles
-   Wrapper converts to vertical stack below `--bp-md`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                       |
| ------------------------- | --------------------------------- |
| `--padding-scale`         | Controls section padding          |
| `--margin-scale`          | Controls spacing between elements |
| `--font-size`             | Base font size                    |
| `--line-height`           | Line height for texts             |
| `--letter-spacing`        | Letter spacing for texts          |
| `--ff-base`               | Font for description and buttons  |
| `--ff-title`              | Font for title                    |
| `--c-text-primary`        | Title text color                  |
| `--c-text-body-secondary` | Description text color            |
| `--bp-md`                 | Breakpoint for stacking behavior  |

---
