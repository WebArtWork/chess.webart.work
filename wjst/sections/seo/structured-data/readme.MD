# 📂 Structured Data `/sections/seo/structured-data`

Outputs a JSON-LD script block for injecting custom structured data.

## ✅ Features

-   Accepts raw JSON-LD input
-   Conditionally renders the script when data is provided
-   Non-visual section; no layout or styling required

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/seo/structured-data/structured-data.html",
	"data": "{ \"@context\": \"https://schema.org\", \"@type\": \"WebSite\" }"
}
```

## 🧱 HTML Structure

```html
{% if section.data %}
<script type="application/ld+json">
	{{{section.data}}}
</script>
{% endif %}
```

---

## 🎨 Styling Notes

-   This section has no visual output. The accompanying `_structured-data.scss` file is intentionally minimal for consistency.

---

## 🧩 Theme Variables Used (from `template.json`)

-   None
