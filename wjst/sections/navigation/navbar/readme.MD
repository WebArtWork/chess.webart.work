# \ud83d\udcc2 Navbar `/sections/navigation/navbar`

Responsive navigation bar with optional logo and menu items.

## \u2705 Features

-   Optional logo
-   Responsive collapse into toggle menu on smaller screens
-   Uses CSS variables for colors, fonts, spacing and breakpoints
-   Centralized theming support via global design tokens

---

## \ud83d\uddfe Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/navigation/navbar/navbar.html",
	"logo": "/img/logo.svg",
	"logoUrl": "/",
	"logoAlt": "Home",
	"items": [
		{ "label": "Home", "url": "/" },
		{ "label": "Docs", "url": "/docs" }
	]
}
```

---

## \ud83e\uddf1 HTML Structure

```html
<nav class="navbar">
	<div class="navbar__logo">...</div>
	<button class="navbar__toggle" aria-label="Toggle navigation">
		<span></span><span></span><span></span>
	</button>
	<ul class="navbar__menu">
		<li class="navbar__item"><a class="navbar__link" href="#">Item</a></li>
	</ul>
</nav>
```

---

## \ud83c\udfa8 Styling Notes

-   Links use `letter-spacing`, `line-height` and `--font-size`
-   Menu collapses below `--bp-md`
-   Toggle uses `--b-radius` and `--transition`

---

## \ud83e\udde9 Theme Variables Used (from `template.json`)

| Variable            | Description                             |
| ------------------- | --------------------------------------- |
| `--padding-scale`   | Controls navbar padding                 |
| `--margin-scale`    | Gap between menu items and toggle lines |
| `--font-size`       | Base font size for links                |
| `--line-height`     | Link line-height                        |
| `--letter-spacing`  | Link letter spacing                     |
| `--ff-base`         | Font family for content                 |
| `--c-body`          | Navbar background                       |
| `--c-text-primary`  | Link color                              |
| `--c-primary-hover` | Link hover color                        |
| `--c-shadow`        | Shadow for dropdown menu                |
| `--transition`      | Transition for hover and toggle         |
| `--b-radius`        | Radius for toggle bars                  |
| `--bp-md`           | Breakpoint for collapsing menu          |
