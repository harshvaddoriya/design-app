"use client";

import React from "react";
import ThemeToggle from "@/app/components/ThemeToggle";

const LANGUAGES = [
  "Figma",
  "CSS3",
  "SCSS/SASS",
  "Bootstrap",
  "TailwindCSS",
  "Framer Motion",
  "JavaScript",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Python",
  "Streamlit",
  "MicroFrontend Architecture",
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md border-b border-zinc-200/50 dark:border-white/10 transition-colors duration-500 flex items-center h-[50px] shadow-sm dark:shadow-none">
      <div className="flex-1 overflow-hidden relative flex items-center h-full mask-image-linear-edges">
        <div className="flex whitespace-nowrap animate-marquee items-center w-max">
          {[...LANGUAGES, ...LANGUAGES, ...LANGUAGES, ...LANGUAGES].map((lang, idx) => (
            <span
              key={idx}
              className="mx-6 sm:mx-8 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side: Theme Toggle */}
      <div className="px-3 flex-shrink-0 border-l border-zinc-200/50 dark:border-white/10 h-full flex items-center transition-colors duration-500">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
