# 📂 Image Caption `/sections/media/image-caption`

Display a single image with an optional caption. Perfect for highlighting photos, illustrations, or screenshots with supporting text.

## ✅ Features

-   Optional caption rendered via `<figcaption>`
-   Responsive image that uses global design tokens
-   Typography and spacing adapt across breakpoints

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/media/image-caption/image-caption.html",
	"img": "/img/example.jpg",
	"caption": "Optional caption text"
}
```

## 🧱 HTML Structure

```html
<figure class="image-caption">
	<img class="image-caption__img" src="{{{section.img}}}" alt="" />
	{% if section.caption %}
	<figcaption class="image-caption__caption">
		{{{section.caption}}}
	</figcaption>
	{% endif %}
</figure>
```

---

## 🎨 Styling Notes

-   Root figure centers content and adds scalable bottom padding
-   Caption text leverages global font sizing and color variables
-   Responsive font sizing adjusts at `--bp-md` and `--bp-sm`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                             |
| ------------------------- | --------------------------------------- |
| `--padding-scale`         | Controls bottom spacing                 |
| `--margin-scale`          | Spacing above caption                   |
| `--font-size`             | Base font size for caption              |
| `--line-height`           | Caption line height                     |
| `--letter-spacing`        | Caption letter spacing                  |
| `--ff-base`               | Font family for caption text            |
| `--b-radius`              | Rounds image corners                    |
| `--c-text-body-secondary` | Caption text color                      |
| `--transition`            | Color transition for caption text       |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive caption size |
