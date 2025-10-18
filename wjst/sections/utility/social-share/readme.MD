# 📂 Social Share `/sections/utility/social-share`

Utility section that renders a row of social network buttons for sharing the current page.
Each button links to the respective network's share endpoint.

## ✅ Features

-   Supports Facebook, LinkedIn and Telegram share links
-   Network list configurable via `section.networks`
-   Buttons resize and space responsively using CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/utility/social-share/social-share.html",
	"url": "https://example.com/page",
	"networks": ["facebook", "linkedin", "telegram"]
}
```

## 🧱 HTML Structure

```html
<div class="social-share">
	{% for network in section.networks %}
	<!-- Conditional anchors rendered per network -->
	{% endfor %}
</div>
```

---

## 🎨 Styling Notes

-   Uses `gap` and icon sizing scaled by `--margin-scale` and `--icon-size`
-   Hover state driven by `--transition`
-   Layout adjusts at `--bp-md` and `--bp-sm` breakpoints

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                              |
| -------------------- | ---------------------------------------- |
| `--icon-size`        | Base size for share icons                |
| `--margin-scale`     | Controls spacing between icons           |
| `--transition`       | Hover animation timing                   |
| `--bp-md`, `--bp-sm` | Responsive breakpoints for layout tweaks |
