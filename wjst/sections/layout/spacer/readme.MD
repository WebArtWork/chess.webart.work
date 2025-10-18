# 📂 Spacer `/sections/layout/spacer`

Simple spacer section to insert adjustable empty space between blocks.

## ✅ Features

-   Adjustable height via `size` property
-   Scales height with global `--margin-scale`
-   Uses CSS variables for easy theming

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/layout/spacer/spacer.html",
	"size": "60px"
}
```

## 🧱 HTML Structure

```html
<div class="spacer" style="--spacer-size: {{section.size || '40px'}};"></div>
```

---

## 🎨 Styling Notes

-   Default height is `40px` multiplied by `--margin-scale`
-   Custom `size` overrides default via CSS variable

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable         | Description              |
| ---------------- | ------------------------ |
| `--margin-scale` | Scales the spacer height |
