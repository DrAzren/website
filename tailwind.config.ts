import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5EF",
        navy: { DEFAULT: "#172A3A", 700: "#22394D", 600: "#2E4A61" },
        coral: { DEFAULT: "#FF775E", 600: "#E85E45" },
        lavender: "#C8BCF5",
        sage: "#A8C8B2",
        sky: "#9AD6EF",
        ink: "#222222",
        gold: "#C9A45C",
        sun: "#FFDF1E",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        mega: ["clamp(3.2rem, 11vw, 11rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        giant: ["clamp(2.6rem, 7.2vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        huge: ["clamp(2.1rem, 5vw, 4.6rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      borderRadius: { blob: "42% 58% 63% 37% / 41% 44% 56% 59%" },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(23,42,58,0.25)",
        lift: "0 30px 80px -24px rgba(23,42,58,0.45)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        spinslow: { to: { transform: "rotate(360deg)" } },
        morph: {
          "0%,100%": { borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" },
          "50%": { borderRadius: "58% 42% 37% 63% / 55% 61% 39% 45%" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-fast": "marquee 24s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        spinslow: "spinslow 22s linear infinite",
        morph: "morph 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
