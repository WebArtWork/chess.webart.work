# 📂 Page Layout `/sections/docs/page-layout`

Base layout component for documentation pages. Provides responsive columns for a navigation sidebar, main content, and an optional table of contents.

## ✅ Features

-   Optional sidebar and table of contents (conditionally rendered)
-   Responsive grid that collapses to a single column on small screens
-   Sticky sidebar and table of contents for easier navigation on large viewports
-   Uses CSS variables for spacing, color and typography

---

## 🧾 Section Data Schema

This section expects the following data structure:

```json
{
	"src": "/sections/docs/page-layout/page-layout.html",
	"sidebar": "<nav>...</nav>",
	"content": "<article>...</article>",
	"toc": "<nav>...</nav>"
}
```

## 🧱 HTML Structure

```html
<div class="page-layout">
	{% if section.sidebar %}
	<aside class="page-layout__sidebar">{{{section.sidebar}}}</aside>
	{% endif %} {% if section.content %}
	<div class="page-layout__content">{{{section.content}}}</div>
	{% endif %} {% if section.toc %}
	<nav class="page-layout__toc">{{{section.toc}}}</nav>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   `.page-layout` uses CSS Grid to place sidebar, content and table of contents.
-   Sidebar and TOC get sticky positioning and rounded backgrounds.
-   The layout collapses and hides the TOC below `--bp-lg`.
-   Spacing and typography come from global design tokens.

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                          |
| ------------------------- | ------------------------------------ |
| `--padding-scale`         | Controls component padding           |
| `--margin-scale`          | Gap between columns                  |
| `--b-radius`              | Border radius for sidebar and toc    |
| `--c-bg-item`             | Background color for sidebar and toc |
| `--c-text-secondary`      | Sidebar and toc text color           |
| `--c-text-body-secondary` | Content text color                   |
| `--ff-base`               | Base font family                     |
| `--bp-lg`, `--bp-md`      | Breakpoints for responsive layout    |

```

```
