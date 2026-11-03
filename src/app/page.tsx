import { About } from "@/components/About";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { Marquee } from "@/components/Marquee";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { YouTube } from "@/components/YouTube";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Instagram />
      <YouTube />
      <Services />
      <Showcase />
      <About />
      <Process />
      <WhyUs />
      <Gallery />
      <BeforeAfter />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
