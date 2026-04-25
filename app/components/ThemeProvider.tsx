"use client";

import React, { useEffect } from "react";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/app/atoms/theme";

/**
 * Reads the themeAtom and applies/removes the `dark` class
 * on <html> for Tailwind's dark-mode variant.
 */
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
