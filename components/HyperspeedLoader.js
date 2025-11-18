import React, { useEffect, useState, useRef } from 'react';

// HyperspeedLoader dynamically imports the heavy Hyperspeed component only
// after the browser is idle (requestIdleCallback) or after a short timeout.
// This prevents that large chunk from blocking Time to Interactive and main-thread work
// during the initial page load. It also only loads on the client (this file is only
// imported in a client-rendered page).

export default function HyperspeedLoader({ effectOptions }) {
  const [Hyperspeed, setHyperspeed] = useState(null);
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    // helper to import the heavy component
    const doImport = () => {
      import('./Hyperspeed').then(mod => {
        if (!mounted.current) return;
        setHyperspeed(() => mod.default || mod);
      }).catch(err => {
        // swallow errors in import to avoid breaking the page
        // (you can log this in dev or to your monitoring)
        // console.error('Failed to load Hyperspeed', err)
      });
    };

    // Prefer requestIdleCallback so import runs when the browser has spare time.
    // Fallback to setTimeout for browsers that don't support it.
    let idleId = null;
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(doImport, { timeout: 2000 });
    } else {
      idleId = window.setTimeout(doImport, 2000);
    }

    // Clean up
    return () => {
      mounted.current = false;
      if (idleId && typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      } else if (idleId) {
        clearTimeout(idleId);
      }
    };
  }, []);

  if (!Hyperspeed) return null;
  const C = Hyperspeed;
  return <C effectOptions={effectOptions} />;
}
