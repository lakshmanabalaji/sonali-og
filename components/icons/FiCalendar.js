import React from 'react';

export default function FiCalendar({ className = '', size = 20, ...props }) {
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
      <path d="M3 8h18v13H3V8zm16-5v2H5V3" fill="currentColor" />
    </svg>
  );
}
