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
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Suppress HMR errors in Brave browser
    // Brave has stricter security policies that can cause duplicate HMR handler warnings
    const originalError = console.error
    const originalWarn = console.warn
    
    console.error = (...args) => {
      const message = args[0]?.toString?.() || ''
      // Suppress only the duplicate HMR handler error
      if (message.includes('A separate HMR handler was already registered')) {
        return
      }
      originalError.apply(console, args)
    }
    
    console.warn = (...args) => {
      const message = args[0]?.toString?.() || ''
      // Suppress HMR-related warnings
      if (message.includes('HMR')) {
        return
      }
      originalWarn.apply(console, args)
    }
    
    return () => {
      console.error = originalError
      console.warn = originalWarn
    }
  }, [])

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

      <Layout globalSetting={pageProps.globalSetting}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
