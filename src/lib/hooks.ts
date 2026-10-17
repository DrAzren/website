"use client";

import { useMotionValue, useSpring, type MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useMotionPrefs } from "@/components/providers/MotionPrefs";

/** Normalised pointer position (-1…1) across the viewport, smoothed with a spring. */
export function usePointer(): { x: MotionValue<number>; y: MotionValue<number> } {
  const { reduced } = useMotionPrefs();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const x = useSpring(rx, { stiffness: 60, damping: 18 });
  const y = useSpring(ry, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) {
      rx.set(0);
      ry.set(0);
      return;
    }
    const onMove = (e: PointerEvent) => {
      rx.set((e.clientX / window.innerWidth) * 2 - 1);
      ry.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, rx, ry]);

  return { x, y };
}

/** true once the cinematic intro has cleared (immediately if it was skipped / not shown). */
export function useIntroDone() {
  const { reduced } = useMotionPrefs();
  const [done, setDone] = useState(false);
  useEffect(() => {
    const skipped =
      reduced ||
      document.documentElement.dataset.intro === "seen" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (skipped) {
      setDone(true);
      return;
    }
    const finish = () => setDone(true);
    const t = setTimeout(finish, 2700);
    window.addEventListener("intro:done", finish);
    return () => {
      clearTimeout(t);
      window.removeEventListener("intro:done", finish);
    };
  }, [reduced]);
  return done;
}
