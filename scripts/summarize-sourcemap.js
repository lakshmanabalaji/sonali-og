#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const inPath = process.argv[2]
if (!inPath) {
  console.error('Usage: node summarize-sourcemap.js <sourcemap.json>')
  process.exit(2)
}

const map = JSON.parse(fs.readFileSync(inPath, 'utf8'))
const sources = map.sources || []
const sourcesContent = map.sourcesContent || []

const rows = []
for (let i = 0; i < sources.length; i++) {
  const src = sources[i]
  const content = sourcesContent[i] || ''
  const bytes = Buffer.byteLength(content, 'utf8')
  rows.push({ source: src, bytes })
}

rows.sort((a, b) => b.bytes - a.bytes)

const outBase = path.basename(inPath, path.extname(inPath)).replace(/[^a-zA-Z0-9-_]/g, '_')
const outJson = path.join(process.cwd(), 'reports', `top-modules-${outBase}.json`)
const outHtml = path.join(process.cwd(), 'reports', `treemap-${outBase}.html`)

if (!fs.existsSync(path.join(process.cwd(), 'reports'))) fs.mkdirSync(path.join(process.cwd(), 'reports'))

fs.writeFileSync(outJson, JSON.stringify(rows.slice(0, 200), null, 2), 'utf8')

// simple HTML visualization (bars)
const total = rows.reduce((s, r) => s + r.bytes, 0)
const html = [`<!doctype html><meta charset="utf-8"><title>Treemap ${outBase}</title><style>body{font-family:Arial;margin:20px} .bar{height:18px;background:#4f46e5;margin:4px 0;color:#fff;padding:2px 6px} .label{font-size:12px;color:#111;margin-right:8px;display:inline-block;width:60%}</style><h1>Top modules for ${outBase}</h1><p>Total bytes (approx): ${total}</p><div>`]

for (const r of rows.slice(0, 200)) {
  const pct = total ? Math.round((r.bytes / total) * 10000) / 100 : 0
  const width = Math.max(1, Math.round(pct * 3))
  html.push(`<div><span class="label">${r.source}</span><span style="display:inline-block;width:20%;">${r.bytes} bytes (${pct}%)</span><div class="bar" style="width:${width}%"></div></div>`)
}

html.push('</div>')
fs.writeFileSync(outHtml, html.join('\n'), 'utf8')

console.log('Wrote', outJson, outHtml)
