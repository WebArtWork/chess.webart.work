# 📂 Table of Contents `/sections/navigation/table-of-contents`

Navigation block that lists page headings and links to them via anchors. Supports optional title and nested items.

## ✅ Features

-   Optional section title
-   Generates list of anchor links from provided items
-   Supports nested child items
-   Uses CSS variables for fonts, colors, spacing and transitions

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`

```json
{
	"src": "/sections/navigation/table-of-contents/table-of-contents.html",
	"title": "On this page",
	"items": [
		{ "id": "intro", "text": "Introduction" },
		{
			"id": "setup",
			"text": "Setup",
			"children": [{ "id": "install", "text": "Install" }]
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="table-of-contents">
	{% if section.title %}
	<div class="table-of-contents__title">{{{section.title}}}</div>
	{% endif %} {% if section.items %}
	<ul class="table-of-contents__list">
		{% for item in section.items %}
		<li class="table-of-contents__item">
			<a href="#{{{item.id}}}" class="table-of-contents__link"
				>{{{item.text}}}</a
			>
			{% if item.children %}
			<ul class="table-of-contents__sublist">
				{% for child in item.children %}
				<li class="table-of-contents__subitem">
					<a href="#{{{child.id}}}" class="table-of-contents__link"
						>{{{child.text}}}</a
					>
				</li>
				{% endfor %}
			</ul>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable            | Description                         |
| ------------------- | ----------------------------------- |
| `--padding-scale`   | Scales padding for section spacing  |
| `--margin-scale`    | Controls spacing between list items |
| `--font-size`       | Base font size for links            |
| `--line-height`     | Line height for links               |
| `--letter-spacing`  | Letter spacing for link text        |
| `--ff-base`         | Font family for links               |
| `--ff-title`        | Font family for section title       |
| `--c-primary`       | Link color                          |
| `--c-primary-hover` | Link hover color                    |
| `--c-text-primary`  | Title text color                    |
| `--transition`      | Transition for link hover effect    |
