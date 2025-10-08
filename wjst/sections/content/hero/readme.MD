# 📂 Hero `/sections/content/hero`

Hero section with prominent title, description, and imagery. Supports a main image and optional decorative images.

## ✅ Features

-   Optional title and description
-   Supports main image plus up to two overlay images
-   Responsive layout with flexbox
-   Uses CSS variables for colors, fonts, spacing, and breakpoints

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/content/hero/hero.html",
	"title": "Hero title",
	"description": "Optional descriptive text",
	"img": "/img/hero-main.png",
	"imgs": ["/img/hero-second.png", "/img/hero-first.png"]
}
```

## 🧱 HTML Structure

```html
<div class="hero">
	<div class="hero__wrapper">
		<div class="hero__text">
			{% if section.title %}
			<div class="hero__title">{{{section.title}}}</div>
			{% endif %} {% if section.description %}
			<div class="hero__description">{{{section.description}}}</div>
			{% endif %}
		</div>
		{% if section.img %}
		<div class="hero__imgs">
			<img src="{{{section.img}}}" alt="" />
			{% if section.imgs %} {% if section.imgs[1] %}
			<div class="hero__img hero__img--first">
				<img src="{{{section.imgs[1]}}}" alt="" />
			</div>
			{% endif %} {% if section.imgs[0] %}
			<div class="hero__img hero__img--second">
				<img src="{{{section.imgs[0]}}}" alt="" />
			</div>
			{% endif %} {% endif %}
		</div>
		{% endif %}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Uses `calc(... * var(--padding-scale))` and `--margin-scale` for scalable spacing
-   Breakpoints leverage `--bp-lg`, `--bp-md`, and `--bp-sm`
-   Typography uses `--ff-title`, `--ff-base`, `--font-size`, and related variables
-   Colors derive from `--c-text-primary` and `--c-text-body-secondary`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `--padding-scale`               | Scales padding values in section                   |
| `--margin-scale`                | Controls margin spacing                            |
| `--font-size`                   | Base font size for description                     |
| `--line-height`                 | Line height for title and description              |
| `--letter-spacing`              | Applied to title and description                   |
| `--b-radius`                    | (not used) available for image rounding            |
| `--ff-base`                     | Font for description text                          |
| `--ff-title`                    | Font for title text                                |
| `--c-text-primary`              | Title text color                                   |
| `--c-text-body-secondary`       | Description text color                             |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in media queries to adjust sizes responsively |

---
