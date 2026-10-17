"use client";

import { motion } from "framer-motion";
import { cx } from "@/lib/asset";

type Props = {
  text: string | string[];
  className?: string;
  wordClassName?: (word: string, i: number) => string | undefined;
  delay?: number;
  stagger?: number;
  /** animate immediately on mount instead of on scroll-into-view */
  immediate?: boolean;
  /** when provided, controls playback manually (e.g. wait for the intro to finish) */
  play?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  id?: string;
};

/** Editorial headline: each word slides up from behind a mask. */
export function SplitWords({ text, className, wordClassName, delay = 0, stagger = 0.07, immediate, play, as = "h2", id }: Props) {
  const words = Array.isArray(text) ? text : text.split(" ");
  const Tag = motion[as] as typeof motion.h2;
  const trigger =
    play !== undefined
      ? { animate: play ? "show" : "hidden" }
      : immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.4 } };
  return (
    <Tag
      id={id}
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={words.join(" ")}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={cx("inline-block will-change-transform", wordClassName?.(w, i))}
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
