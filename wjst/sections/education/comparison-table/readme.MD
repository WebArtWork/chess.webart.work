# 📂 Comparison Table `/sections/education/comparison-table`

Display a feature comparison of courses or study options using a responsive table. Columns and rows are fully data-driven.

## ✅ Features

-   Dynamic headers and rows rendered conditionally
-   Responsive layout with horizontal scroll on small screens
-   Zebra striping for better readability
-   Theming via CSS variables for colors, fonts and spacing

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/education/comparison-table/comparison-table.html",
	"headers": ["Basic", "Pro", "Enterprise"],
	"rows": [
		{
			"feature": "Lessons",
			"values": ["10", "20", "30"]
		},
		{
			"feature": "Certificates",
			"values": ["No", "Yes", "Yes"]
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="comparison-table">
	<table class="comparison-table__table">
		{% if section.headers %}
		<thead>
			<tr>
				<th></th>
				{% for head in section.headers %}
				<th>{{{head}}}</th>
				{% endfor %}
			</tr>
		</thead>
		{% endif %} {% if section.rows %}
		<tbody>
			{% for row in section.rows %}
			<tr>
				<th>{{{row.feature}}}</th>
				{% for value in row.values %}
				<td>{{{value}}}</td>
				{% endfor %}
			</tr>
			{% endfor %}
		</tbody>
		{% endif %}
	</table>
</div>
```

---

## 🎨 Styling Notes

-   Padding and font sizing scale with `--padding-scale` and `--font-size`
-   Uses `--c-table-shadow` and `--c-table-striped` for visual hierarchy
-   Row headers use `--ff-title` for emphasis
-   Responsive font adjustment at `--bp-md`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable            | Description                                |
| ------------------- | ------------------------------------------ |
| `--padding-scale`   | Controls section padding                   |
| `--font-size`       | Base font size for table text              |
| `--line-height`     | Line height for cells                      |
| `--letter-spacing`  | Letter spacing for text                    |
| `--ff-base`         | Font for table body text                   |
| `--ff-title`        | Font for header cells                      |
| `--c-secondary`     | Header background color                    |
| `--c-text-primary`  | Text color for cells and headers           |
| `--c-border`        | Border color for table cells               |
| `--c-table-shadow`  | Shadow applied to the table wrapper        |
| `--c-table-striped` | Background color for odd table rows        |
| `--bp-md`           | Breakpoint for responsive font adjustments |

---
