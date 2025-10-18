# 📂 Accordion `/sections/content/accordion`

Accordion section for displaying collapsible content groups.

## ✅ Features

-   Multiple items with title and content
-   Optional active state to pre-expand an item
-   Arrow icon rotates on open
-   Uses CSS variables for easy theming

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/content/accordion/accordion.html",
	"items": [
		{ "title": "First item", "content": "<p>Item text</p>" },
		{
			"title": "Second item",
			"content": "<p>Item text</p>",
			"active": true
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="accordion">
	{% for item in section.items %}
	<div class="accordion-item">
		<button class="accordion-button{% if item.active %} active{% endif %}">
			<div class="accordion-button__text">{{{item.title}}}</div>
			<div class="accordion-button__arrow">...</div>
		</button>
		<div
			class="accordion-content"
			{%
			if
			item.active
			%}
			style="max-height: fit-content"
			{%
			endif
			%}
		>
			{{{item.content}}}
		</div>
	</div>
	{% endfor %}
</div>
```

---

## 🎨 Styling Notes

-   Based on the `w-accardion` component styles
-   Transitions animate arrow rotation and content reveal

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable            | Description                 |
| ------------------- | --------------------------- |
| `--c-primary-hover` | Border and divider color    |
| `--b-radius`        | Border radius for accordion |

```

```
