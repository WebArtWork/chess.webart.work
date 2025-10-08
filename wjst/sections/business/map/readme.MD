# 🗺️ Map `/sections/business/map`

Interactive map section that embeds a Google Map with a marker.
Optional title and description allow contextual messaging above the map.

## ✅ Features

-   Renders a Google Map centered on provided coordinates
-   Single marker highlighting the location
-   Optional title and description
-   Responsive height adjustments across breakpoints
-   Uses CSS variables for spacing, typography and colors

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/business/map/map.html",
	"lat": 50.4501,
	"lng": 30.5234,
	"zoom": 14,
	"apiKey": "GOOGLE_MAPS_API_KEY",
	"title": "Our Location",
	"description": "Find us on the map"
}
```

---

## 🧱 HTML Structure

```html
<div class="map">
	<div id="map" class="map__container"></div>

	{% if section.title %}
	<div class="map__title">{{{section.title}}}</div>
	{% endif %} {% if section.description %}
	<div class="map__description">{{{section.description}}}</div>
	{% endif %}
</div>
<script>
	function initMap() {
	        const position = { lat: {{{section.lat}}}, lng: {{{section.lng}}} };
	        const map = new google.maps.Map(document.getElementById('map'), {
	                zoom: {{{section.zoom}}},
	                center: position,
	        });
	        new google.maps.Marker({ position, map });
	}
</script>
<script
	src="https://maps.googleapis.com/maps/api/js?key={{{section.apiKey}}}&callback=initMap"
	async
	defer
></script>
```

---

## 🎨 Styling Notes

-   Map container uses `calc(... * var(--padding-scale))` for scalable height
-   Typography and spacing adapt via `--font-size`, `--line-height`, `--letter-spacing`, and `--margin-scale`
-   Title and description colors driven by `--c-text-primary` and `--c-text-body-secondary`
-   Responsive sizing controlled by `--bp-lg`, `--bp-md`, and `--bp-sm`

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable                        | Description                            |
| ------------------------------- | -------------------------------------- |
| `--padding-scale`               | Scales section padding and map height  |
| `--margin-scale`                | Controls spacing above/below text      |
| `--font-size`                   | Base font size for description         |
| `--line-height`                 | Line height for text elements          |
| `--letter-spacing`              | Letter spacing for title/description   |
| `--b-radius`                    | Rounds the map container corners       |
| `--ff-base`                     | Font for description text              |
| `--ff-title`                    | Font for title text                    |
| `--c-text-primary`              | Title text color                       |
| `--c-text-body-secondary`       | Description text color                 |
| `--bp-lg`, `--bp-md`, `--bp-sm` | Breakpoints for responsive adjustments |

---
