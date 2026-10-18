"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/content/site";
import { cx } from "@/lib/asset";
import { Picture } from "../ui/Picture";
import { Reveal } from "../ui/Reveal";
import { SplitWords } from "../ui/SplitWords";
import { Sparkle } from "../ui/Stickers";

export function Journey() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="perjalanan" aria-labelledby="perjalanan-tajuk" className="sheet z-10 overflow-hidden bg-ivory py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/3 h-[30rem] w-[30rem] animate-morph bg-sage/35 blur-2xl" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-coral">Perjalanan</p>
          </Reveal>
          <SplitWords id="perjalanan-tajuk" text="Kenali Perjalanan Saya." className="mt-5 text-giant font-extrabold text-navy" />
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Ini perjalanan saya: dari bilik kuliah ke wad hospital, ke klinik, ke pentas dan ke halaman buku. Jom skrol bersama.
            </p>
          </Reveal>
        </div>

        <ol ref={ref} className="relative mt-20">
          {/* track + animated progress */}
          <div aria-hidden className="absolute bottom-0 left-[11px] top-0 w-[3px] rounded-full bg-navy/10 lg:left-1/2 lg:-translate-x-1/2" />
          <motion.div
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute bottom-0 left-[11px] top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-coral via-lavender to-sky lg:left-1/2 lg:-translate-x-1/2"
          />

          {journey.map((item, i) => (
            <TimelineItem key={item.year + item.title} item={item} index={i} last={i === journey.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, last }: { item: (typeof journey)[number]; index: number; last: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const right = index % 2 === 1;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yearY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const image = "image" in item ? item.image : undefined;

  return (
    <li ref={ref} className="relative grid gap-4 pb-16 pl-12 last:pb-0 lg:grid-cols-2 lg:gap-24 lg:pl-0 lg:pb-24">
      {/* node */}
      <motion.span
        aria-hidden
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={cx(
          "absolute left-0 top-2 grid h-[25px] w-[25px] place-items-center rounded-full border-[3px] border-ivory shadow-soft lg:left-1/2 lg:-translate-x-1/2",
          last ? "bg-coral" : "bg-navy",
        )}
      >
        {last && <span className="absolute inset-0 animate-ping rounded-full bg-coral/50" />}
      </motion.span>

      {/* floating year */}
      <motion.p
        aria-hidden
        style={{ y: yearY }}
        className={cx(
          "text-outline pointer-events-none hidden select-none font-display text-[clamp(3.5rem,7vw,6.5rem)] font-extrabold leading-none text-navy/20 lg:block",
          right ? "lg:order-1 lg:text-right" : "lg:order-2",
        )}
      >
        {item.year}
      </motion.p>

      <Reveal y={50} className={cx(right ? "lg:order-2" : "lg:order-1 lg:text-right")}>
        <div className={cx("group relative rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-navy/5 transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-8", last && "bg-navy text-ivory")}>
          <p className={cx("inline-flex items-center gap-2 rounded-full px-3 py-1 font-display text-sm font-extrabold", last ? "bg-coral text-navy" : "bg-lavender/60 text-navy")}>
            {last && <Sparkle className="h-3.5 w-3.5" />}
            {item.year}
          </p>
          <h3 className={cx("mt-4 text-2xl font-extrabold leading-tight sm:text-[1.7rem]", !last && "text-navy")}>{item.title}</h3>
          <p className={cx("mt-1 font-semibold", last ? "text-coral" : "text-coral-600")}>{item.place}</p>
          <p className={cx("mt-4 leading-relaxed", last ? "text-ivory/75" : "text-ink/70")}>{item.body}</p>
          {image && (
            <div className={cx("mt-5 flex", right ? "" : "lg:justify-end")}>
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0 round 1rem)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0 round 1rem)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className={cx("overflow-hidden rounded-2xl", image.height > image.width ? "h-40 w-28" : "h-36 w-36")}
              >
                <Picture photo={image} sizes="10rem" imgClassName="transition duration-700 group-hover:scale-110" />
              </motion.div>
            </div>
          )}
        </div>
      </Reveal>
    </li>
  );
}
