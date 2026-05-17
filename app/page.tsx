import React, { Suspense } from "react";
import Footer from "@/app/common/Footer";
import HeroSection from "@/app/components/HeroSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import Education from "@/app/components/Education";
import TerminalSection from "@/app/components/TerminalSection";
import ContactSection from "@/app/components/ContactSection";
import Header from "@/app/common/Header";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-zinc-950" />}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-x-hidden">
        <Header />

        <main className="flex-grow">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <Education />
          <TerminalSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
