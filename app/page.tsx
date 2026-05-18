import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";
import { StorePreview } from "@/components/StorePreview";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <About />
        <Testimonials />
        <StorePreview />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
