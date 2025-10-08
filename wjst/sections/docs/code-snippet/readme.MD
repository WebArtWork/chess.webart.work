# 📂 Code Snippet `/sections/docs/code-snippet`

Reusable code snippet block for documentation pages. Renders optional label, code, and a copy button.

## ✅ Features

-   Optional label above the snippet
-   Copy button exposes the snippet via `data-copy`
-   Responsive typography and spacing
-   Uses CSS variables for theme-driven colors and fonts

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/docs/code-snippet/code-snippet.html",
	"label": "Optional file name",
	"code": "npm install ngx"
}
```

## 🧱 HTML Structure

```html
<div class="code-snippet">
	{% if section.label %}
	<div class="code-snippet__label">{{{section.label}}}</div>
	{% endif %} {% if section.code %}
	<pre class="code-snippet__code"><code>{{{section.code}}}</code></pre>
	<button class="code-snippet__copy" data-copy="{{{section.code}}}">
		Copy
	</button>
	{% endif %}
</div>
```

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                           |
| -------------------- | ------------------------------------- |
| `--padding-scale`    | Scales padding                        |
| `--margin-scale`     | Controls margin spacing               |
| `--font-size`        | Base font size                        |
| `--line-height`      | Line height for text                  |
| `--ff-second`        | Font for code text                    |
| `--ff-title`         | Font for label                        |
| `--c-text-secondary` | Label text color                      |
| `--c-dark`           | Code background color                 |
| `--c-primary-hover`  | Default code text color               |
| `--c-code-hover`     | Code hover color                      |
| `--c-bg-item`        | Copy button background                |
| `--c-border`         | Copy button border                    |
| `--c-text-primary`   | Copy button text color                |
| `--c-white`          | Copy button hover text color          |
| `--b-radius`         | Border radius used throughout         |
| `--bp-md`            | Breakpoint for responsive adjustments |
