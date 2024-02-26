import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 20H5c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h5.2c.8 0 1.6.3 2.1.9L13.4 6H19c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3ZM5 6c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5.6c-.5 0-1-.2-1.4-.6l-1.1-1.1c-.2-.2-.5-.3-.7-.3H5Z" />
  </svg>
);
export default SvgFolder;
