# 📂 Author `/sections/blog/author`

Display author information for blog posts. Shows an avatar, name and short bio with responsive layout.

## ✅ Features

-   Optional avatar, name and bio (rendered only when provided)
-   Flexbox layout that stacks on small screens
-   Uses global CSS variables for colors, fonts and spacing

---

## 🧾 Section Data Schema

This section expects the following data structure passed via section:

```json
{
	"src": "/sections/blog/author/author.html",
	"avatar": "/img/avatar.png",
	"name": "Author name",
	"bio": "Short author description or tagline"
}
```

## 🧱 HTML Structure

```html
<div class="author">
	{% if section.avatar %}
	<div class="author__avatar">
		<img src="{{{section.avatar}}}" alt="{{{section.name}}}" />
	</div>
	{% endif %}
	<div class="author__info">
		{% if section.name %}
		<div class="author__name">{{{section.name}}}</div>
		{% endif %} {% if section.bio %}
		<div class="author__bio">{{{section.bio}}}</div>
		{% endif %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Uses `display: flex` with column layout below `--bp-md`
-   Avatar constrained to a circle via `border-radius: 50%`
-   Typography scales through breakpoints and `--font-size`
-   Spacing derived from `--padding-scale` and `--margin-scale`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                        |
| ------------------------------- | ---------------------------------- |
| `--ff-base`                     | Font for bio text                  |
| `--ff-title`                    | Font for author name               |
| `--font-size`                   | Base font size for bio             |
| `--line-height`                 | Line height for text               |
| `--c-text-primary`              | Author name color                  |
| `--c-text-body-secondary`       | Bio text color                     |
| `--c-bg-item`                   | Background of author block         |
| `--b-radius`                    | Border radius for block and avatar |
| `--padding-scale`               | Scales block padding               |
| `--margin-scale`                | Controls spacing around elements   |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoint adjustments             |
