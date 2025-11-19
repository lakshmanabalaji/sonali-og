import React from 'react';

export default function FaCogs({ className = '', size = 24, ...props }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M19.4 13.3a7 7 0 0 0 0-2.6l2.1-1.6-2-3.4-2.6.6a7 7 0 0 0-1.9-1.1L15 2h-4l-.1 2.2a7 7 0 0 0-1.9 1.1L6.4 3.7 4.4 7l2.1 1.6a7 7 0 0 0 0 2.6L4.4 14.8 6.4 18l2.6-.6c.6.5 1.3.9 1.9 1.1L11 22h4l.1-2.2c.7-.2 1.3-.6 1.9-1.1l2.6.6 2-3.4-2.1-1.6z" fill="currentColor" />
    </svg>
  );
}
