"use client";

import React from "react";
import Link from "next/link";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/app/atoms/theme";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";

const SOCIAL_LINKS = [
  { label: "GitHub", icon: FiGithub, href: "https://github.com/harshvaddoriya" },
  { label: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/harsh-vaddoriya/" },
  { label: "X", icon: FiTwitter, href: "https://x.com/Harshsays0319" },
];

const Footer: React.FC = () => {
  const theme = useAtomValue(themeAtom);
  const isLight = theme === "light";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className=""
    >

      <div className="flex justify-start px-6 sm:px-8">
        <button
          onClick={scrollToTop}
          className={`
                group p-2 rounded-xl border transition-all duration-300
                ${isLight
              ? "border-zinc-200 bg-white text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 shadow-sm"
              : "border-white/10 bg-white/5 text-zinc-500 hover:border-white hover:text-white"
            }
              `}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
      <div className={`max-w-[2560px] mx-auto px-6 sm:px-8  w-full border-t py-4 mt-6 transition-colors duration-500" ${isLight
        ? "bg-zinc-50 border-zinc-200 text-zinc-900"
        : "bg-zinc-950 border-white/10 text-white"
        }`}>
        <div className="flex flex-col gap-6">
          {/* Scroll to Top - Top Left */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Left Side - Copyright */}
            <div className="flex flex-col items-start">
              <p className={`text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase ${isLight ? "text-zinc-400" : "text-zinc-600"}`}>
                © {new Date().getFullYear()} Harsh Vaddoriya. All rights reserved.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-5 sm:gap-8">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-zinc-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
