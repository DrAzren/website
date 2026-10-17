import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";
import { QuickDock } from "@/components/QuickDock";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { BookShowcase } from "@/components/sections/BookShowcase";
import { Booth } from "@/components/sections/Booth";
import { Breathe } from "@/components/sections/Breathe";
import { Collaboration } from "@/components/sections/Collaboration";
import { Consultation } from "@/components/sections/Consultation";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Social } from "@/components/sections/Social";
import { Speaking } from "@/components/sections/Speaking";

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <main id="kandungan">
        <Hero />
        <About />
        <Achievements />
        <Journey />
        <Gallery />
        <BookShowcase />
        <Speaking />
        <Booth />
        <Consultation />
        <Breathe />
        <Collaboration />
        <Social />
      </main>
      <Footer />
      <QuickDock />
    </>
  );
}
