"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { galleryCategories, programEvents, socials, type GalleryCategory, type ProgramEvent } from "@/content/site";
import { cx } from "@/lib/asset";
import { ArrowUpRight, ChevronLeft, ChevronRight, Close, Instagram } from "../ui/Icons";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { Sparkle } from "../ui/Stickers";

const posterTone: Record<GalleryCategory, string> = {
  forum: "bg-coral text-navy",
  pendidikan: "bg-lavender text-navy",
  korporat: "bg-sky text-navy",
  media: "bg-sun text-navy",
  buku: "bg-sun text-navy",
  saringan: "bg-sage text-navy",
};

const categoryLabel = (c: GalleryCategory) => galleryCategories.find((g) => g.id === c)?.label ?? c;

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "semua">("semua");
  const [box, setBox] = useState<{ list: ProgramEvent[]; index: number } | null>(null);
  const items = programEvents.filter((e) => filter === "semua" || e.categories.includes(filter));
  const featured = programEvents.filter((e) => e.featured && e.image);
  const instagram = socials.find((s) => s.id === "instagram")!;

  return (
    <section id="galeri" aria-labelledby="galeri-tajuk" className="sheet z-10 overflow-hidden bg-ink py-24 text-ivory sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-sun">Galeri Program</p>
            </Reveal>
            <SplitWords id="galeri-tajuk" text="Di Sebalik Setiap Pentas, Ada Sebuah Cerita." className="mt-5 text-giant font-extrabold" />
          </div>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-ivory/70">
              Antara momen perkongsian ilmu, pertemuan dan pengalaman sepanjang perjalanan saya dalam meningkatkan kesedaran kesihatan mental.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ---- Sorotan: horizontal featured carousel ---- */}
      {featured.length > 0 && (
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(3rem,calc((100vw-1400px)/2+3rem))]">
          {featured.map((e) => (
            <FeaturedCard key={e.id} event={e} onOpen={() => setBox({ list: featured, index: featured.indexOf(e) })} />
          ))}
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[24rem] w-[16rem] shrink-0 snap-start flex-col justify-between rounded-[2rem] bg-gradient-to-br from-coral via-[#ff9a7a] to-lavender p-7 text-navy sm:h-[30rem] sm:w-[19rem]"
          >
            <Instagram width={44} height={44} />
            <div>
              <p className="font-display text-3xl font-extrabold leading-tight">Lebih banyak momen di Instagram</p>
              <p className="mt-3 inline-flex items-center gap-2 font-bold">
                {instagram.handle} <ArrowUpRight className="transition group-hover:rotate-45" />
              </p>
            </div>
          </a>
        </div>
      )}

      <div className="container-x">
        {/* ---- filters ---- */}
        <div role="group" aria-label="Tapis kategori program" className="no-scrollbar -mx-5 mt-14 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {galleryCategories.map((c) => {
            const count = c.id === "semua" ? programEvents.length : programEvents.filter((e) => e.categories.includes(c.id as GalleryCategory)).length;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={filter === c.id}
                onClick={() => setFilter(c.id)}
                className={cx(
                  "relative shrink-0 rounded-full px-5 py-2.5 font-display text-sm font-bold transition",
                  filter === c.id ? "text-navy" : "border border-ivory/20 text-ivory/75 hover:border-ivory hover:text-ivory",
                )}
              >
                {filter === c.id && <motion.span layoutId="gallery-filter" className="absolute inset-0 -z-0 rounded-full bg-sun" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative">
                  {c.label} <span className="ml-1 text-xs opacity-60">{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ---- masonry ---- */}
        {items.length === 0 ? (
          <p className="mt-12 rounded-3xl border border-dashed border-ivory/20 p-10 text-center text-ivory/60">
            Foto program bagi kategori ini akan dikongsi tidak lama lagi. Sementara itu, jom singgah ke{" "}
            <a className="font-semibold text-sun underline-offset-4 hover:underline" href={instagram.url} target="_blank" rel="noopener noreferrer">
              Instagram {instagram.handle}
            </a>
            .
          </p>
        ) : (
          <motion.ul layout className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {items.map((e, i) => (
                <motion.li
                  key={e.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-4 break-inside-avoid"
                >
                  <GalleryCard event={e} index={i} onOpen={() => setBox({ list: items, index: i })} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>

      <Lightbox
        items={box?.list ?? []}
        index={box?.index ?? null}
        onClose={() => setBox(null)}
        onIndex={(i) => setBox((b) => (b ? { ...b, index: i } : b))}
      />
    </section>
  );
}

/* ------------------------------------------------------------------------ */

function FeaturedCard({ event, onOpen }: { event: ProgramEvent; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const img = event.image!;
  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      className="group relative h-[24rem] shrink-0 snap-start overflow-hidden rounded-[2rem] text-left sm:h-[30rem]"
      style={{ aspectRatio: `${Math.max(0.62, Math.min(1.6, img.width / img.height))}` }}
      aria-label={`Buka foto: ${event.title}`}
    >
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Picture photo={img} sizes="(min-width:640px) 30rem, 80vw" imgClassName="transition duration-[1.2s] group-hover:scale-110" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <span className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-navy">
        <Sparkle className="h-3 w-3" /> Sorotan
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-sm font-semibold text-sun">{[event.organizer, event.year].filter(Boolean).join(" · ")}</p>
        <p className="mt-1 font-display text-2xl font-extrabold leading-tight">{event.title}</p>
      </div>
    </button>
  );
}

function GalleryCard({ event, index, onOpen }: { event: ProgramEvent; index: number; onOpen: () => void }) {
  const meta = [event.organizer, event.year].filter(Boolean).join(" · ");
  if (event.image) {
    return (
      <button type="button" onClick={onOpen} className="group relative block w-full overflow-hidden rounded-[1.6rem] text-left" aria-label={`Buka foto: ${event.title}`}>
        <Picture photo={event.image} sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw" className="!h-auto" imgClassName="!h-auto transition duration-[1.1s] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 transition duration-500 group-hover:translate-y-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">{categoryLabel(event.categories[0])}</p>
          <p className="mt-1 font-display text-xl font-extrabold leading-tight">{event.title}</p>
          {meta && <p className="mt-1 text-sm text-ivory/70">{meta}</p>}
          <p className="mt-2 max-h-0 overflow-hidden text-sm text-ivory/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">{event.caption}</p>
        </div>
      </button>
    );
  }
  // Poster shown until a genuine photo is uploaded
  const tone = posterTone[event.categories[0]];
  const tall = index % 3 === 0;
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cx("group relative flex w-full flex-col justify-between overflow-hidden rounded-[1.6rem] p-6 text-left transition duration-500 hover:-rotate-1 hover:scale-[1.02]", tone, tall ? "min-h-[20rem]" : "min-h-[15rem]")}
      aria-label={`Butiran program: ${event.title}${event.organizer ? `, ${event.organizer}` : ""}`}
    >
      <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 animate-morph bg-white/25" />
      <div className="relative flex items-start justify-between gap-3">
        <span className="rounded-full bg-navy px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-ivory">{categoryLabel(event.categories[0])}</span>
        {event.year && <span className="font-display text-sm font-extrabold">{event.year}</span>}
      </div>
      <div className="relative mt-10">
        {event.organizer && <p className="font-display text-[1.65rem] font-extrabold leading-[1.05] tracking-tight">{event.organizer}</p>}
        <p className="mt-2 font-semibold opacity-75">{event.title}</p>
        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-navy/25 px-3 py-1 text-[0.7rem] font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-navy/60" /> Foto akan dikemas kini
        </p>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------------ */

function Lightbox({ items, index, onClose, onIndex }: { items: ProgramEvent[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<Element | null>(null);
  const [dir, setDir] = useState(0);
  const isOpen = index !== null && items[index] !== undefined;

  const go = useCallback(
    (d: number) => {
      if (index === null) return;
      setDir(d);
      onIndex((index + d + items.length) % items.length);
    },
    [index, items.length, onIndex],
  );

  useEffect(() => {
    if (!isOpen) return;
    lastFocus.current = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      (lastFocus.current as HTMLElement | null)?.focus?.();
    };
  }, [isOpen, go, onClose]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const e = isOpen ? items[index!] : null;
  if (!mounted) return null;

  // Portal to <body> so the overlay escapes the section's stacking context
  return createPortal(
    <AnimatePresence>
      {e && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={e.title}
          className="fixed inset-0 z-[80] flex flex-col bg-ink/95 text-ivory backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-lenis-prevent=""
        >
          <div className="flex items-center justify-between p-4 sm:p-6">
            <p className="font-display text-sm font-bold text-ivory/60">
              {index! + 1} / {items.length}
            </p>
            <button ref={closeRef} type="button" onClick={onClose} className="flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 font-display text-sm font-bold transition hover:bg-ivory hover:text-navy">
              Tutup <Close width={16} height={16} />
            </button>
          </div>

          <div className="relative grid min-h-0 flex-1 gap-6 overflow-y-auto px-4 pb-6 sm:px-6 lg:grid-cols-[1fr_22rem] lg:overflow-hidden">
            <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden lg:min-h-0">
              <AnimatePresence mode="popLayout" custom={dir} initial={false}>
                <motion.div
                  key={e.id}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 120 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -120 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.5}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) go(1);
                    else if (info.offset.x > 80) go(-1);
                  }}
                  className="flex h-full w-full cursor-grab items-center justify-center active:cursor-grabbing"
                >
                  {e.image ? (
                    <Picture photo={e.image} sizes="(min-width:1024px) 70vw, 100vw" className="h-full max-h-[78vh] w-auto" imgClassName="!h-full max-h-[78vh] w-auto !object-contain rounded-2xl" />
                  ) : (
                    <div className={cx("flex aspect-[4/5] w-full max-w-md flex-col justify-end rounded-[2rem] p-8", posterTone[e.categories[0]])}>
                      <p className="font-display text-4xl font-extrabold leading-tight">{e.organizer ?? e.title}</p>
                      <p className="mt-3 font-semibold opacity-75">{e.title}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <button type="button" onClick={() => go(-1)} aria-label="Foto sebelumnya" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 backdrop-blur transition hover:bg-ivory hover:text-navy">
                <ChevronLeft />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Foto seterusnya" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 backdrop-blur transition hover:bg-ivory hover:text-navy">
                <ChevronRight />
              </button>
            </div>

            <aside className="self-center rounded-[1.75rem] bg-ivory/[0.06] p-6 ring-1 ring-ivory/10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">{e.categories.map(categoryLabel).join(" · ")}</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight">{e.title}</h3>
              {(e.organizer || e.year) && <p className="mt-2 font-semibold text-ivory/70">{[e.organizer, e.year].filter(Boolean).join(" · ")}</p>}
              <p className="mt-4 leading-relaxed text-ivory/80">{e.caption}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {e.instagramUrl && (
                  <a href={e.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2 font-display text-sm font-bold text-navy">
                    <Instagram width={16} height={16} /> Lihat di Instagram
                  </a>
                )}
                {e.sourceUrl && (
                  <a href={e.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 font-display text-sm font-bold transition hover:bg-ivory hover:text-navy">
                    {e.sourceLabel ?? "Sumber asal"} <ArrowUpRight width={16} height={16} />
                  </a>
                )}
              </div>
              <p className="mt-6 text-xs text-ivory/40">Leret atau guna kekunci ← → untuk navigasi.</p>
            </aside>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
