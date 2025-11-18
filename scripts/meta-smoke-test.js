/* eslint-disable @typescript-eslint/no-require-imports */
const pages = ['/', '/about', '/careers', '/contact', '/innovation', '/products', '/resources']
const base = process.argv[2] || 'http://localhost:3000'
const fetch = global.fetch || require('node-fetch')

function hasTitle(html) {
  return /<title\b[^>]*>.*<\/title>/is.test(html)
}

function hasMetaDescription(html) {
  return /<meta\b[^>]*name=["']description["'][^>]*>/i.test(html)
}

function hasCanonical(html) {
  return /<link\b[^>]*rel=["']canonical["'][^>]*>/i.test(html)
}

function hasOgImage(html) {
  return /<meta\b[^>]*property=["']og:image["'][^>]*>/i.test(html)
}

function hasJsonLd(html) {
  return /<script\s+type=["']application\/ld\+json["'][\s\S]*?>[\s\S]*?<\/script>/i.test(html)
}

;(async function main(){
  let failed = 0
  for (const p of pages) {
    const url = base.replace(/\/$/, '') + (p === '/' ? '/' : p.startsWith('/') ? p : '/' + p)
    process.stdout.write(`Checking ${url} ... `)
    try {
      const res = await fetch(url)
      if (!res.ok) {
        console.log(`FAILED (http ${res.status})`)
        failed++
        continue
      }
      const html = await res.text()
      const checks = [hasTitle(html), hasMetaDescription(html), hasCanonical(html), hasOgImage(html), hasJsonLd(html)]
      const names = ['title', 'meta description', 'canonical', 'og:image', 'JSON-LD']
      const missing = names.filter((n,i) => !checks[i])
      if (missing.length) {
        console.log('MISSING ->', missing.join(', '))
        failed++
      } else {
        console.log('OK')
      }
    } catch (err) {
      console.log('ERROR', err.message)
      failed++
    }
  }

  if (failed) {
    console.error(`\nSmoke tests failed: ${failed} pages had issues`)
    process.exit(2)
  }
  console.log('\nAll pages passed meta/JSON-LD smoke tests')
  process.exit(0)
})()
