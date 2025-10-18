# 📂 Press Logos `/sections/feedback/press-logos`

Displays media or press logos, optionally with a section title. Useful for showcasing publications where a product or company has been featured.

## ✅ Features

-   Optional section title
-   Renders a list of press logos
-   Responsive layout with wrapping and spacing
-   Uses global CSS variables for theming

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/feedback/press-logos/press-logos.html",
	"title": "As seen in",
	"logos": [
		{ "img": "/img/press/nyt.svg", "alt": "New York Times" },
		{ "img": "/img/press/forbes.svg", "alt": "Forbes" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="press-logos">
	{% if section.title %}
	<div class="press-logos__title">{{{section.title}}}</div>
	{% endif %}
	<div class="press-logos__list">
		{% for logo in section.logos %}
		<div class="press-logos__item">
			<img src="{{{logo.img}}}" alt="{{{logo.alt}}}" />
		</div>
		{% endfor %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Title uses `--ff-title`, `--c-text-primary`, and spacing variables for consistent typography
-   Logos are displayed in a flex container that wraps and centers the items
-   Logo containers use `--c-border`, `--c-bg-item`, and `--b-radius`
-   Spacing scales with `--margin-scale` and `--padding-scale`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                              |
| -------------------- | ---------------------------------------- |
| `--padding-scale`    | Vertical padding for section and items   |
| `--margin-scale`     | Gap between logo items and title spacing |
| `--ff-title`         | Font family for the title                |
| `--c-text-primary`   | Title text color                         |
| `--c-border`         | Border color of logo container           |
| `--c-bg-item`        | Background color for logo container      |
| `--b-radius`         | Rounds the logo container corners        |
| `--icon-size`        | Base size used for logo height           |
| `--bp-md`, `--bp-sm` | Breakpoints adjusting responsive spacing |

---
