"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import SearchBar from "@/app/components/SearchBar";
import ShowcaseList from "@/app/components/ShowcaseList";
import { useAtom } from "jotai";
import { isSearchFocusedAtom } from "@/app/atoms/search";

const HeroSection: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchFocusedAtom);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsSearchOpen]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* ── Background Image ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/Home/image.png"
          alt="Portfolio background"
          fill
          priority
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/70" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      {/* ── Floating noise texture ────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Main Content ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-5 flex flex-col items-center gap-6 text-center">

        {/* ── Name ─────────────────────────────────────────── */}
        <h1 className="text-[clamp(2.75rem,8vw,5rem)] font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl">
          Harsh Vaddoriya
        </h1>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03]">
          <span className="text-[12px] font-semibold text-white/80 tracking-widest uppercase">
            Frontend Engineer · Open Source Enthusiast
          </span>
        </div>


        {/* ── Divider ──────────────────────────────────────── */}
        <div className="w-10 h-px bg-white/20 my-1" />

        {/* ── Search & Showcase ────────────────────────────── */}
        <div ref={searchContainerRef} className="w-full relative z-30">
          <div className="w-full relative z-20">
            <SearchBar />
          </div>

          <div
            className={`w-full absolute left-0 right-0 z-10 transition-all duration-300 origin-top mt-3 ${isSearchOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
          >
            <ShowcaseList />
          </div>
        </div>

      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-0 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-300 ${
          isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Scroll</span>
        <svg className="w-4 h-4 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
