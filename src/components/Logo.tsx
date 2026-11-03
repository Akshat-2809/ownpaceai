export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="17" fill="#10291F" />
      <path d="M7 26 L15 14 L19 19 L23 12 L29 26 Z" fill="#E7EEE9" />
      <path d="M9 29 C14 24 20 27 27 21" fill="none" style={{ stroke: "var(--accent)" }} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  );
}
