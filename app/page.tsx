import Image from "next/image";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans dark:bg-black selection:bg-purple-100 dark:selection:bg-purple-900/30">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {/* Simple Hero Section to show content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/50 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider">New Version 2.0 Now Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-8 leading-[1.1]">
            Design the future <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
              at light speed.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
            Unleash your creativity with our all-in-one design platform. 
            Build stunning landing pages, components, and full applications 
            without touching a single line of CSS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-white text-zinc-50 dark:text-zinc-950 font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-zinc-900/20 dark:shadow-white/10 cursor-pointer">
              Start Building Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:scale-105 active:scale-95 transition-all cursor-pointer">
              View Examples
            </button>
          </div>

          <div className="mt-20 relative px-4">
               {/* Dashboard Mockup Placeholder */}
               <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-purple-500/10">
                   <div className="aspect-video bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
                        <div className="text-zinc-300 dark:text-zinc-700 font-bold text-3xl">Platform Preview</div>
                   </div>
               </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
