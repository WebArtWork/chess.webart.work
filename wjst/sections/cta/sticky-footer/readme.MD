# 📂 Sticky Footer `/sections/cta/sticky-footer`

Persistent call-to-action bar that sticks to the bottom of the viewport. Useful for promotions or prompting user actions.

## ✅ Features

-   Fixed to bottom of screen
-   Optional action button
-   Dismissible via close icon using global `toggleClass` helper
-   Responsive layout that stacks on small screens
-   Uses CSS variables for fonts, colors, spacing, and breakpoints

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/cta/sticky-footer/sticky-footer.html",
	"text": "Promotional message",
	"button": { "url": "/signup", "label": "Sign Up" }
}
```

## 🧱 HTML Structure

```html
<div id="stickyFooter" class="sticky-footer">
	<div class="sticky-footer__content">
		<span class="sticky-footer__text">{{{section.text}}}</span>
		{% if section.button %}
		<a href="{{{section.button.url}}}" class="sticky-footer__button"
			>{{{section.button.label}}}</a
		>
		{% endif %}
	</div>
	<button
		class="sticky-footer__close"
		onclick="toggleClass('stickyFooter','hidden')"
	>
		&times;
	</button>
</div>
```

---

## 🎨 Styling Notes

-   Fixed positioning with shadow to float above page content
-   Text and button arranged with flexbox; collapses into column on small screens
-   Close button toggles `hidden` class to remove banner
-   Spacing scales via `--padding-scale` and `--margin-scale`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable            | Description                              |
| ------------------- | ---------------------------------------- |
| `--padding-scale`   | Controls padding inside the bar          |
| `--margin-scale`    | Gap between elements                     |
| `--font-size`       | Base font size                           |
| `--line-height`     | Text line height                         |
| `--letter-spacing`  | Text letter spacing                      |
| `--ff-base`         | Font family for content                  |
| `--c-secondary`     | Background color of bar                  |
| `--c-primary`       | Button background color                  |
| `--c-primary-hover` | Button hover color and close hover color |
| `--c-text-primary`  | Text and button font color               |
| `--c-shadow`        | Shadow above the bar                     |
| `--b-radius`        | Button border radius                     |
| `--transition`      | Transition timing                        |
| `--bp-md`           | Breakpoint for responsive stacking       |
