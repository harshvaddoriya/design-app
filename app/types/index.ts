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

// ─── Project ───────────────────────────────────────────────
export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  metrics: Metric[];
}

// ─── Theme ───────────────────────────────────────────────
export type Theme = "light" | "dark";

export * from "./terminal";
