# 📂 Blog Comments `/sections/blog/comments`

Reusable comments block for blog posts. Renders a list of comments with author, date, text and optional avatar. Supports one level of nested replies.

## ✅ Features

-   Optional section title
-   Displays avatar, author, date and text
-   Handles nested replies
-   Uses CSS variables for typography, colors and spacing

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/blog/comments/comments.html",
	"title": "Comments",
	"items": [
		{
			"avatar": "/img/avatar.png",
			"author": "Jane Doe",
			"date": "2024-08-30",
			"text": "This is a comment",
			"replies": [
				{
					"avatar": "/img/avatar2.png",
					"author": "John Doe",
					"date": "2024-08-31",
					"text": "A reply"
				}
			]
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="comments">
	{% if section.title %}
	<div class="comments__title">{{{section.title}}}</div>
	{% endif %} {% if section.items %}
	<ul class="comments__list">
		{% for comment in section.items %}
		<li class="comments__item">
			{% if comment.avatar %}
			<img src="{{{comment.avatar}}}" alt="" class="comments__avatar" />
			{% endif %}
			<div class="comments__body">
				{% if comment.author %}
				<div class="comments__author">{{{comment.author}}}</div>
				{% endif %} {% if comment.date %}
				<div class="comments__date">{{{comment.date}}}</div>
				{% endif %} {% if comment.text %}
				<div class="comments__text">{{{comment.text}}}</div>
				{% endif %} {% if comment.replies %}
				<ul class="comments__replies">
					{% for reply in comment.replies %}
					<li class="comments__item">
						{% if reply.avatar %}
						<img
							src="{{{reply.avatar}}}"
							alt=""
							class="comments__avatar"
						/>
						{% endif %}
						<div class="comments__body">
							{% if reply.author %}
							<div class="comments__author">
								{{{reply.author}}}
							</div>
							{% endif %} {% if reply.date %}
							<div class="comments__date">{{{reply.date}}}</div>
							{% endif %} {% if reply.text %}
							<div class="comments__text">{{{reply.text}}}</div>
							{% endif %}
						</div>
					</li>
					{% endfor %}
				</ul>
				{% endif %}
			</div>
		</li>
		{% endfor %}
	</ul>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`.
-   `comments__avatar` defaults to 40px and shrinks on small devices.
-   Typography derives from `--ff-base` and `--ff-title`.
-   Colors use `--c-text-primary` and `--c-text-body-secondary`.

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                  | Description                              |
| ------------------------- | ---------------------------------------- |
| `--padding-scale`         | Scales padding inside the section        |
| `--margin-scale`          | Controls spacing between comments        |
| `--ff-base`               | Font for comment text                    |
| `--ff-title`              | Font for section title                   |
| `--font-size`             | Base font size for text                  |
| `--line-height`           | Line height for comment text             |
| `--letter-spacing`        | Letter spacing for comment text          |
| `--c-text-primary`        | Color for titles and author names        |
| `--c-text-body-secondary` | Color for dates and comment body         |
| `--bp-sm`                 | Breakpoint for mobile layout adjustments |

```

```
