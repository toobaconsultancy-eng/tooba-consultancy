import React, { useState } from "react";
import { motion } from "motion/react";
import { SERVICES_DATA, ServiceItem } from "../config/siteConfig";
import { ServiceCard } from "./ServiceCard";

interface ServicesSectionProps {
  onOpenDetails: (service: ServiceItem) => void;
  onNavigateToCalculator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenDetails,
  onNavigateToCalculator,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "deeds", label: "Deeds & Leases" },
    { id: "authorities", label: "Civic & Authorities" },
    { id: "succession", label: "Succession & Inheritance" },
    { id: "consultation", label: "Taxation & Consultation" },
  ];

  const filteredServices = SERVICES_DATA.filter((svc) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "deeds") return svc.category === "deeds";
    if (activeCategory === "authorities") return svc.category === "authorities";
    if (activeCategory === "succession") return svc.category === "succession";
    if (activeCategory === "consultation")
      return svc.category === "consultation" || svc.category === "calculator";
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2">
              Comprehensive Service Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-slate-900 tracking-tight">
              Property Consultation &amp; Documentation Services
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Assisting property owners, buyers, sellers, and overseas Pakistanis with accurate document preparation, procedural guidance, and authority interactions across Karachi.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#0B1B3D] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid with Staggered Subtle Fade-in-on-Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full flex flex-col"
            >
              <ServiceCard
                service={service}
                onOpenDetails={onOpenDetails}
                onNavigateToCalculator={onNavigateToCalculator}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-12 p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            <span className="font-semibold text-slate-900">Have a custom or mixed property scenario?</span>
            <span className="ml-1 text-slate-600">
              We review complex ownership chains, contested title documents, and overseas power of attorney requirements.
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              const generalSvc = SERVICES_DATA.find((s) => s.id === "general-consultation");
              if (generalSvc) onOpenDetails(generalSvc);
            }}
            className="text-xs font-semibold text-[#0B1B3D] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request Custom Consultation &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
