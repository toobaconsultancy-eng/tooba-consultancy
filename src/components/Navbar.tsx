import React, { useState } from "react";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../config/siteConfig";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "calculator", label: "Transfer Calculator" },
    { id: "how-it-works", label: "How It Works" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const whatsappNavUrl = getWhatsAppUrl(
    "Hello Tooba Consultancy, I would like to inquire about property consultation and documentation services in Karachi."
  );

  return (
    <header className="sticky top-0 z-40 bg-[#0B1B3D]/95 backdrop-blur-md border-b border-slate-800 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (5 Links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand title, one line wordmark */}
          <button
            onClick={() => handleLinkClick("hero")}
            className="text-left group cursor-pointer focus:outline-none"
            aria-label="Tooba Consultancy Home"
          >
            <span className="text-xl sm:text-2xl font-serif-display font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 block">
              Tooba Consultancy
            </span>
          </button>

          {/* Zone 2: 4-5 single-line clean text links with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer hover:text-white ${
                    isActive ? "text-[#D4AF37] font-semibold" : "text-slate-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#D4AF37] hover:bg-[#e0bc46] rounded-md transition-all shadow-sm active:scale-95 whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-slate-900" />
              <span>Contact on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-900 opacity-70" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-900 bg-[#D4AF37] rounded-md active:scale-95"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-md border border-slate-700"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0B1B3D] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left px-3 py-2.5 rounded text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-[#D4AF37] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#D4AF37] rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
