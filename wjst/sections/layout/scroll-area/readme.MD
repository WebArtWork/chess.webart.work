# 📂 Scroll Area `/sections/layout/scroll-area`

Scrollable container for content with customizable height. Useful for displaying long content within limited space.

## ✅ Features

-   Customizable max height via section data
-   Uses CSS variables for spacing, colors, and typography
-   Styled scrollbars with theme colors
-   Responsive and accessible

---

## 🧾 Section Data Schema

This section expects the following data structure:

```json
{
	"src": "/sections/layout/scroll-area/scroll-area.html",
	"height": "200px",
	"content": "<p>Your scrollable content</p>"
}
```

---

## 🧱 HTML Structure

```html
<div class="scroll-area">
	<div class="scroll-area__viewport">{{content}}</div>
</div>
```

---

## 🎨 Styling Notes

-   `max-height` is controlled via `--scroll-area-height`
-   Scrollbars use theme colors and respect `--padding-scale`
-   Text inherits global typography variables

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable           | Description           |
| ------------------ | --------------------- |
| `--padding-scale`  | Controls padding      |
| `--b-radius`       | Border radius         |
| `--c-bg-item`      | Background color      |
| `--c-border`       | Border color          |
| `--c-primary`      | Scrollbar thumb color |
| `--ff-base`        | Base font family      |
| `--font-size`      | Base font size        |
| `--line-height`    | Base line height      |
| `--c-text-primary` | Text color            |
