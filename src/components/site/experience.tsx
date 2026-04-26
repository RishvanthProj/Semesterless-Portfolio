import { Reveal } from "./reveal";
import { SectionLabel } from "./section-divider";

const items = [
  {
    period: "2022 – Now",
    role: "Founder & Lead",
    org: "SEMESTERLESS",
    desc: "Founded and scaled a founder-led digital studio for local businesses. End-to-end web, e-commerce, social media, AI & consulting.",
  },
  {
    period: "2021 – 2022",
    role: "Freelancer & Webpage Design Builder",
    org: "Independent · Remote",
    desc: "Designed and built responsive websites and landing pages for small business owners across India. Focused on conversion-first UI and clean cloud deployments.",
  },
  {
    period: "2020 – 2021",
    role: "Freelancer & Certified No-Code Developer",
    org: "Local Clients · Tamil Nadu",
    desc: "Shipped no-code websites, automations and digital storefronts for early-stage clients while earning industry no-code certifications.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>// Journey</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            How We <span className="text-gradient">Got Here.</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 ml-2 md:ml-6">
          <div
            className="absolute left-3 top-0 h-full w-px md:left-4"
            style={{ background: "linear-gradient(to bottom, transparent, oklch(0.85 0.18 220 / 0.4), transparent)" }}
          />
          <ul className="flex flex-col gap-10">
            {items.map((it, i) => (
              <Reveal key={it.period} delay={i * 0.08}>
                <li className="relative pl-12 md:pl-16">
                  <span
                    className="pulse-ring absolute left-1.5 top-2 h-3.5 w-3.5 rounded-full bg-[color:var(--cyan)] md:left-2.5"
                    style={{ boxShadow: "0 0 18px oklch(0.85 0.18 220 / 0.8)" }}
                  />
                  <div className="glass hover-lift rounded-2xl p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--cyan)]">
                        {it.period}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold md:text-2xl">{it.role}</h3>
                    <div className="mt-1 text-sm text-white/60">{it.org}</div>
                    <p className="mt-4 text-white/70">{it.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}