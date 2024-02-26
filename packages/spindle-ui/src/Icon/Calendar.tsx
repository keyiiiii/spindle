import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M18 4.75h-1.45v-.48c0-.55-.45-1-1-1s-1 .45-1 1v.48H9.44v-.48c0-.55-.45-1-1-1s-1 .45-1 1v.48H6c-1.65 0-3 1.34-3 3v10c0 1.65 1.34 3 3 3h12c1.65 0 3-1.34 3-3v-10c0-1.65-1.35-3-3-3Zm1 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V10.4h14v7.35Zm0-9.34H5v-.66c0-.55.45-1 1-1h1.45v.02c0 .55.45 1 1 1s1-.45 1-1v-.02h5.11v.02c0 .55.45 1 1 1s1-.45 1-1v-.02H18c.55 0 1 .45 1 1v.66Zm-8 4.34c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm-3.94 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm0 3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1Zm3.94 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1Zm4.05-3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm0 3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1Z" />
  </svg>
);
export default SvgCalendar;
