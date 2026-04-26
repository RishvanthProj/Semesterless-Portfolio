import { Reveal } from "./reveal";
import { SectionLabel } from "./section-divider";
import rishLogo from "@/assets/rish-logo.jpg";

const tags = [
  "Web Dev",
  "E-Commerce",
  "Social Media",
  "Copywriting",
  "AI & Automation",
  "Ethical Hacking",
  "Fitness Coaching",
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-square w-full max-w-md">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "conic-gradient(from 120deg, oklch(0.85 0.18 220), oklch(0.62 0.20 285), oklch(0.85 0.18 220))",
                padding: "1.5px",
              }}
            >
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-[color:var(--background)]">
                <div className="dot-grid absolute inset-0 opacity-40" />
                <div
                  className="absolute -inset-10 opacity-50 blur-3xl"
                  style={{ background: "var(--gradient-orb-cyan)" }}
                />
                <img
                  src={rishLogo}
                  alt="Rish SMMA — Rishvanth A logo"
                  className="relative z-10 h-[78%] w-[78%] rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-white/70">
                  Est. 2022
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel>// About Us</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Not a course. Not a college.{" "}
              <span className="text-gradient">Just Results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                SEMESTERLESS was born from the belief that your semester doesn't determine your
                success. We're a founder-led digital studio based in Tamil Nadu, India, working with
                small and local businesses to give them an unfair online advantage.
              </p>
              <p>
                We don't just build websites. We build growth engines — landing pages that convert,
                e-commerce stores that scale, social media strategies that engage, and systems that
                work while you sleep.
              </p>
              <p>
                Led by <span className="text-white">Rishvanth A</span>, our team combines full stack
                development, AI automation, ethical security, and marketing — all under one roof.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="glass rounded-full px-4 py-2 text-xs font-medium text-white/80 transition hover:border-[color:var(--cyan)]/60 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}