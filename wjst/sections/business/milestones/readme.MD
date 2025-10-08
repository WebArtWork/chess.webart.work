# 📂 Milestones `/sections/business/milestones`

Responsive block for highlighting key company milestones. Renders an optional title, description, and a grid of milestone items containing year, label, and short text.

## ✅ Features

-   Optional section title and description
-   Milestone list with year, label, and description
-   Responsive grid layout with theming via CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/business/milestones/milestones.html",
	"title": "Company milestones",
	"description": "Our journey so far",
	"items": [
		{ "year": "2019", "title": "Founded", "text": "Company started" },
		{ "year": "2020", "title": "First product", "text": "Released v1" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="milestones">
	<div class="milestones__title">...</div>
	<div class="milestones__description">...</div>
	<ul class="milestones__items">
		<li class="milestones__item">
			<div class="milestones__year">...</div>
			<div class="milestones__label">...</div>
			<div class="milestones__text">...</div>
		</li>
	</ul>
</div>
```

---

## 🎨 Theme Variables Used

| Variable                  | Description                           |
| ------------------------- | ------------------------------------- |
| `--ff-base`               | Base font family                      |
| `--ff-title`              | Title font family                     |
| `--font-size`             | Base font size                        |
| `--line-height`           | Line height                           |
| `--letter-spacing`        | Letter spacing                        |
| `--padding-scale`         | Controls item and grid spacing        |
| `--margin-scale`          | Controls margins                      |
| `--b-radius`              | Border radius for items               |
| `--c-text-primary`        | Title and year color                  |
| `--c-text-secondary`      | Label color                           |
| `--c-text-body-secondary` | Description and text color            |
| `--c-bg-item`             | Background color for milestone items  |
| `--transition`            | Transition for text color             |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive typography |
