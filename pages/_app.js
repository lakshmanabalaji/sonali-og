import '../styles/globals.css'
import '../styles/Home.css'
import '../styles/About.css'
import '../styles/Products.css'
import '../styles/Innovation.css'
import '../styles/Careers.css'
import '../styles/Resources.css'
import '../styles/Contact.css'
import '../components/Hyperspeed.css'
import '../components/liquideither.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Sonali Wires - Safe, reliable, and innovative copper wiring solutions"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Sonali Wires</title>
        
        {/* Bootstrap CSS moved to pages/_document.js per Next.js recommendation */}
        
        {/* Font Awesome removed: switching to self-hosted fonts */}
      </Head>

      {/* Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
