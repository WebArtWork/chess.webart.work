# 📂 Responsive Visibility `/sections/layout/responsive-visibility`

Utility section demonstrating how to show and hide content based on viewport width using CSS variables for breakpoints.

## ✅ Features

-   Displays different blocks per breakpoint (large, medium, small, extra small)
-   Uses CSS variables `--bp-lg`, `--bp-md`, and `--bp-sm`
-   All typography, colors, and spacing use theme variables

---

## 🧾 Section Data Schema

This section does not require any data. Include it via:

```json
{
	"src": "/sections/layout/responsive-visibility/responsive-visibility.html"
}
```

## 🧱 HTML Structure

```html
<div class="responsive-visibility">
	<div class="responsive-visibility__lg">Visible on large screens</div>
	<div class="responsive-visibility__md">Visible on medium screens</div>
	<div class="responsive-visibility__sm">Visible on small screens</div>
	<div class="responsive-visibility__xs">Visible on extra small screens</div>
</div>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable                        | Description                        |
| ------------------------------- | ---------------------------------- |
| `--ff-base`                     | Font family for block text         |
| `--font-size`                   | Base font size                     |
| `--line-height`                 | Base line height                   |
| `--letter-spacing`              | Default letter spacing             |
| `--padding-scale`               | Multiplier for block padding       |
| `--margin-scale`                | Multiplier for block margin        |
| `--c-border`                    | Border color for blocks            |
| `--b-radius`                    | Border radius for blocks           |
| `--c-bg-item`                   | Background color of blocks         |
| `--c-text-primary`              | Text color                         |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints controlling visibility |

---
