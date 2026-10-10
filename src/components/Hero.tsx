import React, { useState } from "react";
import { MessageSquare, Mail, ShieldCheck, ArrowRight, FileText, Calculator, Building, Landmark } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl, getMailtoUrl } from "../config/siteConfig";

interface HeroProps {
  onNavigateToCalculator: () => void;
  onNavigateToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToCalculator, onNavigateToServices }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImgSrc = "/src/assets/images/hero_property_consultancy_1791523699827.jpg";

  const defaultHeroWhatsappUrl = getWhatsAppUrl(
    "Hello Tooba Consultancy, I would like to consult with you regarding property documentation and transfer procedures in Karachi."
  );

  const heroMailtoUrl = getMailtoUrl(
    "Property Consultation Inquiry - Tooba Consultancy",
    "Hello Tooba Consultancy,\n\nI need professional assistance with property documentation in Karachi.\n\nProperty Details:\nLocation / Authority:\nRequirement:\n\nPlease let me know the procedure and next steps."
  );

  return (
    <section id="hero" className="relative bg-[#0B1B3D] text-white overflow-hidden border-b border-slate-800">
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Supporting copy, Actions & Trust statement */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D4AF37]">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
              <span>All across Sindh</span>
            </div>

            {/* Main Heading (Exact prompt requirement) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-bold leading-tight sm:leading-tight text-white tracking-tight" style={{ textWrap: "balance" }}>
              Professional Property Consultation &amp; Documentation in Karachi
            </h1>

            {/* Supporting text (Exact prompt requirement) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              From property transfers and legal deeds to NADRA succession documentation, DHA and Cantonment matters, and electronic property registration, Tooba Consultancy provides professional guidance and documentation assistance to help you navigate property procedures with confidence.
            </p>

            {/* Two Prominent Call-To-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={defaultHeroWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-slate-900 bg-[#D4AF37] hover:bg-[#e2bd46] rounded-md transition-all shadow-md active:scale-95 group text-center"
              >
                <MessageSquare className="w-5 h-5 text-slate-900 shrink-0" />
                <span>Contact Us on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>

              <a
                href={heroMailtoUrl}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-md transition-all active:scale-95 text-center"
              >
                <Mail className="w-5 h-5 text-slate-300 shrink-0" />
                <span>Send Us an Email</span>
              </a>
            </div>

            {/* Trust statement beneath the buttons (Exact prompt requirement) */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-medium tracking-wide">
                Professional Guidance <span className="text-slate-500 mx-1.5">|</span> Documentation Assistance <span className="text-slate-500 mx-1.5">|</span> Transparent Procedures
              </span>
            </div>
          </div>

          {/* Right Column: Visual Hero Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              {/* Fallback container with styling */}
              <div className="w-full aspect-video sm:aspect-[4/3] bg-gradient-to-br from-slate-900 via-[#0B1B3D] to-slate-800 relative">
                <img
                  src={heroImgSrc}
                  alt="Executive property consultation office with title deeds and architectural plans in Karachi"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    // Fallback to avoid broken image frame
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Scrim overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-transparent to-transparent opacity-80" />

                {/* Subdued in-frame descriptor card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0B1B3D]/90 backdrop-blur-md border border-slate-700/60 rounded-md">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-white">All across Sindh</p>
                      <p className="text-slate-300 text-[11px]">Since 2002 · 10k+ Cases · 5k+ Clients</p>
                    </div>
                    <span className="text-[#D4AF37] font-medium text-[11px]">24+ Yrs Exp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quick Capability Jump Anchors */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={onNavigateToServices}
            className="flex items-center gap-3 p-3 text-left rounded-md bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-[#D4AF37]/15 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors">Legal Deeds</p>
              <p className="text-[11px] text-slate-400">Sale, Gift, Relinquishment</p>
            </div>
          </button>

          <button
            onClick={onNavigateToServices}
            className="flex items-center gap-3 p-3 text-left rounded-md bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-[#D4AF37]/15 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors">NADRA Succession</p>
              <p className="text-[11px] text-slate-400">Certificates &amp; Administration</p>
            </div>
          </button>

          <button
            onClick={onNavigateToServices}
            className="flex items-center gap-3 p-3 text-left rounded-md bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-[#D4AF37]/15 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors">DHA &amp; Cantonment</p>
              <p className="text-[11px] text-slate-400">A, B, C Leases &amp; CBC Files</p>
            </div>
          </button>

          <button
            onClick={onNavigateToCalculator}
            className="flex items-center gap-3 p-3 text-left rounded-md bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded bg-[#D4AF37]/15 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors">Transfer Calculator</p>
              <p className="text-[11px] text-slate-400">Estimate Duty, Taxes &amp; Fees</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
