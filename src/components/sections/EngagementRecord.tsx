"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { engagements, type EngagementCategory } from "@/content/engagements";
import { cx } from "@/lib/asset";

const MONTHS = ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"];
const CATEGORY_LABEL: Record<EngagementCategory, string> = {
  pendidikan: "Universiti & Sekolah",
  media: "Media & Podcast",
  organisasi: "Organisasi & Komuniti",
};
const CATEGORY_DOT: Record<EngagementCategory, string> = {
  pendidikan: "bg-lavender",
  media: "bg-sky",
  organisasi: "bg-sage",
};

const formatDate = (iso: string | null, year: number) => {
  if (!iso) return String(year);
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

const YEARS = [...new Set(engagements.map((e) => e.year))].sort((a, b) => b - a);

/** Searchable record of every invitation from the "jumlah jemputan" sheet. */
export function EngagementRecord() {
  const [year, setYear] = useState<number | "semua">("semua");
  const [category, setCategory] = useState<EngagementCategory | "semua">("semua");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return engagements.filter(
      (e) =>
        (year === "semua" || e.year === year) &&
        (category === "semua" || e.category === category) &&
        (!q || e.title.toLowerCase().includes(q) || e.role.toLowerCase().includes(q)),
    );
  }, [year, category, query]);

  const countFor = (y: number | "semua") => engagements.filter((e) => y === "semua" || e.year === y).length;

  return (
    <div className="glass-dark mt-14 rounded-[2rem] p-5 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h4 className="font-display text-2xl font-extrabold sm:text-3xl">Rekod Jemputan</h4>
          <p className="mt-2 max-w-xl text-ivory/65">
            Setiap ceramah, forum, temu bual dan kolaborasi yang saya hadiri sejak {YEARS[YEARS.length - 1]}. Cari nama institusi atau program anda.
          </p>
        </div>
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Cari jemputan</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari: UiTM, TV Al-Hijrah, Muar…"
            className="w-full rounded-full border border-ivory/20 bg-ivory/5 px-5 py-3 text-ivory placeholder:text-ivory/40 focus:border-coral focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div role="group" aria-label="Tapis mengikut tahun" className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
          {(["semua", ...YEARS] as const).map((y) => (
            <button
              key={y}
              type="button"
              aria-pressed={year === y}
              onClick={() => setYear(y)}
              className={cx(
                "shrink-0 rounded-full px-4 py-2 font-display text-sm font-bold transition",
                year === y ? "bg-coral text-navy" : "border border-ivory/20 text-ivory/75 hover:border-ivory",
              )}
            >
              {y === "semua" ? "Semua tahun" : y}
              <span className="ml-1.5 text-xs opacity-60">{countFor(y)}</span>
            </button>
          ))}
        </div>
        <div role="group" aria-label="Tapis mengikut kategori" className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
          {(["semua", "pendidikan", "media", "organisasi"] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cx(
                "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
                category === c ? "bg-ivory text-navy" : "text-ivory/70 hover:text-ivory",
              )}
            >
              {c !== "semua" && <span className={cx("h-2.5 w-2.5 rounded-full", CATEGORY_DOT[c])} />}
              {c === "semua" ? "Semua kategori" : CATEGORY_LABEL[c]}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-ivory/50" aria-live="polite">
        {rows.length} jemputan
      </p>
      <ol className="mt-3 max-h-[26rem] space-y-1.5 overflow-y-auto pr-2" data-lenis-prevent="">
        <AnimatePresence initial={false}>
          {rows.map((e) => (
            <motion.li
              key={`${e.year}-${e.title}-${e.series ?? 0}-${e.date ?? ""}`}
              layout
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 rounded-2xl bg-ivory/[0.04] px-4 py-3 sm:grid-cols-[7.5rem_1fr_auto]"
            >
              <span className="text-sm tabular-nums text-ivory/55">{formatDate(e.date, e.year)}</span>
              <span className="flex min-w-0 items-center gap-2.5 font-display font-bold">
                <span className={cx("h-2.5 w-2.5 shrink-0 rounded-full", CATEGORY_DOT[e.category])} aria-hidden />
                <span className="sm:truncate">{e.title}</span>
                {e.series && e.series > 1 && <span className="shrink-0 rounded-full bg-ivory/10 px-2 py-0.5 text-[0.7rem] font-semibold text-ivory/70">Siri {e.series}</span>}
              </span>
              <span className="col-start-2 text-sm text-coral sm:col-start-auto sm:text-right">{e.role}</span>
            </motion.li>
          ))}
        </AnimatePresence>
        {rows.length === 0 && <li className="rounded-2xl border border-dashed border-ivory/20 p-6 text-center text-ivory/60">Tiada padanan. Cuba kata kunci lain.</li>}
      </ol>
    </div>
  );
}
