import React, { useState } from "react";
import { ShieldCheck, MapPin, Mail, MessageSquare } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl, getMailtoUrl } from "../config/siteConfig";
import meetingImg from "../assets/images/consultation_advisory_meeting_1791523731891.jpg";

export const AboutSection: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const whatsappUrl = getWhatsAppUrl(
    "Hello Tooba Consultancy, I would like to learn more about your property consultancy services in Karachi."
  );
  const mailtoUrl = getMailtoUrl("General Inquiry - Tooba Consultancy");

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Executive Consultation Imagery */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-slate-900 relative">
              <div className="aspect-[4/3] relative">
                <img
                  src={meetingImg}
                  alt="Professional property consultants reviewing documentation and architectural site plans"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    Client Consultation &amp; Document Review
                  </p>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Focused on accuracy, transparency, and procedural clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Copy & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-slate-500">
              Who We Are
            </div>

            {/* Mandatory Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-slate-900 tracking-tight">
              About Tooba Consultancy
            </h2>

            {/* Mandatory Suggested Copy */}
            <div className="space-y-4 text-base text-slate-700 leading-relaxed font-light">
              <p>
                Tooba Consultancy assists individuals and property owners with property consultation, legal documentation, registration procedures, lease-related matters, inheritance documentation, and property administration processes. Our focus is to help clients understand their requirements, prepare the appropriate documentation, and navigate the procedures of relevant authorities with greater clarity and convenience.
              </p>
              <p>
                From property deeds and transfer documentation to NADRA succession-related matters, DHA and Cantonment procedures, and electronic registration assistance, we aim to provide a convenient point of contact for a wide range of property documentation needs.
              </p>
            </div>

            {/* Regional focus callout */}
            <div className="p-4 rounded-md bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>All across Sindh</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether managing property transfers, succession, and taxation returns locally in Karachi (DHA, Clifton, KDA, Cantonments) or across Sindh districts including Hyderabad, Sukkur, Larkana, and Mirpurkhas, or coordinating documentation for Overseas Pakistanis, we provide clear step-by-step procedural support.
              </p>
            </div>

            {/* Quick contact actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#D4AF37] hover:bg-[#e0bc46] rounded transition-all shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Email Our Consultants</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
