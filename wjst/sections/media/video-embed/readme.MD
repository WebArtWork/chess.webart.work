# \ud83d\udcbc Video Embed `/sections/media/video-embed`

Responsive video embed section that renders an HTML5 `<video>` element with optional title and description. Useful for showcasing clips, product demos, or any inline video content.

## \u2705 Features

-   Plays video from a provided source
-   Optional title and description (conditionally rendered)
-   Supports `autoplay`, `loop`, `muted`, and `poster` attributes
-   Responsive layout using CSS variables and design tokens

---

## \ud83d\udddf\ufe0f Section Data Schema

This section expects the following data structure passed via `section`

```json
{
	"src": "/sections/media/video-embed/video-embed.html",
	"video": "/video/sample.mp4",
	"title": "Optional video title",
	"description": "Optional supporting text",
	"autoplay": false,
	"loop": false,
	"muted": false,
	"poster": "/img/poster.jpg"
}
```

## \ud83d\uddf1\ufe0f HTML Structure

```html
<div class="video-embed">
	<video
		class="video-embed__video"
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
		{%
		if
		section.muted
		%}muted{%
		endif
		%}
		{%
		if
		section.poster
		%}poster="{{{section.poster}}}"
		{%
		endif
		%}
	>
		<source src="{{{section.video}}}" />
		Your browser does not support the video tag.
	</video>

	{% if section.title %}
	<div class="video-embed__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="video-embed__description">{{{section.description}}}</div>
	{% endif %}
</div>
```
