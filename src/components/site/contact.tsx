import { useState, type FormEvent } from "react";
import { Mail, MapPin, Briefcase, Github, Linkedin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-divider";

const DRIVE = "https://drive.google.com/drive/folders/1nkgf0TeMjfrtQ1yZYuSylM1EYT3HLgAu?usp=sharing";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent!", {
        description: "Thanks — Rishvanth will reply within 24 hours.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>// Let's Talk</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Ready to Grow <br className="hidden sm:block" />
            <span className="text-gradient">Your Business?</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <a href="mailto:rishvantha2005@gmail.com" className="glass hover-lift flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--cyan)]/15 text-[color:var(--cyan)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Email</div>
                  <div className="mt-1 text-base font-semibold text-white">rishvantha2005@gmail.com</div>
                </div>
              </a>
              <div className="glass flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--indigo)]/20 text-[color:var(--indigo)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Location</div>
                  <div className="mt-1 text-base font-semibold text-white">Tamil Nadu, India · Remote Worldwide</div>
                </div>
              </div>
              <a href={DRIVE} target="_blank" rel="noreferrer" className="glass hover-lift flex items-start gap-4 rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--cyan)]/15 text-[color:var(--cyan)]">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Works</div>
                  <div className="mt-1 text-base font-semibold text-white">View Portfolio on Drive ↗</div>
                </div>
              </a>
              <div className="mt-2 flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="glass hover-lift flex h-12 w-12 items-center justify-center rounded-xl text-white/80"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="glass hover-lift flex h-12 w-12 items-center justify-center rounded-xl text-white/80"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass flex flex-col gap-4 rounded-3xl p-7 md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="name" label="Your Name" />
                <Field name="email" label="Email Address" type="email" />
              </div>
              <Field name="service" label="Service Needed" />
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                  Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[color:var(--cyan)]/60 focus:bg-white/[0.06]"
                />
              </div>
              <button
                disabled={submitting}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--cyan)] py-4 text-sm font-bold text-[color:var(--background)] transition hover:brightness-110 disabled:opacity-70"
                style={{ boxShadow: "0 12px 32px -10px oklch(0.85 0.18 220 / 0.7)" }}
              >
                {submitting ? "Sending…" : "Send Message"} <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-white/50">
                Usually responds within 24 hours.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-widest text-white/50">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[color:var(--cyan)]/60 focus:bg-white/[0.06]"
      />
    </div>
  );
}