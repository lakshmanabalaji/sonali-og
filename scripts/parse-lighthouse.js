/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

let REPORT_PATH = path.resolve(process.cwd(), 'lighthouse-home.json')
// sometimes the report was written to the workspace root; try parent as fallback
if (!fs.existsSync(REPORT_PATH)) {
  const alt = path.resolve(process.cwd(), '..', 'lighthouse-home.json')
  if (fs.existsSync(alt)) REPORT_PATH = alt
}
const OUT_MD = path.resolve(process.cwd(), 'SEO-REMEDIATION.md')

if (!fs.existsSync(REPORT_PATH)) {
  console.error('lighthouse-home.json not found at', REPORT_PATH)
  process.exit(1)
}

const data = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'))

const categories = data.categories || {}
const audits = data.audits || {}

function headline() {
  return `# Lighthouse findings — ${data.finalUrl || data.requestedUrl}\n\n` +
    `Fetch time: ${data.fetchTime}\n\n` +
    (data.runWarnings && data.runWarnings.length ? `> Warnings: ${data.runWarnings.join('; ')}\n\n` : '')
}

function categorySummary() {
  let out = '## Category scores\n\n'
  Object.keys(categories).forEach(k => {
    const c = categories[k]
    out += `- ${c.title}: **${Math.round((c.score || 0) * 100)}**` + (c.scoreDisplayMode === 'error' ? ' (error)' : '') + '\n'
  })
  out += '\n'
  return out
}

function topFailingAudits(limit = 12) {
  const failing = Object.values(audits)
    .filter(a => typeof a.score === 'number' && a.score < 0.9 && a.scoreDisplayMode === 'numeric')
    .sort((a,b) => (a.score || 0) - (b.score || 0))

  let out = '## Top failing audits (score < 0.9)\n\n'
  failing.slice(0, limit).forEach(a => {
    out += `### ${a.title} — score: ${a.score} (${a.displayValue || ''})\n\n`
    if (a.description) out += `${a.description}\n\n`
    if (a.explanation) out += `${a.explanation}\n\n`
    if (a.details && a.details.items && a.details.items.length) {
      out += `Sample failing items:\n`
      a.details.items.slice(0,3).forEach((it, i) => {
        out += `- ${JSON.stringify(it).slice(0,200)}\n`
      })
      out += '\n'
    }
    out += '\n'
  })
  if (!failing.length) out += 'No numeric failing audits found.\n\n'
  return out
}

function recommendations() {
  return `## Suggested prioritized fixes\n\n` +
    `1. Optimize and serve images in modern formats (WebP/AVIF), generate appropriately sized OG images (1200x630) — *high impact / low-medium effort*\n\n` +
    `2. Reduce Largest Contentful Paint (LCP) by optimizing hero images, deferring non-critical JS, and server-side rendering critical content — *high impact / medium effort*\n\n` +
    `3. Minimize render-blocking CSS and JS: split bundles, remove unused code, use Next.js dynamic imports — *high impact / medium-high effort*\n\n` +
    `4. Use efficient cache headers for static assets and leverage CDN in production — *medium impact / low effort*\n\n` +
    `5. Improve font loading (preload critical fonts, use font-display: swap) — *medium impact / low effort*\n\n` +
    `6. Add Lighthouse CI and Playwright smoke tests to prevent regressions — *low impact / low effort (automation)*\n\n`
}

const out = headline() + categorySummary() + topFailingAudits(16) + recommendations()

fs.writeFileSync(OUT_MD, out, 'utf8')
console.log('Wrote remediation to', OUT_MD)
