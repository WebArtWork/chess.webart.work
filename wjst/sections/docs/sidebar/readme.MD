# 📂 Docs Sidebar `/sections/docs/sidebar`

Sidebar navigation for documentation pages with nested items. Renders a list of links and supports active state highlighting.

## ✅ Features

-   Nested navigation with optional child links
-   Mobile-friendly toggle support via existing JS
-   Uses CSS variables for colors, spacing and typography
-   Integrates with global sidebar logic (`#sidebar` element)

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/docs/sidebar/sidebar.html",
	"items": [
		{
			"name": "Guide",
			"url": "/guide",
			"items": [{ "name": "Intro", "url": "/guide#intro" }]
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="docs-sidebar">
	<aside id="sidebar" class="main-content__nav">
		<ul class="main-content__nav-wrap">
			<li
				class="main-content__nav-item main-content__nav-item--mobile"
				item-url="/"
			>
				<a href="/" class="header__nav-link">Getting started</a>
			</li>
			{% for item in section.items %}
			<li class="main-content__nav-item" item-url="{{{item.url}}}">
				<a href="{{{item.url}}}" class="main-content__nav-link"
					>{{{item.name}}}</a
				>
				<ul class="main-content__nav-in">
					{% for _item in item.items %}
					<li class="main-content__nav-in-item">
						<a href="{{{_item.url}}}" class="main-content__nav-link"
							>{{{_item.name}}}</a
						>
					</li>
					{% endfor %}
				</ul>
			</li>
			{% endfor %}
		</ul>
	</aside>
</div>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable            | Description                      |
| ------------------- | -------------------------------- |
| `--ff-base`         | Base font family                 |
| `--c-primary`       | Sidebar background color         |
| `--c-secondary`     | Border color                     |
| `--c-text-primary`  | Link text color                  |
| `--c-primary-hover` | Link hover and active color      |
| `--c-placeholder`   | Divider color for nested lists   |
| `--padding-scale`   | Controls link padding            |
| `--margin-scale`    | Controls nested list indentation |
| `--transition`      | Transition for link hover        |
