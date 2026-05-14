"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiCheckSquare, FiMonitor } from "react-icons/fi";
import { EXPERIENCES } from "@/app/constants/experience";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const previousProgressRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = EXPERIENCES[activeIndex];
  const ActiveIcon = active.icon;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const previous = previousProgressRef.current;
    const nextIndex = Math.min(
      EXPERIENCES.length - 1,
      Math.floor(latest * EXPERIENCES.length)
    );

    previousProgressRef.current = latest;

    if (nextIndex === activeIndex) return;

    setDirection(latest > previous ? 1 : -1);
    setActiveIndex(nextIndex);
  });

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative border-y border-dashed border-zinc-300 bg-zinc-50 text-zinc-950 transition-colors duration-500 dark:border-white/15 dark:bg-[#09090b] dark:text-white"
    >
      <div className="relative overflow-hidden px-4 sm:px-6 xl:sticky xl:top-0 xl:flex xl:items-start">
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 overflow-hidden border-x border-dashed border-zinc-300 bg-zinc-50/70 dark:border-white/15 dark:bg-[#09090b]/70 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="grid border-b border-dashed border-zinc-300 dark:border-white/15 lg:grid-rows-[170px_repeat(3,120px)] lg:border-b-0 lg:border-r">
            <div className="flex items-center border-b border-dashed border-zinc-300 px-6 py-8 dark:border-white/15 sm:px-8 lg:py-0">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.65)]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                    Experience
                  </span>
                </div>
                <div className="text-4xl font-black tracking-tighter text-zinc-950 dark:text-white">
                  1.5+
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  Years plus teaching
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:contents">
              {EXPERIENCES.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.company}
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className={`group relative flex min-h-[112px] w-full items-center justify-between border-b border-dashed border-zinc-300 px-6 text-left outline-none cursor-pointer transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-emerald-500/70 dark:border-white/15 sm:px-8 lg:min-h-0 ${
                      index < EXPERIENCES.length - 1 ? "sm:border-r lg:border-r-0" : ""
                    } ${
                      isActive
                        ? "bg-white text-zinc-950 dark:bg-white/[0.04] dark:text-white"
                        : "text-zinc-400 hover:bg-white/60 hover:text-zinc-800 dark:hover:bg-white/[0.02] dark:hover:text-zinc-200"
                    }`}
                  >
                    <span className="max-w-[170px] text-xl font-black leading-tight tracking-tight sm:text-2xl">
                      {item.company}
                    </span>
                    <span
                      className="size-1.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ backgroundColor: item.accent, opacity: isActive ? 1 : undefined }}
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          <main className="relative grid bg-zinc-50/70 dark:bg-[#09090b]/70 xl:grid-rows-[minmax(340px,0.48fr)_1fr]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${active.company}-head`}
                initial={{ opacity: 0, y: direction * 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -22 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-dashed border-zinc-300 px-6 py-3 dark:border-white/15 sm:px-6 lg:px-12 lg:py-6"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 mt-0 md:mt-6">
                  <span>{active.location}</span>
                  <span className="text-zinc-300 dark:text-white/20">/</span>
                  <span>{active.companyType}</span>
                  <span className="text-zinc-300 dark:text-white/20">/</span>
                  <span>{active.period}</span>
                </div>
                <h2 className="mt-0 max-w-4xl bg-gradient-to-b from-zinc-900 to-zinc-400 bg-clip-text text-[clamp(2.15rem,4.05vw,4.55rem)] font-black leading-[0.95] tracking-tighter text-transparent dark:from-zinc-100 dark:to-zinc-500 md:mt-10">
                  {active.headline}
                </h2>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${active.company}-body`}
                initial={{ opacity: 0, y: direction * 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -24 }}
                transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                className="grid min-h-0 lg:grid-cols-[1fr_360px]"
              >
                <div className="relative px-6 py-10 sm:px-10 lg:min-h-0 lg:px-12">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(113,113,122,0.05),transparent)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.035),transparent)]" />
                  <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center">
                    <div
                      className="mb-7 flex size-12 items-center justify-center border bg-white/60 dark:bg-white/[0.02]"
                      style={{ borderColor: `${active.accent}55`, color: active.accent }}
                    >
                      <ActiveIcon className="size-5" strokeWidth={2} />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-900 dark:text-zinc-100">
                      {active.role}
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
                      {active.description}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-x-4 gap-y-3">
                      {active.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border-b border-zinc-300 pb-1 text-xs font-bold uppercase tracking-[0.16em] text-zinc-600 dark:border-white/20 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid border-t border-dashed border-zinc-300 dark:border-white/15 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 lg:border-l lg:border-t-0">
                  <div className="border-b border-dashed border-zinc-300 p-6 dark:border-white/15 sm:border-b-0 sm:border-r lg:border-b lg:border-r-0 lg:p-8">
                    <FiMonitor className="mb-7 size-5 text-emerald-600 dark:text-emerald-400" />
                    <div className="text-6xl font-black tracking-tighter text-zinc-950 dark:text-white">
                      {active.projects}
                    </div>
                    <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      {active.impact}
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <FiCheckSquare className="mb-7 size-5 text-cyan-600 dark:text-cyan-400" />
                    <div className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                      {active.workflowTitle}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                      {active.workflowDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
