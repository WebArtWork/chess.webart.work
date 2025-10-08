# 📂 Markdown `/sections/content/markdown`

Markdown section for rendering HTML generated from markdown input. Useful for documentation or rich text blocks where content editors supply markdown.

## ✅ Features

-   Styles headings, paragraphs, lists, blockquotes, links, code and tables
-   Responsive typography using global breakpoints
-   Colors, fonts and spacing controlled by CSS variables
-   Supports syntax highlighting via nested `pre > code`

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`

```json
{
	"src": "/sections/content/markdown/markdown.html",
	"content": "<h1>Title</h1><p>Converted markdown HTML</p>"
}
```

## 🧱 HTML Structure

```html
<div class="markdown">{{{section.content}}}</div>
```

---

## 🎨 Styling Notes

-   Headings use `--ff-title` and scale down on smaller breakpoints
-   Base text and lists use `--ff-base`, `--font-size`, and `--line-height`
-   Links transition color with `--transition` and `--c-primary-hover`
-   Code and pre blocks use `--c-bg-item`, `--b-radius`, and `--ff-second`
-   Tables use `--c-border` and `--c-bg-item` for consistent theming

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `--ff-base`               | Base font for body text                            |
| `--ff-title`              | Font for headings                                  |
| `--ff-second`             | Font for inline code                               |
| `--font-size`             | Base font size                                     |
| `--line-height`           | Default line height                                |
| `--letter-spacing`        | Applied to headings                                |
| `--margin-scale`          | Scales vertical spacing between elements           |
| `--padding-scale`         | Controls padding for lists, code blocks and tables |
| `--c-text-primary`        | Heading text color                                 |
| `--c-text-body-secondary` | Body text color                                    |
| `--c-primary`             | Link color                                         |
| `--c-primary-hover`       | Link hover color                                   |
| `--c-primary-border`      | Border color for blockquotes                       |
| `--c-bg-item`             | Background for code blocks and table headers       |
| `--c-border`              | Table border color                                 |
| `--b-radius`              | Border radius for code blocks and tables           |
| `--transition`            | Transition for link hover effects                  |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive typography              |

---
