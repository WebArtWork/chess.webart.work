# 📂 Progress `/sections/education/progress`

Animated progress bar section useful for displaying course or skill completion levels.

## ✅ Features

-   Optional title and description
-   Iterates over items with label and value
-   Animated progress bars using inline script
-   Styled with CSS variables to match global theme

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/education/progress/progress.html",
	"title": "Course Progress",
	"description": "Track your learning goals.",
	"items": [
		{ "label": "JavaScript", "value": 75 },
		{ "label": "CSS", "value": 50 }
	]
}
```

## 🧱 HTML Structure

```html
<div class="progress">
	{% if section.title %}
	<div class="progress__title">{{{ section.title }}}</div>
	{% endif %} {% if section.description %}
	<div class="progress__description">{{{ section.description }}}</div>
	{% endif %} {% for item in section.items %}
	<div class="progress__item">
		{% if item.label %}
		<div class="progress__label">{{{ item.label }}}</div>
		{% endif %}
		<div class="progress__track">
			<div
				class="progress__bar"
				data-progress="{{ item.value | default(0) }}"
			>
				<span class="progress__value">0%</span>
			</div>
		</div>
	</div>
	{% endfor %}
</div>
<script>
	document.addEventListener("DOMContentLoaded", () => {
		document.querySelectorAll(".progress__bar").forEach((bar) => {
			const target = parseInt(bar.dataset.progress, 10) || 0;
			let width = 0;
			const label = bar.querySelector(".progress__value");
			const interval = setInterval(() => {
				if (width >= target) {
					clearInterval(interval);
				} else {
					width += 1;
					bar.style.width = width + "%";
					label.textContent = width + "%";
				}
			}, 20);
		});
	});
</script>
```

---

## 🎨 Styling Notes

-   Uses `--c-primary-hover` for bar color and `--c-bg-item` for track background.
-   Width animation driven by JavaScript.
-   Responsive typography via media queries and `--bp-md` / `--bp-sm`.

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                           |
| ------------------------- | ------------------------------------- |
| `--ff-base`               | Base font family                      |
| `--ff-title`              | Font for section title                |
| `--font-size`             | Base font size                        |
| `--line-height`           | Line height for text                  |
| `--letter-spacing`        | Letter spacing for text               |
| `--margin-scale`          | Scales spacing between elements       |
| `--b-radius`              | Rounded corners for progress track    |
| `--transition`            | Animation timing for progress bars    |
| `--c-text-primary`        | Color for titles and labels           |
| `--c-text-body-secondary` | Color for description                 |
| `--c-bg-item`             | Background color of the track         |
| `--c-primary-hover`       | Color of the progress bar             |
| `--c-secondary`           | Color of progress value text          |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive typography |

---
