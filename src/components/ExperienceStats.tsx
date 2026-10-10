import React, { useState } from "react";
import { Award, Briefcase, Users, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface StatSlice {
  id: string;
  label: string;
  percentage: number;
  count: string;
  color: string;
  description: string;
}

export const ExperienceStats: React.FC = () => {
  const [activeSliceIndex, setActiveSliceIndex] = useState<number>(0);

  const statsBreakdown: StatSlice[] = [
    {
      id: "deeds-transfers",
      label: "Property Transfers & Deeds",
      percentage: 38,
      count: "3,800+ Cases",
      color: "#D4AF37", // Warm Gold
      description: "Sale deeds, gift deeds, relinquishment deeds, and Sub-Registrar execution.",
    },
    {
      id: "dha-cantonment",
      label: "DHA & Cantonment Matters",
      percentage: 27,
      count: "2,700+ Cases",
      color: "#0B1B3D", // Deep Navy
      description: "DHA Category A, B, C leases, transfer sets, CBC completion certificates, and MEO files.",
    },
    {
      id: "nadra-succession",
      label: "NADRA Succession & Inheritance",
      percentage: 20,
      count: "2,000+ Cases",
      color: "#1E3A8A", // Royal Navy
      description: "Succession certificates, letters of administration, and legal heir family documentation.",
    },
    {
      id: "taxation-compliance",
      label: "Taxation Returns & Clearances",
      percentage: 15,
      count: "1,500+ Cases",
      color: "#85652D", // Muted Bronze / Amber
      description: "FBR Active Taxpayer (ATL) filing, wealth statements, and Sindh property tax reconciliation.",
    },
  ];

  // SVG Pie / Donut Chart Parameters
  const size = 320;
  const strokeWidth = 52;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Compute stroke offsets for each slice
  let accumulatedPercent = 0;
  const slicesWithOffsets = statsBreakdown.map((slice) => {
    const strokeDasharray = `${(slice.percentage / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
    accumulatedPercent += slice.percentage;
    return {
      ...slice,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  const activeSlice = statsBreakdown[activeSliceIndex];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2">
            Established Since 2002 · Proven Track Record
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-slate-900 tracking-tight">
            Over Two Decades of Professional Excellence
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Since 2002, Tooba Consultancy has delivered reliable, transparent property documentation, succession processing, and taxation compliance for thousands of homeowners and investors across Sindh.
          </p>
        </motion.div>

        {/* 4 Prominent Stat KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-5 sm:p-6 bg-slate-50 rounded-lg border border-slate-200/90 relative group hover:border-[#D4AF37]/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-md bg-[#0B1B3D]/5 flex items-center justify-center text-[#0B1B3D] mb-4">
              <Award className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif-display text-slate-900 tabular-nums tracking-tight">
              24+
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
              Years of Experience
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Continuously serving Sindh property owners since 2002.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-5 sm:p-6 bg-slate-50 rounded-lg border border-slate-200/90 relative group hover:border-[#D4AF37]/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-md bg-[#0B1B3D]/5 flex items-center justify-center text-[#0B1B3D] mb-4">
              <Briefcase className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif-display text-slate-900 tabular-nums tracking-tight">
              10,000+
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
              Successful Cases
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Property deeds, leases, succession, and tax filings executed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="p-5 sm:p-6 bg-slate-50 rounded-lg border border-slate-200/90 relative group hover:border-[#D4AF37]/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-md bg-[#0B1B3D]/5 flex items-center justify-center text-[#0B1B3D] mb-4">
              <Users className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif-display text-slate-900 tabular-nums tracking-tight">
              5,000+
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
              Clients Served
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Families, real estate investors, and overseas Pakistanis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.26 }}
            className="p-5 sm:p-6 bg-slate-50 rounded-lg border border-slate-200/90 relative group hover:border-[#D4AF37]/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-md bg-[#0B1B3D]/5 flex items-center justify-center text-[#0B1B3D] mb-4">
              <Calendar className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif-display text-slate-900 tabular-nums tracking-tight">
              Since 2002
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
              Trusted Advisory
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Standing for verified accuracy and thorough scrutiny.
            </p>
          </motion.div>
        </div>

        {/* Interactive Pie Chart & Breakdown Showcase */}
        <div className="bg-[#0B1B3D] text-white rounded-xl border border-slate-800 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Donut / Pie Chart Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px]">
                {/* SVG Donut / Pie Chart */}
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox={`0 0 ${size} ${size}`}
                >
                  {/* Background Track Circle */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth={strokeWidth}
                  />

                  {/* Segment Slices */}
                  {slicesWithOffsets.map((slice, index) => {
                    const isSelected = activeSliceIndex === index;
                    return (
                      <circle
                        key={slice.id}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={slice.color}
                        strokeWidth={isSelected ? strokeWidth + 6 : strokeWidth}
                        strokeDasharray={slice.strokeDasharray}
                        strokeDashoffset={slice.strokeDashoffset}
                        strokeLinecap="butt"
                        className="transition-all duration-300 cursor-pointer"
                        onMouseEnter={() => setActiveSliceIndex(index)}
                        onClick={() => setActiveSliceIndex(index)}
                        style={{
                          filter: isSelected ? "drop-shadow(0 0 8px rgba(212,175,55,0.4))" : "none",
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Center Badge in Donut */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Total Handled
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-serif-display text-white tabular-nums my-0.5">
                    10,000+
                  </span>
                  <span className="text-[11px] text-slate-300">
                    Cases Since 2002
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-4 text-center">
                Hover or click segments to view case category breakdown
              </p>
            </div>

            {/* Right: Interactive Case Distribution Legend & Focus Card */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Case Distribution Analysis
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-white mt-1">
                  10,000+ Matters Successfully Resolved
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Our case distribution across two decades reflects specialized expertise in high-stakes documentation across Karachi and all Sindh Province:
                </p>
              </div>

              {/* Slices Legend List */}
              <div className="space-y-3">
                {statsBreakdown.map((item, idx) => {
                  const isSelected = activeSliceIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setActiveSliceIndex(idx)}
                      onClick={() => setActiveSliceIndex(idx)}
                      className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? "bg-slate-800/90 border-[#D4AF37] shadow-md ring-1 ring-[#D4AF37]/30"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-semibold text-white truncate">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-slate-400 truncate">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-sm sm:text-base font-bold text-[#D4AF37] tabular-nums">
                          {item.percentage}%
                        </span>
                        <span className="block text-[11px] text-slate-300 tabular-nums">
                          {item.count}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Slice Summary Callout */}
              <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-200">
                  <span className="font-bold text-white mr-1.5">
                    {activeSlice.label} ({activeSlice.count}):
                  </span>
                  <span>{activeSlice.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
