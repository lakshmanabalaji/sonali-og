import React from 'react';

export default function FaLeaf({ className = '', size = 24, ...props }) {
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
      <path d="M2 12c4-6 10-8 20-10-2 10-4 16-10 20C6 20 2 12 2 12z" fill="currentColor" />
    </svg>
  );
}
