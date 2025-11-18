import Head from 'next/head'

// Read site URL from env var when possible so this can adapt to prod/staging
const SITE_URL = (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL) || 'https://sonaliwires.com'

export default function SEO({
  title = 'Sonali Wires',
  description = 'Sonali Wires - Safe, reliable, and innovative copper wiring solutions',
  canonical = '',
  openGraph = {},
  twitter = {},
  jsonLd = null,
  // optional array of image URLs (absolute or root-relative) to preload
  preloadImages = []
}) {
  const fullTitle = title.includes('Sonali') ? title : `${title} | Sonali Wires`

  // Build absolute canonical URL. Accepts either full URL or path like '/about'
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL.replace(/\/$/, '')}${canonical.startsWith('/') ? canonical : '/' + canonical}`
    : SITE_URL

  const og = {
    title: openGraph.title || fullTitle,
    description: openGraph.description || description,
    url: openGraph.url
      ? openGraph.url.startsWith('http')
        ? openGraph.url
        : `${SITE_URL.replace(/\/$/, '')}${openGraph.url.startsWith('/') ? openGraph.url : '/' + openGraph.url}`
      : canonicalUrl,
    image: openGraph.image
      ? (openGraph.image.startsWith('http') ? openGraph.image : `${SITE_URL.replace(/\/$/, '')}${openGraph.image.startsWith('/') ? openGraph.image : '/' + openGraph.image}`)
      : `${SITE_URL.replace(/\/$/, '')}/favicon.svg`,
    type: openGraph.type || 'website',
  }

  const tw = {
    card: twitter.card || 'summary_large_image',
    site: twitter.site || '@SonaliWires',
    creator: twitter.creator || '@SonaliWires',
  }

  // Default Organization JSON-LD (can be overridden by jsonLd prop)
  const defaultOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sonali Wires LLP",
    "url": SITE_URL,
  "logo": `${SITE_URL.replace(/\/$/, '')}/favicon.svg`,
    "sameAs": [
      "https://www.linkedin.com/company/sonali-wires/"
    ]
  }

  return (
    <Head>
      {/* preload LCP / critical images */}
      {Array.isArray(preloadImages) && preloadImages.map((img, i) => (
        <link key={`preload-img-${i}`} rel="preload" as="image" href={img.startsWith('http') ? img : `${SITE_URL.replace(/\/$/, '')}${img.startsWith('/') ? img : '/' + img}`} />
      ))}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
  {/* favicon - prefer an SVG in the public folder (creates no binary) */}
  <link rel="icon" href="/favicon.svg" />

      {/* Open Graph */}
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:image" content={og.image} />

      {/* Twitter */}
      <meta name="twitter:card" content={tw.card} />
      <meta name="twitter:site" content={tw.site} />
      <meta name="twitter:creator" content={tw.creator} />

      {/* JSON-LD structured data */}
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : (
        <script type="application/ld+json">{JSON.stringify(defaultOrg)}</script>
      )}
    </Head>
  )
}
