import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const DRIVE = "https://drive.google.com/drive/folders/1nkgf0TeMjfrtQ1yZYuSylM1EYT3HLgAu?usp=sharing";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "Live Projects" },
  { value: "10+", label: "Happy Clients" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32">
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--cyan)]"
        >
          Available for Freelance Projects
        </motion.div>

        <h1 className="mt-6 font-display font-bold leading-[0.95] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="block text-[clamp(2.75rem,9vw,7.5rem)]"
          >
            SEMESTERLESS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="text-gradient mt-2 block text-[clamp(2rem,6vw,5rem)]"
          >
            We Build. We Grow.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="block text-[clamp(2rem,6vw,5rem)] text-white"
          >
            We Deliver.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 max-w-2xl text-base text-white/70 md:text-lg"
        >
          A lean, founder-led studio helping small &amp; local businesses grow through stunning
          web experiences, e-commerce, social media, and digital strategy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-4 text-sm text-white/50"
        >
          Founded &amp; Led by{" "}
          <span className="text-white">Rishvanth A</span>
          <br />
          Freelancer &amp; Business Growth Strategist cum professor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={DRIVE}
            target="_blank"
            rel="noreferrer"
            className="shine inline-flex items-center gap-2 rounded-full bg-[color:var(--cyan)] px-7 py-3.5 text-sm font-semibold text-[color:var(--background)] transition hover:brightness-110"
            style={{ boxShadow: "0 12px 32px -8px oklch(0.85 0.18 220 / 0.6)" }}
          >
            View Our Works <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[color:var(--cyan)]/60 hover:bg-white/10"
          >
            Let's Talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-5 py-4">
              <div className="font-display text-2xl font-bold text-white md:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-white/60 md:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>


    </section>
  );
}