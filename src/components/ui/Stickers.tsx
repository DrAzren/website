import { cx } from "@/lib/asset";

/** Keep `relative` unless the caller positions the element itself. */
const pos = (className?: string) => (/\b(absolute|fixed)\b/.test(className ?? "") ? "" : "relative");

/** Rotating circular text badge. */
export function CircleBadge({ text, className, center, spin = true }: { text: string; className?: string; center?: React.ReactNode; spin?: boolean }) {
  const id = `c-${text.replace(/[^a-z0-9]/gi, "").slice(0, 12)}`;
  return (
    <div className={cx(pos(className), "grid place-items-center", className)} aria-hidden>
      <svg viewBox="0 0 200 200" className={cx("absolute inset-0 h-full w-full", spin && "animate-spinslow")}>
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-current font-display text-[17px] font-bold uppercase tracking-[0.2em]">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      {center}
    </div>
  );
}

/** Speech bubble with a tail. */
export function Bubble({ children, className, tail = "left" }: { children: React.ReactNode; className?: string; tail?: "left" | "right" }) {
  return (
    <div className={cx(pos(className), "rounded-[1.6rem] px-5 py-3 font-display font-bold shadow-soft", className)}>
      {children}
      <svg
        viewBox="0 0 30 22"
        className={cx("absolute -bottom-[14px] h-[22px] w-[30px] fill-current", tail === "left" ? "left-6" : "right-6 -scale-x-100")}
        aria-hidden
      >
        <path d="M0 0h30C22 4 12 12 4 22 6 14 5 6 0 0Z" />
      </svg>
    </div>
  );
}

/** Small decorative sparkle. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 0c1.6 10.4 9.6 18.4 20 20-10.4 1.6-18.4 9.6-20 20C18.4 29.6 10.4 21.6 0 20 10.4 18.4 18.4 10.4 20 0Z" fill="currentColor" />
    </svg>
  );
}

/** Hand-drawn squiggle underline. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 24" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M3 15C40 4 70 22 110 12s70-8 105 2 55 0 82-6" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" className="squiggle-path" />
    </svg>
  );
}
