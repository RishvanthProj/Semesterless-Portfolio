import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
          <a href="#top" className="group flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight md:text-2xl">
              SEMESTERLESS
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyan)]" style={{ boxShadow: "0 0 12px oklch(0.85 0.18 220)" }} />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm text-white/80 transition hover:text-white"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--cyan)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-[color:var(--cyan)] px-5 py-2 text-sm font-semibold text-[color:var(--background)] transition hover:brightness-110 md:inline-block"
              style={{ boxShadow: "0 8px 24px -8px oklch(0.85 0.18 220 / 0.6)" }}
            >
              Hire Us
            </a>
            <button
              onClick={() => setOpen(true)}
              className="rounded-full border border-white/10 p-2 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-[color:var(--background)]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold">SEMESTERLESS</span>
                <button onClick={() => setOpen(false)} className="rounded-full border border-white/10 p-2" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-16 flex flex-col gap-8">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-4xl font-bold"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-[color:var(--cyan)] py-4 text-center font-semibold text-[color:var(--background)]"
              >
                Hire Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}