# 📂 Breadcrumbs `/sections/navigation/breadcrumbs`

A simple breadcrumb navigation component for indicating the current page's location within a hierarchy.

## ✅ Features

-   Accessible `<nav aria-label="Breadcrumb">` container
-   Supports any number of breadcrumb items
-   Last item rendered as the current location without a link
-   Uses CSS variables for typography, spacing, colors, and responsiveness

---

## 🧾 Section Data Schema

This section expects the following data structure:

```json
{
	"src": "/sections/navigation/breadcrumbs/breadcrumbs.html",
	"items": [
		{ "label": "Home", "url": "/" },
		{ "label": "Docs", "url": "/docs" },
		{ "label": "API" }
	]
}
```

## 🧱 HTML Structure

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
	<ol class="breadcrumbs__list">
		<li class="breadcrumbs__item">
			<a href="{{{item.url}}}" class="breadcrumbs__link"
				>{{{item.label}}}</a
			>
		</li>
		<li class="breadcrumbs__item">
			<span class="breadcrumbs__current">{{{item.label}}}</span>
		</li>
	</ol>
</nav>
```

---

## 🎨 Styling Notes

-   Spacing scales via `--padding-scale` and `--margin-scale`
-   Typography uses `--font-size`, `--line-height`, `--letter-spacing`, and `--ff-base`
-   Link and current item colors use `--c-text-secondary`, `--c-text-primary`, and `--c-text-body-secondary`
-   Hover effects transition with `--transition`
-   Font size adjusts at the `--bp-sm` breakpoint

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `--padding-scale`         | Vertical padding around breadcrumb bar          |
| `--margin-scale`          | Space around separators                         |
| `--font-size`             | Base font size                                  |
| `--line-height`           | Line height                                     |
| `--letter-spacing`        | Letter spacing                                  |
| `--ff-base`               | Font family                                     |
| `--c-text-secondary`      | Link text color                                 |
| `--c-text-primary`        | Current item and hover text color               |
| `--c-text-body-secondary` | Separator color                                 |
| `--transition`            | Transition for hover states                     |
| `--bp-sm`                 | Breakpoint for responsive font size adjustments |
