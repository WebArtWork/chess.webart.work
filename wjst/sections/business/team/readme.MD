# 📂 Team `/sections/business/team`

Reusable team section for presenting groups of people with avatars, names, and optional social links.

## ✅ Features

-   Optional section title and description
-   Supports multiple groups of team members
-   Member cards include image, name, username, and social links
-   Responsive layout using flexbox and CSS variables

---

## 🧳 Section Data Schema

```json
{
	"src": "/sections/business/team/team.html",
	"title": "Our Team",
	"description": "Meet the people behind the product",
	"teams": [
		{
			"name": "Leadership",
			"users": [
				{
					"img": "/img/avatar.png",
					"name": "Jane Doe",
					"username": "jdoe",
					"socials": [
						{
							"href": "https://github.com/jdoe",
							"img": "/img/git.svg"
						}
					]
				}
			]
		}
	]
}
```

## 🧱 HTML Structure

```html
<div class="team">
	<div class="team__group">
		<div class="team__group-name">Group</div>
		<div class="team__members">
			<div class="team__member">
				<div class="team__avatar"><img src="" alt="" /></div>
				<div class="team__name">Name</div>
				<div class="team__username">@username</div>
				<div class="team__socials">
					<a href=""><img src="" alt="" /></a>
				</div>
			</div>
		</div>
	</div>
</div>
```

---

## 🎨 Styling Notes

-   Spacing scales with `--padding-scale` and `--margin-scale`
-   Typography uses `--ff-title` and `--ff-base`
-   Avatar images are circular and responsive
-   Social icons use `--icon-size`

---

## 🤍 Theme Variables Used (from `template.json`)

| Variable                  | Description               |
| ------------------------- | ------------------------- |
| `--padding-scale`         | Controls vertical spacing |
| `--margin-scale`          | Controls gaps and margins |
| `--font-size`             | Base font size            |
| `--line-height`           | Text line height          |
| `--letter-spacing`        | Letter spacing for titles |
| `--ff-base`               | Font for body text        |
| `--ff-title`              | Font for titles           |
| `--c-text-primary`        | Primary text color        |
| `--c-text-secondary`      | Secondary text color      |
| `--c-text-body-secondary` | Secondary body text       |
| `--icon-size`             | Size for social icons     |
| `--bp-md`, `--bp-sm`      | Responsive breakpoints    |
