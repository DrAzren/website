"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Ctx = {
  /** true when the visitor (OS setting or the on-site toggle) prefers reduced motion */
  reduced: boolean;
  toggle: () => void;
  scrollTo: (id: string) => void;
};

const MotionPrefsContext = createContext<Ctx>({ reduced: false, toggle: () => {}, scrollTo: () => {} });

export const useMotionPrefs = () => useContext(MotionPrefsContext);

const KEY = "drazren:reduce-motion";

export function MotionPrefsProvider({ children }: { children: React.ReactNode }) {
  const systemReduced = useReducedMotion() ?? false;
  const [manual, setManual] = useState<boolean | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v !== null) setManual(v === "1");
    } catch {}
  }, []);

  const reduced = manual ?? systemReduced;

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduced);
  }, [reduced]);

  // Smooth scrolling (desktop pointer only, off when reduced motion is preferred)
  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const l = new Lenis({ lerp: 0.11, anchors: { offset: -20 } });
    let raf = 0;
    const loop = (t: number) => {
      l.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    setLenis(l);
    return () => {
      cancelAnimationFrame(raf);
      l.destroy();
      setLenis(null);
    };
  }, [reduced]);

  const toggle = useCallback(() => {
    setManual((prev) => {
      const next = !(prev ?? systemReduced);
      try {
        localStorage.setItem(KEY, next ? "1" : "0");
      } catch {}
      return next;
    });
  }, [systemReduced]);

  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: -20 });
      else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    },
    [lenis, reduced],
  );

  const value = useMemo(() => ({ reduced, toggle, scrollTo }), [reduced, toggle, scrollTo]);

  return (
    <MotionPrefsContext.Provider value={value}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>{children}</MotionConfig>
    </MotionPrefsContext.Provider>
  );
}
