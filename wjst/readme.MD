# waw template project

This project is based on waw framework, build by waw template and can be easily hosted on github pages or waw back-end.

## Requirements

You will need to install [Node.js](https://nodejs.org/en) and waw globally

```sh
npm i -g waw
```

## Development

To start coding, you can simply run command

```sh
waw
```

## Production github pages

If you wanna use github domain, you simply have to replace prefix into github repo name. If you will configure a custom domain, you will need to add `"base": "/"` in `config.json` file.

# Sections

## Content

Core building blocks of public websites focused on textual and informational presentation.

### Hero

A large section usually at the top of a page with a headline, subheadline, and call-to-action button.

### Feature List

Showcases key product or service features in a structured layout, often with icons or short descriptions.

### Text Block

Simple text section with a heading and paragraph. Used for articles or explanatory content.

### Two-Column Text

Splits content into two text columns, ideal for comparing or organizing information side-by-side.

### Media + Text

Combines an image or video with supporting text, usually aligned side-by-side.

### Accordion

Expandable/collapsible panels often used for FAQs or grouped information.

### Callout Box

Highlights an important message or quote with styled emphasis.

### Testimonial

Customer quote or endorsement, often paired with name and avatar.

### Timeline

Visual layout of steps, events, or milestones in chronological order.

### Statistics

Showcase key metrics using bold numbers with labels (e.g., "1M+ users").

### Code Block

Formatted section for displaying code snippets, used mostly in docs.

### Markdown

Renders markdown content inside any component or section.

---

## Media

Visual content sections for displaying imagery, videos, or interactive visuals.

### Image

Single responsive image with optional caption.

### Gallery

Grid of multiple images, optionally with lightbox on click.

### Slider

Carousel with images, text, or mixed content, swipeable or auto-playing.

### Lightbox

Click-to-expand image viewer with overlay.

### Video Embed

Embed a video from YouTube, Vimeo, or custom source.

### Audio Player

Mini player to stream audio (e.g., podcast, track).

### Image + Caption

Image paired with a styled caption underneath or on hover.

### Animated Banner

Section with animated visual (e.g., GIF, WebP, Lottie animation).

---

## Call to Action

Sections designed to drive user interaction or conversions.

### Button Group

Multiple call-to-action buttons (primary, secondary, etc.).

### Banner

Promotional strip with text and CTA, often placed mid-page or at bottom.

### Promo Section

Marketing-focused layout highlighting a specific deal or feature.

### Countdown

Urgency-inducing timer for limited offers or launches.

### Sticky Footer

Persistent CTA or promo visible at the bottom of the screen.

### Exit Modal

Modal popup triggered on page exit or scroll, used for offers or signup prompts.

---

## Navigation

Interactive elements that help users browse content or jump to sections.

### Navbar

Top navigation bar with links, logo, and optional dropdowns.

### Mega Menu

Expanded dropdown menu used for complex navigation structures.

### Breadcrumbs

Clickable trail showing the current page's hierarchy.

### Sidebar

Vertical nav for docs or multi-page layouts.

### Table of Contents

Auto-generated list of headings/anchors on a page, usually for docs.

### Pagination

Navigation for multi-page content (e.g., blog index, product pages).

### Anchor Links

In-page links that scroll to a section smoothly.

### Scroll-to-Top

Floating button to return to top of page.

---

## E-commerce

Essential sections for showcasing products and allowing transactions.

### Product Card

Small card with product image, title, price, and actions.

### Product Detail

Full page or large component with in-depth product info.

### Price

Displays price, discount, and currency info in various formats.

### Variant Selector

Dropdowns or swatches for selecting product variants (size, color, etc.).

### Add to Cart

Button or block for adding an item to the cart.

### Star Rating

Visual representation of product reviews.

### Review Section

Displays user-submitted reviews or ratings.

### Product Grid

Grid layout of multiple products.

### Stock Indicator

Visual cue showing whether a product is in stock, low stock, or out.

### Discount Badge

Badge highlighting sale or promo (e.g., “-20%”).

### Payment Logos

Logos of accepted payment methods (Visa, PayPal, etc.).

---

## Layout

Utility sections that define structure, spacing, and display behavior.

### Grid

Multi-column grid layout used for content alignment.

### Container

Responsive wrapper with max-width and padding.

### Spacer

Blank space element for controlling vertical spacing.

### Divider

Horizontal line or visual separator.

### Background

Wrapper with image, color, or gradient background.

### Sticky Section

A section or element that remains fixed on scroll.

### Tabs

Switchable content panes under labeled tabs.

### Collapse

Expandable content (like a mini accordion).

### Scroll Area

Scrollable container with styled overflow behavior.

### Responsive Visibility

Utility to show/hide sections on specific screen sizes.

---

## Feedback

Showcase user experiences or build social proof.

### Testimonial Block

Multiple testimonials in a structured layout.

### Review Carousel

Scrollable reviews with text, stars, and author.

### Quote

Styled quote with optional avatar or name.

### Press Logos

Logos of publications or media that featured the brand.

### Trust Badges

Security or quality trust markers (SSL, "Verified", etc.).

---

## Documentation

Components specifically for documentation or knowledge base sites.

### Sidebar

Docs-specific nav, highlighting current page/section.

### Page Layout

Doc-friendly layout with title, content, TOC, and nav.

### Code Snippet

Stylized, copyable code blocks with optional language highlight.

### API Layout

Special layout for endpoint documentation with parameters and responses.

### Version Switcher

Toggle between different versions of the same doc.

### Edit Link

“Edit on GitHub” link to encourage contributions.

### Search Bar

Docs-specific site search component.

### Glossary

Definition block for technical or domain terms.

---

## Education

Blocks used for course pages, lessons, and study programs.

### Lesson List

Course content list or module breakdown.

### Instructor

Profile card with avatar, name, and bio.

### Syllabus

Structured course overview or curriculum.

### Progress

Progress bar or percentage tracker.

### Quiz

Question block with answer interaction (optional logic).

### Certificate

Visual badge for completed courses.

### Timeline

Educational steps or modules arranged in sequence.

### Comparison Table

Feature comparison of courses or study options.

---

## Business

Professional sections to describe a company, its mission, and team.

### About

Overview of who you are and what you do.

### Mission

Statement or vision block.

### Team

Cards for each team member with photo and role.

### Careers

Job listings or recruitment blocks.

### Partners

Grid of logos for partners, sponsors, or integrations.

### Milestones

Timeline of key events or achievements.

### Contact

Company contact info including phone, email, and form.

### Map

Embedded map showing business location.

### Awards

Recognition badges or honors.

---

## Forms

Interactive form components to capture data or messages.

### Contact

Basic form with name, email, message.

### Newsletter

Email-only form for subscriptions.

### Survey

Multiple-choice or open-ended feedback form.

### Application

Detailed form for applying to something (job, course, etc.).

### RSVP

Event confirmation form with date/time.

### Multistep

Form broken into multiple steps or pages.

### Upload

Form with file attachment support.

---

## Blog

Sections used to display articles or content feeds.

### Post Card

Preview of a single blog post.

### Post Grid

Grid or list of blog posts.

### Categories

List or tags to filter posts.

### Author

Author bio with avatar and links.

### Related Posts

Suggestions based on current post.

### Comments

Public commenting system.

### Meta

Post metadata (date, read time, tags).

---

## SEO

Widgets to enhance discoverability and structured data for crawlers.

### Structured Data

Generic JSON-LD schema block.

### Article Schema

Specific schema for blog or news articles.

### FAQ Schema

Structured data for FAQ accordion.

### Product Schema

Schema for e-commerce product pages.

### Breadcrumb Schema

Breadcrumb trail as structured data.

### OpenGraph Preview

Shows OG tags for link preview debugging.

### Meta Preview

Simulates how your page will appear in search or social.

---

## Utility

Helpers and floating tools for better UX and accessibility.

### Language Switcher

Toggle between multiple languages.

### Cookie Banner

Legal consent notice for cookies.

### Social Share

Buttons to share content on social media.

### Social Feed

Embedded Instagram, X (Twitter), or TikTok feed.

### Countdown

Timer for events or promos.

### Progress Bar

Reading progress or loading bar.

### Notification

Banner or toast message for announcements.

### Alert

Informational, warning, or success message.

### Embed

Embed HTML, iframe, or third-party widget.
