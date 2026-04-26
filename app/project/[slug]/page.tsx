import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/app/constants/projects";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import Header from "@/app/common/Header";
import Footer from "@/app/common/Footer";

// Generate static paths for all projects
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-32 pb-24 transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-12"
          >
            <FiArrowLeft /> Back to home
          </Link>

          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4">
            {project.category}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white mb-6">
            {project.title}
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-16 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                  {metric.value}
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>This is a detailed case study page for <strong>{project.title}</strong>. It demonstrates dynamic routing based on the project slug.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
