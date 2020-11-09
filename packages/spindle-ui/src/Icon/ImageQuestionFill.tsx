import * as React from 'react';

function SvgImageQuestionFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M11.5 18.01H5c-.55 0-1-.45-1-1v-.21c0-.13.05-.26.15-.35L7.3 13.3a.996.996 0 011.41 0l1.44 1.44c.2.2.51.2.71 0l4.44-4.44a.996.996 0 011.41 0l1.21 1.21H18c1.51 0 2.9.52 4 1.38V7.01c0-1.66-1.34-3-3-3H5c-1.66 0-3 1.34-3 3v10c0 .23.03.45.08.66 0 .01.01.03.01.04.05.2.12.39.21.58v.01A2.992 2.992 0 005 20.01h6.82a6.3 6.3 0 01-.32-2zM8 7.01c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2a2 2 0 012-2zM18.85 21.9a.85.85 0 11-1.699.001.85.85 0 011.699-.001zm-.87-1.26c-.5 0-.9-.4-.9-.9s.05-1.09.5-1.62c.21-.25.46-.46.7-.66.54-.45.83-.71.83-1.22 0-.41-.48-.88-1.09-.88-.55 0-1.11.34-1.11.98 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-1.56 1.28-2.78 2.91-2.78 1.57 0 2.89 1.23 2.89 2.68 0 1.37-.89 2.11-1.47 2.6-.19.16-.37.31-.48.44-.05.06-.08.15-.08.45 0 .5-.4.91-.9.91z" />
    </svg>
  );
}

export default SvgImageQuestionFill;