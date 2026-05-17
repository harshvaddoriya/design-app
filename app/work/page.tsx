import React from "react";
import Header from "@/app/common/Header";
import Footer from "@/app/common/Footer";
import ProjectsSection from "@/app/components/ProjectsSection";
import CallToActionSection from "@/app/components/CallToActionSection";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-x-hidden">
      <Header />
      
      <main className="flex-grow pt-12 sm:pt-16">
        {/* We reuse the ProjectsSection but hide the 'Work Detailed' link on its own page */}
        <div className="mt-8 sm:mt-12">
          <ProjectsSection showDetailedButton={false} />
        </div>
        
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
}
