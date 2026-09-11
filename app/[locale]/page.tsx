import { Hero } from "@/components/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ShowcaseCarousel } from "@/components/ShowcaseCarousel";
import { Testimonials } from "@/components/Testimonials";
import { CoachProfile } from "@/components/CoachProfile";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsCounter />
      <About />
      <Services />
      <ShowcaseCarousel />
      <Testimonials limit={4} />
      <CoachProfile />
      <FAQ />
      <Contact />
    </main>
  );
}
