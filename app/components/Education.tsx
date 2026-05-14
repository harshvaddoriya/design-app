"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { EDUCATION_SLIDES } from "@/app/constants/education";

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = EDUCATION_SLIDES[activeIndex];
  const hasPrevious = activeIndex > 0;
  const hasNext = activeIndex < EDUCATION_SLIDES.length - 1;

  const goTo = (nextDirection: 1 | -1) => {
    if (nextDirection === -1 && !hasPrevious) return;
    if (nextDirection === 1 && !hasNext) return;

    setDirection(nextDirection);
    setActiveIndex((current) => current + nextDirection);
  };

  return (
    <section
      id="education"
      className="relative overflow-hidden border-y border-zinc-200 bg-white text-zinc-950 transition-colors duration-500 dark:border-white/10 dark:bg-[#09090b] dark:text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px border-t border-dashed border-zinc-200 dark:border-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px border-t border-dashed border-zinc-200 dark:border-white/10" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 border-x border-zinc-200 dark:border-white/10 lg:grid-cols-[96px_1fr_96px]">
        <div className="hidden items-center justify-center border-r border-zinc-200 dark:border-white/10 lg:flex">
          {hasPrevious && (
            <button
              type="button"
              onClick={() => goTo(-1)}
              className="flex size-12 cursor-pointer items-center justify-center text-zinc-950 transition-transform duration-300 hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 dark:text-white dark:focus-visible:ring-white/40"
              aria-label="Previous education"
            >
              <FiArrowLeft className="size-7" />
            </button>
          )}
        </div>

        <div className="backdrop-blur-xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.credential}
              initial={{ opacity: 0, x: direction * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -28 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="grid min-h-[500px] lg:grid-cols-[0.43fr_0.57fr]"
            >
              <div className="flex min-h-[260px] items-end border-b border-zinc-200 bg-white/70 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.02] sm:p-10 lg:min-h-full lg:border-b-0 lg:border-r">
                <div>
                  <div className="mb-5 inline-flex max-w-full rounded-full border border-zinc-400/50 bg-white/55 px-4 py-2 text-sm font-black text-zinc-950 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-white/10 dark:text-white">
                    {active.credential}
                  </div>
                  <h3 className="max-w-md bg-gradient-to-b from-zinc-900 to-zinc-400 bg-clip-text text-4xl font-black leading-[0.98] tracking-tighter text-transparent dark:from-zinc-100 dark:to-zinc-500 sm:text-5xl">
                    {active.institution}
                  </h3>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-zinc-600 dark:text-zinc-400">
                    {active.stream}
                  </p>
                </div>
              </div>

              <div className="flex min-h-[360px] flex-col justify-between bg-white/70 p-6 backdrop-blur-xl dark:bg-white/[0.02] sm:p-10">
                <div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-400">
                    <span>{active.location}</span>
                    <span className="text-zinc-400 dark:text-white/20">/</span>
                    <span>{active.period}</span>
                  </div>
                  <p className="mt-8 max-w-xl text-[clamp(1.35rem,1.85vw,2.2rem)] font-extrabold leading-[1.18] tracking-tight text-zinc-950 dark:text-white">
                    {active.summary}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between gap-6">
                  <div>
                    <div className="text-lg font-bold">{active.institution}</div>
                    <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {active.period}
                    </div>
                  </div>

                  <div className="flex gap-3 lg:hidden">
                    {hasPrevious && (
                      <button
                        type="button"
                        onClick={() => goTo(-1)}
                        className="flex size-10 items-center justify-center rounded-full border border-zinc-400/70 bg-white/35 backdrop-blur-xl dark:border-white/20 dark:bg-white/5"
                        aria-label="Previous education"
                      >
                        <FiArrowLeft className="size-5" />
                      </button>
                    )}
                    {hasNext && (
                      <button
                        type="button"
                        onClick={() => goTo(1)}
                        className="flex size-10 items-center justify-center rounded-full border border-zinc-400/70 bg-white/35 backdrop-blur-xl dark:border-white/20 dark:bg-white/5"
                        aria-label="Next education"
                      >
                        <FiArrowRight className="size-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="grid border-t border-zinc-200 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.015] sm:grid-cols-3">
            {active.metrics.map((metric) => (
              <div
                key={`${active.credential}-${metric.label}`}
                className="border-b border-zinc-200 px-6 py-8 last:border-b-0 dark:border-white/10 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0"
              >
                <div className="text-4xl font-black tracking-tighter text-zinc-950 dark:text-white">{metric.value}</div>
                <div className="mt-3 max-w-[180px] text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-center border-l border-zinc-200 dark:border-white/10 lg:flex">
          {hasNext && (
            <button
              type="button"
              onClick={() => goTo(1)}
              className="flex size-12 cursor-pointer items-center justify-center text-zinc-950 transition-transform duration-300 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 dark:text-white dark:focus-visible:ring-white/40"
              aria-label="Next education"
            >
              <FiArrowRight className="size-7" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
