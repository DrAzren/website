"use client";

import { motion } from "framer-motion";
import { consultation, links } from "@/content/site";
import { CtaButton } from "../ui/CtaButton";
import { Calendar, Check, Phone, Stethoscope } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { Sparkle } from "../ui/Stickers";

export function Consultation() {
  const c = consultation;
  return (
    <section id="konsultasi" aria-labelledby="konsultasi-tajuk" className="sheet z-10 overflow-hidden bg-gradient-to-b from-ivory to-[#e3eee6] py-24 text-navy sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full bg-sage/50 blur-[90px]" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-coral-600">Konsultasi · {c.clinic}</p>
            </Reveal>
            <SplitWords id="konsultasi-tajuk" text={c.heading} className="mt-5 text-giant font-extrabold" />
            <Reveal delay={0.1}>
              <p className="mt-6 font-display text-2xl font-bold text-navy/80 sm:text-3xl">{c.subheading}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">{c.body}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-navy/5">
            <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-sage">
              <Stethoscope width={18} height={18} className="text-navy" /> Perkhidmatan
            </p>
            <ul className="mt-4 space-y-3">
              {c.services.map((s) => (
                <li key={s} className="flex items-start gap-3 font-semibold">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage text-navy">
                    <Check width={14} height={14} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            {c.location && <p className="mt-5 border-t border-navy/10 pt-4 text-sm text-ink/70">📍 {c.location}</p>}
          </Reveal>
        </div>

        {/* 3-step guide */}
        <ol className="relative mt-20 grid gap-4 md:grid-cols-3">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            className="absolute left-[8%] right-[8%] top-10 hidden h-[3px] origin-left rounded-full bg-gradient-to-r from-coral via-lavender to-sage md:block"
          />
          {c.steps.map((s, i) => (
            <Reveal key={s.title} as="li" delay={0.15 * i} className="relative">
              <div className="h-full rounded-[1.75rem] bg-white/80 p-6 shadow-soft backdrop-blur">
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-navy font-display text-3xl font-extrabold text-ivory">
                  {i + 1}
                  {i === 0 && <Calendar width={20} height={20} className="absolute -right-1 -top-1 rounded-full bg-coral p-0.5 text-navy" />}
                </span>
                <p className="mt-5 font-display text-2xl font-extrabold">{s.title}</p>
                <p className="mt-2 leading-relaxed text-ink/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <CtaButton href={links.consultation} variant="coral" size="lg" magnetic>
              {c.cta}
            </CtaButton>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/60">
              Tempahan dibuat melalui sistem tempahan rasmi {c.clinic}. {c.note}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <aside aria-labelledby="krisis-tajuk" className="relative overflow-hidden rounded-[1.75rem] bg-navy p-6 text-ivory sm:p-7">
              <Sparkle className="absolute -right-4 -top-4 h-16 w-16 text-coral/30" />
              <h3 id="krisis-tajuk" className="flex items-center gap-2 text-xl font-extrabold">
                <Phone width={20} height={20} className="text-coral" /> {c.crisis.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/75">{c.crisis.body}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                {c.crisis.lines.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="block rounded-2xl bg-ivory/10 px-4 py-3 transition hover:bg-coral hover:text-navy">
                      <span className="block text-xs font-semibold opacity-75">{l.label}</span>
                      <span className="font-display text-lg font-extrabold">{l.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
