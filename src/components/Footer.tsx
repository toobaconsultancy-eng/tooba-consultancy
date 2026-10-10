import React from "react";
import { MessageSquare, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl, getMailtoUrl } from "../config/siteConfig";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (type: "privacy" | "terms") => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  const footerWhatsAppUrl = getWhatsAppUrl(
    "Hello Tooba Consultancy, I would like to inquire about your property documentation services."
  );
  const footerMailtoUrl = getMailtoUrl("General Inquiry - Tooba Consultancy");

  return (
    <footer className="bg-[#08132B] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-serif-display font-bold text-white tracking-tight block">
              Tooba Consultancy
            </span>
            <p className="text-xs sm:text-sm text-[#D4AF37] font-medium">
              {BUSINESS_CONFIG.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              Professional property consultation, title document scrutiny, deed drafting, DHA and Cantonment lease facilitation, NADRA succession documentation, and taxation returns across Karachi and all Sindh Province, Pakistan.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{BUSINESS_CONFIG.fullLocation}</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("hero")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("calculator")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Property Transfer Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("how-it-works")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Inquire directly with our property consultants via WhatsApp or email for rapid initial guidance.
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/50 text-xs text-slate-200 hover:text-white transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-semibold">{BUSINESS_CONFIG.displayPhone}</span>
                <span className="text-[11px] text-slate-400 ml-auto group-hover:text-white flex items-center gap-0.5">
                  Chat <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              <a
                href={footerMailtoUrl}
                className="flex items-center gap-2.5 p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-200 hover:text-white transition-all group"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="truncate">{BUSINESS_CONFIG.email}</span>
                <span className="text-[11px] text-slate-400 ml-auto group-hover:text-white flex items-center gap-0.5">
                  Email <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal links, Disclaimers */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Tooba Consultancy (toobaconsultancy.com). All rights reserved. All across Sindh.</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal("terms")}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms &amp; Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
