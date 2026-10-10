import React, { useState } from "react";
import {
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldAlert,
  Send,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { BUSINESS_CONFIG, SERVICES_DATA, getWhatsAppUrl, getMailtoUrl } from "../config/siteConfig";

export const ContactSection: React.FC = () => {
  // Form State
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[1].id); // default to deeds
  const [propertyLocation, setPropertyLocation] = useState("");
  const [description, setDescription] = useState("");
  const [preferredMethod, setPreferredMethod] = useState<"whatsapp" | "email">("whatsapp");

  // Form Validation & Feedback
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [preparedActionUrl, setPreparedActionUrl] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    if (!phoneNumber.trim()) {
      errs.phoneNumber = "Please provide your WhatsApp or phone number.";
    } else if (phoneNumber.replace(/[^0-9]/g, "").length < 7) {
      errs.phoneNumber = "Please enter a valid phone number (at least 7 digits).";
    }
    if (emailAddress.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      errs.emailAddress = "Please enter a valid email address.";
    }
    if (!description.trim()) {
      errs.description = "Please provide a brief description of your property requirement.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const serviceObj = SERVICES_DATA.find((s) => s.id === selectedService);
    const serviceName = serviceObj ? serviceObj.title : "Property Consultation";

    if (preferredMethod === "whatsapp") {
      const waMessage = `*New Consultation Inquiry - Tooba Consultancy*
Name: ${fullName.trim()}
Phone / WhatsApp: ${phoneNumber.trim()}
${emailAddress.trim() ? `Email: ${emailAddress.trim()}\n` : ""}Service: ${serviceName}
${propertyLocation.trim() ? `Location / Authority: ${propertyLocation.trim()}\n` : ""}Requirement: ${description.trim()}

Hello Tooba Consultancy, I have filled out the inquiry form and would like to consult with you regarding this matter.`;

      const url = getWhatsAppUrl(waMessage);
      setPreparedActionUrl(url);
      window.open(url, "_blank");
    } else {
      const subject = `Property Inquiry: ${serviceName} - ${fullName.trim()}`;
      const body = `Name: ${fullName.trim()}
Phone: ${phoneNumber.trim()}
Email: ${emailAddress.trim() || "Not provided"}
Service Required: ${serviceName}
Property Location / Authority: ${propertyLocation.trim() || "Karachi"}

Requirement Description:
${description.trim()}

Sent via Tooba Consultancy website inquiry form.`;

      const url = getMailtoUrl(subject, body);
      setPreparedActionUrl(url);
      window.location.href = url;
    }
  };

  const directGeneralWhatsAppUrl = getWhatsAppUrl(
    "Hello Tooba Consultancy, I would like to consult with you regarding property documentation in Karachi."
  );

  const directGeneralEmailUrl = getMailtoUrl(
    "Property Documentation Inquiry - Tooba Consultancy",
    "Hello Tooba Consultancy,\n\nI need guidance regarding property documentation in Karachi.\n\nPlease contact me back."
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2">
            Direct Client Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-slate-900 tracking-tight">
            Contact Tooba Consultancy
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Reach out directly through WhatsApp or email. You can message us immediately or use the prepared inquiry form below to outline your property documentation requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-lg bg-[#0B1B3D] text-white border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct WhatsApp</h3>
                  <p className="text-xs text-slate-300">Fastest channel for documents &amp; consultations</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Send us a message with your query or share copies of deed extracts for review.
              </p>
              <div className="mb-4 text-sm font-semibold text-[#D4AF37] tabular-nums">
                {BUSINESS_CONFIG.displayPhone}
              </div>
              <a
                href={directGeneralWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#D4AF37] hover:bg-[#e0bc46] rounded transition-all active:scale-98 shadow-xs text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-slate-200 flex items-center justify-center text-slate-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Email Inquiry</h3>
                  <p className="text-xs text-slate-500">For formal correspondence &amp; overseas inquiries</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Prefilled emails ensure your message reaches our consultants with the appropriate subject tag.
              </p>
              <div className="mb-4">
                <a
                  href={directGeneralEmailUrl}
                  className="text-sm font-semibold text-[#0B1B3D] hover:underline break-all"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <a
                href={directGeneralEmailUrl}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-medium text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded transition-colors text-center"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Send Us an Email</span>
              </a>
            </div>

            {/* Location & Coverage */}
            <div className="p-5 rounded-lg border border-slate-200 bg-white space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>All across Sindh</span>
              </div>
              <p className="leading-relaxed">
                Providing comprehensive property documentation and taxation consultation across all districts of Sindh: Karachi Sub-Registrar divisions, DHA, CBC, KDA, KMC, and Cantonments, as well as Hyderabad, Sukkur, Larkana, Mirpurkhas, Nawabshah, and interior Sindh Board of Revenue offices.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h3 className="text-xl font-bold text-slate-900">Contact Inquiry Form</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in your property requirement below. Submitting will validate your details and prepare your message to send directly via your chosen method (WhatsApp or Email).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: "" });
                  }}
                  placeholder="e.g. Tariq Mehmood"
                  className={`w-full px-3.5 py-2.5 bg-white border rounded-md text-sm text-slate-900 focus:outline-none focus:ring-1 ${
                    errors.fullName
                      ? "border-rose-400 focus:ring-rose-400"
                      : "border-slate-300 focus:border-[#0B1B3D] focus:ring-[#0B1B3D]"
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    WhatsApp or Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
                    }}
                    placeholder="e.g. 0300 1234567"
                    className={`w-full px-3.5 py-2.5 bg-white border rounded-md text-sm text-slate-900 focus:outline-none focus:ring-1 ${
                      errors.phoneNumber
                        ? "border-rose-400 focus:ring-rose-400"
                        : "border-slate-300 focus:border-[#0B1B3D] focus:ring-[#0B1B3D]"
                    }`}
                  />
                  {errors.phoneNumber && <p className="text-[11px] text-rose-500 mt-1">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                      if (errors.emailAddress) setErrors({ ...errors, emailAddress: "" });
                    }}
                    placeholder="e.g. name@example.com"
                    className={`w-full px-3.5 py-2.5 bg-white border rounded-md text-sm text-slate-900 focus:outline-none focus:ring-1 ${
                      errors.emailAddress
                        ? "border-rose-400 focus:ring-rose-400"
                        : "border-slate-300 focus:border-[#0B1B3D] focus:ring-[#0B1B3D]"
                    }`}
                  />
                  {errors.emailAddress && <p className="text-[11px] text-rose-500 mt-1">{errors.emailAddress}</p>}
                </div>
              </div>

              {/* Service Required Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Service Required <span className="text-rose-500">*</span>
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-[#0B1B3D]"
                >
                  {SERVICES_DATA.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Location or Authority (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Property Location or Authority <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={propertyLocation}
                  onChange={(e) => setPropertyLocation(e.target.value)}
                  placeholder="e.g. DHA Phase 6, CBC Clifton, Gulshan-e-Iqbal KDA, Malir"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>

              {/* Brief Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                  Brief Description of the Requirement <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    if (errors.description) setErrors({ ...errors, description: "" });
                  }}
                  placeholder="Please describe the property situation, what documentation you require, or any specific questions..."
                  className={`w-full px-3.5 py-2.5 bg-white border rounded-md text-sm text-slate-900 focus:outline-none focus:ring-1 ${
                    errors.description
                      ? "border-rose-400 focus:ring-rose-400"
                      : "border-slate-300 focus:border-[#0B1B3D] focus:ring-[#0B1B3D]"
                  }`}
                />
                {errors.description && <p className="text-[11px] text-rose-500 mt-1">{errors.description}</p>}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-md border text-xs cursor-pointer transition-colors ${
                      preferredMethod === "whatsapp"
                        ? "border-[#0B1B3D] bg-[#0B1B3D]/5 text-[#0B1B3D] font-semibold"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactMethod"
                      value="whatsapp"
                      checked={preferredMethod === "whatsapp"}
                      onChange={() => setPreferredMethod("whatsapp")}
                      className="accent-[#0B1B3D]"
                    />
                    <span>Open on WhatsApp</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-md border text-xs cursor-pointer transition-colors ${
                      preferredMethod === "email"
                        ? "border-[#0B1B3D] bg-[#0B1B3D]/5 text-[#0B1B3D] font-semibold"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={preferredMethod === "email"}
                      onChange={() => setPreferredMethod("email")}
                      className="accent-[#0B1B3D]"
                    />
                    <span>Open in Email App</span>
                  </label>
                </div>
              </div>

              {/* Transparent form explanation (Mandatory Prompt Requirement) */}
              <p className="text-[11px] text-slate-500 leading-normal pt-1">
                Note: Clicking submit prepares your inquiry and opens {preferredMethod === "whatsapp" ? "WhatsApp" : "your email client"} so you can review and send the message directly to Tooba Consultancy.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#D4AF37] hover:bg-[#e0bc46] rounded-md transition-all shadow-sm active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-900" />
                <span>
                  {preferredMethod === "whatsapp" ? "Continue on WhatsApp" : "Prepare Email Inquiry"}
                </span>
              </button>

              {/* Privacy and Security Notice (Mandatory Prompt Requirement) */}
              <div className="flex items-start gap-2 p-3 bg-amber-50/70 border border-amber-200/80 rounded-md text-[11px] text-amber-900 leading-normal">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Security &amp; Privacy Notice:</strong> Please do not submit CNIC numbers, sensitive bank details, passwords, or confidential legal records through this public inquiry form. Confidential documents should only be shared directly during formal consultation.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
