# \ud83d\udcc2 Review Carousel `/sections/feedback/review-carousel`

A horizontally scrollable carousel for showcasing user reviews with navigation buttons.

## \u2705 Features

-   Optional section title
-   Scroll snapping for smooth horizontal sliding
-   Previous/Next controls with JavaScript scrolling
-   Theme-aware styling via CSS variables

---

## \ud83e\uddf3 Section Data Schema

```json
{
	"src": "/sections/feedback/review-carousel/review-carousel.html",
	"title": "What people say",
	"reviews": [
		{
			"text": "Short review text",
			"author": "Author name"
		}
	]
}
```

## \ud83e\uddf1 HTML Structure

```html
<div class="review-carousel">
	<div class="review-carousel__track">
		<div class="review-carousel__item">
			<div class="review-carousel__text">Review text</div>
			<div class="review-carousel__author">Author name</div>
		</div>
	</div>
	<div class="review-carousel__nav">
		<button class="review-carousel__button review-carousel__button--prev">
			<span class="material-icons">chevron_left</span>
		</button>
		<button class="review-carousel__button review-carousel__button--next">
			<span class="material-icons">chevron_right</span>
		</button>
	</div>
</div>
```

---

## \ud83c\udfa8 Styling Notes

-   Uses `scroll-snap-type` for native carousel behavior
-   Buttons overlay the track using absolute positioning and pointer events
-   Reviews are centered with flexible layout and theme-aware colors

---

## \ud83e\udde9 Theme Variables Used (from `template.json`)

| Variable                        | Description                       |
| ------------------------------- | --------------------------------- |
| `--padding-scale`               | Scales section padding            |
| `--margin-scale`                | Controls spacing between elements |
| `--font-size`                   | Base font size for review text    |
| `--line-height`                 | Line height for text              |
| `--letter-spacing`              | Letter spacing for text           |
| `--ff-base`                     | Font for review text              |
| `--ff-title`                    | Font for title and author         |
| `--c-text-primary`              | Title and author text color       |
| `--c-text-body-secondary`       | Review text color                 |
| `--c-bg-item`                   | Background for review items       |
| `--c-shadow`                    | Drop shadow for review items      |
| `--c-primary`                   | Navigation button background      |
| `--c-primary-hover`             | Navigation button hover state     |
| `--b-radius`                    | Rounds review item container      |
| `--transition`                  | Hover transition for buttons      |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Responsive font sizing for title  |
