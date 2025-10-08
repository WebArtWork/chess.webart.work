# 📂 About `/sections/business/about`

About section for presenting company or project information. Displays a title, description, and optional image in a responsive side-by-side layout.

## ✅ Features

-   Optional title, description, and image
-   Flexbox layout swaps to stacked on smaller screens
-   Uses global CSS variables for typography, spacing, colors, and breakpoints

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/business/about/about.html",
	"img": "/img/about.svg",
	"title": "Optional section title",
	"description": "Optional paragraph describing the business"
}
```

## 🧱 HTML Structure

```html
<div class="about">
	<div class="about__text">
		{% if section.title %}
		<div class="about__title">{{{section.title}}}</div>
		{% endif %} {% if section.description %}
		<div class="about__description">{{{section.description}}}</div>
		{% endif %}
	</div>
	{% if section.img %}
	<div class="about__img">
		<img src="{{{section.img}}}" alt="" />
	</div>
	{% endif %}
</div>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable                        | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `--padding-scale`               | Scales section padding and gaps                    |
| `--margin-scale`                | Controls vertical spacing                          |
| `--font-size`                   | Base font size for description                     |
| `--line-height`                 | Line height for title and description              |
| `--letter-spacing`              | Applied to title and description                   |
| `--b-radius`                    | Rounds the image container                         |
| `--transition`                  | Used in description hover/fade behavior            |
| `--ff-base`                     | Font for description text                          |
| `--ff-title`                    | Font for title text                                |
| `--c-text-primary`              | Title text color                                   |
| `--c-text-body-secondary`       | Description text color                             |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in media queries to adjust sizes responsively |
