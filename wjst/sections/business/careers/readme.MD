# 📂 Careers `/sections/business/careers`

Section for showcasing open job positions with title, location, type and application link.

## ✅ Features

-   Optional title and description
-   Responsive grid layout for positions
-   Each position supports location, job type and apply link
-   Uses CSS variables for colors, fonts and spacing

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/business/careers/careers.html",
	"title": "Join our team",
	"description": "We are hiring across multiple roles",
	"positions": [
		{
			"title": "Frontend Developer",
			"location": "Remote",
			"type": "Full-Time",
			"link": "/careers/frontend",
			"linkLabel": "Apply now"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="careers">
	{% if section.title %}
	<div class="careers__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="careers__description">{{{section.description}}}</div>
	{% endif %} {% if section.positions %}
	<ul class="careers__list">
		{% for item in section.positions %}
		<li class="careers__item">
			{% if item.title %}
			<div class="careers__item-title">{{{item.title}}}</div>
			{% endif %} {% if item.location || item.type %}
			<div class="careers__item-meta">
				{% if item.location %}
				<span class="careers__item-location">{{{item.location}}}</span>
				{% endif %} {% if item.type %}
				<span class="careers__item-type">{{{item.type}}}</span>
				{% endif %}
			</div>
			{% endif %} {% if item.link %}
			<a class="careers__item-link" href="{{{item.link}}}"
				>{{{item.linkLabel || 'Apply Now'}}}</a
			>
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Typography uses `--ff-base`, `--ff-title`, `--font-size`, and `--line-height`
-   Colors leverage theme variables like `--c-bg-item`, `--c-text-primary`, `--c-text-body-secondary`, and `--c-primary`
-   Link hover state uses `--c-primary-hover` with `--transition`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                    |
| ------------------------- | ------------------------------ |
| `--padding-scale`         | Controls vertical spacing      |
| `--margin-scale`          | Controls gaps between elements |
| `--ff-base`               | Font family for body text      |
| `--ff-title`              | Font family for titles         |
| `--font-size`             | Base font size                 |
| `--line-height`           | Line height for text           |
| `--letter-spacing`        | Applied to headings and text   |
| `--c-bg-item`             | Background color for job cards |
| `--b-radius`              | Border radius for job cards    |
| `--c-shadow`              | Shadow for job cards           |
| `--c-text-primary`        | Text color for headings        |
| `--c-text-body-secondary` | Text color for meta info       |
| `--c-primary`             | Link color                     |
| `--c-primary-hover`       | Link hover color               |
| `--transition`            | Transition for hover effects   |

```

```
