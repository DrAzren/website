"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { links } from "@/content/site";
import { Book, Calendar, Mic } from "./ui/Icons";

const actions = [
  { label: "Buku", full: "Dapatkan Buku", href: links.book, Icon: Book },
  { label: "Ceramah", full: "Jemput Berceramah", href: links.talk, Icon: Mic },
  { label: "Konsultasi", full: "Tempah Konsultasi", href: links.consultation, Icon: Calendar },
];

/** Floating action dock so every key CTA is always one tap away. */
export function QuickDock() {
  const { scrollY, scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  const update = () => {
    const nearFooter = window.innerHeight + scrollY.get() > document.documentElement.scrollHeight - window.innerHeight * 1.1;
    setShow(scrollY.get() > window.innerHeight * 0.9 && !nearFooter);
  };
  useMotionValueEvent(scrollY, "change", update);
  useMotionValueEvent(scrollYProgress, "change", update);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          aria-label="Tindakan pantas"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 sm:bottom-5"
        >
          <ul className="flex items-center gap-1 rounded-full bg-navy/95 p-1.5 shadow-lift ring-1 ring-white/10 backdrop-blur">
            {actions.map(({ label, full, href, Icon }, i) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 2
                      ? "flex items-center gap-2 rounded-full bg-coral px-4 py-2.5 font-display text-[0.8rem] font-bold text-navy transition hover:bg-ivory sm:text-sm"
                      : "flex items-center gap-2 rounded-full px-3.5 py-2.5 font-display text-[0.8rem] font-bold text-ivory transition hover:bg-ivory/10 sm:text-sm"
                  }
                >
                  <Icon width={17} height={17} />
                  <span className="sm:hidden">{label}</span>
                  <span className="hidden sm:inline">{full}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
