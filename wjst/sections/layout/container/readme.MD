# 📂 Container `/sections/layout/container`

Responsive layout container that centers page content and constrains its width.

## ✅ Features

-   Centers content with automatic horizontal margins
-   Responsive max-width variants (`sm`, `md`, `lg`, `fluid`)
-   Horizontal padding scales with `--padding-scale`
-   Uses global breakpoints for size constraints

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/layout/container/container.html",
	"size": "sm", // optional: sm, md, lg, fluid (default lg)
	"content": "<p>Inner HTML content</p>"
}
```

## 🧱 HTML Structure

```html
{% set size = section.size or 'lg' %}
<div class="container container--{{{size}}}">
	{% if section.content %} {{{section.content}}} {% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Padding uses `calc(... * var(--padding-scale))` for scalable spacing
-   Width is limited by `--bp-sm`, `--bp-md`, and `--bp-lg`
-   `.container--fluid` removes the max-width constraint

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable          | Description                     |
| ----------------- | ------------------------------- |
| `--padding-scale` | Scales horizontal padding       |
| `--bp-sm`         | Max width for small containers  |
| `--bp-md`         | Max width for medium containers |
| `--bp-lg`         | Max width for large containers  |
