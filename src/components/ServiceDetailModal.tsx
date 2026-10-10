import React from "react";
import { X, MessageSquare, Mail, FileCheck, Landmark, CheckCircle2 } from "lucide-react";
import { ServiceItem, getWhatsAppUrl, getMailtoUrl } from "../config/siteConfig";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onNavigateToCalculator?: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onNavigateToCalculator,
}) => {
  if (!service) return null;

  const whatsappUrl = getWhatsAppUrl(service.whatsappMessage);
  const mailtoUrl = getMailtoUrl(
    service.emailSubject,
    `Hello Tooba Consultancy,\n\nI am requesting procedural guidance regarding: ${service.title}.\n\nProperty Details:\nAuthority / Location:\nMy specific requirement:\n\nPlease let me know the required documentation and next steps.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div
        className="bg-white rounded-lg border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 bg-[#0B1B3D] text-white flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
              Service Overview &amp; Requirements
            </span>
            <h3 className="text-xl font-bold font-serif-display text-white mt-1">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Scope of Service &amp; Guidance
            </h4>
            <p className="text-slate-600 leading-relaxed font-light">
              {service.detailedDescription}
            </p>
          </div>

          {/* Key procedures */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
              Key Procedural Steps
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {service.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist */}
          {service.documentsNeeded && service.documentsNeeded.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
                <FileCheck className="w-4 h-4 text-[#0B1B3D]" />
                <span>Typical Documents Required for Initial Assessment</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {service.documentsNeeded.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">·</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-slate-500 pt-1 italic">
                * Exact document checklists depend on property jurisdiction and title history.
              </p>
            </div>
          )}

          {/* Relevant Authorities */}
          {service.authorities && service.authorities.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
              <Landmark className="w-4 h-4 text-slate-500 shrink-0" />
              <span className="font-semibold text-slate-700">Applicable Authorities:</span>
              <span>{service.authorities.join(" · ")}</span>
            </div>
          )}

          {/* Important Legal Distinction for NADRA */}
          {service.id === "nadra-succession" && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md text-xs text-blue-950 leading-relaxed">
              <strong>Procedural Distinction:</strong> A <em>Succession Certificate</em> is primarily applicable for moveable and liquid assets (bank accounts, shares, vehicles), whereas a <em>Letter of Administration</em> applies to immoveable real estate assets. Official issuance is handled solely by NADRA or the competent court subject to legal eligibility; Tooba Consultancy assists with document assembly and procedural guidance.
            </div>
          )}

          {/* Special MEO note */}
          {service.id === "military-estate-office" && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-xs text-amber-950 leading-relaxed">
              <strong>Independent Capacity:</strong> Tooba Consultancy is an independent private consultancy and is not affiliated with the Military Estate Office or Cantonment Board. We assist property owners with preparing supporting files and navigating official requirements.
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Have questions about this procedure?
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {service.id === "property-transfer-calculator" && onNavigateToCalculator && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToCalculator();
                }}
                className="px-3 py-2 text-xs font-semibold text-white bg-[#0B1B3D] hover:bg-[#152e60] rounded transition-colors"
              >
                Go to Calculator
              </button>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#D4AF37] hover:bg-[#e0bc46] rounded transition-all active:scale-95 shadow-xs text-center"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire on WhatsApp</span>
            </a>

            <a
              href={mailtoUrl}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded transition-colors text-center"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
