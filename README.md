# Tofen Content Engine 📺

A high-performance personal brand platform built with **Astro** and **Vanilla JavaScript**. This project serves as a centralized hub for technical tutorials, software documentation, and community engagement.

## 🎯 Strategic Objective
The goal of this project was to create a lightweight, SEO-friendly alternative to standard link-in-bio tools, integrating monetization (AdSense) and dynamic content rendering.

## 🛠 Tech Stack
- **Framework:** Astro 5.0
- **Content Processing:** [Marked.js](https://marked.js.org/) (Markdown-to-HTML parser)
- **Monetization:** Google AdSense Integration
- **Typography:** @fontsource/league-spartan
- **Scripts:** Modular Vanilla JavaScript

## ✨ Technical Highlights

### 1. Dynamic Content Pipeline
Instead of hardcoding HTML for every article, the system uses a custom `Article_Layout`. It accepts Markdown strings as props and processes them using `marked`, allowing for:
- Separation of content and presentation.
- Faster content updates without touching the UI logic.
- Sanity-checked HTML injection via `set:html`.

### 2. Intelligent UI Components
- **Defensive Carousel Logic:** The `banner_carousel.js` script includes a safety check to prevent execution if less than two images are present, optimizing client-side performance.
- **Responsive Media Slots:** Uses Astro `<slot />` to allow per-page customization of social media sidebars while maintaining a consistent layout.
- **Fluid Typography:** Implementation of `clamp()` functions across all headings to ensure a flawless experience from mobile devices to 4K displays.

### 3. Monetization & Analytics
The architecture is designed with "Revenue-First" principles, featuring:
- Pre-configured Google AdSense slots within the `other_info` sections.
- Strategic placement of "Download" call-to-actions (CTA) with CSS-only hover animations to increase click-through rates (CTR).

## 📂 Architecture
```text
src/
├── components/   # Reusable Atomic UI units (Cards, Social, Menu)
├── layouts/      # Master templates (Global Layout & Article Layout)
├── pages/        # File-based routing for tutorials and legal info
└── scripts/      # Standalone business logic (Carousels, Analytics)
