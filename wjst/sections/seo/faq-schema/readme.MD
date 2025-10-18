# 📂 FAQ Schema `/sections/seo/faq-schema`

Embeds JSON-LD structured data for Frequently Asked Questions.
Improves SEO by helping search engines understand Q&A content.

## ✅ Features

-   Generates valid `FAQPage` schema
-   Data-driven: questions and answers from `section.items`
-   No visual output – purely for search engine indexing

---

## 🧾 Section Data Schema

This section expects the following structure passed via `section`:

```json
{
	"src": "/sections/seo/faq-schema/faq-schema.html",
	"items": [
		{
			"question": "What is your return policy?",
			"answer": "You can return any item within 30 days of purchase."
		},
		{
			"question": "Do you ship internationally?",
			"answer": "Yes, we ship to most countries worldwide."
		}
	]
}
```

## 🧱 HTML Structure

```html
{% if section.items %}
<script type="application/ld+json">
	{
	  "@context": "https://schema.org",
	  "@type": "FAQPage",
	  "mainEntity": [
	    {% for item in section.items %}
	    {
	      "@type": "Question",
	      "name": "{{{item.question}}}",
	      "acceptedAnswer": {
	        "@type": "Answer",
	        "text": "{{{item.answer}}}"
	      }
	    }{% if not loop.last %},{% endif %}
	    {% endfor %}
	  ]
	}
</script>
{% endif %}
```

---

## 🎨 Styling Notes

-   This section outputs only a `<script>` tag and has no visible UI.
-   `_faq-schema.scss` is included for consistency but contains no styles.

---

## 🧩 Theme Variables Used (from `template.json`)

This section does not consume any theme variables.

---
