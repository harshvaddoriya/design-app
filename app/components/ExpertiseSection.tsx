"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/app/atoms/theme";
import { FiZap, FiLayout, FiServer, FiCheckCircle, FiEye } from "react-icons/fi";

const EXPERTISE_DATA = [
  {
    title: "Performance First",
    description: "Lighthouse 95+ | Core Web Vitals Optimized",
    icon: FiZap,
    stat: "95+",
    color: "emerald",
  },
  {
    title: "UX Focused",
    description: "Clean UI, smooth interactions, real user experience",
    icon: FiLayout,
    stat: "100%",
    color: "blue",
  },
  {
    title: "Production Ready",
    description: "Reusable components, scalable architecture",
    icon: FiCheckCircle,
    stat: "24/7",
    color: "purple",
  },
  {
    title: "Backend Integration",
    description: "APIs, state management, real-world data handling",
    icon: FiServer,
    stat: "REST/QL",
    color: "rose",
  },
  {
    title: "Accessibility",
    description: "WCAG Compliant, Inclusive Design, Screen Reader Support, Keyboard Navigation",
    icon: FiEye,
    stat: "AA+",
    color: "amber",
  },
];

const ExpertiseSection = () => {
  const theme = useAtomValue(themeAtom);
  const isLight = theme === "light";

  return (
    <section className={`w-full py-24 sm:py-32 relative overflow-hidden transition-colors duration-500 ${isLight ? "bg-zinc-100" : "bg-zinc-900"}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${isLight ? "bg-zinc-900" : "bg-white"} animate-pulse`} />
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                Technical Standards
              </span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tighter ${isLight ? "text-zinc-900" : "text-white"}`}>
              Core Capabilities
            </h2>
            <p className={`text-sm sm:text-base font-medium max-w-2xl ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
              Delivering high-quality software through modern standards. Depending on the product scope, specific counts and metrics may vary, but the baseline commitment to excellence remains.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
                  ${isLight 
                    ? "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm" 
                    : "bg-zinc-950 border-white/5 hover:border-white/10"
                  }
                `}
              >
                {/* Background Glow */}
                <div 
                  className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                  style={{
                    backgroundColor: 
                      item.color === 'emerald' ? 'rgba(16, 185, 129, 0.1)' :
                      item.color === 'blue' ? 'rgba(59, 130, 246, 0.1)' :
                      item.color === 'purple' ? 'rgba(168, 85, 247, 0.1)' :
                      item.color === 'rose' ? 'rgba(244, 63, 94, 0.1)' :
                      'rgba(245, 158, 11, 0.1)'
                  }}
                />
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <div className="flex justify-between items-start">
                    <div className={`p-4 rounded-2xl ${isLight ? "bg-zinc-50" : "bg-white/5"} transition-colors`}>
                      <Icon 
                        className="w-6 h-6" 
                        style={{
                          color: 
                            item.color === 'emerald' ? '#10b981' :
                            item.color === 'blue' ? '#3b82f6' :
                            item.color === 'purple' ? '#a855f7' :
                            item.color === 'rose' ? '#f43f5e' :
                            '#f59e0b'
                        }}
                      />
                    </div>
                    <span className={`text-2xl font-black opacity-20 ${isLight ? "text-zinc-900" : "text-white"} group-hover:opacity-100 transition-opacity duration-500`}>
                      {item.stat}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 tracking-tight ${isLight ? "text-zinc-900" : "text-white"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed font-medium ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
