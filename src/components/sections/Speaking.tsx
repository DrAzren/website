"use client";

import { motion } from "framer-motion";
import { links, profile, programEvents, speaking } from "@/content/site";
import { CtaButton } from "../ui/CtaButton";
import { Check, Whatsapp } from "../ui/Icons";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { Bubble, Sparkle } from "../ui/Stickers";

export function Speaking() {
  const photos = programEvents.filter((e) => e.image && e.categories.some((c) => c === "forum" || c === "pendidikan" || c === "korporat")).slice(0, 3);

  return (
    <section id="ceramah" aria-labelledby="ceramah-tajuk" className="sheet z-10 overflow-hidden bg-coral py-24 text-navy sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-[28rem] w-[28rem] animate-morph bg-[#ff9479]" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Jemputan Ceramah</p>
          </Reveal>
          <SplitWords id="ceramah-tajuk" text={speaking.heading} className="mt-5 text-giant font-extrabold" />
          <Reveal delay={0.1}>
            <p className="mt-6 font-display text-2xl font-bold sm:text-3xl">{speaking.subheading}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy/80">{speaking.body}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 flex max-w-2xl flex-wrap gap-2">
              {speaking.formats.map((f) => (
                <li key={f} className="flex items-center gap-1.5 rounded-full bg-ivory/90 px-4 py-2 text-sm font-semibold">
                  <Check width={15} height={15} className="text-coral-600" /> {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25} className="mt-10">
            <CtaButton href={links.talk} variant="navy" size="lg" magnetic icon={<Whatsapp width={16} height={16} />}>
              {speaking.cta}
            </CtaButton>
          </Reveal>
        </div>

        {/* real program photos + speech bubble */}
        <div className="relative mx-auto w-full max-w-md">
          <motion.div
            initial={{ rotate: -12, scale: 0.6, opacity: 0 }}
            whileInView={{ rotate: -4, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 12, delay: 0.3 }}
            className="absolute -left-4 -top-10 z-20 sm:-left-16"
          >
            <motion.div animate={{ rotate: [-4, 2, -4] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
              <Bubble className="bg-navy text-lg text-ivory sm:text-xl">{speaking.bubble}</Bubble>
            </motion.div>
          </motion.div>

          {photos.length > 0 ? (
            <div className="group relative aspect-[4/5]">
              {photos.map((p, i) => (
                <div
                  key={p.id}
                  className="absolute inset-0 overflow-hidden rounded-[2rem] border-[6px] border-ivory bg-ivory shadow-lift transition duration-700"
                  style={{ transform: `rotate(${(i - (photos.length - 1) / 2) * 6}deg) translateX(${i * 6}px)`, zIndex: photos.length - i }}
                >
                  <Picture photo={p.image!} sizes="(min-width:1024px) 28rem, 85vw" />
                  {i === 0 && (
                    <p className="absolute inset-x-3 bottom-3 rounded-2xl bg-ivory/90 p-3 text-sm font-semibold backdrop-blur">
                      {p.title}
                      {p.organizer ? <span className="block text-xs font-medium text-navy/60">{p.organizer}</span> : null}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border-[6px] border-ivory bg-[#f1efe9] shadow-lift">
              <Picture photo={profile.portraitFormal} sizes="(min-width:1024px) 28rem, 85vw" />
            </div>
          )}
          <Sparkle className="absolute -bottom-6 -right-4 h-14 w-14 animate-spinslow text-ivory" />
        </div>
      </div>

      {/* topics */}
      <div className="container-x relative mt-24">
        <Reveal>
          <h3 className="text-3xl font-extrabold sm:text-4xl">Cadangan topik ceramah</h3>
          <p className="mt-2 text-navy/70">Boleh disesuaikan mengikut audiens dan objektif program anda.</p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {speaking.topics.map((t, i) => (
            <Reveal key={t.title} as="li" delay={(i % 4) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-[1.6rem] bg-ivory p-6 transition duration-500 hover:-translate-y-1 hover:-rotate-1 hover:bg-navy hover:text-ivory">
                <p className="font-display text-sm font-extrabold text-coral-600 transition group-hover:text-coral">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-6 font-display text-xl font-extrabold leading-tight">{t.title}</p>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{t.blurb}</p>
                <Sparkle className="absolute -right-3 -top-3 h-12 w-12 scale-0 text-coral transition duration-500 group-hover:scale-100 group-hover:rotate-45" />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
