# 📂 Scroll To Top `/sections/navigation/scroll-to-top`

A floating button that lets users quickly return to the top of the page. It appears after scrolling past the first viewport height and uses smooth scrolling for a polished experience.

## ✅ Features

-   Reveals after scrolling down
-   Smoothly scrolls back to the page top
-   Uses a Material Icon arrow
-   Styled with global design tokens

---

## 🧾 Section Data Schema

This section requires only its source path:

```json
{
	"src": "/sections/navigation/scroll-to-top/scroll-to-top.html"
}
```

## 🧱 HTML Structure

```html
<button id="scrollToTop" class="scroll-to-top" aria-label="Scroll to top">
	<span class="material-icons">expand_less</span>
</button>
<script>
	(function () {
		var btn = document.getElementById("scrollToTop");
		if (!btn) return;
		window.addEventListener("scroll", function () {
			if (window.scrollY > window.innerHeight) {
				btn.classList.add("scroll-to-top--visible");
			} else {
				btn.classList.remove("scroll-to-top--visible");
			}
		});
		btn.addEventListener("click", function () {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	})();
</script>
```

---

## 🎨 Styling Notes

-   Hidden by default and revealed with `.scroll-to-top--visible`
-   Positioned fixed at the bottom-right with scalable spacing
-   Hover state uses the primary hover color

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable            | Description                       |
| ------------------- | --------------------------------- |
| `--padding-scale`   | Controls distance from page edges |
| `--icon-size`       | Sets the icon size                |
| `--b-radius`        | Rounds the button                 |
| `--c-primary`       | Button background color           |
| `--c-primary-hover` | Hover background color            |
| `--c-body`          | Icon color                        |
| `--transition`      | Fade animation for show/hide      |
| `--bp-md`           | Adjusts spacing on medium screens |
