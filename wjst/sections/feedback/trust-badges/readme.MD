# 📂 Trust Badges `/sections/feedback/trust-badges`

Displays a row of trust badges or certifications to build credibility. Each badge can optionally link to an external page.

## ✅ Features

-   Renders a list of trust badges
-   Optional links per badge
-   Responsive layout with wrapping and spacing
-   Uses global CSS variables for theming

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/feedback/trust-badges/trust-badges.html",
	"badges": [
		{ "img": "/img/badges/secure.svg", "alt": "Secure" },
		{
			"href": "https://example.com",
			"img": "/img/badges/ssl.svg",
			"alt": "SSL"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="trust-badges">
	{% for badge in section.badges %}
	<div class="trust-badges__item">
		{% if badge.href %}
		<a href="{{{badge.href}}}"
			><img src="{{{badge.img}}}" alt="{{{badge.alt}}}"
		/></a>
		{% else %}
		<img src="{{{badge.img}}}" alt="{{{badge.alt}}}" />
		{% endif %}
	</div>
	{% endfor %}
</div>
```

---

## 🎨 Styling Notes

-   Uses flexbox to center and wrap badges
-   Spacing scales with `--margin-scale` and `--padding-scale`
-   Badge containers leverage `--c-border`, `--c-bg-item`, `--b-radius`
-   Grayscale effect removed on hover using `--transition`
-   Badge height derives from `--icon-size` for consistent sizing

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                              |
| -------------------- | ---------------------------------------- |
| `--margin-scale`     | Controls gap between badges              |
| `--padding-scale`    | Padding around each badge                |
| `--c-border`         | Border color of badge container          |
| `--c-bg-item`        | Background color for badge container     |
| `--b-radius`         | Rounds badge container corners           |
| `--icon-size`        | Base size used for badge height          |
| `--transition`       | Transition for hover grayscale effect    |
| `--bp-md`, `--bp-sm` | Breakpoints adjusting responsive spacing |

---
