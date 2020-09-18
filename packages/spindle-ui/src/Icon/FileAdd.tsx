import * as React from 'react';

function SvgFileAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M13.5 10.5H18V12h.5c.5 0 1 .1 1.5.2v-1.9c0-1.1-.4-2.1-1.2-2.8l-4.2-4.2c-.8-.9-1.8-1.3-2.8-1.3H8C5.8 2 4 3.8 4 6v12c0 2.2 1.8 4 4 4h5c-.4-.6-.7-1.3-.8-2H8c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.5v4.5c0 1.1.9 2 2 2zm0-5.6l3.6 3.6h-3.6V4.9zM23 18.5c0 .6-.4 1-1 1h-2.5V22c0 .6-.4 1-1 1s-1-.4-1-1v-2.5H15c-.6 0-1-.4-1-1s.4-1 1-1h2.5V15c0-.6.4-1 1-1s1 .4 1 1v2.5H22c.6 0 1 .4 1 1z" />
    </svg>
  );
}

export default SvgFileAdd;