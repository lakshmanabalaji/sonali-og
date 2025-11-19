import React from 'react';

export default function FaLightbulb({ className = '', size = 24, ...props }) {
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
      <path d="M9 18a3 3 0 0 0 6 0h-6zm3-16a6 6 0 0 0-4 10c0 1.7.7 3.3 1.9 4.5L10 19h4l.1-2.5A6 6 0 0 0 12 2z" fill="currentColor" />
    </svg>
  );
}
