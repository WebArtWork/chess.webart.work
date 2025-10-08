# 📂 Post Grid `/sections/blog/post-grid`

Responsive grid for listing blog posts. Displays cards with optional image, title, and excerpt, adapting across breakpoints.

## ✅ Features

-   Responsive grid layout using CSS variables
-   Optional image, title, description, and link per post
-   Hover effect on cards via theme shadow
-   Uses global typography, color, and spacing tokens

---

## 📜 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/blog/post-grid/post-grid.html",
	"items": [
		{
			"img": "/img/post.jpg",
			"title": "Post title",
			"description": "Short summary",
			"url": "/post-url"
		}
	]
}
```

## 🗳️ HTML Structure

```html
<div class="post-grid">
	{% for item in section.items %}
	<article class="post-grid__item">
		{% if item.img %}
		<div class="post-grid__image">
			<img src="{{{item.img}}}" alt="" />
		</div>
		{% endif %}
		<div class="post-grid__body">
			{% if item.title %}
			<h3 class="post-grid__title">
				{% if item.url %}
				<a href="{{{item.url}}}">{{{item.title}}}</a>
				{% else %} {{{item.title}}} {% endif %}
			</h3>
			{% endif %} {% if item.description %}
			<div class="post-grid__excerpt">{{{item.description}}}</div>
			{% endif %}
		</div>
	</article>
	{% endfor %}
</div>
```

---

## 🎨 Styling Notes

-   Grid adjusts automatically using `auto-fit` and `minmax`
-   Images keep a 16:9 aspect ratio and cover the container
-   Card hover uses `--c-shadow` for subtle elevation
-   Typography and colors inherit from global tokens

---

## 🧠 Theme Variables Used (from `template.json`)

| Variable                  | Description                            |
| ------------------------- | -------------------------------------- |
| `--padding-scale`         | Scales section and body padding        |
| `--margin-scale`          | Controls gap between grid items        |
| `--b-radius`              | Rounds card corners                    |
| `--transition`            | Animates hover states                  |
| `--ff-base`               | Body font                              |
| `--ff-title`              | Font for post titles                   |
| `--font-size`             | Base font size for excerpt             |
| `--line-height`           | Line height for text                   |
| `--letter-spacing`        | Letter spacing for text                |
| `--c-text-primary`        | Post title color                       |
| `--c-text-body-secondary` | Excerpt text color                     |
| `--c-bg-item`             | Card background color                  |
| `--c-border`              | Card border color                      |
| `--c-primary-hover`       | Hover color for links                  |
| `--c-shadow`              | Card hover shadow                      |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive adjustments |

---
