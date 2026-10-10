import React, { useState } from "react";
import {
  MessageCircle,
  Briefcase,
  FileCheck2,
  Landmark,
  Scale,
  Smartphone,
  Building2,
  CheckCircle2,
} from "lucide-react";
import deedsImg from "../assets/images/pakistan_sindh_property_deeds_1791529767905.jpg";

export const WhyChooseUs: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const commitments = [
    {
      title: "Clear Communication",
      desc: "Direct, unambiguous answers about document prerequisites, realistic timelines, and applicable procedural stages.",
      icon: MessageCircle,
    },
    {
      title: "Professional Consultation",
      desc: "Structured evaluation of property documentation, title chains, and authority clearances prior to commitments.",
      icon: Briefcase,
    },
    {
      title: "Assistance with Property Documentation",
      desc: "Precise drafting of deeds, power of attorney documents, lease files, and required statutory affidavits.",
      icon: FileCheck2,
    },
    {
      title: "Guidance on Government Procedures",
      desc: "Demystifying requirements across Sub-Registrar divisions, NADRA centers, Cantonment Boards, KDA, and MEO.",
      icon: Landmark,
    },
    {
      title: "Transparent Discussion of Scope & Fees",
      desc: "Clear distinction between official government statutory fees and our consultancy service fees.",
      icon: Scale,
    },
    {
      title: "Convenient WhatsApp & Email Access",
      desc: "Rapid turnaround on inquiries without having to navigate complicated booking systems or queues.",
      icon: Smartphone,
    },
    {
      title: "Residential & Commercial Support",
      desc: "Tailored documentation assistance whether dealing with family inheritance, plots, houses, or commercial properties.",
      icon: Building2,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Commitments List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-slate-500">
              Our Service Standards
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-slate-900 tracking-tight">
              Why Choose Tooba Consultancy?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We approach every property consultation with rigor, clarity, and respect for your time. Rather than making unsubstantiated claims, we define our relationship through transparent service commitments:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-md border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-6 h-6 rounded bg-[#0B1B3D]/5 flex items-center justify-center text-[#0B1B3D]">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Documentation Proof Anchor */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
              <div className="aspect-[4/3] relative">
                <img
                  src={deedsImg}
                  alt="Authentic Government of Sindh E-Stamp paper and Sale Deed registry file on consultation table"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    All across Sindh
                  </p>
                  <p className="text-sm font-medium text-slate-100 mt-0.5">
                    Authentic Sindh e-stamping, registry files, sale deeds, and title chains across all Sindh districts.
                  </p>
                </div>
              </div>

              {/* Service commitment checklist strip */}
              <div className="p-4 bg-white border-t border-slate-100 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>No unverified promises or artificial guarantees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Transparent itemization of statutory challans vs. advisory charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Accessible consultations for overseas Pakistanis &amp; resident owners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
