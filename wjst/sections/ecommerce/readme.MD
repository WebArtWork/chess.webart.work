# 🛍️ E-commerce Sections – Manager Guide

This guide explains how our ecommerce-related sections fit together to create two main page types:

1. **Catalog Page (Product Listing)** – shows multiple products at once
2. **Product Page (Single Product)** – shows one product with detailed info and actions

Unlike technical READMEs, this is written for **managers or content strategists** who plan how pages should be assembled.

---

## **1. Catalog Page (Product Listing)**

**Purpose:**
Help shoppers browse and compare products, while encouraging them to click for more details or purchase.

**Sections commonly used:**

| Section                                   | Why it’s here                                         | Manager tips |
| ----------------------------------------- | ----------------------------------------------------- | ------------ |
| **Product Grid** (`ecommerce/product-grid`)   | Lays out multiple products in a responsive grid.       | Decide sort order (new, popular, etc.). Keep grids consistent across categories. |
| **Product Card** (`ecommerce/product-card`)   | Building block for individual items in the grid.       | Use clear photos and short titles; include Price, Discount Badge, and Star Rating. |
| **Price** (`ecommerce/price`)                 | Shows standard and sale pricing.                       | Show both original and discounted prices when relevant. |
| **Discount Badge** (`ecommerce/discount-badge`) | Highlights promotions or savings.                      | Use sparingly so only real deals stand out. |
| **Star Rating** (`ecommerce/star-rating`)      | Quick visual cue of product quality.                   | Display only when enough reviews exist to be credible. |

**Optional add-ons:**

-   **Stock Indicator** for scarcity messaging.
-   **Add to Cart** buttons for quick-buy experiences.

---

## **2. Product Page (Single Product)**

**Purpose:**
Provide complete product information and guide the shopper to purchase.

**Sections commonly used:**

| Section                                       | Why it’s here                                           | Manager tips |
| --------------------------------------------- | ------------------------------------------------------- | ------------ |
| **Product Details** (`ecommerce/product-details`) | Main content area with images, description, and specs.   | Keep key benefits and images above the fold. |
| **Price** (`ecommerce/price`)                     | Displays current price and any discounts.                | Include Discount Badge nearby when on sale. |
| **Variant Selector** (`ecommerce/variant-selector`) | Allows choice of size, color, etc.                       | Show only relevant options; default to most popular. |
| **Add to Cart** (`ecommerce/add-to-cart`)          | Primary call-to-action to start checkout.               | Make it prominent and keep text action-focused. |
| **Stock Indicator** (`ecommerce/stock-indicator`)  | Shows availability or scarcity.                         | Use urgency messaging carefully. |
| **Star Rating** (`ecommerce/star-rating`)          | Displays average customer rating.                        | Encourage reviews to build trust. |
| **Review Section** (`ecommerce/review-section`)    | Full list of customer reviews and comments.              | Moderate regularly; surface most helpful reviews. |
| **Payment Logos** (`ecommerce/payment-logos`)      | Reassures users about accepted payment methods.         | Place near Add to Cart or in the footer. |

**Optional add-ons:**

-   **Discount Badge** near Price for promotions.
-   **Product Grid** for “Related Products” or cross-sells.

---

## **Section-by-Section Manager Summary**

### **Add to Cart**
Primary button that adds the selected product to the shopper’s cart.
**Use on:** Product pages, optionally on catalog pages for quick-buy.
**Frequency:** Always present on product pages.

### **Discount Badge**
Visual tag showing percent or amount off the regular price.
**Use on:** Catalog and product pages when items are discounted.
**Frequency:** Situational.

### **Payment Logos**
Icons for accepted payment providers to build trust.
**Use on:** Product pages, cart, or footer.
**Frequency:** Always after pricing or near checkout actions.

### **Price**
Component displaying the product’s cost and any savings.
**Use on:** Catalog and product pages.
**Frequency:** Always.

### **Product Card**
Preview of a product with image, title, Price, Discount Badge, and Star Rating.
**Use on:** Catalog pages and related product modules.
**Frequency:** Always when listing products.

### **Product Details**
Comprehensive information about a single product.
**Use on:** Product pages.
**Frequency:** Always.

### **Product Grid**
Responsive grid that arranges Product Cards.
**Use on:** Catalog pages or related product sections.
**Frequency:** Always on product listing pages.

### **Review Section**
Detailed customer feedback and ratings.
**Use on:** Product pages.
**Frequency:** Common for products with reviews.

### **Star Rating**
Displays average rating as stars.
**Use on:** Catalog and product pages.
**Frequency:** When enough reviews exist.

### **Stock Indicator**
Shows inventory status or remaining quantity.
**Use on:** Product pages; optionally on catalog pages.
**Frequency:** Always if inventory is tracked.

### **Variant Selector**
Interface for choosing product variations like size or color.
**Use on:** Product pages.
**Frequency:** Whenever a product has variants.

---

## **Putting It Together**

### **Catalog Page**

- Product Grid (built from Product Cards)
- Price, Discount Badge, Star Rating
- Optional Stock Indicator or Add to Cart

### **Product Page**

- Product Details
- Price + Discount Badge
- Variant Selector
- Add to Cart
- Stock Indicator
- Star Rating + Review Section
- Payment Logos

