# 📂 Meta `/sections/blog/meta`

Blog post metadata such as publication date, author, reading time, and categories.

## ✅ Features

-   Optional date, author, reading time, and category list
-   Items separated by bullets and responsive
-   Uses CSS variables for colors, fonts, spacing, and responsiveness

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/blog/meta/meta.html",
	"date": "2024-05-01",
	"author": "John Doe",
	"readTime": "5 min read",
	"categories": [
		{ "name": "Tech", "url": "/category/tech" },
		{ "name": "AI", "url": "/category/ai" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="blog-meta">
	{% if section.date %}
	<div class="blog-meta__item blog-meta__date">
		<time datetime="{{{section.date}}}">{{{section.date}}}</time>
	</div>
	{% endif %} {% if section.author %}
	<div class="blog-meta__item blog-meta__author">{{{section.author}}}</div>
	{% endif %} {% if section.readTime %}
	<div class="blog-meta__item blog-meta__read-time">
		{{{section.readTime}}}
	</div>
	{% endif %} {% if section.categories %}
	<div class="blog-meta__item blog-meta__categories">
		{% for category in section.categories %}
		<a href="{{{category.url}}}">{{{category.name}}}</a>{% if not loop.last
		%}, {% endif %} {% endfor %}
	</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Uses `flex` layout with `gap` for spacing
-   Bullet separators added via pseudo-element
-   Font sizing adapts via `--font-size` and `--bp-sm`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                  |
| -------------------- | ---------------------------- |
| `--margin-scale`     | Spacing between meta items   |
| `--ff-base`          | Base font family             |
| `--font-size`        | Base font size for text      |
| `--line-height`      | Line height                  |
| `--letter-spacing`   | Letter spacing               |
| `--c-text-secondary` | Meta text color              |
| `--c-primary`        | Link color                   |
| `--c-primary-hover`  | Link hover color             |
| `--transition`       | Transition for link hover    |
| `--bp-sm`            | Breakpoint for small devices |
