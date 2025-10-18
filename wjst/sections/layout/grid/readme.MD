# 📂 Grid `/sections/layout/grid`

Responsive multi-column layout utility built with CSS Grid. Renders an array of items and adapts to different screen sizes.

## ✅ Features

-   Responsive grid layout using CSS Grid
-   Adjustable minimum column width via the `section.min` option
-   Gap and spacing controlled by global CSS variables
-   Collapses to a single column below the `--bp-sm` breakpoint

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/layout/grid/grid.html",
	"min": "200px",
	"items": [
		{ "content": "<div>First item</div>" },
		{ "content": "<div>Second item</div>" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="grid" style="--grid-min: {{{section.min}}};">
	{% for item in section.items %}
	<div class="grid__item">{{{item.content}}}</div>
	{% endfor %}
</div>
```

---

## 🎨 Styling Notes

-   Uses `display: grid` with `repeat(auto-fit, minmax())` for responsive columns
-   Bottom padding and item gaps respect `--padding-scale` and `--margin-scale`
-   Custom minimum width set with the `--grid-min` CSS variable

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable          | Description                                      |
| ----------------- | ------------------------------------------------ |
| `--padding-scale` | Controls bottom padding                          |
| `--margin-scale`  | Gap between grid items                           |
| `--bp-sm`         | Breakpoint at which grid becomes a single column |
