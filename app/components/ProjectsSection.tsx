"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { PROJECTS } from "@/app/constants/projects";
import { Project } from "@/app/types";
import { FiArrowUpRight } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import ProjectModal from "./terminal/ProjectModal";

const ProjectCard = ({
  project,
  className,
  isLarge,
  isHovered,
  isAnyHovered,
  onMouseEnter,
  onMouseLeave,
  onClick
}: {
  project: Project;
  className?: string;
  isLarge?: boolean;
  isHovered: boolean;
  isAnyHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(yPct, [-0.5, 0.5], ["5deg", "-5deg"]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(xPct, [-0.5, 0.5], ["-5deg", "5deg"]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    mouseX.set(clientX);
    mouseY.set(clientY);
    xPct.set(clientX / rect.width - 0.5);
    yPct.set(clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
    xPct.set(0);
    yPct.set(0);
  };

  // Sibling dimming effect
  const dimClass = isAnyHovered && !isHovered
    ? "opacity-50 grayscale-[30%] scale-[0.98] blur-[1px]"
    : "opacity-100 grayscale-0 scale-100 blur-0";

  const spotlightColor = "rgba(255,255,255,0.08)";
  const backgroundOverlay = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`;

  return (
    <motion.div
      className={`relative rounded-3xl [perspective:1200px] transition-all duration-500 ease-out z-0 hover:z-50 ${className} ${dimClass}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        ref={ref}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="relative block w-full h-full rounded-2xl border border-zinc-200 bg-white dark:border-white/5 dark:bg-zinc-950 overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
      >
        {/* Background Parallax Image */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
          <motion.div
            className="w-full h-full bg-cover bg-center origin-center transition-transform duration-1000 ease-out group-hover:scale-110 opacity-0 dark:opacity-30 mix-blend-overlay"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          {/* Gradients */}
          <div className="absolute inset-0 hidden bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/20 dark:block" />
        </div>

        {/* Content */}
        <div className={`relative z-10 flex flex-col h-full ${isLarge ? 'p-6 sm:p-10' : 'p-5 sm:p-7'} [transform:translateZ(30px)]`}>
          <div className="flex justify-between items-start mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-300 shadow-sm">
              {project.category}
            </span>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
              <FiArrowUpRight className="w-5 h-5" />
            </div>
          </div>

        <h3 className={`${isLarge ? 'text-4xl sm:text-5xl' : 'text-xl sm:text-2xl'} font-black tracking-tighter text-zinc-900 dark:text-white mb-2 sm:mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-out`}>
          {project.title}
        </h3>

        {!isLarge && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-1">
            {project.category}
          </p>
        )}

        {isLarge && (
          <p className={`text-sm text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm leading-relaxed line-clamp-3 sm:text-base`}>
            {project.description}
          </p>
        )}

        <div className="mt-auto grid grid-cols-2 gap-4 sm:gap-6 border-t border-zinc-200 dark:border-white/5 pt-6">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 transform origin-left transition-all duration-500"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">
                {metric.value}
              </span>
              <span className="text-[8px] sm:text-[9px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold leading-tight">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-20 hidden rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:block"
        style={{ background: backgroundOverlay }}
      />
    </motion.div>
    </motion.div>
  );
};

const ProjectsSection: React.FC<{ showDetailedButton?: boolean }> = ({ showDetailedButton = true }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const isAnyHovered = hoveredIndex !== null;

  const getSpanClass = (index: number) => {
    switch (index) {
      case 0: return "md:col-span-2 md:row-span-2"; // Large square
      case 1: return "md:col-span-2 md:row-span-1"; // Wide
      case 2: return "md:col-span-1 md:row-span-1"; // Small
      case 3: return "md:col-span-1 md:row-span-1"; // Small
      case 4: return "md:col-span-1 md:row-span-1"; // Small
      case 5: return "md:col-span-3 md:row-span-1"; // Wide to fill row
      default: return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section id="projects" className="w-full bg-white dark:bg-zinc-950 transition-colors duration-500 py-24 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 opacity-50 blur-[120px] dark:block" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">

        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#059669] animate-pulse shadow-[0_0_10px_rgba(5,150,105,0.4)]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#059669]">
                Selected Work
              </span>
            </div>
            <h2 className="flex flex-wrap gap-x-3 text-4xl font-black tracking-tighter sm:text-4xl">
              <span className="inline-block bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent">Engineering</span>
              <span className="inline-block bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent">Excellence.</span>
            </h2>
          </div>

          {showDetailedButton && (
            <Link href="/work" className="group flex items-center gap-3 rounded-full border border-zinc-200 dark:border-white/10 px-6 py-3 text-sm font-semibold transition-all hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-900 dark:text-white">
              <span>Work Detailed</span>
              <div className="relative w-4 h-4 overflow-hidden">
                <IoArrowForwardOutline className="absolute w-4 h-4 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-x-full" />
                <MdArrowOutward className="absolute w-4 h-4 transition-all duration-300 opacity-0 -translate-x-full translate-y-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[320px] gap-4">
          {PROJECTS.map((project, index) => {
            const spanClass = getSpanClass(index);
            const isLarge = index === 0;
            const isHovered = hoveredIndex === index;

            return (
              <ProjectCard
                key={project.slug}
                project={project}
                className={spanClass}
                isLarge={isLarge}
                isHovered={isHovered}
                isAnyHovered={isAnyHovered}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveProject(project)}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
