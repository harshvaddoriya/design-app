import React from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/app/constants/projects";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project, className, isLarge }: { project: Project; className?: string; isLarge?: boolean }) => {
  return (
    <Link
      href={`/project/${project.slug}`}
      className={`relative flex flex-col p-6 sm:p-8 border-r border-b border-zinc-200 dark:border-white/[0.05] group hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-all duration-500 overflow-hidden ${className}`}
    >
      {/* Industrial Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-300 dark:border-white/20 group-hover:border-zinc-900 dark:group-hover:border-white transition-colors duration-500" />
      
      <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase mb-4 mt-2">
        {project.category}
      </div>

      <h3 className={`${isLarge ? 'text-3xl sm:text-5xl' : 'text-xl sm:text-2xl'} font-black tracking-tighter text-zinc-900 dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-500`}>
        {project.title}
      </h3>

      <p className={`text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-8 max-w-md leading-relaxed ${isLarge ? 'text-sm sm:text-base' : ''}`}>
        {project.description}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 mt-auto">
        {project.metrics.map((metric, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <span className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">
              {metric.value}
            </span>
            <span className="text-[9px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest font-bold">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* Subtle hover arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        <FiArrowUpRight className="w-5 h-5 text-zinc-900 dark:text-white" />
      </div>
    </Link>
  );
};

const ProjectsSection: React.FC = () => {
  const getSpanClass = (index: number) => {
    switch (index) {
      case 0:
        return "md:col-span-2 md:row-span-2"; // Hero project (Large square)
      case 1:
        return "md:col-span-2 md:row-span-1"; // Wide rectangle
      case 2:
        return "md:col-span-1 md:row-span-1"; // Small square
      case 3:
        return "md:col-span-1 md:row-span-1"; // Small square
      case 4:
        return "md:col-span-2 md:row-span-1"; // Bottom left wide
      case 5:
        return "md:col-span-2 md:row-span-1"; // Bottom right wide
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section id="projects" className="w-full bg-white dark:bg-zinc-950 transition-colors duration-500 border-t border-zinc-200 dark:border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto border-l border-zinc-200 dark:border-white/[0.05]">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr">
          {PROJECTS.map((project, index) => {
            const spanClass = getSpanClass(index);
            const isLarge = index === 0;
            return (
              <ProjectCard 
                key={project.slug} 
                project={project} 
                className={spanClass} 
                isLarge={isLarge}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
