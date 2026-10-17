import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { MotionPrefsProvider } from "@/components/providers/MotionPrefs";
import { book, consultation, links, profile, seo, socials } from "@/content/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "ms_MY",
    url: "/",
    siteName: "Dr Azren",
    title: seo.title,
    description: seo.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dr Azren — Bicara Jiwa. Sebarkan Ilmu. Bina Harapan." }],
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#172A3A", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${seo.siteUrl}/#person`,
      name: profile.fullName,
      alternateName: "Dr Azren",
      jobTitle: "Doktor Perubatan (Amalan Am, Psikiatri & Kesihatan Mental), Penceramah dan Penulis",
      description: seo.description,
      image: `${seo.siteUrl}/images/${profile.portrait.src}.jpg`,
      url: seo.siteUrl,
      sameAs: socials.map((s) => s.url),
      worksFor: { "@type": "MedicalClinic", name: "Klinik Nissa", address: { "@type": "PostalAddress", ...consultation.address } },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Universiti Sains Malaysia" },
        { "@type": "CollegeOrUniversity", name: "Universiti Malaya" },
        { "@type": "EducationalOrganization", name: "MRSM Taiping" },
      ],
      knowsAbout: ["Kesihatan mental", "Psikiatri", "Mental health awareness", "Public speaking"],
      knowsLanguage: ["ms", "en"],
    },
    {
      "@type": "Book",
      name: book.title,
      alternativeHeadline: book.subtitle,
      author: { "@id": `${seo.siteUrl}/#person` },
      publisher: { "@type": "Organization", name: book.publisher },
      datePublished: book.year,
      inLanguage: "ms",
      image: `${seo.siteUrl}/images/${book.cover.src}.jpg`,
      url: links.book,
    },
    {
      "@type": "WebSite",
      name: "Dr Azren",
      url: seo.siteUrl,
      inLanguage: "ms-MY",
      publisher: { "@id": `${seo.siteUrl}/#person` },
    },
  ],
};

// Runs before paint: skip the intro if it was already seen in this session.
const introScript = `try{if(sessionStorage.getItem('drazren:intro')){document.documentElement.dataset.intro='seen'}else{sessionStorage.setItem('drazren:intro','1')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms-MY" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="grain">
        <MotionPrefsProvider>{children}</MotionPrefsProvider>
      </body>
    </html>
  );
}
