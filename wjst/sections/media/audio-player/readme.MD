# 📂 Audio Player `/sections/media/audio-player`

Audio player section that embeds an HTML5 audio element with optional title and description. Useful for podcasts, music samples, or any inline audio content.

## ✅ Features

-   Plays audio from a provided source
-   Optional title and description (conditionally rendered)
-   Uses native HTML5 controls
-   Responsive layout leveraging CSS variables
-   Centralized theming via global design tokens

---

## 🧾 Section Data Schema

This section expects the following data structure passed via section

```json
{
	"src": "/sections/media/audio-player/audio-player.html",
	"audio": "/audio/sample.mp3",
	"title": "Optional audio title",
	"description": "Optional supporting text",
	"autoplay": false,
	"loop": false
}
```

## 🧱 HTML Structure

```html
<div class="audio-player">
	<audio
		class="audio-player__audio"
		controls
		{%
		if
		section.autoplay
		%}autoplay{%
		endif
		%}
		{%
		if
		section.loop
		%}loop{%
		endif
		%}
	>
		<source src="{{{section.audio}}}" />
		Your browser does not support the audio element.
	</audio>

	{% if section.title %}
	<div class="audio-player__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="audio-player__description">{{{section.description}}}</div>
	{% endif %}
</div>
```

---

## 🎨 Styling Notes

-   Audio element is centered with `max-width` and rounded corners
-   Typography and spacing scale via `--font-size`, `--padding-scale`, and `--margin-scale`
-   Title and description colors inherit from theme variables
-   Responsive adjustments at defined breakpoints

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `--padding-scale`               | Scales padding values in section                   |
| `--margin-scale`                | Controls margin spacing                            |
| `--font-size`                   | Base font size for description                     |
| `--line-height`                 | Line height for title and description              |
| `--letter-spacing`              | Applied to title and description                   |
| `--b-radius`                    | Rounds the audio element                           |
| `--ff-base`                     | Font for description text                          |
| `--ff-title`                    | Font for title text                                |
| `--c-text-primary`              | Title text color                                   |
| `--c-text-body-secondary`       | Description text color                             |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Used in media queries to adjust sizes responsively |

---
