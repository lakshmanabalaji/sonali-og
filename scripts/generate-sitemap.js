/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

// Assumption: site root. Prefer NEXT_PUBLIC_SITE_URL in environment for flexibility.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sonaliwires.com'
const pagesDir = path.join(__dirname, '..', 'pages')
const publicDir = path.join(__dirname, '..', 'public')

function getPages(dir) {
  const files = fs.readdirSync(dir)
  const routes = []

  files.forEach((file) => {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)

    if (stat.isDirectory()) {
      // skip api and _* directories
      if (file === 'api') return
      routes.push(...getPages(full))
    } else if (stat.isFile()) {
      // only .js/.jsx/.ts/.tsx pages
      if (!/\.(js|jsx|ts|tsx)$/.test(file)) return

      // ignore Next internals
      if (file.startsWith('_')) return

      // skip dynamic routes (contain [ or ]) - can't enumerate
      if (file.includes('[') || file.includes(']')) return

      let route = file.replace(/\.(js|jsx|ts|tsx)$/, '')
      if (route === 'index') route = ''
      routes.push('/' + route)
    }
  })

  return routes
}

function buildSitemap(urls) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
  const footer = '</urlset>'
  const body = urls
    .map((u) => {
      const loc = `${siteUrl}${u}`
      const lastmod = new Date().toISOString()
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    })
    .join('\n')

  return header + body + '\n' + footer
}

function ensurePublic() {
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir)
}

function main() {
  const routes = getPages(pagesDir)
  // dedupe & sort
  const unique = Array.from(new Set(routes)).sort()

  ensurePublic()
  const sitemap = buildSitemap(unique)
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  console.log('sitemap.xml written with', unique.length, 'routes')
}

main()

