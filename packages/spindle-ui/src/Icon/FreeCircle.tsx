import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFreeCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
    <path d="M11.25 8.36a.75.75 0 0 0-1.03.25l-1.11 1.82L8 8.61a.75.75 0 0 0-1.28.78L8 11.48h-.67c-.28 0-.5.22-.5.5s.22.5.5.5h1.03v.49H7.33c-.28 0-.5.22-.5.5s.22.5.5.5h1.03V15c0 .41.34.75.75.75s.75-.34.75-.75v-1.03h.97c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.97v-.49h.97c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.61l1.28-2.09a.76.76 0 0 0-.25-1.03ZM14.92 8h-.06c-1.36 0-2.47 1.11-2.47 2.47v3.06c0 1.36 1.11 2.47 2.47 2.47h.06c1.36 0 2.47-1.11 2.47-2.47v-3.06c0-1.36-1.1-2.47-2.47-2.47Zm.97 5.53c0 .54-.44.97-.97.97h-.06a.97.97 0 0 1-.97-.97v-3.06c0-.54.44-.97.97-.97h.06c.54 0 .97.44.97.97v3.06Z" />
  </svg>
);
export default SvgFreeCircle;
