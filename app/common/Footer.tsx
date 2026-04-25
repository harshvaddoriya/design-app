"use client";

import React from "react";
import Link from "next/link";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/app/atoms/theme";

const FOOTER_LINKS = {
  Connect: [
    { label: "GitHub", href: "https://github.com/harshvaddoriya" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Email", href: "mailto:harsh@example.com" },
  ],
  Explore: [
    { label: "Work", href: "#work" },
    { label: "Career", href: "#career" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
};

const Footer: React.FC = () => {
  const theme = useAtomValue(themeAtom);
  const isLight = theme === "light";

  return (
    <footer
      className={`
        w-full border-t pt-16 pb-8 px-6 sm:px-10 mt-24
        transition-colors duration-300
        ${isLight
          ? "bg-zinc-50 border-zinc-200/70 text-zinc-900"
          : "bg-zinc-950 border-white/8 text-white"
        }
      `}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className={`text-2xl font-black mb-3 ${isLight ? "text-zinc-900" : "text-white"}`}>
              Harsh Vaddoriya
            </p>
            <p className={`text-sm leading-relaxed max-w-[220px] ${isLight ? "text-zinc-500" : "text-white/40"}`}>
              Frontend Engineer crafting fast, beautiful, and accessible web experiences.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className={`text-xs font-bold uppercase tracking-widest mb-5 ${isLight ? "text-zinc-400" : "text-white/30"}`}>
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors duration-200 ${isLight ? "text-zinc-600 hover:text-zinc-900" : "text-white/50 hover:text-white"}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t text-xs ${isLight ? "border-zinc-200 text-zinc-400" : "border-white/8 text-white/25"}`}>
          <p>© {new Date().getFullYear()} Harsh Vaddoriya. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-current transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-current transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
