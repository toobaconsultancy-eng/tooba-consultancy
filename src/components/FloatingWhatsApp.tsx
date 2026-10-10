import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../config/siteConfig";

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const whatsappUrl = getWhatsAppUrl(
    "Hello Tooba Consultancy, I have a property documentation query in Karachi."
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Optional dismissible tooltip hint */}
      {tooltipOpen && (
        <div className="bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl max-w-xs border border-slate-700 relative animate-in fade-in slide-in-from-bottom-2 duration-150">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-[#D4AF37] mb-0.5">Need Property Guidance?</p>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Chat directly with our documentation consultant on WhatsApp.
          </p>
        </div>
      )}

      {/* Primary Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Tooba Consultancy on WhatsApp"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3.5 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
