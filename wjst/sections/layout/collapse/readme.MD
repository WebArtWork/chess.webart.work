# 📂 Collapse `/sections/layout/collapse`

Single collapsible container with a clickable header that reveals or hides content.

## ✅ Features

-   Toggle content visibility with smooth height animation
-   Arrow icon rotates to indicate state
-   Respects global theming via CSS variables

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/layout/collapse/collapse.html",
	"title": "Header text",
	"content": "<p>Collapsible content</p>",
	"open": false
}
```

## 🧱 HTML Structure

```html
<div class="collapse">
	<button
		class="collapse__header{% if section.open %} collapse__header--open{% endif %}"
	>
		<div class="collapse__title">{{{section.title}}}</div>
		<div class="collapse__arrow">...</div>
	</button>
	<div
		class="collapse__body"
		{%
		if
		section.open
		%}
		style="max-height: fit-content"
		{%
		endif
		%}
	>
		{{{section.content}}}
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Uses `--transition` for smooth animations
-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Header and body colors derive from `--c-bg-item` and `--c-text-primary`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable            | Description                    |
| ------------------- | ------------------------------ |
| `--c-primary-hover` | Border and arrow color         |
| `--c-bg-item`       | Background for header and body |
| `--c-text-primary`  | Text color                     |
| `--padding-scale`   | Adjusts section padding        |
| `--margin-scale`    | Adjusts paragraph margins      |
| `--b-radius`        | Rounds container corners       |
| `--ff-base`         | Body font family               |
| `--ff-title`        | Header font family             |
| `--transition`      | Animation duration and easing  |
