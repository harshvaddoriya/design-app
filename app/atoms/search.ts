import { atom } from "jotai";

// ─── Theme ───────────────────────────────────────────────
export type Theme = "light" | "dark";

export const themeAtom = atom<Theme>("light");

export const searchQueryAtom = atom<string>("");
export const debouncedSearchQueryAtom = atom<string>("");

export const isSearchFocusedAtom = atom<boolean>(false);
