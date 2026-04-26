import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-divider";

const skills = [
  { icon: "🎨", name: "HTML/CSS", value: 92, desc: "Pixel-perfect responsive interfaces" },
  { icon: "⚛️", name: "React.js", value: 85, desc: "Dynamic component-driven UIs" },
  { icon: "🟢", name: "Node.js", value: 80, desc: "Scalable backends & REST APIs" },
  { icon: "☕", name: "Java", value: 75, desc: "Enterprise-grade OOP solutions" },
  { icon: "🐍", name: "Python", value: 78, desc: "Automation, scripts & backend logic" },
  { icon: "☁️", name: "Cloud & DNS", value: 70, desc: "Deployment, domain & infrastructure" },
  { icon: "🤖", name: "AI Prompt Mastery", value: 90, desc: "Supercharging workflows with AI" },
  { icon: "🛡️", name: "Ethical Hacking", value: 72, desc: "Web security & vulnerability auditing" },
];

function SkillCard({ s, i }: { s: (typeof skills)[number]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
      className="glass hover-lift group rounded-2xl p-6"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl">
          {s.icon}
        </div>
        <span className="font-mono text-sm text-[color:var(--cyan)]">{s.value}%</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">{s.name}</h3>
      <p className="mt-1 text-sm text-white/60">{s.desc}</p>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${s.value}%` } : {}}
          transition={{ duration: 1.2, delay: i * 0.06 + 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-text)", boxShadow: "0 0 12px oklch(0.85 0.18 220 / 0.6)" }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>// Our Stack</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Built with the <span className="text-gradient">Best Tools</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <SkillCard key={s.name} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}