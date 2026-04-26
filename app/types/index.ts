// ─── Showcase Item ───────────────────────────────────────
export interface ShowcaseItem {
  id: string;
  label: string;
  icon: ShowcaseIcon;
  href: string;
  description: string;
}

export type ShowcaseIcon =
  | "link"
  | "download"
  | "briefcase"
  | "github"
  | "calendar";

// ─── Theme ───────────────────────────────────────────────
export type Theme = "light" | "dark";

export * from "./terminal";
