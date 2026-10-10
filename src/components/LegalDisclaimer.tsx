import React from "react";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const LegalDisclaimer: React.FC = () => {
  return (
    <section className="bg-slate-100/80 border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Legal Notice &amp; Advisory Scope</span>
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Independent Consultancy &amp; Statutory Procedural Disclaimer
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            Tooba Consultancy is an independent property advisory and documentation firm. We provide professional consultation, document drafting, and procedural guidance. Official decisions, deed registrations, succession certificates, letters of administration, building completion certificates, draft approvals, and tax assessments remain under the exclusive jurisdiction and discretion of the competent authorities—including the Sindh Board of Revenue, Sub-Registrar Offices, NADRA, Defence Housing Authority (DHA Karachi), Cantonment Board Clifton (CBC), Karachi Development Authority (KDA), Karachi Metropolitan Corporation (KMC), and the Military Estate Office (MEO).
          </p>
          <p className="text-xs text-slate-500 leading-relaxed pt-1 border-t border-slate-100">
            Tooba Consultancy does not represent itself as an official government agency or statutory body, nor does it guarantee approvals, fixed statutory processing timelines, or judicial outcomes. Consultancy service fees are strictly separate from official government challans, stamp duties, taxes, and statutory registration fees.
          </p>
        </div>
      </div>
    </section>
  );
};
