
Third-party bundle audit (auto-generated)
======================================

Summary (top contributors across all analyzed chunks)

- `three` (build/three.core.js): ~1.4 MB (main heavy chunk)
- `postprocessing` (build/index.js): ~630 KB (main heavy chunk)
- `three` (build/three.module.js): ~600 KB (main heavy chunk)
- `react-dom` (client): ~530 KB (core React runtime)
- `next` (various): 10–80 KB per chunk (routing, utils, image, etc.)
- `react` (core): ~17 KB per chunk (present in most pages)
- `components/Hyperspeed.impl.js`: ~38 KB (only in heavy effect chunk)
- `components/SEO.js`: ~3.3 KB (present in most pages)
- Page-level JS (e.g. `pages/about.js`, `pages/products.js`, etc.): 7–20 KB per page

No `react-icons` or other unused heavy libraries found in any chunk after removal.

Notes
-----
- All major third-party weight is isolated to the hyperspeed chunk and core React/Next.js runtime. No evidence of accidental heavy imports in page-level or shared chunks.
- All page-level and shared chunks are dominated by Next.js, React, and project code, with no large third-party surprises.

Recommended remediations (prioritized)
------------------------------------
1) Keep `three` & `postprocessing` inside impls (already done)
   - Acceptance: ensure `components/Hyperspeed.impl.js` is the only file importing `three`/`postprocessing` (there's a guard script `scripts/check-hyperspeed-top-level.js`).

2) Reduce imported surface area of `three` and `postprocessing`
   - Replace monolithic imports with selective imports where possible (e.g. import specific classes from `three/src` or `three/examples/jsm/*`). This can reduce parse size when tree-shaking is effective.
   - For `postprocessing`, import only the passes/effects you use, not the entire index.
   - Estimated savings: depends on usage; can be hundreds of KBs.

3) Consider server-side/static alternative or CSS fallback for the hero if the heavy effect is purely decorative on LCP-critical pages.
   - If hyperspeed is non-essential for first meaningful paint, defer it further or replace hero with a static optimized image on initial load.
   - Estimated savings: full 1-2 MB if the effect isn't loaded on LCP-critical path.

4) Consider loading `three` & `postprocessing` from a CDN with HTTP/2/3 and long-cache headers to improve fetch time (but parse cost remains).

5) Remove unused heavy client libraries from `package.json` (done)
   - `react-icons` was present but is now removed. Acceptance: `npm ls react-icons` shows it removed and bundle no longer contains react-icons when rebuilt.

Next steps
----------
- Continue to monitor bundle composition after any dependency or feature changes.
- If further bundle reduction is needed, consider a temporary Webpack build for more granular analysis with `source-map-explorer` or `webpack-bundle-analyzer`.

Files produced
--------------
- `reports/top-modules-*.json` — top modules by bytes for each chunk
- `reports/treemap-*.html` — simple HTML visualizations (bar-chart style)

If you'd like, I can:
- (A) Try a Webpack-based build to feed `source-map-explorer` directly (may require toggling Next/Turbopack settings temporarily).

Notes
-----
- Production browser source maps were enabled and a map summary was generated at `reports/top-modules-5b815b6b20a7d767_js.json` and a simple HTML view at `reports/treemap-5b815b6b20a7d767_js.html`.
- The map shows that most of the bytes come from `three` and `postprocessing` — this matches expectations for WebGL/postprocessing-heavy code.
- The project already confines heavy imports to `components/Hyperspeed.impl.js` and uses lazy-loading wrappers; the remaining size is the runtime cost when that feature loads.

Recommended remediations (prioritized)
------------------------------------
1) Keep `three` & `postprocessing` inside impls (already done)
   - Acceptance: ensure `components/Hyperspeed.impl.js` is the only file importing `three`/`postprocessing` (there's a guard script `scripts/check-hyperspeed-top-level.js`).

2) Reduce imported surface area of `three` and `postprocessing`
   - Replace monolithic imports with selective imports where possible (e.g. import specific classes from `three/src` or `three/examples/jsm/*`). This can reduce parse size when tree-shaking is effective.
   - For `postprocessing`, import only the passes/effects you use, not the entire index.
   - Estimated savings: depends on usage; can be hundreds of KBs.

3) Consider server-side/static alternative or CSS fallback for the hero if the heavy effect is purely decorative on LCP-critical pages.
   - If hyperspeed is non-essential for first meaningful paint, defer it further or replace hero with a static optimized image on initial load.
   - Estimated savings: full 1-2 MB if the effect isn't loaded on LCP-critical path.

4) Consider loading `three` & `postprocessing` from a CDN with HTTP/2/3 and long-cache headers to improve fetch time (but parse cost remains).

5) Remove unused heavy client libraries from `package.json` (manual step)
   - `react-icons` appears in `package.json` but source no longer imports it — consider removing the dependency and running `npm prune` / `npm ci`.
   - Acceptance: `npm ls react-icons` shows it removed and bundle no longer contains react-icons when rebuilt.

Next automated steps I can take now
----------------------------------
- Generate similar `reports/top-modules-*.json` for other large `.js.map` files (done for one map; I can batch-run this across all `.next/static/chunks/*.js.map`).
- Create PR removing `react-icons` from `package.json` after a confirmation step.
- Attempt a Webpack-based production build (temporary) to produce Webpack-style source maps and then run `source-map-explorer` / `webpack-bundle-analyzer` for a more detailed treemap.

Files produced
--------------
- `reports/top-modules-5b815b6b20a7d767_js.json` — top modules by bytes for the analyzed map
- `reports/treemap-5b815b6b20a7d767_js.html` — simple HTML visualization (bar-chart style)

If you'd like, I'll now:
- (A) Batch-process all `.next/static/chunks/*.js.map` with the summarizer and produce a combined `reports/top-modules-all.json` and treemap HTML, then produce a prioritized action list per library.
- (B) Create a PR that safely removes `react-icons` from `package.json` (and updates `package-lock.json`) since runtime no longer imports it.
- (C) Try a Webpack-based build to feed `source-map-explorer` directly (may require toggling Next/Turbopack settings temporarily).

Tell me which of A/B/C to run next (or say "do all").
