import React from "react";
import { X, Shield, FileText } from "lucide-react";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div
        className="bg-white rounded-lg border border-slate-200 shadow-xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            {type === "privacy" ? (
              <Shield className="w-5 h-5 text-[#0B1B3D]" />
            ) : (
              <FileText className="w-5 h-5 text-[#0B1B3D]" />
            )}
            <h3 className="text-base font-bold text-slate-900 font-serif-display">
              {type === "privacy" ? "Privacy Policy" : "Terms & Service Disclaimer"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {type === "privacy" ? (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">1. Information We Collect</h4>
                <p>
                  Tooba Consultancy collects preliminary contact information (such as your name, phone number, email address, and property query details) solely when you voluntarily initiate an inquiry via WhatsApp, email, or our inquiry form.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">2. Confidentiality of Property Records</h4>
                <p>
                  We treat all title deeds, allotment orders, and property records shared during consultation with strict professional confidentiality. We do not sell, rent, or distribute client information to third-party commercial marketing entities.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">3. Non-Collection of Sensitive Credentials</h4>
                <p>
                  Our public website does not store credit cards, bank accounts, or digital passwords. Clients are advised never to input sensitive national identification details (CNIC) or financial passwords into public web forms.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">4. Direct Communications</h4>
                <p>
                  Communications initiated through WhatsApp or email are governed by the privacy policies and security mechanisms of WhatsApp (Meta) and your selected email provider.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">1. Scope of Consultation Services</h4>
                <p>
                  Tooba Consultancy (toobaconsultancy.com) provides professional documentation guidance, document drafting, tax compliance, and procedural advisory for property transactions across Karachi and all Sindh Province, Pakistan. Our services are advisory and administrative in nature.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">2. Authority Discretion &amp; No Guarantee</h4>
                <p>
                  All official property registrations, title mutations, succession certificates, letters of administration, CBC/DHA completion certificates, and Military Estate Office sanctions are granted solely by the respective competent authorities. Tooba Consultancy does not guarantee statutory approvals or official processing times.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">3. Separation of Fees</h4>
                <p>
                  Consultancy fees charged by Tooba Consultancy are strictly independent of statutory government taxes, stamp paper duties, registration fees, municipal taxes, and official departmental challans.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">4. Calculator Estimations</h4>
                <p>
                  Calculations provided on the Property Transfer Calculator are estimates based on standard rate guidelines. They do not constitute a formal tax invoice or official assessment challan.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-200 hover:bg-slate-300 rounded transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
