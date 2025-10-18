# 📂 Star Rating `/sections/ecommerce/star-rating`

A flexible star-based rating display for product reviews. Shows up to five stars with a partial fill based on the provided rating and an optional text label.

## ✅ Features

-   Accepts a numeric rating (0–5) for partial star fill
-   Optional text label (e.g., `4.5/5` or `Rated by 120 users`)
-   Responsive star sizing via CSS variables and breakpoints
-   Uses theme variables for colors, spacing, and typography

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/ecommerce/star-rating/star-rating.html",
	"rating": 4.5,
	"text": "4.5/5"
}
```

## 🧱 HTML Structure

```html
<div class="star-rating" style="--rating: {{{section.rating}}};">
	<div class="star-rating__stars">
		<div class="star-rating__base">
			<span class="material-icons">star</span>
			<span class="material-icons">star</span>
			<span class="material-icons">star</span>
			<span class="material-icons">star</span>
			<span class="material-icons">star</span>
		</div>
		<div class="star-rating__fill">
			<span class="material-icons">star</span>
			<span class="material-icons">star</span>
			<span class="material-icons">star</span>
			<span class="material-icons">star</span>
			<span class="material-icons">star</span>
		</div>
	</div>
	{% if section.text %}
	<div class="star-rating__text">{{{section.text}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Star size derives from `--icon-size` and adapts at breakpoints
-   Filled stars use `--c-yellow`, while the base uses `--c-text-body-secondary`
-   Rating text respects typography variables for consistency
-   Width of filled stars computed via `--rating` (0–5)

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                               |
| ------------------------- | ----------------------------------------- |
| `--icon-size`             | Base icon size for calculating star size  |
| `--c-yellow`              | Color for filled stars                    |
| `--c-text-body-secondary` | Color for empty stars and rating text     |
| `--margin-scale`          | Controls spacing next to the rating text  |
| `--font-size`             | Base font size for the rating text        |
| `--line-height`           | Line height for text alignment            |
| `--bp-md`, `--bp-sm`      | Breakpoints used to adjust star size/text |

---
