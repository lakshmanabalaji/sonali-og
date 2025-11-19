import React from 'react';

export default function BiBriefcase({ className = '', size = 20, ...props }) {
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
      <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7H3zm5-4h8v2H8V3z" fill="currentColor" />
    </svg>
  );
}
