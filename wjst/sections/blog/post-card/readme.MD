# 📂 Post Card `/sections/blog/post-card`

Reusable blog post card component. Displays an optional image, category label, title, excerpt, and basic post metadata like author and date.

## ✅ Features

-   Optional image, category, excerpt, author, and date
-   Responsive typography and spacing via CSS variables
-   Utilizes global theme tokens for fonts, colors, and layout
-   Semantic HTML structure with `<article>` and `<time>` elements

---

## 🗟️ Section Data Schema

```json
{
	"src": "/sections/blog/post-card/post-card.html",
	"img": "/img/post.jpg",
	"category": "Tech",
	"title": "Blog post title",
	"excerpt": "Optional short preview of the article content.",
	"author": "John Doe",
	"date": "2024-01-01"
}
```

## 🧱 HTML Structure

```html
<article class="post-card">
	{% if section.img %}
	<div class="post-card__img">
		<img src="{{{section.img}}}" alt="{{{section.title}}}" />
	</div>
	{% endif %}

	<div class="post-card__content">
		{% if section.category %}
		<div class="post-card__category">{{{section.category}}}</div>
		{% endif %}

		<h2 class="post-card__title">{{{section.title}}}</h2>

		{% if section.excerpt %}
		<p class="post-card__excerpt">{{{section.excerpt}}}</p>
		{% endif %} {% if section.author || section.date %}
		<div class="post-card__meta">
			{% if section.author %}
			<span class="post-card__author">{{{section.author}}}</span>
			{% endif %} {% if section.date %}
			<time class="post-card__date">{{{section.date}}}</time>
			{% endif %}
		</div>
		{% endif %}
	</div>
</article>
```

---

## 🎨 Styling Notes

-   Uses `--padding-scale` and `--margin-scale` to control spacing
-   Typography adapts with `--font-size`, `--line-height`, and `--letter-spacing`
-   Colors inherit from `--c-text-primary` and `--c-text-body-secondary`
-   Responsive title sizing at `--bp-md` and `--bp-sm` breakpoints

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                                |
| ------------------------- | ------------------------------------------ |
| `--padding-scale`         | Scales internal padding                    |
| `--margin-scale`          | Controls spacing between elements          |
| `--font-size`             | Base font size                             |
| `--line-height`           | Line height for text                       |
| `--letter-spacing`        | Letter spacing for text                    |
| `--ff-base`               | Base font family                           |
| `--ff-title`              | Title font family                          |
| `--c-bg-item`             | Background color of card                   |
| `--c-border`              | Border color of card                       |
| `--c-text-primary`        | Primary text color                         |
| `--c-text-body-secondary` | Secondary text color                       |
| `--b-radius`              | Border radius for card                     |
| `--transition`            | Transition timing for interactive elements |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive adjustments     |
