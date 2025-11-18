import React, { useEffect, useState } from 'react';

// Minimal lazy-loading wrapper for the heavy Hyperspeed implementation.
// All large imports (three, postprocessing, shaders) live in
// `components/Hyperspeed.impl.js` so this file stays tiny and cheap to parse.
export default function Hyperspeed(props) {
  const [Impl, setImpl] = useState(null);

  useEffect(() => {
    let mounted = true;
    const idle = window.requestIdleCallback || (fn => setTimeout(fn, 200));
    const cancelIdle = window.cancelIdleCallback || clearTimeout;

    const id = idle(async () => {
      try {
        const mod = await import('./Hyperspeed.impl');
        if (mounted) setImpl(() => (mod && (mod.default || mod)));
      } catch (e) {
        // keep placeholder on failure; avoids breaking the page in prod
        // console.error('Failed to load Hyperspeed implementation', e);
      }
    });

    return () => {
      mounted = false;
      cancelIdle(id);
    };
  }, []);

  if (!Impl) {
    // Render a lightweight placeholder with the same id the impl expects.
    return <div id="lights" style={{ minHeight: 200 }} />;
  }

  const Component = Impl;
  return <Component {...props} />;
}
