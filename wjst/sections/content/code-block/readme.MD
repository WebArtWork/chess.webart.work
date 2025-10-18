# 📂 Code Block `/sections/content/code-block`

Reusable block for rendering formatted code snippets. Supports an optional title and adapts to global theme variables.

## ✅ Features

-   Optional title element
-   Preformatted code area with horizontal scrolling
-   Colors, fonts and spacing driven by CSS variables
-   Responsive font sizing at breakpoints

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/content/code-block/code-block.html",
	"title": "Optional section title",
	"code": "console.log('Hello, world!');"
}
```

## 🧱 HTML Structure

```html
<div class="code-block">
	{% if section.title %}
	<div class="code-block__title">{{{section.title}}}</div>
	{% endif %} {% if section.code %}
	<pre class="code-block__code"><code>{{{section.code}}}</code></pre>
	{% endif %}
</div>
```

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                       |
| -------------------- | --------------------------------- |
| `--padding-scale`    | Scales the block padding          |
| `--margin-scale`     | Controls spacing below the title  |
| `--b-radius`         | Rounds block and code container   |
| `--font-size`        | Base font size for title and code |
| `--line-height`      | Line height for text and code     |
| `--ff-base`          | Font family for body text         |
| `--ff-title`         | Font family for title text        |
| `--ff-second`        | Font family for code              |
| `--c-bg-item`        | Background color of the block     |
| `--c-dark`           | Background color of the code area |
| `--c-text-primary`   | Color of title text               |
| `--c-text-secondary` | Color of code text                |
| `--c-code-hover`     | Code text color on hover          |
| `--transition`       | Transition for color hover effect |
| `--bp-md`, `--bp-sm` | Breakpoints for responsive sizing |

---
