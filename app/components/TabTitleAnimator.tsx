"use client";

import { useEffect } from "react";

const TITLES = [
  "Harsh Vaddoriya — Frontend Engineer",
  "Harsh Vaddoriya — React Specialist",
  "Harsh Vaddoriya — UI/UX Enthusiast",
  "Harsh Vaddoriya — Next.js Expert",
];

export default function TabTitleAnimator() {
  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % TITLES.length;
      document.title = TITLES[currentIndex];
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return null; // This component doesn't render anything visually
}
