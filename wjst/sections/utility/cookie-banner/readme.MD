# 📂 Cookie Banner `/sections/utility/cookie-banner`

Displays a fixed banner to inform users about cookie usage and collect consent.

## ✅ Features

-   Sticky banner anchored to page bottom
-   Optional link to cookie policy
-   Accept button stores consent and hides banner

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/utility/cookie-banner/cookie-banner.html",
	"text": "We use cookies to improve your experience.",
	"button": "Accept",
	"link": {
		"url": "/privacy",
		"label": "Learn more"
	}
}
```

## 🧱 HTML Structure

```html
<div id="cookieBanner" class="cookie-banner">
	<div class="cookie-banner__content">
		<span class="cookie-banner__text">{{{section.text}}}</span>
		{% if section.link %}
		<a href="{{{section.link.url}}}" class="cookie-banner__link"
			>{{{section.link.label}}}</a
		>
		{% endif %}
	</div>
	<button class="cookie-banner__button" onclick="acceptCookies()">
		{{{section.button}}}
	</button>
</div>
```

---

## 🎨 Styling Notes

-   Uses CSS variables for colors, typography, spacing, and responsiveness
-   Banner hides by adding the `.hidden` class after consent

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                                           | Description           |
| -------------------------------------------------- | --------------------- |
| `--c-secondary`                                    | Banner background     |
| `--c-primary`, `--c-primary-hover`                 | Button colors         |
| `--c-text-primary`                                 | Text color            |
| `--font-size`, `--line-height`, `--letter-spacing` | Typography            |
| `--padding-scale`, `--margin-scale`                | Spacing               |
| `--b-radius`                                       | Button radius         |
| `--transition`                                     | Hover transitions     |
| `--bp-md`                                          | Responsive breakpoint |
