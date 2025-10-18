# \ud83d\udcc2 Tabs `/sections/layout/tabs`

Tabbed interface with clickable navigation that toggles visibility of content panes.

## \u2705 Features

-   Horizontal tab navigation
-   Active tab highlighted using theme colors
-   Content panes switch without reloading
-   Uses CSS variables for colors, spacing and typography

---

## \ud83d\uddfc Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/layout/tabs/tabs.html",
	"tabs": [
		{ "label": "Tab 1", "content": "<p>First tab content</p>" },
		{ "label": "Tab 2", "content": "<p>Second tab content</p>" }
	]
}
```

## \ud83e\uddf1 HTML Structure

```html
<div class="tabs">
	<div class="tabs__nav">
		{% for tab in section.tabs %}
		<button
			class="tabs__nav-button{% if loop.index0 == 0 %} active{% endif %}"
			data-tab="{{ loop.index0 }}"
		>
			{{{tab.label}}}
		</button>
		{% endfor %}
	</div>
	<div class="tabs__content">
		{% for tab in section.tabs %}
		<div
			class="tabs__pane{% if loop.index0 == 0 %} active{% endif %}"
			data-pane="{{ loop.index0 }}"
		>
			{{{tab.content}}}
		</div>
		{% endfor %}
	</div>
</div>
```

---

## \ud83c\udf08 Styling Notes

-   Navigation uses flexbox and `border-bottom`
-   Active tab indicated by `--c-primary` color border
-   Spacing scales with `--padding-scale`
-   Font size derives from `--font-size`

---

## \ud83e\udde9 Theme Variables Used (from `template.json`)

| Variable            | Description                            |
| ------------------- | -------------------------------------- |
| `--ff-base`         | Base font for the component            |
| `--padding-scale`   | Scales padding for tabs and content    |
| `--font-size`       | Base font size for tab labels          |
| `--c-border`        | Border color for navigation            |
| `--c-primary`       | Color for active tab                   |
| `--c-primary-hover` | Hover color for tabs                   |
| `--c-text-primary`  | Default tab text color                 |
| `--transition`      | Transition effect for color and border |

---
