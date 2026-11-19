interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = 'w-7 h-7' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="32"
        height="32"
        rx="8"
        fill="#131b2e"
        stroke="#4cd7f6"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M10 12.5H26M18 12.5V25.5"
        stroke="#4cd7f6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 18.5L18 25.5L23.5 18.5"
        stroke="#4fdbc8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="12.5" r="2.2" fill="#dae2fd" />
    </svg>
  );
}
