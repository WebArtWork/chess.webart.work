# 📂 Upload `/sections/forms/upload`

File upload form with progress indicator and status messaging.

## ✅ Features

-   Custom file input with upload button
-   Progress bar showing upload percentage
-   Success and error feedback messages
-   Upload URL configurable via section data
-   Uses CSS variables for theming and responsiveness

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/forms/upload/upload.html",
	"action": "/api/upload",
	"buttonLabel": "Upload"
}
```

## 🧱 HTML Structure

```html
<div class="upload">
	<input class="upload__input" type="file" id="uploadInput" />
	<button class="upload__button" id="uploadButton">
		{{{section.buttonLabel || 'Upload'}}}
	</button>
	<div class="upload__progress" id="uploadProgress"></div>
	<div class="upload__status" id="uploadStatus"></div>
</div>
<script>
	(function () {
		// upload logic...
	})();
</script>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   `--b-radius` rounds inputs, button and progress bar
-   Button and progress color driven by `--c-primary`
-   Status colors use `--c-success` and `--c-error`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                    |
| -------------------- | ------------------------------ |
| `--ff-base`          | Base font family               |
| `--padding-scale`    | Vertical padding units         |
| `--margin-scale`     | Spacing between elements       |
| `--c-border`         | Input border color             |
| `--c-bg-item`        | Input background color         |
| `--c-text-primary`   | Input text color               |
| `--c-primary`        | Button and progress background |
| `--c-primary-hover`  | Button hover color             |
| `--b-radius`         | Rounding for inputs and bars   |
| `--transition`       | Transition for interactions    |
| `--c-text-secondary` | Status default color           |
| `--c-success`        | Success status color           |
| `--c-error`          | Error status color             |
| `--font-size`        | Base font size for status      |
| `--line-height`      | Line height for status         |
