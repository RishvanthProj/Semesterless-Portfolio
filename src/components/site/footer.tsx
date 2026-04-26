export function Footer() {
  return (
    <footer className="relative pt-12">
      <div
        className="mx-auto h-px max-w-7xl"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.85 0.18 220 / 0.6), transparent)", boxShadow: "0 0 16px oklch(0.85 0.18 220 / 0.4)" }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 text-sm text-white/60 md:grid-cols-3 md:py-12">
        <div>
          <div className="font-display text-xl font-bold text-white">SEMESTERLESS</div>
          <p className="mt-2 text-xs text-white/50">We Don't Wait for Semesters to Start.</p>
        </div>
        <div className="md:text-center">
          Built by <span className="text-white">Rishvanth A</span> · Tamil Nadu, India
        </div>
        <div className="md:text-right">
          <div>© 2025 SEMESTERLESS. All rights reserved.</div>
          <div className="mt-1 text-xs text-[color:var(--cyan)]">Available for Freelance</div>
        </div>
      </div>
    </footer>
  );
}