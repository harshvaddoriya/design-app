"use client";

import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "@/app/atoms/theme";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleThemeChange = async (event: React.MouseEvent, targetTheme: "light" | "dark") => {
    if (theme === targetTheme) return; // Do nothing if clicking the already active theme

    if (!document.startViewTransition) {
      const root = document.documentElement;
      if (targetTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      setTheme(targetTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      if (targetTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      setTheme(targetTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: targetTheme === "light" ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: "ease-out",
          pseudoElement: targetTheme === "light"
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div
      className="
        relative flex items-center p-1 rounded-full
        bg-zinc-200 dark:bg-[#1f1f1f] border border-zinc-300 dark:border-white/10
        shadow-sm transition-colors duration-300 w-[60px] h-8
      "
    >
      {/* Sliding Background */}
      <div
        className={`
          absolute top-1 bottom-1 w-[26px] rounded-full transition-transform duration-300 ease-out
          bg-white dark:bg-[#333333] shadow-sm pointer-events-none
          ${theme === "dark" ? "translate-x-[26px]" : "translate-x-0"}
        `}
      />
      
      <div className="relative flex w-full justify-between items-center z-10">
        <button
          onClick={(e) => handleThemeChange(e, "light")}
          aria-label="Switch to light mode"
          className="w-[26px] h-[24px] flex justify-center items-center rounded-full cursor-pointer"
        >
          <FiSun className={`w-3.5 h-3.5 transition-colors duration-300 ${theme === "light" ? "text-zinc-800" : "text-white/40 hover:text-zinc-500"}`} />
        </button>
        <button
          onClick={(e) => handleThemeChange(e, "dark")}
          aria-label="Switch to dark mode"
          className="w-[26px] h-[24px] flex justify-center items-center rounded-full cursor-pointer"
        >
          <FiMoon className={`w-3.5 h-3.5 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-zinc-500 hover:text-white/80"}`} />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
