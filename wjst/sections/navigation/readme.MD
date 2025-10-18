# 🧭 Navigation Sections – Manager Guide

This guide explains how our navigation-related sections work together to help visitors move around your site. It is written for managers and content strategists, not developers.

We group navigation into four types:

1. **Global Navigation** – appears on every page and points to top-level areas.
2. **Contextual Navigation** – shows a visitor where they are or lets them dive deeper in a section.
3. **In‑Page Navigation** – helps users jump within a long page.
4. **Sequential Navigation** – moves visitors through lists or multi-page content.

---

## 1. Global Navigation

**Purpose:** Orient visitors and expose the main areas of the site.

**Sections commonly used:**

| Section                         | Why it’s here                                      | Manager tips |
| ------------------------------- | --------------------------------------------------- | ------------ |
| **Navbar** (`navigation/navbar`) | Standard top navigation with logo and menu items.   | Keep labels short; stick to 5–7 items for clarity. |
| **Mega Menu** (`navigation/mega-menu`) | Expands the navbar to show grouped links or promos. | Use for complex sites; ensure groups are clearly labeled. |

---

## 2. Contextual Navigation

**Purpose:** Show location and provide lateral navigation within a section.

**Sections commonly used:**

| Section                              | Why it’s here                                           | Manager tips |
| ------------------------------------ | -------------------------------------------------------- | ------------ |
| **Breadcrumbs** (`navigation/breadcrumbs`) | Displays the path back to higher-level pages.            | Use on deeper pages so visitors can quickly jump up levels. |
| **Sidebar** (`navigation/sidebar`)         | Lists related links for a section or documentation set. | Keep the list scannable; highlight the current page. |

---

## 3. In‑Page Navigation

**Purpose:** Let visitors jump to specific parts of a long page.

**Sections commonly used:**

| Section                                   | Why it’s here                                           | Manager tips |
| ----------------------------------------- | -------------------------------------------------------- | ------------ |
| **Anchor Links** (`navigation/anchor-links`) | Simple list of links to sections on the current page.    | Use sparingly; keep link text short. |
| **Table of Contents** (`navigation/table-of-contents`) | Structured list mirroring page headings.                 | Generate automatically to stay in sync with page content. |
| **Scroll to Top** (`navigation/scroll-to-top`) | Button that returns the visitor to the top of the page. | Only show after the user scrolls; ensure it doesn’t block content. |

---

## 4. Sequential Navigation

**Purpose:** Move visitors forward and backward through a list of items or paginated content.

**Sections commonly used:**

| Section                          | Why it’s here                                        | Manager tips |
| -------------------------------- | ----------------------------------------------------- | ------------ |
| **Pagination** (`navigation/pagination`) | Lets visitors move through multi-page lists or posts. | Show clear “Next” and “Previous” labels; indicate current page. |

---

## Section-by-Section Manager Summary

### Navbar
Top-level navigation with logo and key links.
**Use on:** Every page
**Frequency:** Always

### Mega Menu
Expanded menu for large sites with many links.
**Use on:** Sites with complex structures
**Frequency:** When the standard navbar isn’t enough

### Breadcrumbs
Path indicator showing where the visitor is.
**Use on:** Inner pages with hierarchy
**Frequency:** Common for content-heavy sites

### Sidebar
Secondary navigation for related content.
**Use on:** Documentation, blog, or category sections
**Frequency:** When a section has many pages

### Anchor Links
List of links to points within the same page.
**Use on:** Long-form pages or FAQs
**Frequency:** Situational

### Table of Contents
Auto-generated map of page headings.
**Use on:** Long articles or documentation
**Frequency:** Common when page exceeds several headings

### Scroll to Top
Floating button that returns the user to the top.
**Use on:** Pages with significant vertical length
**Frequency:** Common; enhances usability

### Pagination
Controls for moving between pages in a series.
**Use on:** Blog archives, search results, product lists
**Frequency:** Always when content spans multiple pages

---

## Putting It Together

- **Typical Site Page:** Navbar (or Mega Menu) at top, Breadcrumbs and/or Sidebar within content, Scroll to Top for convenience.
- **Documentation Page:** Sidebar for section navigation, Table of Contents for headings, Scroll to Top, and Breadcrumbs for hierarchy.
- **Blog Listing:** Navbar, Pagination at bottom, Scroll to Top.

Use these sections thoughtfully to keep visitors oriented and encourage deeper engagement.
