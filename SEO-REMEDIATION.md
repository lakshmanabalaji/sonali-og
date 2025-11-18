# SEO & Performance Remediation (priority list)

This document summarizes the immediate, high-impact remediation steps based on the most recent Lighthouse audit artifacts in the repository (`lighthouse-after.json`) and the partial local run (`lighthouse-latest.json`). Where practical I've already implemented or started low-risk changes (image optimization, basic SEO component, and a Hyperspeed lazy-loader). Below are prioritized actions, explanations, and concrete steps to finish the job.

## Executive summary
- Primary problem: A heavy 3D module (`components/Hyperspeed`) pulled Three.js and postprocessing into initial client bundles causing enormous main-thread work and very poor LCP/TTI.
- Current status: `components/Hyperspeed.impl.js` contains the heavy implementation and `components/Hyperspeed.js` has been replaced by a minimal idle/dynamic loader (placeholder). A production build succeeds.
- Lighthouse snapshot (earlier run): FCP ≈ 1.9s, LCP ≈ 8.3s, Speed Index ≈ 17.5s, Time to Interactive very high (main-thread work ~180s attributed to Hyperspeed chunk).

## Immediate (P0) — unblock auditing & remove heavy initial work
1. Ensure the Hyperspeed heavy implementation is only imported inside `components/Hyperspeed.impl.js` and never imported at module top-level in any SSR-executed code (including `_app.js`, layout files, or server-only paths). The wrapper should remain tiny and used by `HyperspeedLoader` or lazy/dynamic imports.
   - Acceptance: production build + start succeed and the initial client bundle no longer contains Three.js/postprocessing.
2. Prefer explicit dynamic import with an interaction or idle boundary:
   - Use dynamic import inside a requestIdleCallback (already applied) or on first user-interaction (e.g., hover/click) to further defer loading.
3. If the visual effect is not critical for users immediately above-the-fold, consider gating it behind an explicit CTA (e.g., "Enable 3D") to avoid loading on mobile users.

## High (P1) — reduce JS parse/execute and improve LCP
1. Analyze the built JS treemap (from Lighthouse `script-treemap-data` or `Source Map`) to find the remaining top bundles. Remove or lazy-load any other large chunks that are not critical.
2. Split huge components into smaller submodules so the initial route only bundles essential code.
3. Defer non-critical hydration/plugins until after LCP (use Next's dynamic imports with `ssr:false` where appropriate).

## Medium (P2) — assets, fonts, and network
1. Fonts
   - Add <link rel="preload" as="font"> for critical fonts with `crossorigin` and ensure `font-display: swap` in CSS.
2. Images
   - You've already optimized images to WebP in `public/images/optimized/*` — ensure LCP-critical images are preloaded via the SEO component.
3. CDN & caching
   - Serve static assets (/_next/static) with long cache TTLs and use immutable content hashes.

## Low (P3) — CI, tests, and monitoring
1. Add a GitHub Actions workflow to run Lighthouse CI against a deployment preview (recommended) to avoid the local Chrome interstitials. Use `lhci autorun` in CI or `npx lighthouse ...` against the preview URL.
2. Keep `scripts/parse-lighthouse.js` and add a job that runs it after audits to generate a human-readable summary artifact.
3. Add a small unit/integration smoke test that imports `components/Hyperspeed.js` in a node-like environment (JSDOM) and asserts it doesn't call window/Three on import (ensures no SSR breaks).

## Concrete next steps I will take (if you want me to proceed)
1. Finish the Hyperspeed hardening: verify no other files import Three.js at top-level, add an interaction-based loader fallback, and add a tiny smoke test.
2. Wire a GitHub Actions job to run Lighthouse CI against a deployment preview (or alternate: run LH in GitHub Actions using `next build` + `next start` on a self-hosted runner if you want to keep everything in-repo).
3. Run Lighthouse CI in the workflow and parse results into `SEO-REMEDIATION.md` with a prioritized list of concrete code edits.

## Quick local troubleshooting note (Chrome interstitial)
- Local headless Chrome sometimes shows an interstitial (runtime error CHROME_INTERSTITIAL_ERROR) when Lighthouse navigates to `http://localhost:3002/`. This is environmental (captive-portal or Chrome build behavior). To get reliable audits:
  - Run Lighthouse in CI (recommended) or
  - Run a local non-headless Chrome and use DevTools Lighthouse or adjust Chrome flags/disable network captive portal checks.

## Files I changed/created in this session
- `components/Hyperspeed.impl.js` — heavy impl (kept heavy imports inside)
- `components/Hyperspeed.js` — replaced with a minimal idle/dynamic wrapper
- `SEO-REMEDIATION.md` — this file

## Follow-ups & timeline
- If you want me to, I'll implement P0 and P1 items automatically now (finish wrapper, add interaction-based loader, add a smoke test), run a production build, and then push a GitHub Actions workflow to run Lighthouse CI. Reply "do it" and I'll proceed autonomously.
# Lighthouse findings — http://localhost:3000/

Fetch time: 2025-11-18T08:35:40.809Z

> Warnings: The page loaded too slowly to finish within the time limit. Results may be incomplete.

## Category scores

- Performance: **28**
- SEO: **92**

## Top failing audits (score < 0.9)

### Largest Contentful Paint — score: 0 (13.5 s)

Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)


### Speed Index — score: 0 (42.6 s)

Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).


### Total Blocking Time — score: 0 (160,550 ms)

Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).


### Max Potential First Input Delay — score: 0 (2,850 ms)

The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).


### Time to Interactive — score: 0 (173.6 s)

Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).


### Network dependency tree — score: 0 ()

[Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.

Sample failing items:
- {"type":"list-section","value":{"type":"network-tree","chains":{"0A4F2A44C2DEBC7EE4D4779D568BD91F":{"url":"http://localhost:3000/","navStartToEndTime":99,"transferSize":4741,"isLongest":true,"children
- {"type":"list-section","title":"Preconnected origins","description":"[preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/) hints help the browser establish a conn
- {"type":"list-section","title":"Preconnect candidates","description":"Add [preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/) hints to your most important origi


### First Contentful Paint — score: 0.26 (3.9 s)

First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).


## Suggested prioritized fixes

1. Optimize and serve images in modern formats (WebP/AVIF), generate appropriately sized OG images (1200x630) — *high impact / low-medium effort*

2. Reduce Largest Contentful Paint (LCP) by optimizing hero images, deferring non-critical JS, and server-side rendering critical content — *high impact / medium effort*

3. Minimize render-blocking CSS and JS: split bundles, remove unused code, use Next.js dynamic imports — *high impact / medium-high effort*

4. Use efficient cache headers for static assets and leverage CDN in production — *medium impact / low effort*

5. Improve font loading (preload critical fonts, use font-display: swap) — *medium impact / low effort*

6. Add Lighthouse CI and Playwright smoke tests to prevent regressions — *low impact / low effort (automation)*

