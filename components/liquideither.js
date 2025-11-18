// Thin client wrapper for the heavy LiquidEther implementation.
// The heavy runtime lives in `components/liquideither.impl.js` and is dynamically imported on the client.

"use client";
"use client";
import React, { useState, useEffect } from 'react'

// Thin client wrapper for the heavy LiquidEther implementation.
// The heavy runtime lives in `components/liquideither.impl.js` and is dynamically imported on the client.
export default function LiquidEtherWrapper(props) {
  const [Impl, setImpl] = useState(null)

  useEffect(() => {
    let cancelled = false
    const load = () => import('./liquideither.impl').then(m => {
      if (!cancelled) setImpl(() => m.default || m)
    }).catch(() => {})

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(load, { timeout: 2000 })
    } else {
      const t = setTimeout(load, 500)
      return () => { cancelled = true; clearTimeout(t) }
    }

    return () => { cancelled = true }
  }, [])

  if (!Impl) return <div className="liquideither-placeholder" aria-hidden style={{ width: '100%', height: '100%' }} />
  return <Impl {...props} />
}

