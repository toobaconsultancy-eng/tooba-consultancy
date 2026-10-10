/**
 * Site Configuration for Tooba Consultancy
 * Edit phone number, email, and tax rate constants here.
 */

export const BUSINESS_CONFIG = {
  name: "Tooba Consultancy",
  tagline: "Your Trusted Partner for Property Consultation & Documentation.",
  city: "Karachi",
  province: "Sindh",
  country: "Pakistan",
  fullLocation: "All across Sindh",
  domain: "https://toobaconsultancy.com",
  // International format without '+' or spaces for wa.me links
  whatsappNumber: "923344320112",
  displayPhone: "+92 334 4320112",
  email: "toobaconsultancy@gmail.com",
};

export function getWhatsAppUrl(message: string): string {
  const cleanNumber = BUSINESS_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailtoUrl(subject: string, body: string = ""): string {
  return `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "deeds" | "authorities" | "succession" | "consultation" | "calculator";
  shortDescription: string;
  detailedDescription: string;
  keyPoints: string[];
  documentsNeeded?: string[];
  authorities?: string[];
  whatsappMessage: string;
  emailSubject: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "property-transfer-calculator",
    title: "Property Transfer Calculator",
    category: "calculator",
    shortDescription:
      "Interactive estimation of government taxes, stamp duty, registration charges, and transfer fees across Karachi jurisdictions.",
    detailedDescription:
      "Calculate preliminary estimates for Sindh stamp duty, sub-registrar fees, FBR Advance Income Tax (Section 236K & 236C), and municipal duties before proceeding with a transaction.",
    keyPoints: [
      "Itemized breakdown of official fee types",
      "Calculations for both Filers and Non-Filers",
      "Covers KDA, DHA, CBC, and Sub-Registrar areas",
      "Custom review with our property documentation consultants",
    ],
    documentsNeeded: [
      "Property dimensions / square yards",
      "Declared sale consideration value",
      "Jurisdiction details (Sub-Registrar, DHA, Cantonment)",
      "Tax status (Active Taxpayer List status of buyer & seller)",
    ],
    authorities: ["Sindh Board of Revenue", "FBR", "Sub-Registrar Office", "DHA / Cantonment"],
    whatsappMessage:
      "Hello Tooba Consultancy, I used your Property Transfer Calculator and would like to discuss my property transfer fee estimate in Karachi.",
    emailSubject: "Property Transfer Fee Consultation Request",
  },
  {
    id: "sale-gift-deeds",
    title: "Sale, Gift & Other Property Deeds",
    category: "deeds",
    shortDescription:
      "Drafting and documentation assistance for Sale Deeds, Gift Deeds, Relinquishment Deeds, and Release Deeds.",
    detailedDescription:
      "Complete documentation drafting following legal drafting standards and procedural guidelines for property transfer deeds across Karachi registrar divisions.",
    keyPoints: [
      "Sale Deed (Baye-Nama) preparation & verification",
      "Gift Deed (Hiba-Nama) drafting for blood relatives & legal heirs",
      "Relinquishment & Release Deeds drafting",
      "End-to-end guidance through Sub-Registrar registration procedures",
    ],
    documentsNeeded: [
      "Original prior title deed / allotment order",
      "Valid CNICs of all parties and witnesses",
      "PT-1 form and property tax paid receipts",
      "Site plan and approved building extract (if applicable)",
    ],
    authorities: ["Sub-Registrar Office (Karachi)", "Sindh Board of Revenue"],
    whatsappMessage:
      "Hello Tooba Consultancy, I need assistance with property deed preparation (Sale Deed / Gift Deed / Relinquishment Deed). Please guide me on the requirements and registration process.",
    emailSubject: "Property Deed Drafting & Registration Assistance",
  },
  {
    id: "legal-property-consultation",
    title: "Legal Property Consultation",
    category: "consultation",
    shortDescription:
      "Procedural guidance for ownership transfers, documentation vetting, and title record scrutiny.",
    detailedDescription:
      "Objective examination of property records, chain of title deeds, mutation status, and regulatory encumbrance checks across residential and commercial properties in Karachi.",
    keyPoints: [
      "Chain of title document examination",
      "Verification of mutation and registry entries",
      "Identification of missing links in previous ownership deeds",
      "Advisory on property dispute risk mitigation before earnest money payment",
    ],
    documentsNeeded: [
      "Copies of complete chain of prior title deeds",
      "Current allotment / transfer order / lease deed",
      "Latest utility bills and municipal tax vouchers",
    ],
    authorities: ["Sub-Registrar", "Board of Revenue Sindh", "City Survey Office"],
    whatsappMessage:
      "Hello Tooba Consultancy, I would like to schedule a property consultation to verify my property documents and ownership transfer procedure.",
    emailSubject: "Property Documentation Verification & Consultation",
  },
  {
    id: "kda-kmc-cantonment",
    title: "KDA, KMC & Cantonment Property Matters",
    category: "authorities",
    shortDescription:
      "Procedural assistance for property records, mutation, and documentation across KDA, KMC, and Cantonment Boards.",
    detailedDescription:
      "Guidance navigating administrative requirements, name transfers, duplicate allotment letters, NOC issuance, and property record updates across civic development bodies in Karachi.",
    keyPoints: [
      "Karachi Development Authority (KDA) transfer and mutation paperwork",
      "Karachi Metropolitan Corporation (KMC) property tax and lease documentation",
      "Cantonment Boards (CBC, CB Faisal, CB Malir, CB Manora) clearance files",
      "Sub-Registrar document submission and scrutiny guidance",
    ],
    documentsNeeded: [
      "Original allotment / transfer order",
      "Possession order and site plan",
      "Updated property tax clearance receipt",
      "Applicant CNIC and biometric verification records",
    ],
    authorities: ["KDA", "KMC", "Cantonment Boards", "Sub-Registrar Offices"],
    whatsappMessage:
      "Hello Tooba Consultancy, I need assistance with property documentation involving KDA / KMC / Cantonment Board. Please advise on the required steps.",
    emailSubject: "Inquiry Regarding KDA / KMC / Cantonment Property Procedures",
  },
  {
    id: "power-of-attorney",
    title: "Power of Attorney & Lease Documentation",
    category: "deeds",
    shortDescription:
      "Assistance with General Power of Attorney, Sub-Power of Attorney, Lease, and Sub-Lease documentation.",
    detailedDescription:
      "Meticulous drafting and procedural coordination for registered Powers of Attorney, special authorizations, primary 99-year leases, and sub-lease registrations under Sindh registration laws.",
    keyPoints: [
      "General Power of Attorney (GPA) drafting & registration requirements",
      "Sub-Power of Attorney / Specific legal authorizations",
      "Primary Lease Deed and Sub-Lease documentation",
      "Strict compliance checks to prevent unauthorized delegation",
    ],
    documentsNeeded: [
      "Title deed / allotment letter of the property",
      "CNICs of Principal and Attorney holder",
      "Passport and consular attestation (for Overseas Pakistanis)",
      "Recent passport-sized photographs",
    ],
    authorities: ["Sub-Registrar Office", "Embassy / Ministry of Foreign Affairs (Overseas cases)"],
    whatsappMessage:
      "Hello Tooba Consultancy, I need assistance with Power of Attorney / Lease documentation and registration. Please provide guidance.",
    emailSubject: "Power of Attorney & Lease Documentation Inquiry",
  },
  {
    id: "nadra-succession",
    title: "NADRA Succession Certificate & Letter of Administration",
    category: "succession",
    shortDescription:
      "Comprehensive assistance navigating NADRA succession procedures and inheritance documentation for legal heirs.",
    detailedDescription:
      "Clear differentiation and guidance between a Succession Certificate (primarily for liquid assets/financial accounts) and a Letter of Administration (for immoveable real estate assets) under the Sindh Succession Act and NADRA facilitation framework.",
    keyPoints: [
      "Guidance on Family Registration Certificate (FRC) requirements",
      "Succession Certificate vs. Letter of Administration differentiation",
      "Legal heir consent affidavits and documentation preparation",
      "Procedural walkthrough for biometric verification at NADRA Mega Centers",
    ],
    documentsNeeded: [
      "Original Death Certificate of the deceased owner",
      "NADRA Family Registration Certificate (FRC) by birth",
      "CNICs of all surviving legal heirs",
      "Details and title documents of the property / assets to be administered",
    ],
    authorities: ["NADRA Facilitation Centers", "Competent District Courts (if contested)"],
    whatsappMessage:
      "Hello Tooba Consultancy, I need assistance with NADRA succession documentation and Letter of Administration. Please guide me about the process and required documents.",
    emailSubject: "NADRA Succession & Inheritance Documentation Guidance",
  },
  {
    id: "dha-leases",
    title: "DHA Property Services & A, B and C Category Leases",
    category: "authorities",
    shortDescription:
      "Documentation support for Defence Housing Authority (DHA) Karachi properties and A, B, and C Category leases.",
    detailedDescription:
      "Specialized procedural guidance for DHA Karachi Phase 1 through Phase 8 & DHA City. Assistance with category lease processing (A, B, and C leases), transfer paperwork, and NOC submissions.",
    keyPoints: [
      "A, B, and C Category lease processing guidance",
      "DHA Karachi transfer set preparation and verification",
      "Membership and regular transfer procedure checklists",
      "Assistance with site inspection and completion clearance prerequisites",
    ],
    documentsNeeded: [
      "Original DHA Allotment / Transfer Order",
      "DHA membership card / application",
      "Copies of CNICs of seller and buyer",
      "DHA clearance / dues receipt",
    ],
    authorities: ["Defence Housing Authority (DHA) Karachi"],
    whatsappMessage:
      "Hello Tooba Consultancy, I need guidance regarding DHA Karachi property transfer and Category A / B / C lease documentation. Please guide me.",
    emailSubject: "DHA Karachi Property Documentation Inquiry",
  },
  {
    id: "cbc-dha-completion",
    title: "Completion Certificates from CBC and DHA",
    category: "authorities",
    shortDescription:
      "Documentation and procedural support for property Completion Certificates from Cantonment Board Clifton (CBC) and DHA.",
    detailedDescription:
      "Assistance preparing building sanction documentation, as-built plan coordination, compounding fee paperwork, and inspection files required for obtaining official Completion Certificates.",
    keyPoints: [
      "Cantonment Board Clifton (CBC) completion file preparation",
      "DHA Karachi building completion application compliance",
      "Guidance on required structural certificates and architectural drawings",
      "Procedural tracking for site inspection schedules",
    ],
    documentsNeeded: [
      "Approved architectural and structural building drawings",
      "Construction demarcation letter and excavation slip",
      "Water and sewerage connection receipts",
      "Owner CNIC copy and allotment records",
    ],
    authorities: ["Cantonment Board Clifton (CBC)", "DHA Karachi Engineering Directorate"],
    whatsappMessage:
      "Hello Tooba Consultancy, I need assistance with obtaining a Completion Certificate from CBC / DHA. Please guide me through the documentation requirements.",
    emailSubject: "Completion Certificate Documentation Support (CBC / DHA)",
  },
  {
    id: "military-estate-office",
    title: "Draft Approval from Military Estate Office (MEO)",
    category: "authorities",
    shortDescription:
      "Procedural assistance and supporting document preparation for Draft Approval from the Military Estate Office (MEO).",
    detailedDescription:
      "Independent consultancy guidance for properties falling under Military Lands and Cantonments administration. Helping property owners assemble compliant dossiers for Draft Lease Approval.",
    keyPoints: [
      "MEO lease draft verification and dossier compilation",
      "Compilation of historical mutation and sanction records",
      "Clarification of ground rent, unearned increase, and premium guidelines",
      "Transparent advisory with no claims of internal departmental representation",
    ],
    documentsNeeded: [
      "Existing lease indenture and site plan",
      "Mutation order and Cantonment tax receipts",
      "Parties' CNIC copies and draft agreement",
    ],
    authorities: ["Military Estate Office (Karachi)", "Directorate of Military Lands & Cantonments"],
    whatsappMessage:
      "Hello Tooba Consultancy, I require procedural assistance for Draft Approval from the Military Estate Office (MEO) for my property. Please advise.",
    emailSubject: "Military Estate Office Draft Approval Assistance",
  },
  {
    id: "e-registration",
    title: "E-Registration & Electronic Property Services",
    category: "consultation",
    shortDescription:
      "Guidance on the Sindh Electronic Property Registration portal, digital challan generation, and biometric appointments.",
    detailedDescription:
      "Step-by-step facilitation through the modern Sindh electronic property registration portal. Helping clients prepare digital deed uploads, compute verified e-stamping challans, and schedule biometric appointments.",
    keyPoints: [
      "Sindh E-Registration portal account guidance and file preparation",
      "E-Stamping challan verification and payment assistance",
      "Biometric appointment scheduling and document checklist scrutiny",
      "Digital tracking of registry issuance after Sub-Registrar execution",
    ],
    documentsNeeded: [
      "Drafted legal deed in standard prescribed template",
      "National identity details (CNIC) of parties and witnesses",
      "Property survey / K-Electric consumer number for GIS linkage",
    ],
    authorities: ["Sindh Electronic Property Registration System", "Board of Revenue Sindh"],
    whatsappMessage:
      "Hello Tooba Consultancy, I need help with electronic property registration (E-Registration) and e-stamping in Karachi. Please guide me.",
    emailSubject: "E-Registration Property Assistance Karachi",
  },
  {
    id: "general-consultation",
    title: "General Property Consultation",
    category: "consultation",
    shortDescription:
      "Holistic guidance across residential, commercial, and industrial property buying, selling, and leasing transactions.",
    detailedDescription:
      "Comprehensive advisory support for local buyers, sellers, landlords, and Overseas Pakistanis navigating the complex documentation landscape of Karachi real estate.",
    keyPoints: [
      "Pre-purchase document due diligence checklists",
      "Guidance for Overseas Pakistanis managing properties remotely",
      "Residential houses, plots, flats, and commercial plazas",
      "Step-by-step guidance on timelines, expected costs, and departmental procedures",
    ],
    documentsNeeded: [
      "Any available property papers or token agreement",
      "Brief overview of the proposed transaction",
    ],
    authorities: ["Relevant Karachi Civic & Land Authorities"],
    whatsappMessage:
      "Hello Tooba Consultancy, I would like to consult with you regarding general property documentation and buying/selling procedures in Karachi.",
    emailSubject: "General Property Consultation Request",
  },
  {
    id: "taxation-return",
    title: "Taxation Return & FBR Tax Compliance",
    category: "consultation",
    shortDescription:
      "Assistance with annual Income Tax Returns, Wealth Statement reconciliation for property assets, and Active Taxpayer (ATL) status.",
    detailedDescription:
      "Comprehensive tax return preparation and filing assistance for property buyers, sellers, and owners. We assist with individual income tax returns on FBR IRIS, accurate wealth statement reconciliation of declared real estate assets, Section 7E deemed income compliance, and Active Taxpayer List (ATL) status maintenance to significantly reduce advance withholding taxes on property transfers.",
    keyPoints: [
      "Annual Income Tax Return filing on FBR IRIS for property owners",
      "Wealth Statement asset reconciliation & declared source of funds verification",
      "Active Taxpayer List (ATL) activation to lower Sec 236K / 236C property transfer tax rates",
      "Guidance on Section 7E real estate taxation and Sindh property tax challans",
    ],
    documentsNeeded: [
      "CNIC & National Tax Number (NTN) credentials",
      "Annual bank statements for the relevant tax year",
      "Property purchase / sale deeds and registered valuation receipts",
      "Details of household expenses, utility bills, and wealth assets",
    ],
    authorities: ["Federal Board of Revenue (FBR)", "Excise, Taxation & Narcotics Control (Sindh)"],
    whatsappMessage:
      "Hello Tooba Consultancy, I need assistance with Income Tax Return filing and FBR Active Taxpayer (Filer) compliance for my property in Karachi. Please guide me.",
    emailSubject: "Taxation Return & FBR Compliance Inquiry",
  },
];

/**
 * Property Transfer Calculator Rate Constants (Sindh / Federal FBR 2024-2026 Schedule)
 * Administrators can adjust percentages here as government budgets change.
 */
export const CALCULATOR_RATES = {
  // Stamp Duty (Sindh Stamp Act): 2.0% on declared value / DC rate
  stampDutyPercent: 2.0,
  // Digital Scanning Fee (Sub-Registrar Official Digital Archive Fee): Rs 1,300
  digitalScanningFeePKR: 1300,
  // Municipal Town Duty: 1.0% on declared value
  municipalTownDutyPercent: 1.0,
  // Advance Income Tax (Section 236K - Buyer):
  // Active Filer: 1.25%
  // Late Filer: 2.5%
  // Non-Filer: 5.0%
  advanceTaxBuyer: {
    filer: 1.25,
    lateFiler: 2.5,
    nonFiler: 5.0,
  },
  // Gain Tax / Advance Income Tax (Section 236C - Seller):
  // Active Filer: 2.75%
  // Non-Filer: 5.5%
  advanceTaxSeller: {
    filer: 2.75,
    nonFiler: 5.5,
  },
  // Administrative and mutation fee baseline estimate (PKR)
  administrativeEstimatePKR: 15000,
  // DHA / Cantonment specific surcharge baseline estimate (PKR)
  dhaCantonmentTransferBaseline: 25000,
};
