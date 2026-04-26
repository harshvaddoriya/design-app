"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import SearchBar from "@/app/components/SearchBar";
import ShowcaseList from "@/app/components/ShowcaseList";
import Images from "@/public/assets/images";
import { useAtom } from "jotai";
import { isSearchFocusedAtom } from "@/app/atoms/search";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const HeroSection: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchFocusedAtom);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const subHeadlineText = "Building Revenue-Driven Frontends for SaaS & Startup Products";
  const [displayText, setDisplayText] = React.useState("");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsSearchOpen]);

  // Scroll into view when search opens to ensure dropdown fits
  useEffect(() => {
    if (isSearchOpen && searchContainerRef.current) {
      const rect = searchContainerRef.current.getBoundingClientRect();
      const offset = 100; // Account for fixed header
      if (rect.top > 150) {
        window.scrollBy({ top: rect.top - offset, behavior: 'smooth' });
      }
    }
  }, [isSearchOpen]);

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(subHeadlineText.slice(0, i));
      i++;
      if (i > subHeadlineText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Force scroll to top on refresh
  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0 bg-zinc-50 dark:bg-[#09090b] transition-colors duration-500">
        <Image
          src={Images.homeBg}
          alt="Portfolio background"
          fill
          priority
          quality={95}
          className="object-cover object-center dark:invert-0 invert opacity-40 dark:opacity-60 transition-all duration-500 mix-blend-multiply dark:mix-blend-normal"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white dark:from-transparent dark:via-black/20 dark:to-[#09090b] z-[2] transition-colors duration-500 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(9,9,11,0.8)_100%)] z-[2] transition-colors duration-500 pointer-events-none" />
      </div>

      <div
        className="absolute inset-0 z-[3] opacity-[0.025] dark:opacity-[0.025] pointer-events-none mix-blend-multiply dark:mix-blend-normal"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-[40] w-full max-w-2xl mx-auto px-5 flex flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 mt-2 px-5 py-2 rounded-full border border-zinc-200 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-colors duration-300 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-[12px] font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-500 dark:from-white/40 dark:via-white dark:to-white/40 bg-[length:200%_auto] animate-text-shimmer">
            Full Stack Engineer · Modern Web Products
          </span>
        </div>
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-zinc-900 dark:text-white leading-[1.05] tracking-tight drop-shadow-xl dark:drop-shadow-2xl transition-colors duration-300 animate-reveal-blur">
          Harsh Vaddoriya
        </h1>
        <p className="text-base sm:text-sm md:text-lg font-medium text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto -mt-2 leading-relaxed min-h-[1.6em]">
          {displayText}
          {displayText.length < subHeadlineText.length && <span className="animate-cursor" />}
        </p>


        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] sm:text-[11px] font-bold tracking-wider text-zinc-500 dark:text-zinc-400/80 uppercase mt-1 mb-2">
          <span>1.5+ Years Experience</span>
          <span className="text-zinc-300 dark:text-zinc-800 hidden sm:block">•</span>
          <span>12+ Projects</span>
          <span className="text-zinc-300 dark:text-zinc-800 hidden sm:block">•</span>
          <span>Frontend + Full Stack</span>

        </div>

        <div className="w-10 h-px bg-zinc-300 dark:bg-white/20 my-2 transition-colors duration-300" />

        <div ref={searchContainerRef} className="w-full max-w-[480px] relative z-[50]">
          <div className="w-full relative z-20">
            <SearchBar />
          </div>

          <div
            className={`w-full absolute left-0 right-0 z-[60] transition-all duration-300 origin-top mt-3 ${isSearchOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
          >
            <div className="relative shadow-[0_20px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10">
              <div className="absolute inset-0 bg-white/98 dark:bg-zinc-950 backdrop-blur-2xl" />
              <div className="relative z-10">
                <ShowcaseList />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Vertical Social Bar (Right Side) */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-[5] hidden lg:flex flex-col items-center gap-6">
        <a
          href="https://github.com/harshvaddoriya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
          aria-label="GitHub"
        >
          <FiGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-vaddoriya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:harshvaddoriya0319@gmail.com"
          className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
          aria-label="Email"
        >
          <FiMail className="w-5 h-5" />
        </a>
        <div className="w-px h-20 bg-zinc-200 dark:bg-white/10" />
      </div>

      <button
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-0 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-300 cursor-pointer ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:text-zinc-900 dark:hover:text-white'
          }`}
        aria-label="Scroll to projects"
      >
        <span className="text-[10px] text-zinc-500 dark:text-white/30 uppercase tracking-widest font-bold transition-colors">Detailed info</span>
        <svg className="w-4 h-4 text-zinc-400 dark:text-white/25 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
