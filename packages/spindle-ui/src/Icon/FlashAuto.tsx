import * as React from 'react';

function SvgFlashAuto(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.27 10.93h3.67c.43 0 .67.5.38.83l-7.25 9.01c-.3.38-.91.16-.91-.32v-6.9c0-.28-.23-.51-.51-.51H5.98c-.43 0-.67-.5-.4-.84l7.27-9c.3-.38.91-.16.91.32v6.9c0 .28.23.51.51.51zm3.76 4.72l1.85 4.69c.11.26-.02.55-.29.65-.06.03-.12.04-.18.04-.19 0-.38-.12-.46-.32l-.39-.99h-2.29l-.39.99c-.1.26-.39.38-.65.28a.498.498 0 01-.28-.65l1.85-4.69c.2-.51 1.03-.51 1.23 0zm-.61 1.17l-.75 1.9h1.5l-.75-1.9z"
      />
    </svg>
  );
}

export default SvgFlashAuto;