# 📚 Docs Sections – Manager Guide

This guide explains how our documentation-related sections come together to build effective Docs pages.

We support two common page patterns:

1. **General Documentation Page** – guides, tutorials, or conceptual articles.
2. **API Reference Page** – structured overview of endpoints and parameters.

Unlike developer READMEs, this is for **managers and content strategists** who need to decide which sections to use and why.

---

## **1. General Documentation Page**

**Purpose:**
Provide narrative or task-based guidance for users.

**Sections commonly used:**

| Section                             | Why it’s here                                           | Manager tips |
| ----------------------------------- | ------------------------------------------------------- | ------------ |
| **Page Layout** (`docs/page-layout`) | Arranges sidebar, content area, and optional TOC.       | Hide TOC for short pages. |
| **Sidebar** (`docs/sidebar`)         | Navigates between related docs.                         | Keep hierarchy shallow and clear. |
| **Search Bar** (`docs/search-bar`)   | Lets visitors quickly find information.                 | Ensure content is indexed regularly. |
| **Edit Link** (`docs/edit-link`)     | Encourages community contributions.                     | Point to the correct repo/branch. |
| **Glossary** (`docs/glossary`)       | Defines key terms or acronyms.                          | Keep definitions brief and consistent. |

**Optional add‑ons:**

- Add a **Version Switcher** if multiple doc versions exist.
- Sprinkle **Code Snippets** throughout the content for examples.

---

## **2. API Reference Page**

**Purpose:**
Document API endpoints with requests, responses, and parameters.

**Sections commonly used:**

| Section                               | Why it’s here                                         | Manager tips |
| ------------------------------------- | ----------------------------------------------------- | ------------ |
| **API Layout** (`docs/api-layout`)     | Structures lists of endpoints and their details.      | Group endpoints logically. |
| **Code Snippet** (`docs/code-snippet`) | Shows request/response examples with copy button.     | Verify examples are up to date. |
| **Version Switcher** (`docs/version-switcher`) | Switch between API doc versions.                 | Only display supported versions. |
| **Search Bar** (`docs/search-bar`)     | Quickly locate endpoints or parameters.               | Place near the top for fast access. |

**Optional add‑ons:**

- Use a **Sidebar** to navigate resource categories.
- Include an **Edit Link** for reader feedback.

---

## **Section-by-Section Manager Summary**

### **Page Layout**
Defines the main columns for docs pages (sidebar, content, TOC).
**Use on:** Most documentation pages
**Frequency:** Always

### **Sidebar**
Navigation menu to other docs or sections.
**Use on:** General docs and API references with multiple sections
**Frequency:** Common

### **Search Bar**
Site-wide or docs-wide search input.
**Use on:** All docs pages
**Frequency:** Always

### **Edit Link**
“Edit this page” link inviting contributions.
**Use on:** Docs with collaborative workflows
**Frequency:** Optional but recommended

### **Glossary**
List of terms and definitions.
**Use on:** Conceptual or onboarding docs
**Frequency:** When domain-specific language is used

### **API Layout**
Framework for presenting API endpoints.
**Use on:** API Reference pages
**Frequency:** Whenever documenting APIs

### **Code Snippet**
Stylized block for sample code with copy button.
**Use on:** Wherever examples clarify instructions
**Frequency:** As needed

### **Version Switcher**
Dropdown or menu to change documentation versions.
**Use on:** Products with multiple releases
**Frequency:** Common in mature docs

---

## **Putting It Together**

### **General Documentation Page**
- Page Layout with Sidebar
- Search Bar at the top
- Content enriched with Code Snippets and Glossary entries
- Edit Link at the bottom
- Optional Version Switcher

### **API Reference Page**
- API Layout (or Page Layout if simpler)
- Sidebar grouping endpoints
- Code Snippets for request/response examples
- Version Switcher and Edit Link
- Search Bar for quick lookup

