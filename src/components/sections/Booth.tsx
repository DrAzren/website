"use client";

import { motion } from "framer-motion";
import { booth, links, programEvents } from "@/content/site";
import { CtaButton } from "../ui/CtaButton";
import { Brain, Chat, Clipboard, Heart, Whatsapp } from "../ui/Icons";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";

const floaters = [
  { Icon: Heart, cls: "left-[4%] top-[8%] bg-coral" },
  { Icon: Brain, cls: "right-[6%] top-[4%] bg-lavender" },
  { Icon: Chat, cls: "left-[-2%] top-[46%] bg-ivory" },
  { Icon: Clipboard, cls: "right-[-2%] top-[40%] bg-sage" },
];

function BoothIllustration() {
  const stripes = Array.from({ length: 8 });
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      {floaters.map(({ Icon, cls }, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`absolute z-10 grid h-14 w-14 place-items-center rounded-2xl text-navy shadow-soft ${cls}`}
          animate={{ y: [0, -14, 0], rotate: [0, i % 2 ? 8 : -8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          <Icon width={26} height={26} />
        </motion.span>
      ))}
      <svg viewBox="0 0 500 440" className="relative w-full" role="img" aria-label="Ilustrasi booth saringan kesihatan mental">
        <ellipse cx="250" cy="415" rx="210" ry="18" fill="#172A3A" opacity="0.15" />
        {/* posts */}
        <rect x="88" y="120" width="12" height="290" rx="4" fill="#172A3A" />
        <rect x="400" y="120" width="12" height="290" rx="4" fill="#172A3A" />
        {/* back banner */}
        <rect x="110" y="150" width="280" height="120" rx="14" fill="#F8F5EF" />
        <text x="250" y="200" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="26" fill="#172A3A">
          JOM SEMBANG!
        </text>
        <text x="250" y="232" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="15" fill="#FF775E">
          Kesihatan Mental, Kita Bincang
        </text>
        {/* awning */}
        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M70 70 Q250 20 430 70 L430 120 L70 120 Z" fill="#172A3A" />
          {stripes.map((_, i) => {
            const x = 70 + i * 45;
            return <path key={i} d={`M${x} 118 h45 v8 a22.5 22.5 0 0 1 -45 0 Z`} fill={i % 2 ? "#F8F5EF" : "#FF775E"} />;
          })}
        </motion.g>
        {/* table */}
        <rect x="60" y="300" width="380" height="18" rx="6" fill="#172A3A" />
        <path d="M70 318 h360 l-12 92 h-336 Z" fill="#FF775E" />
        <text x="250" y="360" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="17" fill="#172A3A" letterSpacing="1.5">
          SARINGAN KESIHATAN MENTAL
        </text>
        <text x="250" y="385" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="12" fill="#172A3A" opacity="0.7">
          bersama Dr Azren
        </text>
        {/* clipboard + mug + plant on table */}
        <rect x="120" y="262" width="44" height="40" rx="5" fill="#C8BCF5" transform="rotate(-8 142 282)" />
        <rect x="128" y="270" width="28" height="4" rx="2" fill="#172A3A" transform="rotate(-8 142 282)" />
        <rect x="128" y="280" width="20" height="4" rx="2" fill="#172A3A" transform="rotate(-8 142 282)" />
        <rect x="330" y="272" width="26" height="30" rx="6" fill="#9AD6EF" />
        <path d="M356 280 q12 6 0 14" stroke="#9AD6EF" strokeWidth="5" fill="none" />
        <motion.g animate={{ rotate: [-3, 3, -3] }} style={{ originX: "250px", originY: "300px" }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="236" y="276" width="28" height="26" rx="5" fill="#F8F5EF" />
          <path d="M250 276 c-14 -20 -6 -34 0 -36 c6 2 14 16 0 36Z" fill="#A8C8B2" />
          <path d="M250 276 c-22 -8 -26 -22 -22 -26 c8 0 22 10 22 26Z" fill="#A8C8B2" />
          <path d="M250 276 c22 -8 26 -22 22 -26 c-8 0 -22 10 -22 26Z" fill="#A8C8B2" />
        </motion.g>
      </svg>
    </div>
  );
}

export function Booth() {
  const photos = programEvents.filter((e) => e.image && e.categories.includes("saringan")).slice(0, 2);
  return (
    <section id="booth" aria-labelledby="booth-tajuk" className="sheet z-10 overflow-hidden bg-sky py-24 text-navy sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-[26rem] w-[26rem] animate-morph bg-[#b7e3f5]" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <BoothIllustration />
          {photos.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3">
              {photos.map((p) => (
                <figure key={p.id} className="overflow-hidden rounded-2xl bg-ivory shadow-soft">
                  <div className="aspect-[4/3]">
                    <Picture photo={p.image!} sizes="(min-width:1024px) 16rem, 45vw" />
                  </div>
                  <figcaption className="p-3 text-xs font-semibold">{p.organizer ?? p.title}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Booth Saringan</p>
          </Reveal>
          <SplitWords id="booth-tajuk" text={booth.heading} className="mt-5 text-huge font-extrabold" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/80">{booth.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {booth.occasions.map((o) => (
                <li key={o} className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-ivory">
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {booth.features.map((f, i) => (
              <Reveal key={f.title} delay={0.08 * i}>
                <motion.div whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }} className="glass h-full rounded-3xl p-5">
                  <p className="font-display text-lg font-extrabold">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy/75">{f.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 flex gap-3 rounded-2xl border-2 border-navy/15 bg-ivory/60 p-4 text-sm leading-relaxed">
              <span aria-hidden className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-ivory">
                i
              </span>
              <span>{booth.disclaimer}</span>
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <CtaButton href={links.booth} variant="navy" size="lg" magnetic icon={<Whatsapp width={16} height={16} />}>
              {booth.cta}
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
