#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const reportsDir = path.join(process.cwd(), 'reports')
if (!fs.existsSync(reportsDir)) {
  console.error('reports directory not found; run summarize first')
  process.exit(1)
}

const files = fs.readdirSync(reportsDir).filter(f => f.startsWith('top-modules-') && f.endsWith('.json'))
const totals = Object.create(null)

for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(reportsDir, f), 'utf8'))
  for (const item of arr) {
    const key = item.source
    totals[key] = (totals[key] || 0) + item.bytes
  }
}

const rows = Object.entries(totals).map(([source, bytes]) => ({ source, bytes }))
rows.sort((a, b) => b.bytes - a.bytes)

fs.writeFileSync(path.join(reportsDir, 'top-modules-all.json'), JSON.stringify(rows, null, 2), 'utf8')

// simple HTML summary
const total = rows.reduce((s, r) => s + r.bytes, 0)
const html = [`<!doctype html><meta charset="utf-8"><title>Top modules (all)</title><style>body{font-family:Arial;margin:20px} .bar{height:18px;background:#059669;margin:4px 0;color:#fff;padding:2px 6px} .label{font-size:12px;color:#111;margin-right:8px;display:inline-block;width:60%}</style><h1>Top modules (aggregated)</h1><p>Total bytes (approx): ${total}</p><div>`]
for (const r of rows.slice(0, 200)) {
  const pct = total ? Math.round((r.bytes / total) * 10000) / 100 : 0
  const width = Math.max(1, Math.round(pct * 3))
  html.push(`<div><span class="label">${r.source}</span><span style="display:inline-block;width:20%;">${r.bytes} bytes (${pct}%)</span><div class="bar" style="width:${width}%"></div></div>`)
}
html.push('</div>')
fs.writeFileSync(path.join(reportsDir, 'treemap-all.html'), html.join('\n'), 'utf8')

console.log('Wrote reports/top-modules-all.json and reports/treemap-all.html')
