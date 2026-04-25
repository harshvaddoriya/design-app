import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { Theme } from "@/app/types";

// Safe access to sessionStorage for Next.js SSR
const storage = createJSONStorage<Theme>(() => {
  if (typeof window !== "undefined") {
    return window.sessionStorage;
  }
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
});

export const themeAtom = atomWithStorage<Theme>("portfolio-theme", "dark", storage);
