# 📂 Breadcrumb Schema `/sections/seo/breadcrumb-schema`

Outputs [JSON-LD BreadcrumbList](https://schema.org/BreadcrumbList) markup based on the provided items for improved SEO.

## ✅ Features

-   Generates structured data for breadcrumbs.
-   Each item includes its position automatically.
-   Hidden from view to avoid affecting layout.

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/seo/breadcrumb-schema/breadcrumb-schema.html",
	"items": [
		{ "name": "Home", "url": "/" },
		{ "name": "Blog", "url": "/blog" },
		{ "name": "Post" }
	]
}
```

## 🧱 HTML Structure

```html
{% if section.items %}
<script type="application/ld+json">
	{
	  "@context": "https://schema.org",
	  "@type": "BreadcrumbList",
	  "itemListElement": [
	    {% for crumb in section.items %}
	    {
	      "@type": "ListItem",
	      "position": {{ loop.index }},
	      "name": "{{{crumb.name}}}",{% if crumb.url %}
	      "item": "{{{crumb.url}}}"{% endif %}
	    }{% if not loop.last %},{% endif %}
	    {% endfor %}
	  ]
	}
</script>
{% endif %}
```

---

## 🎨 Styling Notes

-   `.breadcrumb-schema` is hidden using `display: none;`.
-   Leverages global CSS variables if extended in the future.
