"use client";

import { useEffect, useState } from "react";

/**
 * Short cinematic opener. Driven by CSS (globals.css → .intro) so it always
 * clears itself even without JavaScript; this component only adds "Langkau".
 * Shown once per browser session and never with reduced motion.
 */
export function Intro() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 3600);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy text-ivory" aria-hidden="true">
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-lavender/25 blur-3xl" />
      <div className="overflow-hidden">
        <p className="intro-line font-display text-[clamp(3.5rem,14vw,12rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">DR AZREN</p>
      </div>
      <div className="mt-3 overflow-hidden">
        <p
          className="intro-line font-display text-[clamp(1.2rem,3.5vw,2.4rem)] font-bold tracking-[0.35em] text-coral"
          style={{ animationDelay: "0.45s" }}
        >
          BICARA JIWA.
        </p>
      </div>
      <button
        type="button"
        tabIndex={-1}
        onClick={() => {
          setGone(true);
          window.dispatchEvent(new Event("intro:done"));
        }}
        className="absolute bottom-8 right-8 rounded-full border border-ivory/30 px-5 py-2 font-display text-sm font-semibold text-ivory/80 transition hover:bg-ivory hover:text-navy"
      >
        Langkau →
      </button>
    </div>
  );
}
