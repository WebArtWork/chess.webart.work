# 📰 Article Schema `/sections/seo/article-schema`

Outputs [JSON-LD](https://json-ld.org/) markup for articles to improve SEO and social sharing.

## ✅ Features

-   Generates valid `Article` structured data
-   All fields mapped from section data
-   Hidden container styled with theme variables

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/seo/article-schema/article-schema.html",
	"headline": "Article title",
	"image": "https://example.com/cover.jpg",
	"datePublished": "2024-01-01",
	"dateModified": "2024-01-02",
	"author": "Jane Doe",
	"publisherName": "Example Inc",
	"publisherLogo": "https://example.com/logo.png",
	"url": "https://example.com/article"
}
```

## 🧱 HTML Structure

```html
<div class="article-schema">
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": "{{{section.headline}}}",
			"image": "{{{section.image}}}",
			"datePublished": "{{{section.datePublished}}}",
			"dateModified": "{{{section.dateModified}}}",
			"author": {
				"@type": "Person",
				"name": "{{{section.author}}}"
			},
			"publisher": {
				"@type": "Organization",
				"name": "{{{section.publisherName}}}",
				"logo": {
					"@type": "ImageObject",
					"url": "{{{section.publisherLogo}}}"
				}
			},
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "{{{section.url}}}"
			}
		}
	</script>
</div>
```

---

## 🎨 Styling Notes

-   `.article-schema` container is hidden by default
-   Uses `--font-size` and `--c-text-primary` for theming consistency

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable           | Description        |
| ------------------ | ------------------ |
| `--font-size`      | Base font size     |
| `--c-text-primary` | Primary text color |
