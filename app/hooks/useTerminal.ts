"use client";

import { useState, useRef, useCallback } from "react";
import { PROJECTS, Project } from "@/app/constants/projects";
import { LineType, TerminalLine, TerminalTheme } from "@/app/types";

type QueueItem = { type: LineType; content: string; label?: string };

// Boot lines written directly — no useEffect, no queue processing
const BOOT_LINES: QueueItem[] = [
  { type: "system",  content: "Initializing HarshOS v2.4.0..." },
  { type: "system",  content: "Loading developer profile: Harsh Vaddoriya" },
  { type: "success", content: "Scanning project database [██████████] 100%" },
  { type: "system",  content: "Establishing secure neural uplink..." },
  { type: "success", content: "System ready. Welcome back, Architect." },
  { type: "output",  content: "Type 'help' to see available commands." },
];

const makeId = () => Math.random().toString(36).substr(2, 9);

const bootHistory: TerminalLine[] = BOOT_LINES.map(l => ({
  id: makeId(),
  type: l.type,
  content: l.content,
}));

export const useTerminal = () => {
  const [history, setHistory] = useState<TerminalLine[]>(bootHistory);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [terminalTheme, setTerminalTheme] = useState<TerminalTheme>("emerald");
  const bootCompletedRef = useRef(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  // Called by Typewriter onComplete for each line. When all boot lines finish, reveal prompt.
  const onLineComplete = useCallback(() => {
    bootCompletedRef.current += 1;
    if (bootCompletedRef.current >= BOOT_LINES.length) {
      setIsBooting(false);
    }
  }, []);

  // Push lines directly to history — called from event handlers, never from effects
  const pushLines = useCallback((lines: QueueItem[]) => {
    const entries: TerminalLine[] = lines.map(l => ({
      id:      makeId(),
      type:    l.type,
      content: l.content,
      label:   l.label,
    }));
    setHistory(prev => {
      const next = [...prev, ...entries];
      // Scroll after paint
      requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      });
      return next;
    });
  }, []);

  const handleCommand = useCallback((cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    const [baseCmd, ...args] = cleanCmd.split(" ");

    // Echo the user's input
    pushLines([{ type: "input", content: cmd, label: "visitor@harsh-portfolio:~$" }]);

    if (!cleanCmd) return;

    setCommandHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    switch (baseCmd) {
      case "help":
        pushLines([
          { type: "system",  content: "Accessing help protocols..." },
          { type: "output",  content: "about        skills        projects" },
          { type: "output",  content: "open [id]    services      experience" },
          { type: "output",  content: "status       resume        github" },
          { type: "output",  content: "contact      pricing       theme" },
          { type: "output",  content: "whoami       date          clear" },
          { type: "output",  content: "echo" },
          { type: "system",  content: "Tip: Use 'open [id]' to view project details." },
        ]);
        break;
      case "about":
        pushLines([{ type: "output", content: "Full Stack Engineer specialized in high-performance SaaS architectures and revenue-driven frontend engineering." }]);
        break;
      case "skills":
        pushLines([
          { type: "output", content: "Frontend: React, Next.js, TypeScript, TailwindCSS, Framer Motion." },
          { type: "output", content: "Backend: Node.js, Fastify, MongoDB, PostgreSQL, Express." },
        ]);
        break;
      case "projects": {
        const projectLines: QueueItem[] = PROJECTS.map((p, i) => ({
          type: "output",
          content: `[${i + 1}] ${p.title.padEnd(25)} — ${p.category}`,
        }));
        pushLines([
          { type: "system", content: "Fetching project database..." },
          ...projectLines,
          { type: "system", content: "Type 'open [id]' for a visual breakdown." },
        ]);
        break;
      }
      case "open": {
        const id = parseInt(args[0]);
        if (id > 0 && id <= PROJECTS.length) {
          setActiveProject(PROJECTS[id - 1]);
          pushLines([{ type: "success", content: `Opening ${PROJECTS[id - 1].title}...` }]);
        } else {
          pushLines([{ type: "error", content: "Invalid Project ID. Try 'open 1'." }]);
        }
        break;
      }
      case "status":
        pushLines([
          { type: "output", content: "Availability: Open for projects" },
          { type: "output", content: "Response: < 4 hours" },
        ]);
        break;
      case "whoami":
        pushLines([{ type: "output", content: "Harsh Vaddoriya — Architect of Modern Web Products." }]);
        break;
      case "github":
        pushLines([{ type: "success", content: "Opening GitHub profile..." }]);
        window.open("https://github.com/harshvaddoriya", "_blank");
        break;
      case "contact":
        pushLines([
          { type: "output", content: "Email: harshvaddoriya0319@gmail.com" },
          { type: "output", content: "LinkedIn: harsh-vaddoriya" },
        ]);
        break;
      case "resume":
        pushLines([{ type: "success", content: "Preparing CV for download..." }]);
        window.open("/resume.pdf", "_blank");
        break;
      case "theme": {
        const themes: TerminalTheme[] = ["emerald", "cyan", "amber", "rose"];
        const nextTheme = themes[(themes.indexOf(terminalTheme) + 1) % themes.length];
        setTerminalTheme(nextTheme);
        pushLines([{ type: "success", content: `Terminal accent updated to ${nextTheme}.` }]);
        break;
      }
      case "date":
        pushLines([{ type: "output", content: new Date().toLocaleString() }]);
        break;
      case "echo":
        pushLines([{ type: "output", content: args.join(" ") || " " }]);
        break;
      case "clear":
        setHistory([]);
        break;
      default:
        pushLines([{ type: "error", content: `Command not found: ${baseCmd}` }]);
    }
  }, [pushLines, terminalTheme]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const currentInput = input;
      setInput("");
      handleCommand(currentInput);
    } else if (e.key === "ArrowUp" && historyIndex < commandHistory.length - 1) {
      const next = historyIndex + 1;
      setHistoryIndex(next);
      setInput(commandHistory[next]);
    } else if (e.key === "ArrowDown" && historyIndex >= 0) {
      const next = historyIndex - 1;
      setHistoryIndex(next);
      setInput(next >= 0 ? commandHistory[next] : "");
    }
  };

  return {
    history,
    input,
    setInput,
    isBooting,
    isProcessing: false, // kept for API compat — no longer needed
    terminalTheme,
    activeProject,
    setActiveProject,
    scrollRef,
    inputRef,
    handleCommand,
    handleKeyDown,
    onLineComplete,
    setHistory,
  };
};
