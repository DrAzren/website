"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "../ui/Reveal";

const PHASES = [
  { key: "tarik", label: "Tarik nafas…", seconds: 4, scale: 1.55 },
  { key: "tahan", label: "Tahan sekejap…", seconds: 4, scale: 1.55 },
  { key: "hembus", label: "Hembus perlahan…", seconds: 6, scale: 1 },
] as const;

export function Breathe() {
  const [running, setRunning] = useState(false);
  const [{ phase, left, cycles }, setState] = useState({ phase: 0, left: PHASES[0].seconds as number, cycles: 0 });

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setState((s) => {
        if (s.left > 1) return { ...s, left: s.left - 1 };
        const next = (s.phase + 1) % PHASES.length;
        return { phase: next, left: PHASES[next].seconds, cycles: s.cycles + (next === 0 ? 1 : 0) };
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const reset = () => setState({ phase: 0, left: PHASES[0].seconds, cycles: 0 });
  const start = () => {
    reset();
    setRunning(true);
  };
  const stop = () => {
    setRunning(false);
    reset();
  };

  const p = PHASES[phase];

  return (
    <section id="nafas" aria-labelledby="nafas-tajuk" className="sheet z-10 overflow-hidden bg-navy py-24 text-ivory sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow text-sky">Rehat sekejap</p>
            <h2 id="nafas-tajuk" className="mt-5 text-huge font-extrabold">
              Ambil Nafas Sekejap.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/70">
              Banyak dah kita scroll tadi. Jom berhenti sekejap — ikut bulatan ini: tarik nafas 4 saat, tahan 4 saat, hembus 6 saat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {!running ? (
                <button type="button" onClick={start} className="rounded-full bg-sky px-7 py-4 font-display font-bold text-navy transition hover:bg-ivory">
                  Mula bernafas
                </button>
              ) : (
                <button type="button" onClick={stop} className="rounded-full border-2 border-ivory/40 px-7 py-4 font-display font-bold transition hover:bg-ivory hover:text-navy">
                  Berhenti
                </button>
              )}
            </div>
            <p className="mt-6 text-sm text-ivory/45">Latihan ringkas untuk bertenang seketika — bukan pengganti rawatan atau nasihat profesional.</p>
          </Reveal>
        </div>

        <div className="relative mx-auto grid aspect-square w-full max-w-[26rem] place-items-center">
          <div aria-hidden className="absolute inset-0 rounded-full border border-ivory/10" />
          <div aria-hidden className="absolute inset-[12%] rounded-full border border-ivory/10" />
          <motion.div
            aria-hidden
            animate={{ scale: running ? p.scale : [1, 1.08, 1] }}
            transition={running ? { duration: p.seconds, ease: "easeInOut" } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[48%] w-[48%] rounded-full bg-gradient-to-br from-sky via-lavender to-coral opacity-90 blur-[2px] shadow-[0_0_120px_30px_rgba(154,214,239,0.35)]"
          />
          <div className="relative text-center" aria-live="polite">
            <p className="font-display text-2xl font-extrabold text-navy drop-shadow-sm">{running ? p.label : "Sedia?"}</p>
            {running && (
              <p className="mt-1 font-display text-4xl font-extrabold text-navy">
                {left}
                <span className="sr-only"> saat</span>
              </p>
            )}
            {running && cycles > 0 && <p className="mt-1 text-xs font-semibold text-navy/70">Pusingan {cycles + 1}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
