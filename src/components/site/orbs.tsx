export function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="animate-float-orb absolute -left-32 top-10 h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
        style={{ background: "var(--gradient-orb-cyan)" }}
      />
      <div
        className="animate-float-orb-2 absolute -right-40 top-[40%] h-[600px] w-[600px] rounded-full blur-3xl opacity-50"
        style={{ background: "var(--gradient-orb-indigo)" }}
      />
      <div
        className="animate-float-orb absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: "var(--gradient-orb-cyan)" }}
      />
    </div>
  );
}