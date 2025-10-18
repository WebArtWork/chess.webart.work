# \ud83d\udcc2 Related Posts `/sections/blog/related-posts`

Displays a grid of related blog posts with images, titles and optional dates.

## \u2705 Features

-   Optional section title
-   Responsive grid layout
-   Each item supports image, title, and optional date
-   Uses CSS variables for colors, spacing, and typography

---

## \ud83d\udcde Section Data Schema

```json
{
	"src": "/sections/blog/related-posts/related-posts.html",
	"title": "Related posts",
	"posts": [
		{
			"href": "/blog/post-1",
			"img": "/img/post-1.jpg",
			"title": "First post",
			"date": "Jan 1, 2024"
		},
		{
			"href": "/blog/post-2",
			"img": "/img/post-2.jpg",
			"title": "Second post"
		}
	]
}
```

## \ud83e\uddf1 HTML Structure

```html
<div class="related-posts">
	{% if section.title %}
	<div class="related-posts__title">{{{section.title}}}</div>
	{% endif %}

	<div class="related-posts__grid">
		{% for post in section.posts %}
		<a class="related-posts__item" href="{{{post.href}}}">
			<div class="related-posts__img">
				<img src="{{{post.img}}}" alt="" />
			</div>
			<div class="related-posts__content">
				<div class="related-posts__post-title">{{{post.title}}}</div>
				{% if post.date %}
				<div class="related-posts__date">{{{post.date}}}</div>
				{% endif %}
			</div>
		</a>
		{% endfor %}
	</div>
</div>
```

---

## \ud83c\udfa8 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Grid layout adapts at breakpoints
-   Card background uses `--c-bg-item` with hover `--c-primary-hover`
-   Titles use `--ff-title`; date text uses `--c-text-body-secondary`

---

## \ud83e\udde9 Theme Variables Used (from `template.json`)

| Variable                        | Description                        |
| ------------------------------- | ---------------------------------- |
| `--padding-scale`               | Multiplier for padding             |
| `--margin-scale`                | Multiplier for margins             |
| `--font-size`                   | Base font size for titles          |
| `--line-height`                 | Line height for titles and text    |
| `--letter-spacing`              | Letter spacing for titles          |
| `--ff-base`                     | Font family for general text       |
| `--ff-title`                    | Font family for titles             |
| `--c-text-primary`              | Primary text color                 |
| `--c-text-body-secondary`       | Secondary text color for dates     |
| `--c-bg-item`                   | Background color of each card      |
| `--c-primary-hover`             | Hover background color for cards   |
| `--b-radius`                    | Rounds card corners                |
| `--transition`                  | Controls hover transition duration |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints for responsive layout  |

---
