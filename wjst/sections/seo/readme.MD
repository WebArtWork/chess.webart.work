# 🔍 SEO Sections – Manager Guide

This guide explains how the SEO-related sections work together to improve search visibility and link previews. Unlike the technical READMEs in each subfolder, this file is written for managers or content strategists who need to know when and why to use each section.

---

## Overview

| Section | Purpose | Manager tips |
| --- | --- | --- |
| **Article Schema** (`seo/article-schema`) | Embeds structured data for articles so search engines understand your content. | Keep publish dates, authors, and images accurate for better indexing. |
| **Breadcrumb Schema** (`seo/breadcrumb-schema`) | Defines the page trail that can appear in search results. | Reflect your site structure and keep names short. |
| **FAQ Schema** (`seo/faq-schema`) | Marks up common questions and answers for rich FAQ snippets. | Use only real FAQs and keep answers concise. |
| **Meta Preview** (`seo/meta-preview`) | Shows a mock search result with title, URL, and description. | Review copy before publishing; keep titles under ~60 characters. |
| **OG Preview** (`seo/og-preview`) | Previews how a link will look when shared on social media. | Use images that meet platform requirements (e.g. 1200×630). |
| **Product Schema** (`seo/product-schema`) | Adds structured data for product details. | Include price, availability, and brand for e‑commerce pages. |
| **Structured Data** (`seo/structured-data`) | Generic container for any custom JSON‑LD. | Use for advanced schemas not covered above. |

---

## Section-by-Section Manager Summary

### Article Schema
Outputs JSON-LD describing an article—title, dates, author, and publisher.
**Use on:** Blog posts or news articles.
**Frequency:** Always for publishable content.

### Breadcrumb Schema
Outputs a structured list of the page hierarchy so search engines can display breadcrumb links.
**Use on:** Any page with breadcrumb navigation.
**Frequency:** Consistent across the site.

### FAQ Schema
Injects FAQ structured data for common questions and answers.
**Use on:** FAQ pages or sections with Q&A blocks.
**Frequency:** When you want FAQ rich results.

### Meta Preview
Visual mock of how a page's metadata appears in search results.
**Use on:** During content review to refine titles and descriptions.
**Frequency:** Optional, helpful for editorial review.

### OG Preview
Displays a card showing how a page will render when shared on social media.
**Use on:** Share preview pages or CMS dashboards.
**Frequency:** Optional, useful for marketing teams.

### Product Schema
Provides structured data for products including price and availability.
**Use on:** Product detail pages.
**Frequency:** Always for e‑commerce items.

### Structured Data
General-purpose JSON-LD block for custom structured data.
**Use on:** Pages needing specialized schema not covered above.
**Frequency:** As needed.

---

## Putting It Together

- Combine relevant schemas on a page to enable rich results (e.g., Article + Breadcrumb + FAQ).
- Use Meta and OG previews internally to validate how a page will appear in search engines and social feeds before publishing.

