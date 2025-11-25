import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useBootstrapInit = () => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Bootstrap components after page load or route change
    const initBootstrap = () => {
      if (typeof window !== 'undefined' && window.bootstrap) {
        // Re-initialize all dropdowns to prevent HMR conflicts
        document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(el => {
          // Destroy existing instance if any
          const existingDropdown = window.bootstrap.Dropdown.getInstance(el);
          if (existingDropdown) {
            existingDropdown.dispose();
          }
          // Create new instance
          new window.bootstrap.Dropdown(el);
        });
      }
    };

    // Run after a short delay to ensure Bootstrap is loaded
    const timer = setTimeout(initBootstrap, 100);

    return () => clearTimeout(timer);
  }, [router.pathname]); // Re-init on route change
};
