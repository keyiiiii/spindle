import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M10.23 6.5v12.25a1.25 1.25 0 0 1-2.5 0V6.5H3.22a1.25 1.25 0 0 1 0-2.5h11.53a1.25 1.25 0 0 1 0 2.5h-4.52ZM20.5 8.75h-7a1.25 1.25 0 0 0 0 2.5h2.25v7.5a1.25 1.25 0 0 0 2.5 0v-7.5h2.25a1.25 1.25 0 0 0 0-2.5Z" />
  </svg>
);
export default SvgTitle;
