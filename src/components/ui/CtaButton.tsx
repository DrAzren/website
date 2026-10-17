import { cx } from "@/lib/asset";
import { ArrowUpRight } from "./Icons";
import { Magnetic } from "./Magnetic";

type Variant = "coral" | "navy" | "ivory" | "ghost" | "ghost-light" | "sun";

const styles: Record<Variant, string> = {
  coral: "bg-coral text-navy hover:bg-navy hover:text-ivory",
  navy: "bg-navy text-ivory hover:bg-coral hover:text-navy",
  ivory: "bg-ivory text-navy hover:bg-coral hover:text-navy",
  sun: "bg-sun text-navy hover:bg-ivory",
  ghost: "border-2 border-navy/80 text-navy hover:bg-navy hover:text-ivory",
  "ghost-light": "border-2 border-ivory/70 text-ivory hover:bg-ivory hover:text-navy",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  magnetic?: boolean;
  icon?: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function CtaButton({ href, children, variant = "coral", external = true, magnetic, icon, className, size = "md", onClick }: Props) {
  const a = (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cx(
        "group relative inline-flex items-center gap-3 rounded-full font-display font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-coral/50",
        size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm sm:text-[0.95rem]",
        styles[variant],
        className,
      )}
    >
      <span>{children}</span>
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-[1.5px] border-current transition-transform duration-300 group-hover:rotate-45">
        {icon ?? <ArrowUpRight width={16} height={16} />}
      </span>
      {external && <span className="sr-only"> (buka di tab baharu)</span>}
    </a>
  );
  return magnetic ? <Magnetic>{a}</Magnetic> : a;
}
