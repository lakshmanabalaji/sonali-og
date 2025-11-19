# SEO Guidelines for Sonali Wires

## Meta Tags
- Use unique, descriptive <title> and <meta name="description"> for every page.
- Add <meta property="og:title">, <meta property="og:description">, and <meta property="og:image"> for social sharing.

## Structured Data
- Use JSON-LD schema.org markup for Organization, Product, and Breadcrumbs where relevant.

## Canonical URLs
- Add <link rel="canonical" href="..."> to all pages.

## Robots and Sitemap
- Ensure /public/robots.txt and /public/sitemap.xml exist and are up to date.

## Accessibility
- All images must have descriptive alt text (or alt="" if decorative).
- Use semantic HTML (header, nav, main, footer, etc.).
- Ensure color contrast meets WCAG AA.
- All interactive elements must be keyboard accessible.

## Performance
- Optimize images (WebP, compression, responsive sizes).
- Use next/image for all images.
- Minimize third-party scripts.
- Set up performance budgets in CI.

## Other
- Use <link rel="preload"> for critical resources.
- Avoid duplicate content.
- Use descriptive anchor text for links.

---

_Last updated: 2025-11-19_
