export function SectionDivider() {
  return (
    <div className="relative mx-auto my-10 h-px w-full max-w-7xl bg-white/10">
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[color:var(--cyan)]" style={{ boxShadow: "0 0 16px oklch(0.85 0.18 220 / 0.7)" }} />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--cyan)]">
      {children}
    </div>
  );
}