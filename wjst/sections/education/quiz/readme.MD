# 📝 Quiz `/sections/education/quiz`

Interactive quiz section that renders a question with multiple choice answers and instant feedback.

## ✅ Features

-   Renders a question and list of options
-   Checks selected answer on button click
-   Shows success/error message using theme colors
-   Responsive typography and spacing through CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/education/quiz/quiz.html",
	"question": "What is 2 + 2?",
	"options": ["3", "4", "5"],
	"answer": 1
}
```

## 🧱 HTML Structure

```html
<div class="quiz" data-answer="{{{section.answer}}}">
	<div class="quiz__question">{{{section.question}}}</div>
	<div class="quiz__options">
		{% for option in section.options %}
		<label class="quiz__option">
			<input type="radio" name="quiz-option" value="{{{loop.index0}}}" />
			<span>{{{option}}}</span>
		</label>
		{% endfor %}
	</div>
	<button type="button" class="quiz__submit">Check</button>
	<div class="quiz__result" aria-live="polite"></div>
</div>
```

---

## 🎨 Theme Variables Used

| Variable             | Description                              |
| -------------------- | ---------------------------------------- |
| `--padding-scale`    | Spacing inside the quiz container        |
| `--margin-scale`     | Spacing between elements                 |
| `--font-size`        | Base font size                           |
| `--line-height`      | Line height for text                     |
| `--ff-base`          | Body font                                |
| `--ff-title`         | Font for question                        |
| `--c-text-primary`   | Question text color                      |
| `--c-text-secondary` | Option text color                        |
| `--c-primary`        | Submit button background                 |
| `--c-primary-hover`  | Submit button hover background           |
| `--c-success`        | Result color when correct                |
| `--c-error`          | Result color when wrong                  |
| `--b-radius`         | Submit button radius                     |
| `--transition`       | Color/background transitions             |
| `--bp-md`, `--bp-sm` | Breakpoints for responsive question font |

---
