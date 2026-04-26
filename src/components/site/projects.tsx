import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, revealItem } from "./reveal";
import { SectionLabel } from "./section-divider";
import { motion } from "framer-motion";
import projectEcom from "@/assets/project-ecom.png";
import projectFitness from "@/assets/project-fitness.jpg";
import projectBrand from "@/assets/project-brand.png";
import projectRestaurant from "@/assets/project-restaurant.png";
import projectSocialmedia from "@/assets/project-socialmedia.png";
import projectPortfolio from "@/assets/project-portfolio.png";

const DRIVE = "https://drive.google.com/drive/folders/1nkgf0TeMjfrtQ1yZYuSylM1EYT3HLgAu?usp=sharing";

const projects = [
  {
    n: "01",
    name: "Brand & Web Suite",
    desc: "End-to-end branding, website and digital presence built for a local client.",
    tags: ["Branding", "Webpage", "Identity"],
    grad: "linear-gradient(135deg, #00D4FF, #6366F1)",
    img: projectBrand,
  },
  {
    n: "02",
    name: "Restaurant Online Ordering",
    desc: "Menu, order flow and WhatsApp checkout for a Tamil Nadu eatery.",
    tags: ["Web", "WhatsApp", "Local"],
    grad: "linear-gradient(135deg, #6366F1, #8B5CF6)",
    img: projectRestaurant,
  },
  {
    n: "03",
    name: "E-Commerce Store",
    desc: "Catalog, payments and admin dashboard for a fashion boutique.",
    tags: ["E-Commerce", "Payments", "Admin"],
    grad: "linear-gradient(135deg, #00D4FF, #4F46E5)",
    img: projectEcom,
  },
  {
    n: "04",
    name: "Fitness Coaching - 1:1 PT",
    desc: "High-converting page with lead capture and client onboarding flow.",
    tags: ["Landing", "Coaching", "Leads"],
    grad: "linear-gradient(135deg, #7C3AED, #00D4FF)",
    img: projectFitness,
    fit: "contain" as const,
  },
  {
    n: "05",
    name: "Social Media Content Engine",
    desc: "Reels, posts and ad creatives that scaled a local brand's reach.",
    tags: ["SMMA", "Content", "Ads"],
    grad: "linear-gradient(135deg, #6366F1, #00D4FF)",
    img: projectSocialmedia,
  },
  {
    n: "06",
    name: "Portfolio & Personal Brand Sites",
    desc: "Founder-grade portfolios for creators, coaches and consultants.",
    tags: ["Portfolio", "Branding", "SEO"],
    grad: "linear-gradient(135deg, #4F46E5, #00D4FF)",
    img: projectPortfolio,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>// Our Work</SectionLabel>
        </Reveal>
        <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Projects That <span className="text-gradient">Speak.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={DRIVE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[color:var(--cyan)]"
            >
              Explore our works on Google Drive <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.n}
              variants={revealItem}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="glass hover-lift group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative h-48 overflow-hidden" style={{ background: p.grad }}>
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${p.fit === "contain" ? "object-contain" : "object-cover"
                      }`}
                  />
                ) : (
                  <div className="dot-grid absolute inset-0 opacity-30" />
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[color:var(--background)]/80 to-transparent" />
                <span className="absolute left-5 top-4 font-mono text-xs text-white/80">{p.n}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold leading-snug">{p.name}</h3>
                <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={DRIVE}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--cyan)] transition group-hover:gap-2.5"
                >
                  View Project <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}