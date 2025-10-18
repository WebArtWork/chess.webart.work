# 📒 Glossary `/sections/docs/glossary`

Glossary section for documentation pages. Renders a list of terms with definitions grouped alphabetically.

## ✅ Features

-   Optional section title
-   Automatic grouping by first letter
-   Responsive typography and spacing
-   Uses global CSS variables for colors, fonts, and breakpoints

## 🗰 Section Data Schema

```json
{
	"src": "/sections/docs/glossary/glossary.html",
	"title": "Glossary",
	"items": [
		{ "term": "API", "definition": "Application Programming Interface" },
		{ "term": "CLI", "definition": "Command Line Interface" }
	]
}
```

## 📦 HTML Structure

```html
<div class="glossary">
	<div class="glossary__title">Glossary</div>
	<div class="glossary__groups">
		<div class="glossary__group">
			<div class="glossary__letter">A</div>
			<div class="glossary__entry">
				<div class="glossary__term">API</div>
				<div class="glossary__definition">
					Application Programming Interface
				</div>
			</div>
		</div>
	</div>
</div>
```

## 🧩 Theme Variables Used

| Variable                        | Description                 |
| ------------------------------- | --------------------------- |
| `--padding-scale`               | Scales padding              |
| `--margin-scale`                | Controls margin             |
| `--ff-base`                     | Base font family            |
| `--ff-title`                    | Font for titles and letters |
| `--font-size`                   | Base font size              |
| `--line-height`                 | Line height                 |
| `--letter-spacing`              | Letter spacing              |
| `--c-text-primary`              | Primary text color          |
| `--c-text-body-secondary`       | Definition text color       |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Responsive breakpoints      |
