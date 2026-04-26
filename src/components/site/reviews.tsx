import { Star } from "lucide-react";
import { Reveal, RevealStagger, revealItem } from "./reveal";
import { SectionLabel } from "./section-divider";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Rishvanth completely transformed our online presence. Our new e-commerce site is beautiful and actually converts — sales up 40% in the first month.",
    name: "Kavitha R.",
    role: "Owner · KR Textiles, Coimbatore",
    initials: "KR",
  },
  {
    text: "The landing page brought in 3× more leads than our old website. He understands both tech and marketing — a rare combo. Highly recommend!",
    name: "Vinod M.",
    role: "Founder · FitCore Gym, Erode",
    initials: "VM",
  },
  {
     text: "Best Fitness Trainer, Helped me lose 13Kgs in 3 months.",
    name: "Dhayanithi S.",
    role: "Student - Fitness",
    initials: "D",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>// Reviews</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            What <span className="text-gradient">Clients Say.</span>
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={revealItem}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="glass hover-lift relative flex flex-col rounded-2xl p-7"
            >
              <span
                aria-hidden
                className="font-display absolute right-5 top-2 text-7xl leading-none text-[color:var(--cyan)]/30"
              >
                "
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[color:var(--cyan)] text-[color:var(--cyan)]" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-white/80 italic leading-relaxed">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full font-semibold text-[color:var(--background)]"
                  style={{ background: "var(--gradient-text)" }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{r.name}</div>
                  <div className="text-xs text-white/60">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
