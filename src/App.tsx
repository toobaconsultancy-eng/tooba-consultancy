/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { PropertyTransferCalculator } from "./components/PropertyTransferCalculator";
import { HowItWorks } from "./components/HowItWorks";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ExperienceStats } from "./components/ExperienceStats";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { LegalDisclaimer } from "./components/LegalDisclaimer";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ServiceDetailModal } from "./components/ServiceDetailModal";
import { LegalModal } from "./components/LegalModal";
import { ServiceItem } from "./config/siteConfig";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Scroll spy to highlight active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "calculator", "how-it-works", "about", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#D4AF37]/20 selection:text-slate-900">
      {/* Strict Top Bar Contract Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onNavigateToCalculator={() => handleNavigate("calculator")}
          onNavigateToServices={() => handleNavigate("services")}
        />

        {/* 2. Comprehensive Services Section (All 11 required services) */}
        <ServicesSection
          onOpenDetails={(service) => setSelectedService(service)}
          onNavigateToCalculator={() => handleNavigate("calculator")}
        />

        {/* 3. Interactive Property Transfer Calculator */}
        <PropertyTransferCalculator />

        {/* 4. How It Works (Four-Step Flow) */}
        <HowItWorks />

        {/* 5. Why Choose Us (Professional Service Commitments) */}
        <WhyChooseUs />

        {/* 6. Proven Track Record & Interactive Pie Chart Stats (24+ Years, 10k+ Cases, 5k+ Clients, Since 2002) */}
        <ExperienceStats />

        {/* 7. About Tooba Consultancy */}
        <AboutSection />

        {/* 7. Contact Us & Validated Inquiry System */}
        <ContactSection />

        {/* 8. Independent Consultancy & Statutory Disclaimer */}
        <LegalDisclaimer />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Deep Dive Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onNavigateToCalculator={() => {
          setSelectedService(null);
          handleNavigate("calculator");
        }}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
