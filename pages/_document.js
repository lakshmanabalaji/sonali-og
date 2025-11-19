import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* External stylesheets belong in Document's Head per Next.js guidance */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Preconnect and preload removed: switching to self-hosted fonts and local styles */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
