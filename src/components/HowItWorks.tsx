import React from "react";
import { MessageSquare, FileSpreadsheet, Compass, FileCheck } from "lucide-react";
import { motion } from "motion/react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Contact Us",
      description: "Reach Tooba Consultancy directly through WhatsApp or email to begin your inquiry.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Explain Your Requirement",
      description:
        "Tell us about your property, documentation needs, or the specific authority involved (Sub-Registrar, DHA, CBC, KDA, etc.).",
      icon: FileSpreadsheet,
    },
    {
      number: "03",
      title: "Initial Guidance",
      description:
        "Receive clear information on the applicable legal procedures, likely document requirements, and recommended next steps.",
      icon: Compass,
    },
    {
      number: "04",
      title: "Documentation Assistance",
      description:
        "Proceed with the agreed consultancy or documentation service, subject to applicable legal requirements and authority rules.",
      icon: FileCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade-In Animation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2">
            Clear Four-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-bold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            A straightforward, transparent engagement model designed to give property owners and buyers clarity at every stage.
          </p>
        </motion.div>

        {/* Steps Grid with Staggered Subtle Fade-In Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white p-6 rounded-lg border border-slate-200/90 flex flex-col justify-between relative shadow-xs"
              >
                <div>
                  {/* Natural Human Editorial Numbering */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-serif-display text-[#C5A059] tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded bg-[#0B1B3D]/5 flex items-center justify-center text-[#0B1B3D]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-600">
                  Step {idx + 1} of 4
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
