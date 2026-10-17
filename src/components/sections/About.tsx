"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/content/site";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { Bubble, Sparkle } from "../ui/Stickers";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-7, 4]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="kenali" aria-labelledby="kenali-tajuk" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div aria-hidden className="absolute -right-40 top-20 h-[30rem] w-[30rem] animate-morph bg-lavender/40 blur-2xl" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div style={{ rotate, y }} className="relative mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] bg-white p-3 pb-16 shadow-lift">
            <div className="aspect-square overflow-hidden rounded-[1.4rem] bg-[#f1efe9]">
              <Picture photo={profile.portraitFormal} sizes="(min-width:1024px) 24rem, 80vw" />
            </div>
            <p className="absolute bottom-5 left-0 right-0 text-center font-display text-lg font-extrabold text-navy">
              Dr Fakrul Azren <span className="text-coral">✦</span>
            </p>
          </div>
          <Bubble tail="right" className="absolute -right-4 -top-8 rotate-3 bg-coral text-navy sm:-right-12">
            Hai, selamat datang!
          </Bubble>
          <Sparkle className="absolute -bottom-6 -left-6 h-12 w-12 animate-spinslow text-sky" />
        </motion.div>

        <div>
          <Reveal>
            <p className="eyebrow text-coral">Kenali Saya</p>
          </Reveal>
          <SplitWords id="kenali-tajuk" text={profile.about.heading} className="mt-4 text-huge font-extrabold text-navy" />
          {profile.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy/60">{profile.descriptor}</p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {profile.about.credentials.map((c, i) => (
              <Reveal key={c.label} delay={0.08 * i} className="rounded-3xl bg-navy p-5 text-ivory shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lavender">{c.label}</p>
                <p className="mt-2 font-display text-lg font-extrabold leading-tight">{c.value}</p>
                <p className="mt-2 text-sm text-ivory/60">{c.note}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {profile.about.roles.map((r) => (
                <li key={r.org} className="glass flex items-start gap-3 rounded-2xl p-4">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-coral" />
                  <span>
                    <span className="block font-display font-bold text-navy">{r.title}</span>
                    <span className="block text-sm text-ink/70">
                      {r.org}
                      {r.note ? ` — ${r.note}` : ""}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
