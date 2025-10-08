# 📂 Partners `/sections/business/partners`

Display a responsive grid of partner logos with an optional title.

## ✅ Features

-   Optional title
-   Grid of partner logos with optional links
-   Responsive layout using flexbox
-   Themed via CSS variables

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/business/partners/partners.html",
	"title": "Our Partners",
	"items": [
		{
			"img": "/img/partner1.svg",
			"alt": "Partner 1",
			"url": "https://partner1.com"
		},
		{ "img": "/img/partner2.svg", "alt": "Partner 2" }
	]
}
```

## 🧱 HTML Structure

```html
<div class="partners">
	{% if section.title %}
	<div class="partners__title">{{{section.title}}}</div>
	{% endif %} {% if section.items %}
	<ul class="partners__items">
		{% for item in section.items %}
		<li class="partners__item">
			{% if item.url %}
			<a href="{{{item.url}}}" target="_blank" rel="noopener">
				<img src="{{{item.img}}}" alt="{{{item.alt}}}" />
			</a>
			{% else %}
			<img src="{{{item.img}}}" alt="{{{item.alt}}}" />
			{% endif %}
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable                        | Description                        |
| ------------------------------- | ---------------------------------- |
| `--ff-base`                     | Base font for section              |
| `--ff-title`                    | Font for the optional title        |
| `--padding-scale`               | Scales section padding             |
| `--margin-scale`                | Controls spacing between items     |
| `--letter-spacing`              | Applied to title                   |
| `--line-height`                 | Applied to title                   |
| `--c-text-primary`              | Title color                        |
| `--c-bg-item`                   | Background color for partner items |
| `--c-border`                    | Default border color               |
| `--c-primary-border`            | Hover border color                 |
| `--b-radius`                    | Item border radius                 |
| `--transition`                  | Hover transition                   |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Responsive breakpoints             |
