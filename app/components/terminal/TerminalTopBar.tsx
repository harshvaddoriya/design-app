"use client";

import React from "react";
import { Terminal, Maximize2, RotateCcw, Cpu, Activity } from "lucide-react";

interface TerminalTopBarProps {
  onReset: () => void;
}

const TerminalTopBar: React.FC<TerminalTopBarProps> = ({ onReset }) => {
  return (
    <div className="h-12 bg-zinc-100/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-white/5 flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5" />
          <span>harsh@portfolio:~</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
           <div className="flex items-center gap-1.5"><Cpu className="w-3 h-3" /> HarshOS v2</div>
           <div className="flex items-center gap-1.5"><Activity className="w-3 h-3" /> Stable</div>
        </div>
        <RotateCcw 
          className="w-3.5 h-3.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors" 
          onClick={onReset} 
        />
        <Maximize2 className="w-3.5 h-3.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors" />
      </div>
    </div>
  );
};

export default TerminalTopBar;
