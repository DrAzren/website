"use client";

import { motion } from "framer-motion";
import { collaboration, links } from "@/content/site";
import { CtaButton } from "../ui/CtaButton";
import { iconByName, Whatsapp } from "../ui/Icons";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { Sparkle } from "../ui/Stickers";

/** Playful "3D" studio microphone, drawn in SVG with soft gradients. */
function MicArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 260" className={className} aria-hidden>
      <defs>
        <linearGradient id="mic-head" x1="0" x2="1">
          <stop offset="0" stopColor="#2E4A61" />
          <stop offset="0.45" stopColor="#5a7a94" />
          <stop offset="1" stopColor="#172A3A" />
        </linearGradient>
        <linearGradient id="mic-body" x1="0" x2="1">
          <stop offset="0" stopColor="#E85E45" />
          <stop offset="0.4" stopColor="#FF9A85" />
          <stop offset="1" stopColor="#E85E45" />
        </linearGradient>
      </defs>
      <rect x="40" y="10" width="80" height="120" rx="40" fill="url(#mic-head)" />
      {[38, 56, 74, 92, 110].map((y) => (
        <rect key={y} x="48" y={y} width="64" height="4" rx="2" fill="#F8F5EF" opacity="0.25" />
      ))}
      <ellipse cx="62" cy="40" rx="8" ry="16" fill="#fff" opacity="0.25" />
      <rect x="54" y="128" width="52" height="70" rx="14" fill="url(#mic-body)" />
      <path d="M24 92 v20 a56 56 0 0 0 112 0 v-20" fill="none" stroke="#172A3A" strokeWidth="8" strokeLinecap="round" />
      <rect x="74" y="196" width="12" height="40" fill="#172A3A" />
      <ellipse cx="80" cy="244" rx="46" ry="12" fill="#172A3A" />
    </svg>
  );
}

function CameraArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 170" className={className} aria-hidden>
      <defs>
        <linearGradient id="cam-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d5ccfb" />
          <stop offset="1" stopColor="#a796ee" />
        </linearGradient>
        <radialGradient id="cam-lens" cx="0.4" cy="0.35">
          <stop offset="0" stopColor="#9AD6EF" />
          <stop offset="0.5" stopColor="#2E4A61" />
          <stop offset="1" stopColor="#172A3A" />
        </radialGradient>
      </defs>
      <rect x="20" y="40" width="180" height="116" rx="26" fill="url(#cam-body)" />
      <rect x="70" y="20" width="70" height="30" rx="10" fill="#172A3A" />
      <circle cx="110" cy="98" r="46" fill="#F8F5EF" />
      <circle cx="110" cy="98" r="36" fill="url(#cam-lens)" />
      <circle cx="96" cy="84" r="9" fill="#fff" opacity="0.6" />
      <circle cx="172" cy="62" r="8" fill="#FF775E" />
      <rect x="34" y="56" width="26" height="12" rx="6" fill="#172A3A" opacity="0.6" />
    </svg>
  );
}

export function Collaboration() {
  return (
    <section id="kolaborasi" aria-labelledby="kolaborasi-tajuk" className="sheet z-10 overflow-hidden bg-ivory py-24 text-navy sm:py-32">
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-coral-600">Kolaborasi</p>
            </Reveal>
            <SplitWords id="kolaborasi-tajuk" text={collaboration.heading} className="mt-5 text-giant font-extrabold" />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">{collaboration.body}</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <CtaButton href={links.collaboration} variant="navy" size="lg" magnetic icon={<Whatsapp width={16} height={16} />}>
                {collaboration.cta}
              </CtaButton>
            </Reveal>
          </div>
          <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
            <motion.div
              className="absolute left-4 top-0 w-28 sm:w-32"
              animate={{ y: [0, -18, 0], rotate: [-10, -4, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MicArt className="w-full drop-shadow-[0_30px_30px_rgba(23,42,58,0.25)]" />
            </motion.div>
            <motion.div
              className="absolute bottom-2 right-0 w-44 sm:w-52"
              animate={{ y: [0, 14, 0], rotate: [8, 2, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <CameraArt className="w-full drop-shadow-[0_30px_30px_rgba(23,42,58,0.25)]" />
            </motion.div>
            <Sparkle className="absolute right-10 top-6 h-10 w-10 animate-spinslow text-coral" />
            <Sparkle className="absolute bottom-10 left-6 h-6 w-6 animate-spinslow text-sky" />
          </div>
        </div>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {collaboration.cards.map((c, i) => {
            const Icon = iconByName[c.icon as keyof typeof iconByName];
            const tones = ["bg-lavender", "bg-sky", "bg-coral", "bg-sage", "bg-sun", "bg-lavender"];
            return (
              <Reveal key={c.title} as="li" delay={(i % 3) * 0.08}>
                <a
                  href={links.collaboration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full items-start gap-4 overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-navy/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-navy transition duration-500 group-hover:-rotate-12 group-hover:scale-110 ${tones[i]}`}>
                    <Icon width={26} height={26} />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-extrabold">{c.title}</span>
                    <span className="mt-1 block text-ink/70">{c.body}</span>
                  </span>
                  <span className="absolute right-5 top-5 text-navy/30 transition group-hover:text-coral" aria-hidden>
                    ↗
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
