# \ud83d\udcc2 Lightbox `/sections/media/lightbox`

Simple image lightbox component that displays a thumbnail and opens a full-screen modal preview on click. Optional caption support.

## \u2705 Features

-   Opens image in modal overlay
-   Click outside image or close button to dismiss
-   Optional caption text
-   Responsive and theme-aware via CSS variables

---

## \ud83d\udc4e Section Data Schema

This section expects the following data structure:

```json
{
	"src": "/sections/media/lightbox/lightbox.html",
	"thumbnail": "/img/thumb.jpg",
	"image": "/img/large.jpg",
	"alt": "Accessible alt text",
	"caption": "Optional caption text"
}
```

## \ud83e\uddf1 HTML Structure

```html
<div class="lightbox">
	<div class="lightbox__thumb">
		<img src="{{{section.thumbnail}}}" alt="{{{section.alt || ''}}}" />
	</div>
	<div class="lightbox__overlay">
		<div class="lightbox__dialog">
			<img
				class="lightbox__image"
				src="{{{section.image}}}"
				alt="{{{section.alt || ''}}}"
			/>
			{% if section.caption %}
			<div class="lightbox__caption">{{{section.caption}}}</div>
			{% endif %}
			<button class="lightbox__close" aria-label="Close">&times;</button>
		</div>
	</div>
</div>
```

---

## \ud83c\udfa8 Styling Notes

-   Uses `--b-radius`, `--font-size`, `--line-height`, and `--letter-spacing` for consistent typography
-   Overlay fade controlled by `--transition`
-   Colors pulled from `--c-primary`, `--c-white`, and `--c-text-primary`
-   Responsive modal width adapts at `--bp-sm`

---

## \ud83d\udc8c Theme Variables Used (from `template.json`)

| Variable           | Description                          |
| ------------------ | ------------------------------------ |
| `--b-radius`       | Border radius for images and buttons |
| `--font-size`      | Base font size for caption           |
| `--line-height`    | Line height for caption              |
| `--letter-spacing` | Letter spacing for caption text      |
| `--c-text-primary` | Caption text color                   |
| `--c-primary`      | Close button background color        |
| `--c-white`        | Close button text color              |
| `--padding-scale`  | Spacing multiplier for close button  |
| `--margin-scale`   | Spacing multiplier for caption       |
| `--transition`     | Fade-in/out duration for overlay     |
| `--bp-sm`          | Breakpoint for small devices         |
