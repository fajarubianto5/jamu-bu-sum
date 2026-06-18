import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PromoBanner } from "@/components/PromoBanner";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { BatikBackground } from "@/components/BatikBackground";
import { FloatingTime } from "@/components/FloatingTime";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <BatikBackground />
      <PromoBanner />
      <Navbar />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <MenuSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <AboutSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <ContactSection />
      </ScrollAnimation>
      <Footer />
      <FloatingWhatsApp />
      <FloatingTime />
      <BackToTop />
    </div>
  );
}