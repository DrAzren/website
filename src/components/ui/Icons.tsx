import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const ArrowUpRight = (p: P) => (<svg {...base(p)}><path d="M7 17 17 7M8 7h9v9" /></svg>);
export const ArrowRight = (p: P) => (<svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ArrowDown = (p: P) => (<svg {...base(p)}><path d="M12 5v14M6 13l6 6 6-6" /></svg>);
export const ChevronLeft = (p: P) => (<svg {...base(p)}><path d="m15 6-6 6 6 6" /></svg>);
export const ChevronRight = (p: P) => (<svg {...base(p)}><path d="m9 6 6 6-6 6" /></svg>);
export const Close = (p: P) => (<svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const Check = (p: P) => (<svg {...base(p)}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>);
export const Play = (p: P) => (<svg {...base(p)} fill="currentColor" stroke="none"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></svg>);
export const Mic = (p: P) => (<svg {...base(p)}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>);
export const Camera = (p: P) => (<svg {...base(p)}><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><circle cx="12" cy="13" r="4" /></svg>);
export const Phone = (p: P) => (<svg {...base(p)}><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M11 18.5h2" /></svg>);
export const Spark = (p: P) => (<svg {...base(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.5 2.5M15.2 15.2l2.5 2.5M6.3 17.7l2.5-2.5M15.2 8.8l2.5-2.5" /></svg>);
export const Building = (p: P) => (<svg {...base(p)}><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M3 21h18M8 7h4M8 11h4M8 15h4" /></svg>);
export const Heart = (p: P) => (<svg {...base(p)}><path d="M12 20s-7.5-4.6-9.2-9.3C1.6 7.3 3.9 4 7.3 4c2 0 3.6 1.1 4.7 2.7C13.1 5.1 14.7 4 16.7 4c3.4 0 5.7 3.3 4.5 6.7C19.5 15.4 12 20 12 20Z" /></svg>);
export const Tv = (p: P) => (<svg {...base(p)}><rect x="3" y="6" width="18" height="13" rx="2.5" /><path d="m8 2.5 4 3.5 4-3.5" /></svg>);
export const Radio = (p: P) => (<svg {...base(p)}><rect x="3" y="8" width="18" height="12" rx="2.5" /><circle cx="8.5" cy="14" r="2.5" /><path d="M14 12h4M14 16h4M6 8l10-5" /></svg>);
export const Headphones = (p: P) => (<svg {...base(p)}><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="14" width="5" height="7" rx="2" /><rect x="16" y="14" width="5" height="7" rx="2" /></svg>);
export const News = (p: P) => (<svg {...base(p)}><path d="M5 4h12v15a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1ZM17 8h3v11a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h3" /></svg>);
export const Book = (p: P) => (<svg {...base(p)}><path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2V5ZM4 19a2 2 0 0 0 2 2h13" /></svg>);
export const Stethoscope = (p: P) => (<svg {...base(p)}><path d="M6 3v6a4 4 0 0 0 8 0V3M10 13v2a5 5 0 0 0 10 0v-2" /><circle cx="20" cy="11" r="2" /></svg>);
export const Calendar = (p: P) => (<svg {...base(p)}><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>);
export const Chat = (p: P) => (<svg {...base(p)}><path d="M20 12a8 8 0 0 1-11.7 7.1L4 20l1-4.1A8 8 0 1 1 20 12Z" /></svg>);
export const Brain = (p: P) => (<svg {...base(p)}><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1ZM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1" /></svg>);
export const Clipboard = (p: P) => (<svg {...base(p)}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1M9 11l2 2 4-4M9 17h6" /></svg>);
export const Motion = (p: P) => (<svg {...base(p)}><path d="M3 12c3-6 6 6 9 0s6 6 9 0" /></svg>);
export const MapPin = (p: P) => (<svg {...base(p)}><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
export const Link = (p: P) => (<svg {...base(p)}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1" /></svg>);
export const Instagram = (p: P) => (<svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>);
export const TikTok = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M16.6 3c.3 2.3 1.6 3.9 3.9 4.1v3.1c-1.4.1-2.6-.3-3.9-1v6.1c0 4.5-4.9 6.9-8.3 4.3-2.2-1.7-2.6-5.3-.4-7.4 1.2-1.1 2.8-1.6 4.5-1.3v3.2c-.4-.1-.8-.2-1.2-.1-1.5.2-2.3 1.6-1.8 3 .6 1.6 2.9 1.9 3.9.5.3-.4.4-.9.4-1.4V3h2.9Z" />
  </svg>
);
export const Whatsapp = (p: P) => (
  <svg {...base(p)}><path d="M20 11.6A8.4 8.4 0 0 1 7.6 19L4 20l1-3.5a8.4 8.4 0 1 1 15-4.9Z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2.3-2.3l.8-1-1-2Z" /></svg>
);

export const iconByName = { mic: Mic, camera: Camera, phone: Phone, spark: Spark, building: Building, heart: Heart } as const;
