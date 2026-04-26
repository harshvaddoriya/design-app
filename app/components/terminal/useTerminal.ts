import React, { useState, useEffect, useRef, useCallback } from "react";
import { PROJECTS } from "@/app/constants/projects";
import { TerminalLine, LineType, TerminalTheme } from "./types";

export const useTerminal = () => {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
  const [terminalTheme, setTerminalTheme] = useState<TerminalTheme>("emerald");
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Boot sequence
  useEffect(() => {
    const bootLines = [
      { delay: 400, text: "Initializing HarshOS v2.4.0...", type: "system" },
      { delay: 800, text: "Loading developer profile: Harsh Vaddoriya", type: "system" },
      { delay: 1200, text: "Scanning project database [██████████] 100%", type: "success" },
      { delay: 1600, text: "Establishing secure neural uplink...", type: "system" },
      { delay: 2000, text: "System ready. Welcome back, Architect.", type: "success" },
      { delay: 2200, text: "Type 'help' to see available commands.", type: "output" },
    ];

    let currentTimeout: NodeJS.Timeout;
    const runBoot = async () => {
      for (const line of bootLines) {
        await new Promise(resolve => {
          currentTimeout = setTimeout(() => {
            setHistory(prev => [...prev, { 
              id: Math.random().toString(36).substr(2, 9), 
              type: line.type as LineType, 
              content: line.text 
            }]);
            resolve(null);
          }, line.delay);
        });
      }
      setIsBooting(false);
    };
    runBoot();
    return () => clearTimeout(currentTimeout);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const addLine = useCallback((type: LineType, content: string | React.ReactNode, label?: string) => {
    setHistory(prev => [...prev, { 
      id: Math.random().toString(36).substr(2, 9), 
      type, 
      content,
      label
    }]);
  }, []);

  const handleCommand = useCallback(async (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    const [baseCmd, ...args] = cleanCmd.split(" ");
    
    addLine("input", cmd, "visitor@harsh-portfolio:~$");
    
    if (cleanCmd) {
      setCommandHistory(prev => [cmd, ...prev]);
      setHistoryIndex(-1);
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    switch (baseCmd) {
      case "help":
        addLine("output", "Help menu loaded."); // Placeholder or full list
        break;
      case "clear":
        setHistory([]);
        break;
      // ... other commands will be handled in the main component or passed in
      default:
        // Handle in main component
        return { baseCmd, args };
    }
  }, [addLine]);

  return {
    history, setHistory,
    input, setInput,
    isBooting,
    commandHistory,
    historyIndex, setHistoryIndex,
    activeProject, setActiveProject,
    terminalTheme, setTerminalTheme,
    scrollRef,
    inputRef,
    addLine,
    handleCommand
  };
};
