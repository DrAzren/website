import { cx } from "@/lib/asset";

/** Infinite horizontal marquee (pauses on hover, stops for reduced motion). */
export function Marquee({ children, reverse, fast, className }: { children: React.ReactNode; reverse?: boolean; fast?: boolean; className?: string }) {
  return (
    <div className={cx("marquee group flex overflow-hidden", className)}>
      <div
        className={cx("flex w-max shrink-0 group-hover:[animation-play-state:paused]", fast ? "animate-marquee-fast" : "animate-marquee")}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
