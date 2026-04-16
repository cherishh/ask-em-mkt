type Props = { className?: string };

export function NativeIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Browser page outline */}
      <rect
        x="6"
        y="10"
        width="52"
        height="44"
        rx="8"
        stroke="#c96442"
        strokeWidth="2"
      />
      {/* Address bar divider */}
      <line
        x1="6"
        y1="22"
        x2="58"
        y2="22"
        stroke="#c96442"
        strokeWidth="2"
      />
      {/* Our indicator — the one small dot we add */}
      <circle cx="48" cy="38" r="5" fill="#c96442" />
    </svg>
  );
}

export function MemoryIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Three stacked layers, back to front, accumulating */}
      <rect
        x="18"
        y="8"
        width="36"
        height="24"
        rx="6"
        stroke="#c96442"
        strokeWidth="2"
        opacity="0.3"
      />
      <rect
        x="14"
        y="20"
        width="36"
        height="24"
        rx="6"
        stroke="#c96442"
        strokeWidth="2"
        opacity="0.6"
      />
      <rect
        x="10"
        y="32"
        width="36"
        height="24"
        rx="6"
        stroke="#c96442"
        strokeWidth="2"
      />
    </svg>
  );
}

export function PortableIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Input line — one prompt */}
      <line
        x1="4"
        y1="32"
        x2="18"
        y2="32"
        stroke="#c96442"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Fan-out branches — to every provider */}
      <path d="M 18 32 C 28 32, 42 12, 54 12" stroke="#c96442" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 18 32 C 28 32, 42 22, 54 22" stroke="#c96442" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="18" y1="32" x2="54" y2="32" stroke="#c96442" strokeWidth="2" strokeLinecap="round" />
      <path d="M 18 32 C 28 32, 42 42, 54 42" stroke="#c96442" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 18 32 C 28 32, 42 52, 54 52" stroke="#c96442" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Endpoint dots */}
      <circle cx="56" cy="12" r="3" fill="#c96442" />
      <circle cx="56" cy="22" r="3" fill="#c96442" />
      <circle cx="56" cy="32" r="3" fill="#c96442" />
      <circle cx="56" cy="42" r="3" fill="#c96442" />
      <circle cx="56" cy="52" r="3" fill="#c96442" />
    </svg>
  );
}
