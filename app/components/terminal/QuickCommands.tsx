"use client";

import React from "react";

interface QuickCommandsProps {
  onCommand: (cmd: string) => void;
}

const QuickCommands: React.FC<QuickCommandsProps> = ({ onCommand }) => {
  const commands = ["help", "about", "projects", "status", "contact"];
  
  return (
    <div className="px-8 py-4 bg-zinc-100/30 dark:bg-zinc-950/40 border-t border-zinc-200 dark:border-white/5 flex flex-wrap items-center gap-4 overflow-hidden">
       <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mr-2">Quick Commands:</span>
       {commands.map(btn => (
         <button 
          key={btn}
          onClick={() => onCommand(btn)}
          className="text-[10px] font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white uppercase tracking-widest px-3 py-1 bg-zinc-200/50 dark:bg-white/5 rounded border border-transparent hover:border-zinc-300 dark:hover:border-white/10 transition-all"
         >
           {btn}
         </button>
       ))}
    </div>
  );
};

export default QuickCommands;
