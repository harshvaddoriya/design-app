"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PROJECTS } from "@/app/constants/projects";
import { TerminalLine, LineType, TerminalTheme } from "./terminal/types";
import TerminalTopBar from "./terminal/TerminalTopBar";
import QuickCommands from "./terminal/QuickCommands";
import ProjectModal from "./terminal/ProjectModal";
import Typewriter from "./terminal/Typewriter";

const TerminalSection = () => {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [isBooting, setIsBooting] = useState(false);
  const hasStartedBoot = useRef(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
  const [terminalTheme, setTerminalTheme] = useState<TerminalTheme>("emerald");
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Cmd+K Focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [queue, setQueue] = useState<{ type: LineType; content: string | React.ReactNode; delay?: number }[]>([]);

  const addLine = useCallback((type: LineType, content: string | React.ReactNode, label?: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setHistory(prev => [...prev, { id, type, content, label }]);
    return id;
  }, []);

  // Sequential processing logic
  useEffect(() => {
    if (!isProcessing && queue.length > 0) {
      const nextLine = queue[0];
      setTimeout(() => setIsProcessing(true), 0);
      
      const process = async () => {
        if (typeof nextLine.content !== "string") {
          addLine(nextLine.type, nextLine.content);
          await new Promise(resolve => setTimeout(resolve, nextLine.delay || 500));
          setQueue(prev => prev.slice(1));
          setIsProcessing(false);
          setIsBooting(false);
        } else {
          addLine(nextLine.type, nextLine.content);
        }
      };
      
      process();
    }
  }, [queue, isProcessing, addLine]);

  const onLineComplete = useCallback(() => {
    setQueue(prev => prev.slice(1));
    setIsProcessing(false);
    setIsBooting(false);
  }, []);

  const processResponse = useCallback(async (lines: { type: LineType; content: string | React.ReactNode; delay?: number }[]) => {
    setQueue(prev => [...prev, ...lines]);
  }, []);

  // Boot sequence - Triggers only when in view
  useEffect(() => {
    if (isInView && !hasStartedBoot.current) {
      hasStartedBoot.current = true;
      setTimeout(() => setIsBooting(true), 0);
      const bootLines = [
        { text: "Initializing HarshOS v2.4.0...", type: "system" },
        { text: "Loading developer profile: Harsh Vaddoriya", type: "system" },
        { text: "Scanning project database [██████████] 100%", type: "success" },
        { text: "Establishing secure neural uplink...", type: "system" },
        { text: "System ready. Welcome back, Architect.", type: "success" },
        { text: "Type 'help' to see available commands.", type: "output" },
      ];
      
      setTimeout(() => {
        processResponse(bootLines.map(line => ({ type: line.type as LineType, content: line.text })));
      }, 0);
    }
  }, [isInView, processResponse]);

  const handleCommand = useCallback(async (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    const [baseCmd, ...args] = cleanCmd.split(" ");
    
    addLine("input", cmd, "visitor@harsh-portfolio:~$");
    
    if (cleanCmd) {
      setCommandHistory(prev => [cmd, ...prev]);
      setHistoryIndex(-1);
    }

    await new Promise(resolve => setTimeout(resolve, 150));

    switch (baseCmd) {
      case "help":
        await processResponse([
          { type: "system", content: "Accessing help protocols..." },
          { type: "output", content: "about        skills        projects" },
          { type: "output", content: "open [id]    services      experience" },
          { type: "output", content: "status       resume        github" },
          { type: "output", content: "contact      pricing       theme" },
          { type: "output", content: "whoami       date          clear" },
          { type: "output", content: "echo" },
          { type: "system", content: "Tip: Use 'open [id]' to view project details." }
        ]);
        break;
      case "about":
        await processResponse([
          { type: "output", content: "Full Stack Engineer specialized in high-performance SaaS architectures and revenue-driven frontend engineering." }
        ]);
        break;
      case "skills":
        await processResponse([
          { type: "output", content: "Frontend: React, Next.js, TypeScript, TailwindCSS, Framer Motion." },
          { type: "output", content: "Backend: Node.js, Fastify, MongoDB, PostgreSQL, Express." }
        ]);
        break;
      case "projects":
        const projectLines = PROJECTS.map((p, i) => ({
          type: "output" as LineType,
          content: `[${i + 1}] ${p.title.padEnd(25)} — ${p.category}`
        }));
        await processResponse([
          { type: "system", content: "Fetching project database..." },
          ...projectLines,
          { type: "system", content: "Type 'open [id]' for a visual breakdown." }
        ]);
        break;
      case "open":
        const id = parseInt(args[0]);
        if (id > 0 && id <= PROJECTS.length) {
          setActiveProject(PROJECTS[id - 1]);
          await processResponse([{ type: "success", content: `Opening ${PROJECTS[id - 1].title}...` }]);
        } else {
          await processResponse([{ type: "error", content: "Invalid Project ID. Try 'open 1'." }]);
        }
        break;
      case "status":
        await processResponse([
          { type: "output", content: "Availability: Open for projects" },
          { type: "output", content: "Response: < 4 hours" }
        ]);
        break;
      case "whoami":
        await processResponse([{ type: "output", content: "Harsh Vaddoriya — Architect of Modern Web Products." }]);
        break;
      case "github":
        await processResponse([{ type: "success", content: "Opening GitHub profile..." }]);
        window.open("https://github.com/harshvaddoriya", "_blank");
        break;
      case "contact":
        await processResponse([
          { type: "output", content: "Email: harshvaddoriya0319@gmail.com" },
          { type: "output", content: "LinkedIn: harsh-vaddoriya" }
        ]);
        break;
      case "resume":
        await processResponse([{ type: "success", content: "Preparing CV for download..." }]);
        window.open("/resume.pdf", "_blank");
        break;
      case "theme":
        const themes: TerminalTheme[] = ["emerald", "cyan", "amber", "rose"];
        setTerminalTheme(themes[(themes.indexOf(terminalTheme) + 1) % themes.length]);
        await processResponse([{ type: "success", content: "Terminal accent updated." }]);
        break;
      case "date":
        await processResponse([{ type: "output", content: new Date().toLocaleString() }]);
        break;
      case "echo":
        await processResponse([{ type: "output", content: args.join(" ") || " " }]);
        break;
      case "clear":
        setHistory([]);
        break;
      default:
        if (cleanCmd) await processResponse([{ type: "error", content: `Command not found: ${baseCmd}` }]);
    }
  }, [addLine, processResponse, terminalTheme]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
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

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white dark:bg-zinc-950 py-32 border-t border-zinc-200 dark:border-white/[0.05] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full bg-${terminalTheme}-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]`} />
              <span className={`text-[10px] font-bold tracking-[0.2em] text-${terminalTheme}-600 dark:text-${terminalTheme}-400 uppercase`}>Interactive Shell</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white tracking-[6px]">Terminal</h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs font-medium uppercase tracking-widest leading-relaxed">Direct access to my developer profile and expertise.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className={`absolute -inset-4 bg-${terminalTheme}-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`} />

          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-950/80 backdrop-blur-xl shadow-2xl">
            <TerminalTopBar onReset={() => setHistory([])} />

            <div
              ref={scrollRef}
              className="h-[500px] overflow-y-auto p-8 font-mono text-sm leading-relaxed scrollbar-thin scrollbar-thumb-zinc-800 relative"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

              <div className="relative z-20 space-y-2">
                {history.map((line) => (
                  <div key={line.id}>
                    {line.label && <span className={`text-${terminalTheme}-500 font-bold mr-3`}>{line.label}</span>}
                    <span className={line.type === "error" ? "text-rose-500" : line.type === "system" ? "text-zinc-500" : line.type === "success" ? "text-emerald-500" : "text-zinc-300"}>
                      {typeof line.content === "string" && line.type !== "input" ? (
                        <Typewriter 
                          text={line.content} 
                          speed={line.type === "system" ? 25 : 45} 
                          onComplete={onLineComplete}
                        />
                      ) : (
                        line.content
                      )}
                    </span>
                  </div>
                ))}

                {!isBooting && !isProcessing && (
                  <div className="flex items-center">
                    <span className={`text-${terminalTheme}-500 font-bold mr-3`}>visitor@harsh-portfolio:~$</span>
                    <div className="relative flex-1 flex items-center">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        className="absolute inset-0 w-full bg-transparent border-none outline-none text-transparent font-mono caret-transparent z-10"
                        spellCheck={false}
                      />
                      <div className="flex items-center text-zinc-300 font-mono whitespace-pre">
                        <span>{input}</span>
                        <div
                          className={`w-2 h-4 bg-${terminalTheme}-500 ml-0.5 animate-pulse`}
                          style={{ animationDuration: '0.8s', animationTimingFunction: 'steps(2, start)' }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <QuickCommands onCommand={handleCommand} />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default TerminalSection;
