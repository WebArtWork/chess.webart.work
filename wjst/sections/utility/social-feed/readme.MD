# 📂 Social Feed `/sections/utility/social-feed`

Displays a list of short posts from social networks or user activity feeds.
Each item shows an avatar, basic metadata and the post text.

## ✅ Features

-   Iterates over provided feed items
-   Optional handle and timestamp for each post
-   Responsive layout using flexbox
-   Styled via CSS variables for easy theming

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/utility/social-feed/social-feed.html",
	"items": [
		{
			"avatar": "/img/avatar.jpg",
			"name": "User Name",
			"handle": "@username",
			"time": "2h",
			"text": "Post content goes here"
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="social-feed">
	{% for item in section.items %}
	<div class="social-feed__item">
		<div class="social-feed__avatar">
			<img src="{{{item.avatar}}}" alt="{{{item.name}}}" />
		</div>
		<div class="social-feed__content">
			<div class="social-feed__header">
				<span class="social-feed__name">{{{item.name}}}</span>
				{% if item.handle %}<span class="social-feed__handle"
					>{{{item.handle}}}</span
				>{% endif %} {% if item.time %}<span class="social-feed__time"
					>{{{item.time}}}</span
				>{% endif %}
			</div>
			<div class="social-feed__text">{{{item.text}}}</div>
		</div>
	</div>
	{% endfor %}
</div>
```

---

## 🎨 Theme Variables Used (from `template.json`)

| Variable                  | Description                            |
| ------------------------- | -------------------------------------- |
| `--padding-scale`         | Controls padding inside feed items     |
| `--margin-scale`          | Controls gaps between feed items       |
| `--font-size`             | Base font size for text                |
| `--line-height`           | Line height for text                   |
| `--letter-spacing`        | Letter spacing applied to post text    |
| `--ff-base`               | Font family for body text              |
| `--ff-title`              | Font family for names                  |
| `--c-text-primary`        | Name and post text color               |
| `--c-text-body-secondary` | Handle and timestamp color             |
| `--c-border`              | Border color for feed items            |
| `--c-bg-item`             | Background color for feed items        |
| `--b-radius`              | Border radius of items and avatar      |
| `--bp-md`, `--bp-sm`      | Breakpoints for responsive adjustments |

---
