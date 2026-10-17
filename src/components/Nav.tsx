"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { links, navItems, socials } from "@/content/site";
import { cx } from "@/lib/asset";
import { useMotionPrefs } from "./providers/MotionPrefs";
import { ArrowUpRight, Close, Instagram, Link as LinkIcon, Motion, TikTok } from "./ui/Icons";

const desktopLinks = ["kenali", "pencapaian", "galeri", "buku", "ceramah", "konsultasi"];
const socialIcon = { instagram: Instagram, tiktok: TikTok, beacons: LinkIcon } as const;

export function Nav() {
  const { scrollY } = useScroll();
  const { reduced, toggle, scrollTo } = useMotionPrefs();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("utama");

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > 400 && y > prev && !open);
  });

  // Highlight the section currently in view
  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // wait for the menu to close before scrolling
    setTimeout(() => scrollTo(id), open ? 350 : 0);
  };

  return (
    <>
      <a href="#kandungan" className="sr-only z-[90] rounded-full bg-navy px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Langkau ke kandungan
      </a>

      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4"
        onFocusCapture={() => setHidden(false)}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          aria-label="Navigasi utama"
          className="glass flex w-full max-w-[1100px] items-center justify-between gap-2 rounded-full py-2 pl-4 pr-2 shadow-soft sm:pl-5"
        >
          <a href="#utama" onClick={go("utama")} className="flex items-center gap-2 whitespace-nowrap font-display text-[1.05rem] font-extrabold tracking-tight text-navy">
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-navy text-[0.65rem] text-coral">
              DA
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full bg-coral" />
            </span>
            DR AZREN
          </a>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {navItems
              .filter((n) => desktopLinks.includes(n.id))
              .map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={go(n.id)}
                    className={cx(
                      "relative whitespace-nowrap rounded-full px-3.5 py-2 font-display text-[0.85rem] font-semibold transition-colors",
                      active === n.id ? "text-ivory" : "text-navy/80 hover:text-navy",
                    )}
                  >
                    {active === n.id && (
                      <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-navy" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                    )}
                    {n.label}
                  </a>
                </li>
              ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <a
              href={links.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden whitespace-nowrap rounded-full bg-coral px-4 py-2.5 font-display text-[0.85rem] font-bold text-navy transition hover:bg-navy hover:text-ivory sm:inline-flex"
            >
              Tempah Konsultasi
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="menu-penuh"
              className="flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 font-display text-[0.85rem] font-bold text-ivory transition hover:bg-coral hover:text-navy"
            >
              <span className="flex flex-col gap-[3px]" aria-hidden>
                <span className="h-[2px] w-4 rounded bg-current" />
                <span className="h-[2px] w-3 rounded bg-current" />
              </span>
              Menu
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-penuh"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[70] overflow-y-auto bg-navy text-ivory"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-coral/25 blur-3xl" />
            <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-lavender/20 blur-3xl" />
            <div className="container-x relative flex min-h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-extrabold">DR AZREN</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-full border border-ivory/30 px-4 py-2.5 font-display text-sm font-bold transition hover:bg-ivory hover:text-navy"
                >
                  Tutup <Close width={16} height={16} />
                </button>
              </div>

              <div className="mt-8 grid flex-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                <ol className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                  {navItems.map((n, i) => (
                    <motion.li
                      key={n.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <a
                        href={`#${n.id}`}
                        onClick={go(n.id)}
                        className="group flex items-baseline gap-4 py-1 font-display text-[clamp(1.7rem,4.2vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight transition-colors hover:text-coral"
                      >
                        <span className="w-8 font-body text-sm font-medium text-ivory/40">{String(i + 1).padStart(2, "0")}</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-2">{n.label}</span>
                      </a>
                    </motion.li>
                  ))}
                </ol>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="grid gap-3 pb-6"
                >
                  <p className="eyebrow text-coral">Tindakan pantas</p>
                  {[
                    { label: "Dapatkan Buku", href: links.book },
                    { label: "Jemput Berceramah", href: links.talk },
                    { label: "Tempah Konsultasi", href: links.consultation },
                    { label: "Jom Kolaborasi", href: links.collaboration },
                  ].map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-ivory/15 px-5 py-4 font-display font-bold transition hover:border-coral hover:bg-coral hover:text-navy"
                    >
                      {a.label} <ArrowUpRight width={18} height={18} />
                    </a>
                  ))}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {socials.map((s) => {
                      const Icon = socialIcon[s.id];
                      return (
                        <a
                          key={s.id}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${s.platform} ${s.handle}`}
                          className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 transition hover:bg-ivory hover:text-navy"
                        >
                          <Icon />
                        </a>
                      );
                    })}
                    <button
                      type="button"
                      onClick={toggle}
                      aria-pressed={reduced}
                      className="ml-auto flex items-center gap-2 rounded-full border border-ivory/20 px-4 py-2.5 text-sm font-medium transition hover:bg-ivory hover:text-navy"
                    >
                      <Motion width={16} height={16} />
                      {reduced ? "Animasi: dikurangkan" : "Kurangkan animasi"}
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
