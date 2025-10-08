# 📂 Pagination `/sections/navigation/pagination`

Navigation component for switching between paged content.

## ✅ Features

-   Optional previous and next links
-   Highlighted current page
-   Dynamic page list rendered from data array
-   Responsive flex layout
-   Styling driven by CSS variables for easy theming

---

## 🧾 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/navigation/pagination/pagination.html",
	"prev": "/page/1",
	"next": "/page/3",
	"prevLabel": "Prev",
	"nextLabel": "Next",
	"pages": [
		{ "url": "/page/1", "label": "1" },
		{ "url": "/page/2", "label": "2", "current": true },
		{ "url": "/page/3", "label": "3" }
	]
}
```

## 🧱 HTML Structure

```html
<nav class="pagination">
	{% if section.prev %}
	<a class="pagination__prev" href="{{{section.prev}}}"
		>{{{section.prevLabel || 'Prev'}}}</a
	>
	{% endif %} {% if section.pages %}
	<ul class="pagination__list">
		{% for page in section.pages %}
		<li class="pagination__item">
			{% if page.url %}
			<a
				href="{{{page.url}}}"
				class="pagination__link{% if page.current %} is-current{% endif %}"
				>{{{page.label}}}</a
			>
			{% else %}
			<span
				class="pagination__link{% if page.current %} is-current{% endif %}"
				>{{{page.label}}}</span
			>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %} {% if section.next %}
	<a class="pagination__next" href="{{{section.next}}}"
		>{{{section.nextLabel || 'Next'}}}</a
	>
	{% endif %}
</nav>
```

---

## 🎨 Styling Notes

-   Uses flexbox for alignment and spacing
-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Hover and active states transition with `--transition`
-   Current page styled with `--c-primary`
-   Wraps items on small screens at `--bp-sm`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                        |
| -------------------- | ---------------------------------- |
| `--ff-base`          | Font family for pagination text    |
| `--padding-scale`    | Internal padding of links          |
| `--margin-scale`     | Spacing between items              |
| `--c-text-primary`   | Default text color                 |
| `--c-text-secondary` | Text color on hover/active         |
| `--c-primary`        | Background of active page          |
| `--c-primary-hover`  | Background on hover                |
| `--c-border`         | Link border color                  |
| `--b-radius`         | Border radius for links            |
| `--transition`       | Transition timing                  |
| `--bp-sm`            | Breakpoint for responsive wrapping |

---
