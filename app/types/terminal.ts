import React from "react";

export type LineType = "input" | "output" | "error" | "system" | "success" | "warning";

export interface TerminalLine {
  id: string;
  type: LineType;
  label?: string;
  content: string | React.ReactNode;
}

export type TerminalTheme = "emerald" | "cyan" | "amber" | "rose";
