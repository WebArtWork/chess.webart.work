# 📝 Survey `/sections/forms/survey`

Reusable survey form section that renders dynamic questions with multiple input types. Supports radios, checkboxes, selects, and text inputs with optional title and description.

## ✅ Features

-   Configurable question list with multiple field types
-   Optional section title, description and submit text
-   Uses CSS variables for colors, spacing, and typography
-   Responsive layout with theming via global design tokens

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/forms/survey/survey.html",
	"title": "Survey title",
	"description": "Short optional description",
	"submitText": "Send",
	"questions": [
		{
			"type": "radio",
			"name": "experience",
			"label": "How was your experience?",
			"options": [
				{ "label": "Great", "value": "great" },
				{ "label": "Average", "value": "average" },
				{ "label": "Poor", "value": "poor" }
			]
		},
		{
			"type": "text",
			"name": "email",
			"label": "Email address",
			"placeholder": "you@example.com"
		}
	]
}
```

## 🧱 HTML Structure

```html
<form class="survey">
	{% if section.title %}
	<div class="survey__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="survey__description">{{{section.description}}}</div>
	{% endif %} {% if section.questions %}
	<div class="survey__questions">
		{% for question in section.questions %}
		<div class="survey__question">
			{% if question.label %}
			<label class="survey__label" for="{{question.name}}"
				>{{{question.label}}}</label
			>
			{% endif %} {% if question.type == 'text' %}
			<input
				class="survey__input"
				type="text"
				id="{{question.name}}"
				name="{{question.name}}"
				placeholder="{{question.placeholder}}"
			/>
			{% endif %} {% if question.type == 'textarea' %}
			<textarea
				class="survey__textarea"
				id="{{question.name}}"
				name="{{question.name}}"
				placeholder="{{question.placeholder}}"
			></textarea>
			{% endif %} {% if question.type == 'select' %}
			<select
				class="survey__select"
				id="{{question.name}}"
				name="{{question.name}}"
			>
				{% for option in question.options %}
				<option value="{{option.value}}">{{{option.label}}}</option>
				{% endfor %}
			</select>
			{% endif %} {% if question.type == 'radio' %} {% for option in
			question.options %}
			<label class="survey__option">
				<input
					class="survey__radio"
					type="radio"
					name="{{question.name}}"
					value="{{option.value}}"
				/>
				<span>{{{option.label}}}</span>
			</label>
			{% endfor %} {% endif %} {% if question.type == 'checkbox' %} {% for
			option in question.options %}
			<label class="survey__option">
				<input
					class="survey__checkbox"
					type="checkbox"
					name="{{question.name}}"
					value="{{option.value}}"
				/>
				<span>{{{option.label}}}</span>
			</label>
			{% endfor %} {% endif %}
		</div>
		{% endfor %}
	</div>
	{% endif %}

	<button class="survey__submit" type="submit">
		{{{section.submitText || 'Submit'}}}
	</button>
</form>
```

---

## 🎨 Styling Notes

-   Uses `--padding-scale` and `--margin-scale` for spacing
-   Inputs and options inherit typography from `--ff-base` and `--font-size`
-   Borders and backgrounds rely on `--c-border` and `--c-body`
-   Button colors use `--c-primary` and `--c-primary-hover`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `--padding-scale`         | Scales padding in container and inputs          |
| `--margin-scale`          | Controls vertical spacing between elements      |
| `--ff-base`               | Base font for form elements                     |
| `--ff-title`              | Font for optional title                         |
| `--font-size`             | Base font size for inputs and description       |
| `--line-height`           | Line height for text elements                   |
| `--c-text-primary`        | Text color for title and labels                 |
| `--c-text-body-secondary` | Color for description text                      |
| `--c-bg-item`             | Background of form container                    |
| `--c-body`                | Background of inputs                            |
| `--c-border`              | Border color for inputs                         |
| `--c-primary`             | Submit button background                        |
| `--c-primary-hover`       | Hover state for submit button                   |
| `--b-radius`              | Rounding for container and inputs               |
| `--transition`            | Transition for button hover                     |
| `--bp-md`, `--bp-sm`      | Used in media queries for responsive title size |

---
