# 📂 Multistep Form `/sections/forms/multistep`

Multi-step form with progress indicators and navigation buttons. Useful for collecting information in smaller chunks.

## ✅ Features

-   Three-step form with first name and email fields
-   Progress dots highlight current step
-   Previous/Next controls with submit on final step
-   Uses CSS variables for spacing, colors, fonts and responsiveness

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/forms/multistep/multistep.html"
}
```

## 🧱 HTML Structure

```html
<form class="multistep" id="multistep-form">
	<!-- progress dots -->
	<div class="multistep__progress">...</div>
	<!-- steps -->
	<div class="multistep__step multistep__step--active">...</div>
	<!-- navigation buttons -->
	<div class="multistep__buttons">...</div>
</form>
```

---

## 🎨 Styling Notes

-   Layout centered with max-width and uses `--padding-scale` for spacing
-   Buttons and dots react to `--c-primary` and `--c-primary-hover`
-   Form inputs use global typography and color tokens

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                                   |
| -------------------- | --------------------------------------------- |
| `--c-bg-item`        | Form container background                     |
| `--padding-scale`    | Scales internal padding                       |
| `--b-radius`         | Rounds container, buttons and inputs          |
| `--ff-base`          | Font family for text                          |
| `--c-text-primary`   | Base text color                               |
| `--margin-scale`     | Controls spacing between elements             |
| `--c-border`         | Input border color                            |
| `--c-primary`        | Primary button color and active dot           |
| `--c-primary-hover`  | Hover color for buttons                       |
| `--c-secondary`      | Previous button background                    |
| `--c-text-secondary` | Input text color                              |
| `--c-body`           | Input background                              |
| `--transition`       | Transition timing                             |
| `--bp-md`            | Media query breakpoint for responsive padding |
