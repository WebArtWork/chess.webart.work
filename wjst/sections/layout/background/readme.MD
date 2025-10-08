# 📂 Background `/sections/layout/background`

Utility section to wrap content with a customizable background color or image.

## ✅ Features

-   Optional background color via `section.color`
-   Optional background image via `section.image`
-   Supports custom background size and position
-   Uses CSS variables for spacing, colors, and transitions

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/layout/background/background.html",
	"color": "#000000", // optional background color
	"image": "/img/bg.jpg", // optional background image
	"size": "cover", // optional background-size value
	"position": "center", // optional background-position value
	"content": "<h2>Wrapped Content</h2>" // optional inner HTML
}
```

## 🧱 HTML Structure

```html
<div
	class="background"
	{%
	if
	section.color
	or
	section.image
	or
	section.size
	or
	section.position
	%}
	style="{% if section.color %}background-color: {{{section.color}}};{% endif %}{% if section.image %} background-image: url('{{{section.image}}}');{% endif %}{% if section.size %} background-size: {{{section.size}}};{% endif %}{% if section.position %} background-position: {{{section.position}}};{% endif %}"
	{%
	endif
	%}
>
	{% if section.content %} {{{section.content}}} {% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Padding scales with `--padding-scale`
-   Text inherits `--c-text-primary`
-   Default background color uses `--c-body`
-   Background transitions follow `--transition`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable           | Description                        |
| ------------------ | ---------------------------------- |
| `--padding-scale`  | Controls section padding           |
| `--c-text-primary` | Text color inside background block |
| `--c-body`         | Default background color           |
| `--transition`     | Background color transition        |

---
