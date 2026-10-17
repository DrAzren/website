"use client";

import { motion } from "framer-motion";
import { links, socials, tiktokVideos } from "@/content/site";
import { CtaButton } from "../ui/CtaButton";
import { ArrowUpRight, Instagram, Link as LinkIcon, Play, TikTok } from "../ui/Icons";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { Bubble, Sparkle } from "../ui/Stickers";

const look = {
  instagram: { Icon: Instagram, cls: "bg-gradient-to-br from-[#ffb199] via-coral to-[#c86dd7] text-navy" },
  tiktok: { Icon: TikTok, cls: "bg-ink text-ivory" },
  beacons: { Icon: LinkIcon, cls: "bg-lavender text-navy" },
} as const;

export function Social() {
  return (
    <section id="media-sosial" aria-labelledby="sosial-tajuk" className="sheet z-10 overflow-hidden bg-[#efeafc] py-24 text-navy sm:py-32">
      <div className="container-x relative">
        <div className="relative max-w-3xl">
          <Reveal>
            <p className="eyebrow text-coral-600">Media Sosial</p>
          </Reveal>
          <SplitWords id="sosial-tajuk" text="Follow Dr Azren!" className="mt-5 text-mega font-extrabold" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Jom teruskan perbualan tentang kesihatan mental melalui perkongsian, video dan aktiviti saya.
            </p>
          </Reveal>
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
            className="absolute -top-4 right-0 hidden sm:block lg:-right-40"
          >
            <Bubble tail="right" className="bg-sun text-navy">
              #SpreadPositivity ✨
            </Bubble>
          </motion.div>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {socials.map((s, i) => {
            const { Icon, cls } = look[s.id];
            return (
              <Reveal key={s.id} as="li" delay={i * 0.1}>
                <motion.a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, rotate: i === 1 ? 1.5 : -1.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className={`group relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-[2rem] p-7 shadow-soft ${cls}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur transition duration-500 group-hover:rotate-[-12deg] group-hover:scale-110">
                      <Icon width={28} height={28} />
                    </span>
                    <ArrowUpRight width={26} height={26} className="transition duration-300 group-hover:rotate-45" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] opacity-70">{s.platform}</p>
                    <p className="mt-1 font-display text-3xl font-extrabold">{s.handle}</p>
                    <p className="mt-2 text-sm opacity-80">{s.blurb}</p>
                  </div>
                  <Icon aria-hidden width={200} height={200} strokeWidth={0.5} className="pointer-events-none absolute -bottom-12 -right-10 opacity-10" />
                </motion.a>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-16">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-extrabold sm:text-3xl">Video edukasi terkini di TikTok</h3>
            <a href={socials[1].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display font-bold text-coral-600 underline-offset-4 hover:underline">
              Lihat semua <ArrowUpRight width={16} height={16} />
            </a>
          </Reveal>
          <ul className="no-scrollbar -mx-5 mt-6 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0">
            {tiktokVideos.map((v, i) => (
              <Reveal key={v.id} as="li" delay={i * 0.08} className="w-[62vw] shrink-0 snap-start sm:w-auto">
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[9/14] overflow-hidden rounded-[1.6rem] bg-ink">
                  <Picture photo={v.thumbnail} sizes="(min-width:640px) 30vw, 62vw" imgClassName="transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-navy transition duration-500 group-hover:scale-110 group-hover:bg-coral">
                    <Play width={20} height={20} />
                  </span>
                  <p className="absolute inset-x-0 bottom-0 p-4 font-display text-lg font-extrabold leading-tight text-ivory">{v.title}</p>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center gap-4">
          <CtaButton href={links.beacons} variant="navy" size="lg" magnetic>
            Semua Pautan di Beacons
          </CtaButton>
          <Sparkle className="h-8 w-8 animate-spinslow text-coral" />
        </Reveal>
      </div>
    </section>
  );
}
