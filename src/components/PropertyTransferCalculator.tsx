import React, { useState, useMemo } from "react";
import { Calculator, MessageSquare, AlertCircle, Sliders, ChevronDown, ChevronUp, Check, Info } from "lucide-react";
import { CALCULATOR_RATES, getWhatsAppUrl } from "../config/siteConfig";

export const PropertyTransferCalculator: React.FC = () => {
  // User Inputs
  const [propertyValue, setPropertyValue] = useState<number>(15000000); // 1.5 Crore default
  const [propertyType, setPropertyType] = useState<string>("residential_house");
  const [location, setLocation] = useState<string>("sub_registrar");
  const [transactionType, setTransactionType] = useState<string>("sale_purchase");
  const [buyerFilerStatus, setBuyerFilerStatus] = useState<"filer" | "lateFiler" | "nonFiler">("filer");
  const [sellerFilerStatus, setSellerFilerStatus] = useState<"filer" | "nonFiler">("filer");

  // Editable rate state for user / administrator customization
  const [showRateSettings, setShowRateSettings] = useState<boolean>(false);
  const [rates, setRates] = useState({
    stampDuty: CALCULATOR_RATES.stampDutyPercent,
    digitalScanningFee: CALCULATOR_RATES.digitalScanningFeePKR,
    municipalTownDuty: CALCULATOR_RATES.municipalTownDutyPercent,
    buyerFilerTax: CALCULATOR_RATES.advanceTaxBuyer.filer,
    buyerLateFilerTax: CALCULATOR_RATES.advanceTaxBuyer.lateFiler,
    buyerNonFilerTax: CALCULATOR_RATES.advanceTaxBuyer.nonFiler,
    sellerFilerTax: CALCULATOR_RATES.advanceTaxSeller.filer,
    sellerNonFilerTax: CALCULATOR_RATES.advanceTaxSeller.nonFiler,
  });

  // Common quick-value presets in PKR
  const presets = [
    { label: "50 Lacs", value: 5000000 },
    { label: "1 Crore", value: 10000000 },
    { label: "2 Crore", value: 20000000 },
    { label: "3.5 Crore", value: 35000000 },
    { label: "5 Crore", value: 50000000 },
  ];

  // Helper format for PKR
  const formatPKR = (amount: number): string => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0,
    }).format(amount).replace("PKR", "Rs.");
  };

  // Convert to Crore / Lac human string
  const formatLacsCrores = (val: number): string => {
    if (val >= 10000000) {
      const crore = val / 10000000;
      return `${crore.toFixed(2)} Crore PKR`;
    } else if (val >= 100000) {
      const lac = val / 100000;
      return `${lac.toFixed(2)} Lac PKR`;
    }
    return `${val.toLocaleString()} PKR`;
  };

  // Calculation logic
  const calculations = useMemo(() => {
    const val = propertyValue || 0;
    const isGift = transactionType === "gift_deed";

    // Stamp duty: 2% on declared value / DC rate (or concessional for blood-relation gift deed)
    const effectiveStampRate = isGift ? Math.min(1.0, rates.stampDuty / 2) : rates.stampDuty;
    const stampDuty = (val * effectiveStampRate) / 100;

    // Digital Scanning Fee: Rs. 1,300 fixed official fee
    const digitalScanningFee = isGift ? 0 : rates.digitalScanningFee;

    // Municipal Town Duty: 1% on declared value
    const municipalTownDuty = isGift ? 0 : (val * rates.municipalTownDuty) / 100;

    // Advance Tax Section 236K (Buyer Advance Income Tax - FBR Active Filer: 1.25%)
    let buyerRate = rates.buyerFilerTax;
    if (buyerFilerStatus === "lateFiler") buyerRate = rates.buyerLateFilerTax;
    if (buyerFilerStatus === "nonFiler") buyerRate = rates.buyerNonFilerTax;
    const advanceTaxBuyer = isGift ? 0 : (val * buyerRate) / 100;

    // Gain Tax Section 236C (Seller Capital Gain Tax - FBR Active Filer: 2.75%)
    const sellerRate = sellerFilerStatus === "nonFiler" ? rates.sellerNonFilerTax : rates.sellerFilerTax;
    const advanceTaxSeller = isGift ? 0 : (val * sellerRate) / 100;

    // Administrative / Documentation baseline
    const adminBase = CALCULATOR_RATES.administrativeEstimatePKR;
    const jurisdictionSurcharge =
      location === "dha_karachi" || location === "cantonment_board"
        ? CALCULATOR_RATES.dhaCantonmentTransferBaseline
        : 0;
    const administrativeFee = adminBase + jurisdictionSurcharge;

    const totalEstimate =
      stampDuty + digitalScanningFee + municipalTownDuty + advanceTaxBuyer + advanceTaxSeller + administrativeFee;

    return {
      stampDuty,
      effectiveStampRate,
      digitalScanningFee,
      municipalTownDuty,
      advanceTaxBuyer,
      buyerRate,
      advanceTaxSeller,
      sellerRate,
      administrativeFee,
      totalEstimate,
      isGift,
    };
  }, [propertyValue, transactionType, location, buyerFilerStatus, sellerFilerStatus, rates]);

  // Generate WhatsApp message with calculated breakdown
  const whatsappDiscussUrl = useMemo(() => {
    const message = `Hello Tooba Consultancy,
I used your Property Transfer Calculator and would like to discuss my property transfer charges:

• Property Value: ${formatPKR(propertyValue)} (${formatLacsCrores(propertyValue)})
• Property Type: ${propertyType.replace("_", " ")}
• Jurisdiction / Authority: ${location.replace("_", " ")}
• Transaction: ${transactionType.replace("_", " ")}
• Buyer Filer Status: ${buyerFilerStatus}
• Seller Filer Status: ${sellerFilerStatus}

Estimated Official Charges Breakdown:
- Stamp Duty (${calculations.effectiveStampRate}%): ${formatPKR(calculations.stampDuty)}
- Digital Scanning Fees: ${formatPKR(calculations.digitalScanningFee)}
- Section 236K Advance Tax (Buyer - ${calculations.buyerRate}%): ${formatPKR(calculations.advanceTaxBuyer)}
- Section 236C Gain Tax (Seller - ${calculations.sellerRate}%): ${formatPKR(calculations.advanceTaxSeller)}
- Municipal Town Duty (${rates.municipalTownDuty}%): ${formatPKR(calculations.municipalTownDuty)}
- Total Estimated Official Charges: ${formatPKR(calculations.totalEstimate)}

Please guide me through the official requirements and fee verification.`;

    return getWhatsAppUrl(message);
  }, [propertyValue, propertyType, location, transactionType, buyerFilerStatus, sellerFilerStatus, calculations]);

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2">
            Estimator &amp; Planning Tool
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-slate-900 tracking-tight">
            Property Transfer Calculator
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Estimate preliminary transfer costs, stamp duties, Sub-Registrar fees, and FBR withholding taxes for properties in Karachi. These figures provide a transparent financial roadmap before beginning documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Property Details</span>
              <button
                type="button"
                onClick={() => setShowRateSettings(!showRateSettings)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{showRateSettings ? "Hide Rate Settings" : "View / Adjust Rate Presets"}</span>
                {showRateSettings ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Collapsible Rate Settings */}
            {showRateSettings && (
              <div className="p-4 bg-slate-50 rounded-md border border-slate-200 space-y-3 text-xs">
                <div className="flex items-start gap-2 text-slate-600 mb-2">
                  <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <p>
                    Government rates vary by the Sindh Finance Act and FBR budgets. You can modify these calculation percentages to reflect specific DC rates or latest budget amendments.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Stamp Duty (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={rates.stampDuty}
                      onChange={(e) => setRates({ ...rates, stampDuty: parseFloat(e.target.value) || 0 })}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Municipal Town Duty (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={rates.municipalTownDuty}
                      onChange={(e) => setRates({ ...rates, municipalTownDuty: parseFloat(e.target.value) || 0 })}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Buyer Filer 236K (%)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={rates.buyerFilerTax}
                      onChange={(e) => setRates({ ...rates, buyerFilerTax: parseFloat(e.target.value) || 0 })}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Buyer Non-Filer (%)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={rates.buyerNonFilerTax}
                      onChange={(e) => setRates({ ...rates, buyerNonFilerTax: parseFloat(e.target.value) || 0 })}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Seller Filer 236C (%)</label>
                    <input
                      type="number"
                      step="0.25"
                      value={rates.sellerFilerTax}
                      onChange={(e) => setRates({ ...rates, sellerFilerTax: parseFloat(e.target.value) || 0 })}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Digital Scan Fee (Rs.)</label>
                    <input
                      type="number"
                      step="100"
                      value={rates.digitalScanningFee}
                      onChange={(e) => setRates({ ...rates, digitalScanningFee: parseFloat(e.target.value) || 0 })}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-800"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Property Value Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-semibold text-slate-800">
                  Property Value / DC Rate (PKR)
                </label>
                <span className="text-xs font-semibold text-[#0B1B3D] tabular-nums">
                  {formatLacsCrores(propertyValue)}
                </span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-medium text-sm">
                  Rs.
                </span>
                <input
                  type="number"
                  min="500000"
                  step="500000"
                  value={propertyValue || ""}
                  onChange={(e) => setPropertyValue(Math.max(0, parseInt(e.target.value) || 0))}
                  placeholder="e.g. 15000000"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-md text-slate-900 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#0B1B3D]/20 focus:border-[#0B1B3D] tabular-nums"
                />
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                <span className="text-[11px] text-slate-500 mr-1">Presets:</span>
                {presets.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setPropertyValue(p.value)}
                    className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                      propertyValue === p.value
                        ? "bg-[#0B1B3D] text-white font-medium"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Row: Property Type & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:border-[#0B1B3D]"
                >
                  <option value="residential_house">Residential House / Portion</option>
                  <option value="residential_plot">Residential Plot (Open Land)</option>
                  <option value="commercial_property">Commercial Plot / Building</option>
                  <option value="apartment_flat">Apartment / Residential Flat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Location / Jurisdiction
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:border-[#0B1B3D]"
                >
                  <option value="sub_registrar">Sub-Registrar Office / KDA / KMC</option>
                  <option value="dha_karachi">Defence Housing Authority (DHA Karachi)</option>
                  <option value="cantonment_board">Cantonment Board Clifton (CBC)</option>
                  <option value="other_cantonment">Cantonment Board (Faisal / Malir)</option>
                </select>
              </div>
            </div>

            {/* Row: Transaction Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                Transaction Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTransactionType("sale_purchase")}
                  className={`p-3 text-left rounded-md border text-xs cursor-pointer transition-colors ${
                    transactionType === "sale_purchase"
                      ? "border-[#0B1B3D] bg-[#0B1B3D]/5 text-[#0B1B3D] font-semibold"
                      : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span className="block font-medium text-sm">Sale / Purchase</span>
                  <span className="text-[11px] text-slate-500">Standard transfer between buyer &amp; seller</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTransactionType("gift_deed")}
                  className={`p-3 text-left rounded-md border text-xs cursor-pointer transition-colors ${
                    transactionType === "gift_deed"
                      ? "border-[#0B1B3D] bg-[#0B1B3D]/5 text-[#0B1B3D] font-semibold"
                      : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span className="block font-medium text-sm">Gift Deed (Hiba)</span>
                  <span className="text-[11px] text-slate-500">Transfer among immediate blood relatives</span>
                </button>
              </div>
            </div>

            {/* Row: Filer Status */}
            {transactionType === "sale_purchase" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Buyer Tax Status (Sec 236K)
                  </label>
                  <select
                    value={buyerFilerStatus}
                    onChange={(e) => setBuyerFilerStatus(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:border-[#0B1B3D]"
                  >
                    <option value="filer">Active Filer ({rates.buyerFilerTax}%)</option>
                    <option value="lateFiler">Late Filer ({rates.buyerLateFilerTax}%)</option>
                    <option value="nonFiler">Non-Filer ({rates.buyerNonFilerTax}%)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                    Seller Tax Status (Sec 236C)
                  </label>
                  <select
                    value={sellerFilerStatus}
                    onChange={(e) => setSellerFilerStatus(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:border-[#0B1B3D]"
                  >
                    <option value="filer">Active Filer ({rates.sellerFilerTax}%)</option>
                    <option value="nonFiler">Non-Filer ({rates.sellerNonFilerTax}%)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Breakdown & Total Charges Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B1B3D] text-white p-6 sm:p-8 rounded-lg border border-slate-800 shadow-lg space-y-6">
            <div className="border-b border-slate-700 pb-4">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Estimated Cost Breakdown</span>
              <h3 className="text-xl font-serif-display font-bold text-white mt-1">Official Charges &amp; Taxes</h3>
            </div>

            {/* Itemized list */}
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <div>
                  <span className="text-slate-300 font-medium">Stamp Duty</span>
                  <span className="block text-[11px] text-slate-400">Sindh Stamp Act ({calculations.effectiveStampRate}%)</span>
                </div>
                <span className="font-semibold text-white tabular-nums">{formatPKR(calculations.stampDuty)}</span>
              </div>


              {!calculations.isGift && (
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div>
                    <span className="text-slate-300 font-medium">Digital Scanning Fees</span>
                    <span className="block text-[11px] text-slate-400">Sub-Registrar Archive Fee (Fixed)</span>
                  </div>
                  <span className="font-semibold text-white tabular-nums">{formatPKR(calculations.digitalScanningFee)}</span>
                </div>
              )}

              {!calculations.isGift && (
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div>
                    <span className="text-slate-300 font-medium">Advance Tax - Buyer (236K)</span>
                    <span className="block text-[11px] text-slate-400">FBR Withholding ({calculations.buyerRate}%)</span>
                  </div>
                  <span className="font-semibold text-white tabular-nums">{formatPKR(calculations.advanceTaxBuyer)}</span>
                </div>
              )}

              {!calculations.isGift && (
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div>
                    <span className="text-slate-300 font-medium">Gain Tax - Seller (236C)</span>
                    <span className="block text-[11px] text-slate-400">FBR Capital Gain Tax ({calculations.sellerRate}%)</span>
                  </div>
                  <span className="font-semibold text-white tabular-nums">{formatPKR(calculations.advanceTaxSeller)}</span>
                </div>
              )}

              {!calculations.isGift && (
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div>
                    <span className="text-slate-300 font-medium">Municipal Town Duty</span>
                    <span className="block text-[11px] text-slate-400">Local Town Duty ({rates.municipalTownDuty}%)</span>
                  </div>
                  <span className="font-semibold text-white tabular-nums">{formatPKR(calculations.municipalTownDuty)}</span>
                </div>
              )}

              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <div>
                  <span className="text-slate-300 font-medium">Administrative &amp; Processing</span>
                  <span className="block text-[11px] text-slate-400">Mutation / Verification baseline</span>
                </div>
                <span className="font-semibold text-white tabular-nums">{formatPKR(calculations.administrativeFee)}</span>
              </div>
            </div>

            {/* Total Estimated Charges */}
            <div className="pt-3 border-t border-slate-700 bg-slate-900/60 p-4 rounded-md">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Total Estimated Official Charges</span>
                <span className="text-2xl font-bold text-[#D4AF37] tabular-nums">
                  {formatPKR(calculations.totalEstimate)}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Approx. {formatLacsCrores(calculations.totalEstimate)} based on entered parameters.
              </p>
            </div>

            {/* Mandatory Prompt CTA Button: "Discuss My Property Transfer" */}
            <a
              href={whatsappDiscussUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-[#D4AF37] hover:bg-[#e0bc46] rounded-md transition-all shadow-md active:scale-98 text-center"
            >
              <MessageSquare className="w-4 h-4 text-slate-900" />
              <span>Discuss My Property Transfer</span>
            </a>

            {/* Transparent Disclaimer Notice (Exact Prompt Mandate) */}
            <div className="flex items-start gap-2.5 p-3 rounded bg-slate-800/60 border border-slate-700/80 text-[11px] text-slate-300 leading-normal">
              <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <p>
                <strong>Estimated charges only:</strong> Government rates, taxes, exemptions, and fees can change under the Sindh Finance Act and Federal Budget. Do not rely on estimates as guaranteed official charges. Always verify applicable charges with the relevant authority or consultancy before making payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
