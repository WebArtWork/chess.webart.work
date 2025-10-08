# 📂 Alert `/sections/utility/alert`

Reusable alert/notification component with optional title, message and dismiss button.

## ✅ Features

-   Supports variants: `success`, `danger`, `warning`, `info`
-   Optional close button
-   Title and message are conditionally rendered
-   Theming via CSS variables and global design tokens

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/utility/alert/alert.html",
	"type": "success",
	"title": "Alert title",
	"message": "Alert message goes here",
	"close": true
}
```

## 🧱 HTML Structure

```html
<div class="alert alert--{{section.type}}">
	{% if section.close %}
	<button class="alert__close" type="button">&times;</button>
	{% endif %} {% if section.title %}
	<div class="alert__title">{{{section.title}}}</div>
	{% endif %} {% if section.message %}
	<div class="alert__message">{{{section.message}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Variant colors use theme tokens (`--c-success`, `--c-error`, `--c-alert`, `--c-blue`)
-   Borders follow variant border tokens (`--c-success-border`, etc.)
-   Typography controlled via `--ff-base`, `--ff-title`, and `--font-size`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                                                                           | Description             |
| ---------------------------------------------------------------------------------- | ----------------------- |
| `--padding-scale`                                                                  | Controls padding        |
| `--margin-scale`                                                                   | Controls margin spacing |
| `--b-radius`                                                                       | Rounds alert container  |
| `--c-border`                                                                       | Default border color    |
| `--c-bg-item`                                                                      | Default background      |
| `--c-text-primary`                                                                 | Text color              |
| `--c-success`, `--c-error`, `--c-alert`, `--c-blue`                                | Variant backgrounds     |
| `--c-success-border`, `--c-danger-border`, `--c-warning-border`, `--c-info-border` | Variant borders         |
| `--font-size`                                                                      | Base font size          |
| `--ff-base`                                                                        | Font for message        |
| `--ff-title`                                                                       | Font for title          |
| `--line-height`                                                                    | Line height for text    |

---
