import React from 'react'

export function HeartIcon({ filled }: { filled?: boolean }): JSX.Element {
  return (
    <svg
      width={39}
      height={40}
      viewBox="0 0 39 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.32 8.32a8.751 8.751 0 00-6.19-2.572 8.732 8.732 0 00-6.191 2.573l-1.687 1.691-1.687-1.691a8.743 8.743 0 00-6.191-2.572 8.743 8.743 0 00-6.191 2.572 8.792 8.792 0 00-2.564 6.208c0 2.328.922 4.561 2.564 6.208l1.687 1.692 12.382 12.416 12.382-12.416 1.687-1.692a8.78 8.78 0 002.565-6.208 8.8 8.8 0 00-2.565-6.208v0z"
        stroke="#000"
        fill={filled ? '#f00' : 'transparent'}
        strokeWidth={3.191}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
