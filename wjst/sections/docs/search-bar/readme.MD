# 🔍 Search Bar `/sections/docs/search-bar`

Interactive search bar for documentation pages. Fetches a JSON index and displays matching links as the user types.

## ✅ Features

-   Live filtering of documentation content
-   Debounced queries limited to first five matches
-   Uses CSS variables for spacing, colors, and typography
-   Theme-aware design via global tokens

---

## 🧾 Section Data Schema

```json
{
	"src": "/sections/docs/search-bar/search-bar.html",
	"placeholder": "Search docs...",
	"index": "/search-index.json"
}
```

---

## 🧱 HTML Structure

```html
<div class="search-bar">
	<input
		type="search"
		class="search-bar__input"
		placeholder="{{{section.placeholder || 'Search...'}}}"
	/>
	<ul class="search-bar__results"></ul>
</div>
```

Search results are injected dynamically into `.search-bar__results`.

---

## 🎨 Theme Variables Used

| Variable                  | Description                            |
| ------------------------- | -------------------------------------- |
| `--padding-scale`         | Controls input and result padding      |
| `--margin-scale`          | Spacing between input and results      |
| `--font-size`             | Base font size for input text          |
| `--line-height`           | Line height for input text             |
| `--c-border`              | Border color for input and results box |
| `--b-radius`              | Rounds input and results box           |
| `--c-bg-item`             | Background of input and results        |
| `--c-text-secondary`      | Text color for input                   |
| `--c-placeholder`         | Placeholder color                      |
| `--c-primary-border`      | Border highlight on focus              |
| `--c-white`               | Input background on focus              |
| `--c-shadow`              | Drop shadow for results list           |
| `--c-text-body-secondary` | Default color for result links         |
| `--c-primary-hover`       | Result hover background                |
| `--c-text-primary`        | Result hover text color                |
| `--transition`            | Animation for hover and focus states   |

---
