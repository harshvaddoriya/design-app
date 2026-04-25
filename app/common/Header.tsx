"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/app/atoms/theme";

const NAV_LINKS = ["Work", "Career", "GitHub", "Contact"] as const;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = theme === "light";

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-400 ease-out
        px-6 sm:px-10
        ${
          scrolled
            ? isLight
              ? "py-3 bg-white/80 backdrop-blur-2xl border-b border-zinc-200/60 shadow-sm"
              : "py-3 bg-zinc-950/80 backdrop-blur-2xl border-b border-white/8 shadow-sm"
            : "py-5 bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          aria-label="Home"
          className={`
            text-base font-bold tracking-tight transition-colors duration-200
            ${isLight ? "text-zinc-900 hover:text-zinc-600" : "text-white hover:text-white/70"}
          `}
        >
          <span className="font-black">HV</span>
          <span className="font-light opacity-50 mx-1">·</span>
          <span className="font-medium text-sm">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                text-sm font-medium transition-colors duration-200
                ${isLight
                  ? "text-zinc-500 hover:text-zinc-900"
                  : "text-white/50 hover:text-white"
                }
              `}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className={`
              hidden sm:inline-flex items-center gap-1.5
              text-xs font-bold px-4 py-2.5 rounded-xl
              transition-all duration-200
              hover:scale-[1.03] active:scale-[0.97]
              cursor-pointer
              ${isLight
                ? "bg-zinc-900 text-white hover:bg-zinc-800"
                : "bg-white text-zinc-900 hover:bg-zinc-100"
              }
            `}
          >
            Hire me
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
