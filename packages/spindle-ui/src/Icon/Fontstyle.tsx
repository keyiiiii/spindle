import * as React from 'react';

function SvgFontstyle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.68 3.8l4.25 10.79c.19.46-.04.99-.5 1.17a.909.909 0 01-1.17-.51l-.96-2.43H5.7l-.96 2.43a.904.904 0 01-1.68-.66L7.32 3.8c.19-.48.65-.8 1.18-.8.52 0 .99.32 1.18.8zM8.5 5.72l-2.09 5.3h4.18L8.5 5.72zm9.73 7.46l2.72 6.89a.69.69 0 01-.4.9c-.09.03-.17.05-.26.05-.28 0-.54-.16-.65-.44l-.58-1.48h-3.41l-.58 1.48a.71.71 0 01-.91.39.71.71 0 01-.39-.91l2.72-6.89c.14-.36.48-.59.87-.59s.73.24.87.6zm-.87 1.6l-1.15 2.92h2.3l-1.15-2.92z"
      />
    </svg>
  );
}

export default SvgFontstyle;