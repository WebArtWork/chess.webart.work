# 📂 Version Switcher `/sections/docs/version-switcher`

A small utility section that lets users switch between documentation versions.
Renders an optional label and a `<select>` populated from a list of versions.
When a new version is selected, the page redirects to the corresponding URL.

## ✅ Features

-   Optional label via `section.label`
-   Dynamically generates `<option>` items from `section.versions`
-   Redirects on change using the option's URL
-   Fully themeable with global CSS variables

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/docs/version-switcher/version-switcher.html",
	"label": "Version",
	"versions": [
		{ "label": "v1.0", "url": "/docs/v1" },
		{ "label": "v2.0", "url": "/docs/v2", "current": true }
	]
}
```

## 🧱 HTML Structure

```html
<div class="version-switcher">
	{% if section.label %}
	<label for="version-switcher__select" class="version-switcher__label"
		>{{{section.label}}}</label
	>
	{% endif %} {% if section.versions %}
	<select
		id="version-switcher__select"
		class="version-switcher__select"
		onchange="if(this.value){window.location.href=this.value}"
	>
		{% for v in section.versions %}
		<option value="{{{v.url}}}" {% if v.current %}selected{% endif %}>
			{{{v.label}}}
		</option>
		{% endfor %}
	</select>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing and sizing scale with `--padding-scale` and `--font-size`
-   Label and select use `--ff-base` and `--line-height`
-   Colors derive from `--c-text-primary`, `--c-text-secondary`, `--c-bg-item`, and `--c-border`
-   Focus state leverages `--c-primary` and `--c-primary-border`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                               |
| -------------------- | ----------------------------------------- |
| `--padding-scale`    | Scales gaps and select padding            |
| `--font-size`        | Base font size for label and select       |
| `--line-height`      | Line height for select                    |
| `--ff-base`          | Font family for label and select          |
| `--c-text-primary`   | Text color inside the select              |
| `--c-text-secondary` | Text color for the label                  |
| `--c-bg-item`        | Background color of the select            |
| `--c-border`         | Border color of the select                |
| `--b-radius`         | Border radius for the select              |
| `--transition`       | Transition for border and box-shadow      |
| `--c-primary`        | Focus border color                        |
| `--c-primary-border` | Focus outline color                       |
| `--bp-sm`            | Breakpoint for label font-size adjustment |
