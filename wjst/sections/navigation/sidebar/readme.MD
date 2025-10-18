# 📂 Sidebar `/sections/navigation/sidebar`

Flexible navigation sidebar for displaying nested navigation links. Supports active states and nested lists for subsections.

## ✅ Features

-   Renders a list of navigation links
-   Supports nested sub-navigation
-   Active items highlighted
-   Uses CSS variables for theming and spacing

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/navigation/sidebar/sidebar.html",
	"items": [
		{
			"name": "Item name",
			"url": "/item-url",
			"active": false,
			"items": [
				{ "name": "Sub item", "url": "/sub-url", "active": false }
			]
		}
	]
}
```

## 🧱 HTML Structure

```html
<nav class="sidebar">
	<ul class="sidebar__list">
		{% for item in section.items %}
		<li
			class="sidebar__item{% if item.active %} sidebar__item--active{% endif %}"
		>
			<a href="{{{item.url}}}" class="sidebar__link">{{{item.name}}}</a>
			{% if item.items %}
			<ul class="sidebar__sublist">
				{% for _item in item.items %}
				<li
					class="sidebar__subitem{% if _item.active %} sidebar__subitem--active{% endif %}"
				>
					<a href="{{{_item.url}}}" class="sidebar__sublink"
						>{{{_item.name}}}</a
					>
				</li>
				{% endfor %}
			</ul>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
</nav>
```

---

## 🎨 Styling Notes

-   Sidebar width fixed to `250px`
-   Indentation and spacing scale with `--padding-scale` and `--margin-scale`
-   Active links use `--c-primary-hover` and bold weight
-   Borders and background use theme variables

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                           |
| -------------------- | ------------------------------------- |
| `--ff-base`          | Base font family                      |
| `--c-bg-item`        | Sidebar background                    |
| `--c-border`         | Border color for sidebar and sublists |
| `--padding-scale`    | Scales padding for links              |
| `--margin-scale`     | Scales indentation for sublists       |
| `--c-text-primary`   | Color for top-level links             |
| `--c-text-secondary` | Color for nested links                |
| `--c-primary-hover`  | Hover and active color                |
| `--transition`       | Transition timing for link hover      |
