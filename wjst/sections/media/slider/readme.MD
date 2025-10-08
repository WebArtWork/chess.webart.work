# 📂 Slider `/sections/media/slider`

Responsive media slider with previous/next controls and dot navigation. Slides are passed as an array of images.

## ✅ Features

-   Dynamic slide navigation with previous/next buttons
-   Dots generated automatically for each slide
-   Responsive layout using CSS variables
-   Supports any number of slides

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/media/slider/slider.html",
	"slides": [
		{ "img": "/img/slide1.jpg", "alt": "First slide" },
		{ "img": "/img/slide2.jpg", "alt": "Second slide" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="slider">
	<div class="slider__container">
		{% for slide in section.slides %}
		<div class="slider__slide">
			<img src="{{{slide.img}}}" alt="{{{slide.alt}}}" />
		</div>
		{% endfor %}
	</div>
	<button class="slider__button slider__button--prev">&#10094;</button>
	<button class="slider__button slider__button--next">&#10095;</button>
	<div class="slider__dots"></div>
</div>
<script>
	// Slider logic omitted for brevity
</script>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable           | Description                          |
| ------------------ | ------------------------------------ |
| `--padding-scale`  | Controls spacing and slide height    |
| `--transition`     | Transition for sliding animation     |
| `--b-radius`       | Rounds slider container corners      |
| `--c-bg-item`      | Background color of slider container |
| `--c-white`        | Base color for controls and dots     |
| `--c-text-primary` | Hover color for navigation buttons   |

```

```
