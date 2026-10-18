"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { links, profile } from "@/content/site";
import { useIntroDone, usePointer } from "@/lib/hooks";
import { useMotionPrefs } from "../providers/MotionPrefs";
import { CtaButton } from "../ui/CtaButton";
import { ArrowDown, ArrowRight } from "../ui/Icons";
import { Marquee } from "../ui/Marquee";
import { Picture } from "../ui/Picture";
import { SplitWords } from "../ui/SplitWords";
import { Bubble, CircleBadge, Sparkle, Squiggle } from "../ui/Stickers";

const chips = [
  { cls: "left-[-8%] top-[30%] bg-navy text-ivory -rotate-6", depth: 26 },
  { cls: "right-[-8%] top-[30%] bg-coral text-navy rotate-6", depth: -34 },
  { cls: "left-[-10%] top-[56%] bg-lavender text-navy rotate-3", depth: 40 },
  { cls: "right-[-4%] top-[66%] bg-sky text-navy -rotate-3", depth: -22 },
  { cls: "left-[18%] bottom-[-2%] bg-sage text-navy rotate-2", depth: 30 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const play = useIntroDone();
  const { scrollTo } = useMotionPrefs();
  const { x, y } = usePointer();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blobX = useTransform(x, (v) => v * -18);
  const blobY = useTransform(y, (v) => v * -18);
  const frameX = useTransform(x, (v) => v * 10);
  const frameY = useTransform(y, (v) => v * 10);
  const rotY = useTransform(x, (v) => v * 5);
  const rotX = useTransform(y, (v) => v * -4);
  const [bubble, setBubble] = useState(0);

  const appear = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: play ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <>
      <section ref={ref} id="utama" aria-label="Pengenalan" className="relative overflow-hidden bg-ivory pb-24 pt-28 sm:pt-32 lg:min-h-[100svh] lg:pb-28">
        {/* soft gradient field */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-sky/35 blur-[90px]" />
          <div className="absolute right-[-10rem] top-[-6rem] h-[38rem] w-[38rem] rounded-full bg-lavender/50 blur-[100px]" />
          <div className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-coral/20 blur-[100px]" />
        </div>

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
          {/* ---------- copy ---------- */}
          <motion.div style={{ y: textY, opacity: fade }} className="relative z-10">
            <motion.p {...appear(0)} className="inline-flex items-center gap-2 rounded-full bg-navy py-2 pl-2 pr-4 font-display text-xs font-bold tracking-[0.18em] text-ivory sm:text-sm">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-coral text-base" aria-hidden>
                <motion.span animate={{ rotate: [0, 18, -8, 18, 0] }} transition={{ duration: 1.6, delay: 1, repeat: Infinity, repeatDelay: 3 }} className="inline-block origin-bottom-right">
                  👋
                </motion.span>
              </span>
              {profile.hero.eyebrow}
            </motion.p>

            <SplitWords
              as="h1"
              play={play}
              delay={0.15}
              text={profile.hero.heading}
              className="mt-6 font-display text-giant font-extrabold text-navy"
              wordClassName={(w) => (profile.hero.highlight.includes(w) ? "relative text-coral" : undefined)}
            />
            <div className="relative -mt-2 h-4 w-[min(22rem,60vw)] text-coral sm:-mt-3 sm:h-5" aria-hidden>
              {play && <Squiggle className="h-full w-full" />}
            </div>

            <motion.p {...appear(0.6)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
              {profile.hero.body}
            </motion.p>

            <motion.p {...appear(0.8)} className="mt-6 flex max-w-xl items-start gap-3 font-display text-lg font-bold text-navy sm:text-xl">
              <Sparkle className="mt-1 h-5 w-5 shrink-0 animate-spinslow text-coral" />
              <span>
                Ilmu Tentang <span className="bg-gradient-to-r from-lavender to-sky bg-[length:100%_40%] bg-bottom bg-no-repeat">Memahami Manusia.</span>
              </span>
            </motion.p>

            <motion.div {...appear(1)} className="mt-9 flex flex-wrap gap-3">
              <CtaButton
                href="#kenali"
                external={false}
                variant="navy"
                magnetic
                icon={<ArrowRight width={16} height={16} />}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("kenali");
                }}
              >
                Kenali Dr Azren
              </CtaButton>
              <CtaButton href={links.book} variant="coral" magnetic>
                Dapatkan Buku Saya
              </CtaButton>
              <CtaButton href={links.talk} variant="ghost" magnetic>
                Jemput Saya Berceramah
              </CtaButton>
            </motion.div>
          </motion.div>

          {/* ---------- portrait stage ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: portraitY }}
            className="relative mx-auto w-full max-w-[25rem] [perspective:1200px] sm:max-w-[28rem] lg:max-w-[32rem]"
          >
            <motion.div aria-hidden style={{ x: blobX, y: blobY }} className="absolute inset-[-6%] animate-morph bg-coral/90" />
            <motion.div aria-hidden style={{ x: blobX, y: blobY }} className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-lavender sm:h-36 sm:w-36" />

            <motion.div style={{ x: frameX, y: frameY, rotateY: rotY, rotateX: rotX }} className="relative [transform-style:preserve-3d]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-b-[2.5rem] rounded-t-full border-[6px] border-ivory bg-[#e9e9e9] shadow-lift">
                <Picture photo={profile.portrait} priority sizes="(min-width:1024px) 32rem, 90vw" imgClassName="scale-[1.08]" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/35 to-transparent" />
                <p className="absolute bottom-5 left-0 right-0 text-center font-display text-sm font-bold tracking-[0.3em] text-ivory">DR FAKRUL AZREN</p>
              </div>

              {/* draggable floating words */}
              {profile.hero.floatingWords.map((w, i) => (
                <FloatingChip key={w} word={w} index={i} px={x} py={y} />
              ))}

              {/* interactive speech bubble */}
              <motion.button
                type="button"
                onClick={() => setBubble((b) => (b + 1) % profile.hero.bubbles.length)}
                whileTap={{ scale: 0.94 }}
                className="absolute -left-4 top-[3%] z-20 max-w-[15rem] text-left sm:-left-12"
                aria-label="Mesej seterusnya"
              >
                <Bubble className="bg-ivory text-sm text-navy sm:text-base">
                  <motion.span key={bubble} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="block">
                    {profile.hero.bubbles[bubble]}
                  </motion.span>
                  <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-widest text-coral">klik saya ↻</span>
                </Bubble>
              </motion.button>

              <CircleBadge
                text="Bicara Jiwa • Sebarkan Ilmu • Bina Harapan • "
                className="absolute -bottom-8 -right-4 z-20 h-28 w-28 rounded-full bg-navy text-ivory shadow-lift sm:-right-10 sm:h-36 sm:w-36"
                center={<Sparkle className="h-8 w-8 text-coral" />}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* mobile chip row (floating words) */}
        <div className="container-x relative mt-14 flex flex-wrap justify-center gap-2 sm:hidden" aria-hidden>
          {profile.hero.floatingWords.map((w, i) => (
            <span key={w} className={`rounded-full px-3 py-1.5 font-display text-[0.65rem] font-extrabold tracking-[0.14em] ${chips[i].cls.split(" ").filter((c) => c.startsWith("bg-") || c.startsWith("text-")).join(" ")}`}>
              {w}
            </span>
          ))}
        </div>

        <motion.button
          type="button"
          onClick={() => scrollTo("kenali")}
          style={{ opacity: fade }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-navy/60 lg:flex"
        >
          Skrol untuk teroka <ArrowDown width={14} height={14} className="animate-bounce" />
        </motion.button>
      </section>

      <div className="relative z-10 -rotate-[1.5deg] bg-navy py-5 text-ivory shadow-lift">
        <Marquee>
          {["Bicara Jiwa", "Sebarkan Ilmu", "Bina Harapan", "Kesihatan Mental, Kita Bincang Sama-Sama", "Spread Positivity"].map((t) => (
            <span key={t} className="flex items-center gap-8 px-4 font-display text-2xl font-extrabold uppercase tracking-tight sm:text-4xl">
              {t} <Sparkle className="h-6 w-6 text-coral" />
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}

/** A word sticker that drifts with the cursor and can be dragged (it springs back). */
function FloatingChip({ word, index, px, py }: { word: string; index: number; px: MotionValue<number>; py: MotionValue<number> }) {
  const c = chips[index % chips.length];
  const x = useTransform(px, (v) => v * c.depth * 0.6);
  const y = useTransform(py, (v) => v * c.depth * 0.4);
  return (
    <motion.span style={{ x, y }} className={`absolute z-10 hidden sm:block ${c.cls.split(" ").filter((k) => /^(left|right|top|bottom)-/.test(k)).join(" ")}`} aria-hidden>
      <motion.span
        drag
        dragSnapToOrigin
        dragElastic={0.6}
        whileHover={{ scale: 1.08 }}
        whileDrag={{ scale: 1.15, cursor: "grabbing" }}
        className={`block cursor-grab select-none whitespace-nowrap rounded-full px-4 py-2 font-display text-[0.7rem] font-extrabold tracking-[0.14em] shadow-soft sm:text-xs ${c.cls
          .split(" ")
          .filter((k) => !/^(left|right|top|bottom)-/.test(k))
          .join(" ")}`}
      >
        <span className="inline-block animate-floaty" style={{ animationDelay: `${index * 0.7}s` }}>
          {word}
        </span>
      </motion.span>
    </motion.span>
  );
}
