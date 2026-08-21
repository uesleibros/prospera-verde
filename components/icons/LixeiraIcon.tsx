export function LixeiraIcon({ cor, className }: { cor: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 80" fill="none" className={className} aria-hidden="true">
      <ellipse cx="32" cy="14" rx="19" ry="4.5" fill={cor} stroke="rgba(0,0,0,0.28)" strokeWidth="1.5" />
      <path
        d="M15 15c0 2 3 6 17 6s17-4 17-6l-3 32c-.5 5-6 9-14 9s-13.5-4-14-9L15 15Z"
        fill={cor}
        stroke="rgba(0,0,0,0.28)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M22 22c1 14 1 22 2 32M32 22v32M42 22c-1 14-1 22-2 32" stroke="rgba(0,0,0,0.22)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M22 9c0-3 3-5 10-5s10 2 10 5" stroke="rgba(0,0,0,0.35)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <rect x="26" y="2" width="12" height="4" rx="1.5" fill="rgba(0,0,0,0.35)" />
    </svg>
  );
}
