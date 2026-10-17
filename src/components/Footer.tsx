"use client";

import { motion } from "framer-motion";
import { links, navItems, profile, socials } from "@/content/site";
import { useMotionPrefs } from "./providers/MotionPrefs";
import { CtaButton } from "./ui/CtaButton";
import { Marquee } from "./ui/Marquee";
import { Sparkle } from "./ui/Stickers";

const BIG = ["JOM", "SEBARKAN", "POSITIVITY."];

export function Footer() {
  const { scrollTo } = useMotionPrefs();
  return (
    <footer className="sheet z-10 overflow-hidden bg-navy pt-24 text-ivory sm:pt-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-coral/20 blur-[120px]" />
      <div className="container-x relative">
        <p className="eyebrow text-coral">Jom connect</p>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-6 font-display text-mega font-extrabold"
          aria-label="Jom Sebarkan Positivity."
        >
          {BIG.map((w, i) => (
            <span key={w} aria-hidden className="block overflow-hidden">
              <motion.span
                className={`inline-block ${i === 2 ? "text-coral" : ""}`}
                variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <p className="max-w-lg text-xl leading-relaxed text-ivory/75">
            Ada soalan, program atau idea yang ingin dikongsi? Saya sentiasa terbuka untuk bersembang. Pilih cara yang paling sesuai untuk anda.
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href={links.talk} variant="coral" magnetic>
              Jemput Berceramah
            </CtaButton>
            <CtaButton href={links.consultation} variant="ivory">
              Tempah Konsultasi
            </CtaButton>
            <CtaButton href={links.book} variant="sun">
              Dapatkan Buku
            </CtaButton>
            <CtaButton href={links.collaboration} variant="ghost-light">
              Kolaborasi
            </CtaButton>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-ivory/10 pt-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-extrabold">{profile.displayName}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/60">{profile.descriptor}</p>
            <p className="mt-4 text-sm text-ivory/60">Pendaftaran Penuh MMC No. 90486</p>
          </div>
          <nav aria-label="Pautan footer">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ivory/40">Teroka</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(n.id);
                    }}
                    className="text-ivory/75 transition hover:text-coral"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ivory/40">Ikuti</p>
            <ul className="mt-4 space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.id}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ivory/75 transition hover:text-coral">
                    {s.platform} · {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-ivory/45">
          Kandungan laman web ini adalah untuk tujuan pendidikan dan kesedaran umum, dan bukan pengganti nasihat, diagnosis atau rawatan perubatan profesional. Dalam
          kecemasan, hubungi 999 atau pergi ke Jabatan Kecemasan hospital terdekat.
        </p>
      </div>

      <div className="mt-14 border-t border-ivory/10 py-5 text-ivory/30">
        <Marquee fast>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 px-3 font-display text-lg font-extrabold uppercase tracking-tight">
              {profile.slogan} <Sparkle className="h-4 w-4 text-coral/60" />
            </span>
          ))}
        </Marquee>
      </div>
      <div className="container-x flex flex-wrap items-center justify-between gap-3 pb-24 pt-4 text-xs text-ivory/45 sm:pb-8">
        <p>© {new Date().getFullYear()} Dr Fakrul Azren. Hak cipta terpelihara.</p>
        <button type="button" onClick={() => scrollTo("utama")} className="font-semibold transition hover:text-coral">
          Kembali ke atas ↑
        </button>
      </div>
    </footer>
  );
}
