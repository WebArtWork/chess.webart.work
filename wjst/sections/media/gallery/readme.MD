# 📂 Gallery `/sections/media/gallery`

Responsive image gallery section that displays a grid of images with an optional caption.

## ✅ Features

-   Renders any number of images
-   Optional caption below the gallery
-   Responsive grid layout using CSS variables
-   Hover zoom effect on images

---

## 📾 Section Data Schema

```json
{
	"src": "/sections/media/gallery/gallery.html",
	"items": [
		{ "img": "/img/pic1.jpg", "alt": "First image" },
		{ "img": "/img/pic2.jpg", "alt": "Second image" }
	],
	"caption": "Optional gallery caption"
}
```

## 📝 HTML Structure

```html
<div class="gallery">
	<div class="gallery__item">
		<img src="{{{item.img}}}" alt="{{{item.alt}}}" />
	</div>
	...
	<div class="gallery__caption">{{{section.caption}}}</div>
</div>
```

---

## 🎭 Styling Notes

-   Grid spacing, radius, and transitions respect global CSS variables
-   Images scale on hover for subtle interaction
-   Caption inherits typography settings from theme

---

## 🤖 Theme Variables Used (from `template.json`)

| Variable                  | Description                           |
| ------------------------- | ------------------------------------- |
| `--padding-scale`         | Controls bottom padding               |
| `--margin-scale`          | Gap between items and caption spacing |
| `--font-size`             | Caption font size                     |
| `--line-height`           | Caption line height                   |
| `--letter-spacing`        | Caption letter spacing                |
| `--b-radius`              | Rounds gallery items                  |
| `--transition`            | Image hover animation                 |
| `--ff-base`               | Font for caption                      |
| `--c-bg-item`             | Background of gallery items           |
| `--c-text-body-secondary` | Caption text color                    |
| `--bp-md`, `--bp-sm`      | Responsive breakpoints                |

---
