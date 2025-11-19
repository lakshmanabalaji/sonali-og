import React from 'react';

export default function FaTrophy({ className = '', size = 24, ...props }) {
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
      <path d="M5 3v2a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V3H5zM7 21h10v-2H7v2z" fill="currentColor" />
    </svg>
  );
}
