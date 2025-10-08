# \ud83d\udcc2 Divider `/sections/layout/divider`

Horizontal divider used to separate content blocks with optional centered text.

## \u2705 Features

-   Optional text centered between lines
-   Uses CSS variables for spacing, color, and typography
-   Responsive spacing via design tokens

---

## \ud83d\uddfe Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/layout/divider/divider.html",
	"text": "Optional divider text"
}
```

## \ud83d\udea7 HTML Structure

```html
<div class="divider">
	{% if section.text %}
	<span class="divider__text">{{{section.text}}}</span>
	{% endif %}
</div>
```

---

## \ud83c\udfa8 Styling Notes

-   Divider lines use `--c-border`
-   Text color inherits from `--c-text-secondary`
-   Font styles rely on `--ff-base`, `--font-size`, `--line-height`, and `--letter-spacing`
-   Vertical spacing controlled by `--margin-scale`

---

## \ud83e\udde9 Theme Variables Used (from `template.json`)

| Variable             | Description              |
| -------------------- | ------------------------ |
| `--c-border`         | Divider line color       |
| `--c-text-secondary` | Divider text color       |
| `--ff-base`          | Base font family         |
| `--font-size`        | Base font size           |
| `--line-height`      | Default line height      |
| `--letter-spacing`   | Default letter spacing   |
| `--margin-scale`     | Controls divider spacing |
