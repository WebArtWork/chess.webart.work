# 📂 Notification `/sections/utility/notification`

Dismissible notification banner for displaying contextual messages. Supports success, error, and alert variants.

## ✅ Features

-   Optional message and type (success, error, alert)
-   Close button to dismiss the notification
-   Responsive typography and spacing
-   Uses CSS variables for theme customization

---

## 🧾 Section Data Schema

This section expects the following data structure passed via `section`:

```json
{
	"src": "/sections/utility/notification/notification.html",
	"message": "Site will undergo maintenance tonight",
	"type": "alert"
}
```

## 🧱 HTML Structure

```html
<div
	class="notification{% if section.type %} notification--{{{section.type}}}{% endif %}"
	data-notification
>
	<div class="notification__message">{{{section.message}}}</div>
	<button class="notification__close" aria-label="Close notification">
		&times;
	</button>
</div>
<script>
	(function () {
		document.querySelectorAll("[data-notification]").forEach(function (el) {
			var close = el.querySelector(".notification__close");
			if (!close) return;
			close.addEventListener("click", function () {
				el.classList.add("notification--hidden");
			});
		});
	})();
</script>
```

---

## 🎨 Styling Notes

-   Notification uses `border-left` to indicate variant color
-   Background and text colors inherit from CSS variables
-   Close button uses `--transition` for hover effects

---

## 🧩 Theme Variables Used (from `template.json`)

| Variable             | Description                               |
| -------------------- | ----------------------------------------- |
| `--padding-scale`    | Controls banner padding                   |
| `--margin-scale`     | Spacing around elements                   |
| `--font-size`        | Base message font size                    |
| `--line-height`      | Line height for message                   |
| `--ff-base`          | Font family for notification text         |
| `--transition`       | Transition for close button hover         |
| `--c-primary`        | Default border color                      |
| `--c-bg-item`        | Background color for default notification |
| `--c-text-primary`   | Text color                                |
| `--c-primary-hover`  | Close button hover color                  |
| `--c-success`        | Success variant background/border         |
| `--c-error`          | Error variant background/border           |
| `--c-alert`          | Alert variant background/border           |
| `--c-border`         | Border color for default notification     |
| `--bp-md`, `--bp-sm` | Breakpoints for responsive sizing         |

---
