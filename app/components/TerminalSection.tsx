"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminal } from "@/app/hooks/useTerminal";
import TerminalTopBar from "./terminal/TerminalTopBar";
import QuickCommands from "./terminal/QuickCommands";
import ProjectModal from "./terminal/ProjectModal";
import Typewriter from "./terminal/Typewriter";

const TerminalSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    history,
    input,
    setInput,
    isBooting,
    terminalTheme,
    activeProject,
    setActiveProject,
    scrollRef,
    inputRef,
    handleCommand,
    handleKeyDown,
    onLineComplete,
    setHistory
  } = useTerminal();

  return (
    <section
      ref={containerRef}
      className="w-full bg-white dark:bg-zinc-950 pt-32 border-t border-zinc-200 dark:border-white/[0.05] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: terminalTheme === 'emerald' ? '#10b981' :
                    terminalTheme === 'cyan' ? '#06b6d4' :
                      terminalTheme === 'amber' ? '#f59e0b' : '#f43f5e',
                  boxShadow: `0 0 10px ${terminalTheme === 'emerald' ? '#10b981' :
                    terminalTheme === 'cyan' ? '#06b6d4' :
                      terminalTheme === 'amber' ? '#f59e0b' : '#f43f5e'}80`
                }}
              />
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{
                  color: terminalTheme === 'emerald' ? '#059669' :
                    terminalTheme === 'cyan' ? '#0891b2' :
                      terminalTheme === 'amber' ? '#d97706' : '#e11d48'
                }}
              >Interactive Shell</span>
            </div>
            <h2 className="text-4xl sm:text-4xl font-black tracking-tighter flex flex-wrap gap-x-3">
              <span className="inline-block bg-gradient-to-b from-zinc-900 to-zinc-400 dark:from-zinc-100 dark:to-zinc-500 text-transparent bg-clip-text">Terminal</span>
            </h2>
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
                {history.map((line, idx) => (
                  <div key={line.id}>
                    {line.label && (
                      <span
                        className="font-bold mr-3"
                        style={{
                          color: terminalTheme === 'emerald' ? '#10b981' :
                            terminalTheme === 'cyan' ? '#06b6d4' :
                              terminalTheme === 'amber' ? '#f59e0b' : '#f43f5e'
                        }}
                      >
                        {line.label}
                      </span>
                    )}
                    <span className={line.type === "error" ? "text-rose-500" : line.type === "system" ? "text-zinc-500" : line.type === "success" ? "text-emerald-500" : "text-zinc-300"}>
                      {typeof line.content === "string" && line.type !== "input" && idx < 6 ? (
                        <Typewriter
                          text={line.content}
                          speed={line.type === "system" ? 20 : 35}
                          delay={idx * 400}
                          onComplete={onLineComplete}
                        />
                      ) : (
                        line.content
                      )}
                    </span>
                  </div>
                ))}

                {!isBooting && (
                  <div className="flex items-center">
                    <span
                      className="font-bold mr-3"
                      style={{
                        color: terminalTheme === 'emerald' ? '#10b981' :
                          terminalTheme === 'cyan' ? '#06b6d4' :
                            terminalTheme === 'amber' ? '#f59e0b' : '#f43f5e'
                      }}
                    >
                      visitor@harsh-portfolio:~$
                    </span>
                    <div className="relative flex-1 flex items-center">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="absolute inset-0 w-full bg-transparent border-none outline-none text-transparent font-mono caret-transparent z-10"
                        spellCheck={false}
                      />
                      <div className="flex items-center text-zinc-300 font-mono whitespace-pre">
                        <span>{input}</span>
                        <div
                          className="w-2 h-4 ml-0.5 animate-pulse"
                          style={{
                            backgroundColor: terminalTheme === 'emerald' ? '#10b981' :
                              terminalTheme === 'cyan' ? '#06b6d4' :
                                terminalTheme === 'amber' ? '#f59e0b' : '#f43f5e',
                            animationDuration: '0.8s',
                            animationTimingFunction: 'steps(2, start)'
                          }}
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
