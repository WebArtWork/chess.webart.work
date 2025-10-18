# 📂 Edit Link `/sections/docs/edit-link`

Display a contextual "Edit this page" link for documentation pages. Useful for encouraging contributions by linking directly to the source file in a repository.

## ✅ Features

-   Hidden when no `href` is provided
-   Optional icon and custom link text
-   Uses CSS variables for spacing, typography, colors, and transitions

---

## 🧶 Section Data Schema

```json
{
	"src": "/sections/docs/edit-link/edit-link.html",
	"href": "https://github.com/owner/repo/edit/main/docs/page.md",
	"text": "Edit on GitHub",
	"icon": "/img/git.svg"
}
```

---

## 🧱 HTML Structure

```html
{% if section.href %}
<div class="edit-link">
	<a
		class="edit-link__link"
		href="{{{section.href}}}"
		target="_blank"
		rel="noopener"
	>
		{% if section.icon %}
		<img src="{{{section.icon}}}" alt="" class="edit-link__icon" />
		{% endif %} {% if section.text %}
		<span class="edit-link__text">{{{section.text}}}</span>
		{% endif %}
	</a>
</div>
{% endif %}
```

---

## 🎨 Styling Notes

-   Link typography inherits `--ff-base`, `--font-size`, `--line-height`, and `--letter-spacing`
-   `--c-primary` and `--c-primary-hover` control link colors
-   Optional icon respects `--icon-size`
-   Spacing adapts with `--margin-scale`

---

## 🤎 Theme Variables Used (from `template.json`)

| Variable            | Description            |
| ------------------- | ---------------------- |
| `--ff-base`         | Font for link text     |
| `--font-size`       | Base font size         |
| `--line-height`     | Line height            |
| `--letter-spacing`  | Letter spacing         |
| `--c-primary`       | Link color             |
| `--c-primary-hover` | Hover color            |
| `--icon-size`       | Size for optional icon |
| `--margin-scale`    | Controls outer spacing |
| `--transition`      | Link color transition  |

---
