"use client";

import React, { useMemo } from "react";
import { useAtomValue } from "jotai";
import { debouncedSearchQueryAtom } from "@/app/atoms/search";
import { SHOWCASE_ITEMS } from "@/app/constants/showcase";
import { ShowcaseItem } from "@/app/types";
import Icon from "@/app/components/icons/Icon";
import { FiChevronRight } from "react-icons/fi";

const ShowcaseList: React.FC = () => {
  const query = useAtomValue(debouncedSearchQueryAtom);

  const filtered: ShowcaseItem[] = useMemo(() => {
    if (!query.trim()) return SHOWCASE_ITEMS;
    const q = query.toLowerCase().trim();
    return SHOWCASE_ITEMS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [query]);

  const handleItemClick = (item: ShowcaseItem) => {
    if (item.id === "copy-link") {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
      return;
    }
    if (item.id === "download-cv") {
      window.location.assign(item.href);
      return;
    }
    if (item.href.startsWith("http")) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else if (item.href !== "#") {
      window.location.assign(item.href);
    }
  };

  return (
    <div
      className="
        w-full max-w-[480px] mx-auto
        bg-white/80 dark:bg-[#202020] backdrop-blur-2xl
        border border-zinc-200 dark:border-white/10
        rounded-2xl overflow-hidden
        shadow-[0_24px_64px_rgba(0,0,0,0.35)]
      "
      role="listbox"
      aria-label="Showcase actions"
    >
      {filtered.length === 0 ? (
        <div className="px-5 py-8 text-center">
          <p className="text-sm text-zinc-500 dark:text-white/40 font-medium">No results for &ldquo;{query}&rdquo;</p>
        </div>
      ) : (
        <ul className="divide-y divide-zinc-100 dark:divide-white/5">
          {filtered.map((item, idx) => (
            <li key={item.id}>
              <button
                role="option"
                aria-selected={false}
                onClick={() => handleItemClick(item)}
                className="
                  w-full flex items-center gap-4
                  px-5 py-3.5
                  text-left
                  hover:bg-zinc-50 dark:hover:bg-white/5
                  active:bg-zinc-100 dark:active:bg-white/10
                  transition-all duration-150
                  group cursor-pointer
                "
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                {/* Icon container */}
                <span
                  className="
                    w-8 h-8 flex-shrink-0
                    flex items-center justify-center
                    rounded-lg
                    bg-zinc-100 dark:bg-white/10 group-hover:bg-zinc-200 dark:group-hover:bg-white/20
                    text-zinc-600 dark:text-white/60 group-hover:text-zinc-900 dark:group-hover:text-white
                    transition-all duration-200
                  "
                >
                  <Icon name={item.icon} className="w-4 h-4" />
                </span>

                {/* Label */}
                <span className="flex-1 text-sm font-medium text-zinc-700 dark:text-white/80 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200">
                  {item.label}
                </span>

                {/* Chevron */}
                <FiChevronRight className="w-4 h-4 text-zinc-400 dark:text-white/25 group-hover:text-zinc-600 dark:group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-200" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowcaseList;
