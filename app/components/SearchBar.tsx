"use client";

import React, { useCallback, useRef, useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";
import { searchQueryAtom, debouncedSearchQueryAtom, isSearchFocusedAtom } from "@/app/atoms/search";
import { useDebounce } from "@/app/hooks/useDebounce";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useAtom(searchQueryAtom);
  const setDebouncedQuery = useSetAtom(debouncedSearchQueryAtom);
  const setFocused = useSetAtom(isSearchFocusedAtom);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query, 280);

  // Sync debounced value into atom
  useEffect(() => {
    setDebouncedQuery(debouncedQuery);
  }, [debouncedQuery, setDebouncedQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setFocused(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setFocused]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  const handleClear = useCallback(() => {
    setQuery("");
    inputRef.current?.focus();
  }, [setQuery]);

  return (
    <div className="relative w-full max-w-[480px] mx-auto group">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-2xl bg-white/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div
        className="
          relative flex items-center gap-3
          bg-white/80 dark:bg-[#202020] backdrop-blur-2xl
          border border-zinc-200 dark:border-white/10
          rounded-2xl px-4 py-3.5
          shadow-[0_8px_32px_rgba(0,0,0,0.18)]
          transition-all duration-300
          group-focus-within:border-zinc-300 dark:group-focus-within:border-white/30
          group-focus-within:shadow-[0_8px_48px_rgba(0,0,0,0.28)]
        "
      >
        {/* Search Icon */}
        <FiSearch className="w-4 h-4 text-zinc-500 dark:text-white/50 flex-shrink-0 transition-colors duration-200 group-focus-within:text-zinc-700 dark:group-focus-within:text-white/80" />

        {/* Input */}
        <input
          ref={inputRef}
          id="showcase-search"
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          placeholder="Browse my digital workspace..."
          autoComplete="off"
          aria-label="Search showcase"
          className="
            flex-1 bg-transparent outline-none border-none
            text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-white/40
            font-medium tracking-wide
          "
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={handleClear}
            aria-label="Clear search"
            className="
              flex-shrink-0 w-5 h-5
              flex items-center justify-center
              rounded-full bg-zinc-200 dark:bg-white/20
              hover:bg-zinc-300 dark:hover:bg-white/30
              text-zinc-500 hover:text-zinc-700 dark:text-white/70 dark:hover:text-white
              transition-all duration-200
              cursor-pointer text-xs font-bold
            "
          >
            <FiX className="w-3 h-3" />
          </button>
        )}

        {/* Shortcut Indicator */}
        {!query && (
          <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-[10px] text-zinc-400 dark:text-white/40 font-mono font-medium select-none pointer-events-none">
            <span>⌘</span>
            <span>K</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
