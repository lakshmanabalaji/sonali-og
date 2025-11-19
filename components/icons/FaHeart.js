import React from 'react';

export default function FaHeart({ className = '', size = 24, ...props }) {
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
      <path d="M12 21s-7-4.6-9-7.2C1 11.2 3 6 7 6c2 0 3 1.6 5 4 2-2.4 3-4 5-4 4 0 6 5.2 4 7.8C19 16.4 12 21 12 21z" fill="currentColor" />
    </svg>
  );
}
