# 📂 Review Section `/sections/ecommerce/review-section`

Customer review block for e‑commerce pages. Displays a list of user reviews with optional avatar, name, rating and comment.

## ✅ Features

-   Optional section title
-   Reviews accept avatar, name, rating and comment
-   Cards use global CSS variables for consistent theming
-   Responsive layout that adapts across breakpoints

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/ecommerce/review-section/review-section.html",
	"title": "Customer Reviews",
	"reviews": [
		{
			"avatar": "/img/user.jpg",
			"name": "Jane Doe",
			"rating": "5",
			"comment": "Great product!"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="review-section">
	{% if section.title %}
	<div class="review-section__title">{{{section.title}}}</div>
	{% endif %} {% if section.reviews %}
	<ul class="review-section__list">
		{% for review in section.reviews %}
		<li class="review-section__item">
			{% if review.avatar %}
			<div class="review-section__avatar">
				<img src="{{{review.avatar}}}" alt="" />
			</div>
			{% endif %}
			<div class="review-section__body">
				<div class="review-section__header">
					{% if review.name %}
					<div class="review-section__name">{{{review.name}}}</div>
					{% endif %} {% if review.rating %}
					<div class="review-section__rating">
						{{{review.rating}}}/5
					</div>
					{% endif %}
				</div>
				{% if review.comment %}
				<div class="review-section__comment">{{{review.comment}}}</div>
				{% endif %}
			</div>
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Review cards inherit colors and radius from global tokens
-   Rating highlighted with `--c-yellow`
-   Font families derive from `--ff-base` and `--ff-title`
-   Layout collapses into vertical stack on smaller screens

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                         |
| ------------------------------- | ----------------------------------- |
| `--padding-scale`               | Scales section padding              |
| `--margin-scale`                | Controls spacing between elements   |
| `--font-size`                   | Base font size for text             |
| `--line-height`                 | Line height for comments            |
| `--letter-spacing`              | Applied to comment text             |
| `--b-radius`                    | Rounds review item containers       |
| `--ff-base`                     | Font for comment text               |
| `--ff-title`                    | Font for title and reviewer name    |
| `--c-text-primary`              | Title and name text color           |
| `--c-text-body-secondary`       | Comment text color                  |
| `--c-bg-item`                   | Background of each review card      |
| `--c-shadow`                    | Shadow applied to review cards      |
| `--c-yellow`                    | Rating color                        |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints for responsive behavior |
