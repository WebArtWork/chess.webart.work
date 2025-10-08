# 📂 Progress Bar `/sections/utility/progress-bar`

Displays a simple progress bar to represent completion or loading state. Supports an optional label and configurable value.

## ✅ Features

-   Dynamic width based on `value` and `max`
-   Optional label rendered below the bar
-   Theme-aware styling using global CSS variables
-   Responsive label sizing

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/utility/progress-bar/progress-bar.html",
	"value": 40,
	"max": 100,
	"label": "Uploading..."
}
```

## 🧱 HTML Structure

```html
{% set value = section.value or 0 %} {% set max = section.max or 100 %} {% set
percent = (value / max) * 100 %}
<div class="progress-bar">
	<div class="progress-bar__bar">
		<div class="progress-bar__progress" style="width: {{{percent}}}%"></div>
	</div>
	{% if section.label %}
	<div class="progress-bar__label">{{{section.label}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Bar background uses `--c-bg-item`; fill uses `--c-primary`
-   Width of fill calculated inline via percentage
-   Label appears only when provided in data
-   Label font size scales below `--bp-md`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable           | Description                          |
| ------------------ | ------------------------------------ |
| `--ff-base`        | Font family for the section          |
| `--c-bg-item`      | Background color for the empty bar   |
| `--c-primary`      | Fill color of the progress indicator |
| `--b-radius`       | Rounding for the bar                 |
| `--transition`     | Progress animation                   |
| `--margin-scale`   | Spacing above the label              |
| `--font-size`      | Base font size for label             |
| `--line-height`    | Line height for label                |
| `--letter-spacing` | Letter spacing for label             |
| `--c-text-primary` | Label text color                     |
| `--bp-md`          | Breakpoint for responsive label size |

---
