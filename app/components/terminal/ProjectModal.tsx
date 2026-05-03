"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { Project } from "@/app/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden">
           <Image src={project.image} alt={project.title} fill className="object-cover" />
           <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
        </div>
        <div className="p-8">
           <div className="flex items-center justify-between mb-4">
             <h3 className="text-3xl font-black text-white tracking-tighter">{project.title}</h3>
             <div className="flex gap-2">
               <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all"><FiGithub className="w-5 h-5" /></a>
               <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all"><FiGlobe className="w-5 h-5" /></a>
             </div>
           </div>
           <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
             {project.description}
           </p>
           <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
