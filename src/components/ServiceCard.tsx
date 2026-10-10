import React from "react";
import {
  FileText,
  Scale,
  Building,
  Key,
  Users,
  Award,
  Globe,
  HelpCircle,
  Calculator,
  MessageSquare,
  ArrowRight,
  Shield,
  FileCheck,
  Receipt,
} from "lucide-react";
import { ServiceItem, getWhatsAppUrl } from "../config/siteConfig";

interface ServiceCardProps {
  service: ServiceItem;
  onOpenDetails: (service: ServiceItem) => void;
  onNavigateToCalculator?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onOpenDetails,
  onNavigateToCalculator,
}) => {
  // Icon selector based on service id
  const renderIcon = () => {
    switch (service.id) {
      case "property-transfer-calculator":
        return <Calculator className="w-5 h-5 text-[#C5A059]" />;
      case "sale-gift-deeds":
        return <FileText className="w-5 h-5 text-[#C5A059]" />;
      case "legal-property-consultation":
        return <Scale className="w-5 h-5 text-[#C5A059]" />;
      case "kda-kmc-cantonment":
        return <Building className="w-5 h-5 text-[#C5A059]" />;
      case "power-of-attorney":
        return <Key className="w-5 h-5 text-[#C5A059]" />;
      case "nadra-succession":
        return <Users className="w-5 h-5 text-[#C5A059]" />;
      case "dha-leases":
        return <Shield className="w-5 h-5 text-[#C5A059]" />;
      case "cbc-dha-completion":
        return <FileCheck className="w-5 h-5 text-[#C5A059]" />;
      case "military-estate-office":
        return <Award className="w-5 h-5 text-[#C5A059]" />;
      case "e-registration":
        return <Globe className="w-5 h-5 text-[#C5A059]" />;
      case "taxation-return":
        return <Receipt className="w-5 h-5 text-[#C5A059]" />;
      case "general-consultation":
      default:
        return <HelpCircle className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  const isCalculatorCard = service.id === "property-transfer-calculator";
  const whatsappUrl = getWhatsAppUrl(service.whatsappMessage);

  return (
    <div className="bg-white rounded-lg border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between transition-all hover:shadow-md group h-full">
      <div>
        {/* Top Header: Icon + Category subtle metadata */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-md bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 flex items-center justify-center">
            {renderIcon()}
          </div>
          {/* Zero-Pill rule: unboxed text with subtle separator */}
          <span className="text-[11px] font-medium tracking-wide uppercase text-slate-600">
            {service.category === "deeds" && "Legal Documentation"}
            {service.category === "authorities" && "Civic & Authority Matters"}
            {service.category === "succession" && "Inheritance & NADRA"}
            {service.category === "consultation" && "Advisory & Verification"}
            {service.category === "calculator" && "Financial Estimator"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
          {service.shortDescription}
        </p>

        {/* Key Points list */}
        <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
          {service.keyPoints.slice(0, 3).map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#C5A059] font-bold">·</span>
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer: Inquire on WhatsApp + View Details */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
        {isCalculatorCard && onNavigateToCalculator ? (
          <button
            type="button"
            onClick={onNavigateToCalculator}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0B1B3D] hover:bg-[#122650] rounded transition-colors text-center cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Open Calculator</span>
          </button>
        ) : (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#D4AF37] hover:bg-[#e0bc46] rounded transition-all active:scale-95 text-center shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-slate-900" />
            <span>Inquire on WhatsApp</span>
          </a>
        )}

        <button
          type="button"
          onClick={() => onOpenDetails(service)}
          className="px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors inline-flex items-center gap-1 cursor-pointer"
          aria-label={`View details for ${service.title}`}
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
