"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { achievements, book, institutions, links, mediaAppearances, mediaTypeLabels, stats, type MediaAppearance, type MediaType } from "@/content/site";
import { asset, cx } from "@/lib/asset";
import { useMotionPrefs } from "../providers/MotionPrefs";
import { Counter } from "../ui/Counter";
import { EngagementRecord } from "./EngagementRecord";
import { CtaButton } from "../ui/CtaButton";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Headphones, News, Play, Radio, Tv } from "../ui/Icons";
import { Marquee } from "../ui/Marquee";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { CircleBadge, Sparkle } from "../ui/Stickers";

export function Achievements() {
  return (
    <section id="pencapaian" aria-labelledby="pencapaian-tajuk" className="sheet z-10 overflow-hidden bg-navy py-24 text-ivory sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-40 h-[36rem] w-[36rem] rounded-full bg-coral/10 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 top-[45%] h-[36rem] w-[36rem] rounded-full bg-lavender/10 blur-[120px]" />

      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow text-coral">Pencapaian</p>
        </Reveal>
        <SplitWords id="pencapaian-tajuk" text={achievements.heading} className="mt-5 max-w-5xl text-giant font-extrabold" />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/70">{achievements.body}</p>
        </Reveal>

        <UtmForum />
        <Bestseller />
      </div>

      <MediaWall />
      <SpeakingWall />
    </section>
  );
}

/* ------------------------------------------------------------------------ */

function UtmForum() {
  const ref = useRef<HTMLElement>(null);
  const a = achievements.utmForum;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-18%"]);
  const clip = useTransform(scrollYProgress, [0.1, 0.4], ["inset(18% 18% 18% 18% round 2rem)", "inset(0% 0% 0% 0% round 2rem)"]);

  return (
    <article
      ref={ref}
      className="relative mt-20 overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-[#1f3a50] via-navy to-[#0d1a25] sm:rounded-[2.75rem]"
    >
      <motion.p
        aria-hidden
        style={{ x }}
        className="text-outline pointer-events-none absolute -bottom-8 right-0 select-none whitespace-nowrap font-display text-[clamp(8rem,26vw,24rem)] font-extrabold leading-none text-gold/25"
      >
        2026 · 2026
      </motion.p>
      <div className="pointer-events-none absolute inset-6 rounded-[1.5rem] border border-gold/15 sm:inset-8 sm:rounded-[2.2rem]" />

      <div className={cx("relative grid gap-10 p-8 sm:p-14", a.image && "lg:grid-cols-2 lg:items-center")}>
        {a.image && (
          <motion.div style={{ clipPath: clip }} className="aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Picture photo={a.image} sizes="(min-width:1024px) 40vw, 90vw" />
          </motion.div>
        )}
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-gold">
            <Sparkle className="h-4 w-4" /> {a.kicker}
          </p>
          <h3 className="gold-text mt-6 text-huge font-extrabold">{a.title}</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-gold/50 px-4 py-1.5 text-sm font-semibold text-gold">{a.role}</span>
            <span className="rounded-full bg-ivory/10 px-4 py-1.5 text-sm font-semibold text-ivory/90">{a.eventName}</span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-ivory/80">{a.body}</p>
          <blockquote className="mt-6 border-l-2 border-gold/60 pl-5 font-display text-lg font-semibold italic text-ivory">“{a.reflection}”</blockquote>
          {a.instagramUrl && (
            <a href={a.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-gold underline-offset-4 hover:underline">
              Lihat di Instagram <ArrowUpRight width={16} height={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------------ */

function Bestseller() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { reduced } = useMotionPrefs();
  const b = achievements.bestseller;
  return (
    <article className="relative mt-8 grid overflow-hidden rounded-[2rem] bg-sun text-navy sm:rounded-[2.75rem] lg:grid-cols-[0.9fr_1.1fr]">
      <div
        className="relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_60%,#fff6b0_0%,#FFDF1E_60%)] px-8 py-14 [perspective:1100px]"
        onPointerMove={(e) => {
          if (reduced || e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 24, y: ((e.clientY - r.top) / r.height - 0.5) * -18 });
        }}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <motion.div
          animate={{ rotateY: tilt.x * 0.6, rotateX: tilt.y * 0.6, x: tilt.x * 0.4 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="relative w-[min(17rem,58vw)] [transform-style:preserve-3d]"
        >
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <Picture photo={book.render} sizes="18rem" className="!h-auto" imgClassName="!h-auto object-contain" />
          </motion.div>
        </motion.div>
        <a
          href={asset(`/images/${book.pbaklList.src}.jpg`)}
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute bottom-3 left-3 w-20 rotate-[-7deg] rounded-xl bg-white p-1 shadow-lift transition duration-500 hover:rotate-0 hover:scale-110 sm:bottom-8 sm:left-8 sm:w-36 sm:p-1.5"
          aria-label="Lihat senarai Top 10 Bestseller PBAKL oleh Whitecoat Books (buka di tab baharu)"
        >
          <span className="block aspect-[4/5] overflow-hidden rounded-lg">
            <Picture photo={book.pbaklList} sizes="9rem" />
          </span>
          <span className="mt-1 block text-center text-[0.6rem] font-bold uppercase tracking-wider text-navy/70">Senarai rasmi ↗</span>
        </a>
        <CircleBadge
          text="No.1 Top Bestseller • PBAKL 2026 • "
          className="absolute right-4 top-4 h-28 w-28 rounded-full bg-navy text-sun sm:right-8 sm:top-8 sm:h-32 sm:w-32"
          center={<span className="font-display text-3xl font-extrabold text-coral">#1</span>}
        />
      </div>
      <div className="p-8 sm:p-14">
        <p className="eyebrow text-navy/70">{b.kicker}</p>
        <h3 className="mt-5 text-huge font-extrabold">{b.title}</h3>
        <p className="mt-6 text-lg leading-relaxed text-navy/80">{b.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={links.book} variant="navy" magnetic size="lg">
            {book.cta}
          </CtaButton>
          <CtaButton href="#buku" external={false} variant="ghost" icon={<ArrowRight width={16} height={16} />}>
            Kenali buku ini
          </CtaButton>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------------ */

const typeIcon: Record<MediaType, typeof Tv> = { tv: Tv, radio: Radio, podcast: Headphones, akhbar: News };
const cardTones = ["bg-coral", "bg-lavender", "bg-sky", "bg-sun", "bg-sage", "bg-ivory"];

function MediaWall() {
  const [filter, setFilter] = useState<MediaType | "semua">("semua");
  const rail = useRef<HTMLDivElement>(null);
  const items = mediaAppearances.filter((m) => filter === "semua" || m.type === filter);
  const scrollBy = (dir: number) => rail.current?.scrollBy({ left: dir * Math.min(600, rail.current.clientWidth * 0.8), behavior: "smooth" });
  const m = achievements.media;

  return (
    <div className="relative mt-28 sm:mt-36" id="media">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-lavender">{m.kicker}</p>
            </Reveal>
            <SplitWords as="h3" text={m.title} className="mt-5 text-huge font-extrabold" />
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-ivory/70">{m.body}</p>
            </Reveal>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollBy(-1)} aria-label="Media sebelumnya" className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 transition hover:bg-ivory hover:text-navy">
              <ChevronLeft />
            </button>
            <button type="button" onClick={() => scrollBy(1)} aria-label="Media seterusnya" className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 transition hover:bg-ivory hover:text-navy">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div role="group" aria-label="Tapis jenis media" className="no-scrollbar -mx-5 mt-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {(["semua", "tv", "radio", "podcast", "akhbar"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                rail.current?.scrollTo({ left: 0, behavior: "smooth" });
              }}
              aria-pressed={filter === f}
              className={cx(
                "shrink-0 rounded-full px-5 py-2.5 font-display text-sm font-bold transition",
                filter === f ? "bg-ivory text-navy" : "border border-ivory/20 text-ivory/80 hover:border-ivory",
              )}
            >
              {f === "semua" ? "Semua" : mediaTypeLabels[f]}
              <span className="ml-2 text-xs opacity-60">{f === "semua" ? mediaAppearances.length : mediaAppearances.filter((x) => x.type === f).length}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={rail}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-6 sm:px-8 lg:px-[max(3rem,calc((100vw-1400px)/2+3rem))]"
        data-lenis-prevent-wheel=""
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.04 }}
              className="snap-start"
            >
              <MediaCard item={item} tone={cardTones[mediaAppearances.indexOf(item) % cardTones.length]} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <p className="container-x mt-2 text-sm text-ivory/45">
        Kad bertanda <Play width={11} height={11} className="mx-0.5 inline" /> membuka pautan rasmi. Klik kad lain untuk butiran.
      </p>
    </div>
  );
}

function MediaCard({ item, tone }: { item: MediaAppearance; tone: string }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = typeIcon[item.type];
  const label = mediaTypeLabels[item.type];

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-[22rem] w-[16.5rem] overflow-hidden rounded-[1.75rem] bg-ink text-ivory shadow-lift ring-1 ring-white/10 sm:w-[18rem]"
      >
        {item.thumbnail && (
          <Picture photo={item.thumbnail} sizes="18rem" className="absolute inset-0" imgClassName="transition duration-700 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-ivory/90 px-3 py-1 text-xs font-bold text-navy">
          <Icon width={14} height={14} /> {label}
        </span>
        <span className="absolute left-1/2 top-[42%] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-coral text-navy shadow-lift transition duration-500 group-hover:scale-110">
          <Play width={22} height={22} />
          <span className="absolute inset-0 animate-ping rounded-full bg-coral/40" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-xl font-extrabold leading-tight">{item.program ?? item.outlet}</p>
          <p className="mt-1 text-sm text-ivory/70">{item.outlet}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-coral">
            {item.urlLabel ?? "Tonton"} <ArrowUpRight width={14} height={14} />
          </p>
        </div>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${item.outlet}${item.program ? ` — ${item.program}` : ""}. Tunjuk butiran`}
      className="group relative block h-[22rem] w-[16.5rem] text-left [perspective:1200px] sm:w-[18rem]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* front */}
        <div className={cx("absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 text-navy shadow-lift [backface-visibility:hidden]", tone)}>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-xs font-bold text-ivory">
              <Icon width={14} height={14} /> {label}
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-navy/30 font-display text-lg font-bold transition group-hover:rotate-90">+</span>
          </div>
          <div>
            <p className="font-display text-[2rem] font-extrabold uppercase leading-[0.92] tracking-tight transition-[letter-spacing] duration-500 group-hover:tracking-normal">
              {item.outlet}
            </p>
            {item.program && <p className="mt-3 font-display text-lg font-bold leading-snug text-navy/75">“{item.program}”</p>}
          </div>
          <Icon aria-hidden width={150} height={150} strokeWidth={0.6} className="pointer-events-none absolute -right-8 top-14 opacity-[0.12] transition duration-700 group-hover:rotate-6 group-hover:scale-110" />
        </div>
        {/* back */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-[1.75rem] bg-ivory p-6 text-navy shadow-lift [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral">{label}</span>
          <div>
            <p className="font-display text-2xl font-extrabold leading-tight">{item.outlet}</p>
            {item.program && <p className="mt-2 font-semibold text-navy/80">{item.program}</p>}
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              {item.note ?? "Jemputan sebagai tetamu / doktor panel untuk berkongsi tentang isu-isu kesihatan mental."}
            </p>
          </div>
          <span className="text-xs font-semibold text-navy/50">Klik untuk kembali ↺</span>
        </div>
      </motion.div>
    </button>
  );
}

/* ------------------------------------------------------------------------ */

function SpeakingWall() {
  const s = achievements.speaking;
  const { scrollTo } = useMotionPrefs();
  return (
    <div className="relative mt-28 sm:mt-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-sage">{s.kicker}</p>
            </Reveal>
            <SplitWords as="h3" text={s.title} className="mt-5 text-huge font-extrabold" />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/70">{s.body}</p>
            </Reveal>
          </div>
          <dl className="grid grid-cols-2 gap-3">
            {stats.map((st, i) => (
              <Reveal key={st.label} delay={i * 0.08} className="glass-dark rounded-3xl p-5">
                <dt className="sr-only">{st.label}</dt>
                <dd className="font-display text-5xl font-extrabold text-coral">
                  <Counter value={st.value} suffix={st.suffix} />
                </dd>
                <dd className="mt-1 text-sm font-medium text-ivory/70">{st.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
        <p className="mt-12 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ivory/50">Antara institusi & organisasi yang pernah menjemput saya</p>
      </div>

      <div className="mt-6 space-y-3">
        <Marquee>
          {institutions.education.map((n) => (
            <span key={n} className="mx-1.5 whitespace-nowrap rounded-full border border-ivory/15 bg-ivory/5 px-6 py-3 font-display text-base font-bold sm:text-lg">
              {n}
            </span>
          ))}
        </Marquee>
        <Marquee reverse>
          {institutions.organisations.map((n) => (
            <span key={n} className="mx-1.5 whitespace-nowrap rounded-full bg-coral px-6 py-3 font-display text-base font-bold text-navy sm:text-lg">
              {n}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-x">
        <EngagementRecord />
      </div>

      <div className="container-x mt-12 flex flex-wrap gap-3">
        <CtaButton
          href="#galeri"
          external={false}
          variant="ivory"
          icon={<ArrowRight width={16} height={16} />}
          onClick={(e) => {
            e.preventDefault();
            scrollTo("galeri");
          }}
        >
          Lihat Galeri Program
        </CtaButton>
        <CtaButton href={links.talk} variant="coral" magnetic>
          Jemput Dr Azren Berceramah
        </CtaButton>
      </div>
    </div>
  );
}
