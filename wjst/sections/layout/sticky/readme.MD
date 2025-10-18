# 📂 Sticky `/sections/layout/sticky`

Sticky layout block that keeps its content pinned to the top of the viewport while scrolling. Useful for persistent headers, sidebars or callouts.

## ✅ Features

-   Pure CSS `position: sticky` implementation
-   Adds `.sticky--stuck` class when element is fixed to allow style changes
-   Theming through global CSS variables for colors, spacing and typography

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/layout/sticky/sticky.html",
	"id": "mySticky",
	"content": "Any HTML content that should remain visible while scrolling"
}
```

## 🧱 HTML Structure

```html
<div id="{{{section.id}}}" class="sticky" data-sticky>
	<div class="sticky__content">{{{section.content}}}</div>
</div>
```

---

## 🎨 Styling Notes

-   Uses `top: 0` and `position: sticky` to pin the block
-   `.sticky--stuck` class is toggled via JS when the block becomes fixed
-   Responsive padding adjustment at medium breakpoint

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable           | Description                               |
| ------------------ | ----------------------------------------- |
| `--padding-scale`  | Scales padding values                     |
| `--font-size`      | Base font size for content                |
| `--line-height`    | Line height for content                   |
| `--letter-spacing` | Letter spacing for content                |
| `--b-radius`       | Rounds sticky container                   |
| `--c-bg-item`      | Background color of sticky block          |
| `--c-secondary`    | Background color when stuck               |
| `--c-text-primary` | Text color                                |
| `--c-shadow`       | Shadow used when stuck                    |
| `--transition`     | Transition for background and shadow      |
| `--bp-md`          | Breakpoint for mobile padding adjustments |

---
