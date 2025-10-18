# 👨‍🏫 Instructor `/sections/education/instructor`

Section for presenting course instructors. Displays a portrait image, name, role or title, optional biography, and social links.

## ✅ Features

-   Optional name, role, biography, and social link list
-   Responsive avatar image
-   Layout and typography adapt across breakpoints
-   Uses CSS variables for colors, fonts, spacing, and responsiveness
-   Centralized theming support via global design tokens

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/education/instructor/instructor.html",
	"img": "/img/avatar.png",
	"name": "Instructor name",
	"role": "Instructor role or title",
	"bio": "Optional biography text",
	"socials": [
		{
			"href": "https://example.com",
			"img": "/img/icon.svg",
			"name": "social name"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="instructor">
	<div class="instructor__img">
		<img src="{{{section.img}}}" alt="{{{section.name}}}" />
	</div>

	{% if section.name %}
	<div class="instructor__name">{{{section.name}}}</div>
	{% endif %} {% if section.role %}
	<div class="instructor__role">{{{section.role}}}</div>
	{% endif %} {% if section.bio %}
	<div class="instructor__bio">{{{section.bio}}}</div>
	{% endif %} {% if section.socials %}
	<div class="instructor__socials">
		{% for social in section.socials %}
		<a href="{{{social.href}}}">
			<img src="{{{social.img}}}" alt="{{{social.name}}}" />
		</a>
		{% endfor %}
	</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Uses `calc(... * var(--padding-scale))` and `--margin-scale` for scalable spacing
-   Avatar rendered as a circle and scales at breakpoints
-   Social icons respect `--icon-size` and scale on hover via `--transition`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `--padding-scale`               | Scales padding values in section                   |
| `--margin-scale`                | Controls margin spacing                            |
| `--font-size`                   | Base font size for biography and role              |
| `--line-height`                 | Line height for textual elements                   |
| `--letter-spacing`              | Applied to textual elements                        |
| `--b-radius`                    | Rounds the avatar image                            |
| `--transition`                  | Used in hover interactions                         |
| `--ff-base`                     | Font for bio and role                              |
| `--ff-title`                    | Font for instructor name                           |
| `--c-text-primary`              | Name text color                                    |
| `--c-text-body-secondary`       | Body and role text color                           |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in media queries to adjust sizes responsively |

---
