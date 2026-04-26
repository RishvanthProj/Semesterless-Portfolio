import { Code2, ShoppingBag, Megaphone, PenLine, Bot, ShieldCheck, Dumbbell } from "lucide-react";
import { Reveal, RevealStagger, revealItem } from "./reveal";
import { SectionLabel } from "./section-divider";
import { motion } from "framer-motion";

const services = [
  { icon: Code2, name: "Web Dev", desc: "Lightning-fast websites & web apps engineered to convert.", grad: "linear-gradient(135deg, #00D4FF, #6366F1)" },
  { icon: ShoppingBag, name: "E-Commerce", desc: "Full-stack stores with payments, inventory & dashboards.", grad: "linear-gradient(135deg, #6366F1, #8B5CF6)" },
  { icon: Megaphone, name: "Social Media", desc: "Strategy, content & community that compounds growth.", grad: "linear-gradient(135deg, #00D4FF, #4F46E5)" },
  { icon: PenLine, name: "Copywriting", desc: "Words that sell — landing pages, ads & email funnels.", grad: "linear-gradient(135deg, #7C3AED, #00D4FF)" },
  { icon: Bot, name: "AI & Automation", desc: "Smart workflows that save hours every single week.", grad: "linear-gradient(135deg, #6366F1, #00D4FF)" },
  { icon: ShieldCheck, name: "Ethical Hacking", desc: "Web security audits, vulnerability scans & hardening.", grad: "linear-gradient(135deg, #4F46E5, #00D4FF)" },
  { icon: Dumbbell, name: "Fitness Coaching", desc: "1:1 coaching, custom plans & progress tracking.", grad: "linear-gradient(135deg, #00D4FF, #8B5CF6)" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>// What We Do</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Services that <span className="text-gradient">Move the Needle.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base text-white/65 md:text-lg">
            Seven specialised offerings — one team. Pick what you need, or stack them for an
            unfair advantage.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                variants={revealItem}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="glass hover-lift group relative overflow-hidden rounded-2xl p-6"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition group-hover:opacity-60"
                  style={{ background: s.grad }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-xl text-white"
                  style={{ background: s.grad, boxShadow: "0 10px 24px -10px oklch(0.85 0.18 220 / 0.5)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-display text-xl font-bold">{s.name}</h3>
                <p className="relative mt-2 text-sm text-white/65">{s.desc}</p>
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}