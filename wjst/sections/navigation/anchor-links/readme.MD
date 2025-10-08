# 🔗 Anchor Links `/sections/navigation/anchor-links`

Simple navigation section that renders a list of anchor links.
Useful for in-page navigation menus such as "Jump to" lists.

## ✅ Features

-   Renders a list of links based on provided data
-   Horizontal layout that stacks vertically on small screens
-   Styled with global CSS variables for easy theming

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/navigation/anchor-links/anchor-links.html",
	"links": [
		{ "href": "#intro", "label": "Introduction" },
		{ "href": "#setup", "label": "Setup" },
		{ "href": "#usage", "label": "Usage" }
	]
}
```

## 🧱 HTML Structure

```html
<nav class="anchor-links">
	{% if section.links %} {% for link in section.links %}
	<a class="anchor-links__link" href="{{{link.href}}}">{{{link.label}}}</a>
	{% endfor %} {% endif %}
</nav>
```

---

## 🎨 Styling Notes

-   Uses flexbox with `gap` and spacing scaled via `--margin-scale`
-   Link typography and colors come from theme variables
-   Breaks into a vertical list on screens below `--bp-md`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable            | Description                              |
| ------------------- | ---------------------------------------- |
| `--margin-scale`    | Controls spacing between links           |
| `--padding-scale`   | Vertical padding around the link group   |
| `--ff-base`         | Base font family for links               |
| `--font-size`       | Font size of each link                   |
| `--line-height`     | Line height for links                    |
| `--letter-spacing`  | Letter spacing for links                 |
| `--c-primary`       | Default link color                       |
| `--c-primary-hover` | Hover color for links                    |
| `--transition`      | Transition for hover state               |
| `--bp-md`           | Breakpoint where layout becomes vertical |
