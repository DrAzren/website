"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { book, links } from "@/content/site";
import { usePointer } from "@/lib/hooks";
import { CtaButton } from "../ui/CtaButton";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { CircleBadge, Sparkle } from "../ui/Stickers";

const themePos = [
  "left-[-4%] top-[8%] bg-navy text-ivory -rotate-6",
  "right-[-6%] top-[42%] bg-coral text-navy rotate-6",
  "left-[-8%] bottom-[22%] bg-ivory text-navy rotate-3",
  "right-[-2%] bottom-[6%] bg-sage text-navy -rotate-3",
];

export function BookShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { x, y } = usePointer();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scrollRot = useTransform(scrollYProgress, [0, 0.5, 1], [58, 34, 16]);
  const rotateY = useSpring(useTransform(() => scrollRot.get() + x.get() * 18), { stiffness: 80, damping: 18 });
  const rotateX = useTransform(y, (v) => 6 + v * -9);
  const bookY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.86, 1, 0.94]);
  const sheen = useTransform(x, (v) => `${50 + v * 40}%`);
  const spread = useTransform(scrollYProgress, [0.1, 0.5], [0.6, 1]);

  return (
    <section ref={ref} id="buku" aria-labelledby="buku-tajuk" className="sheet z-10 overflow-clip bg-gradient-to-b from-lavender via-[#ddd5fa] to-ivory py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/4 top-1/3 h-[34rem] w-[34rem] rounded-full bg-sun/50 blur-[110px]" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        {/* ------------------ 3D book ------------------ */}
        <div className="relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center [perspective:1800px] lg:sticky lg:top-[14vh] lg:self-start">
          <motion.div style={{ y: bookY, scale }} className="relative">
            <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <motion.div style={{ rotateY, rotateX }} className="book3d relative [transform-style:preserve-3d]">
                {/* front */}
                <div className="book3d-face book3d-front overflow-hidden rounded-r-md">
                  <Picture photo={book.cover} sizes="(min-width:1024px) 20rem, 60vw" />
                  <motion.div
                    aria-hidden
                    style={{ backgroundPositionX: sheen }}
                    className="absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.45)_50%,transparent_65%)] bg-[length:250%_100%] mix-blend-soft-light"
                  />
                  <div aria-hidden className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                </div>
                {/* spine — as on the printed book: yellow with the title */}
                <div className="book3d-face book3d-spine flex flex-col items-center justify-between bg-[#FFDB1A] py-4 text-navy">
                  <span className="whitespace-nowrap font-display text-[0.62rem] font-extrabold [writing-mode:vertical-rl]">Dr, Saya Boleh Sembuh Ke?</span>
                  <span className="grid h-6 w-6 place-items-center bg-navy">
                    <span className="h-3.5 w-3.5 rounded-full border border-ivory/80" />
                  </span>
                </div>
                <div className="book3d-face book3d-back bg-[#F5D215]" />
                <div className="book3d-face book3d-pages" />
                <div className="book3d-face book3d-top" />
                <div className="book3d-face book3d-bottom" />
              </motion.div>
            </motion.div>
            <motion.div aria-hidden style={{ scaleX: spread }} className="absolute -bottom-16 left-1/2 h-8 w-[85%] -translate-x-1/2 rounded-[50%] bg-navy/30 blur-xl" />
          </motion.div>

          {book.themes.map((t, i) => (
            <motion.span
              key={t}
              aria-hidden
              style={{ scale: spread }}
              className={`absolute z-10 rounded-full px-4 py-2 font-display text-xs font-extrabold uppercase tracking-[0.12em] shadow-soft sm:text-sm ${themePos[i]}`}
            >
              <span className="inline-block animate-floaty" style={{ animationDelay: `${i * 0.9}s` }}>
                {t}
              </span>
            </motion.span>
          ))}

          <CircleBadge
            text="No.1 Top Bestseller • PBAKL 2026 • "
            className="absolute right-[3%] top-[3%] z-20 h-24 w-24 rounded-full bg-navy text-sun shadow-lift sm:h-32 sm:w-32"
            center={<span className="font-display text-3xl font-extrabold text-coral">#1</span>}
          />
        </div>

        {/* ------------------ copy ------------------ */}
        <div>
          <Reveal>
            <p className="eyebrow text-navy/70">Buku Saya</p>
          </Reveal>
          <SplitWords id="buku-tajuk" text={book.title} className="mt-5 text-giant font-extrabold text-navy" />
          <Reveal delay={0.1}>
            <p className="mt-5 font-display text-2xl font-bold text-coral-600 sm:text-3xl">{book.tagline}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">{book.description}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-navy px-5 py-3 font-display font-extrabold text-sun shadow-soft">
              <Sparkle className="h-5 w-5 animate-spinslow" />
              {book.achievement}
              <span aria-hidden className="absolute inset-y-0 -left-1/2 w-1/3 animate-[shine_3.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-y border-navy/10 py-5">
              {[
                ["Penulis", book.author],
                ["Penerbit", book.publisher],
                ["Tahun", book.year],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/50">{k}</dt>
                  <dd className="mt-1 font-display text-lg font-extrabold text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 text-sm font-semibold text-navy/60">Topik di kulit buku:</p>
            <ul className="mt-2 flex max-w-xl flex-wrap gap-1.5">
              {book.coverTopics.map((t) => (
                <li key={t} className="rounded-full border border-navy/15 bg-white/60 px-3 py-1 text-sm font-semibold text-navy">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-6">
            <CtaButton href={links.book} variant="navy" size="lg" magnetic>
              {book.cta}
            </CtaButton>
            <p className="max-w-[15rem] text-sm text-navy/60">Tempahan melalui borang rasmi — dibuka di tab baharu.</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 flex items-center gap-5">
            <div className="w-28 shrink-0 rotate-[-4deg] rounded-2xl bg-white p-2 pb-6 shadow-lift sm:w-32">
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <Picture photo={book.photo} sizes="8rem" />
              </div>
            </div>
            <p className="font-display text-lg font-bold leading-snug text-navy">
              “Kerana setiap penyakit ada penawarnya &amp; di sini ikhtiarnya bermula.”
              <span className="mt-1 block text-sm font-semibold text-navy/50">— dari kulit buku</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
