"use client";

import React, { useId } from "react";
import { FiBox, FiSettings } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

type CallToActionSectionProps = {
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  targetId?: string;
};

const CallToActionSection = ({
  title = "Ready to build something sharp?",
  subtitle = "Book a quick call and let us turn your product idea into a clean, scalable web experience.",
  actionLabel = "Book a call",
  targetId = "contact",
}: CallToActionSectionProps) => {
  const gradientId = useId();
  const router = useRouter();
  const pathname = usePathname();

  const handleAction = () => {
    if (pathname === "/") {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/?scroll=${targetId}`);
    }
  };

  const buttonContent = (
    <>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        viewBox="0 0 160 52"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="160" y2="52" gradientUnits="userSpaceOnUse">
            <stop className="[stop-color:rgba(24,24,27,0.18)] dark:[stop-color:rgba(255,255,255,0.28)]" />
            <stop offset="0.5" className="[stop-color:rgba(24,24,27,0.54)] dark:[stop-color:rgba(255,255,255,0.78)]" />
            <stop offset="1" className="[stop-color:rgba(24,24,27,0.18)] dark:[stop-color:rgba(255,255,255,0.28)]" />
          </linearGradient>
        </defs>
        <rect
          className="cta-button-outline"
          x="1"
          y="1"
          width="158"
          height="50"
          rx="25"
          ry="25"
          pathLength="1"
          stroke={`url(#${gradientId})`}
        />
      </svg>
      <span className="relative z-10">{actionLabel}</span>
    </>
  );

  const commonClasses = "cta-button group relative mt-10 cursor-pointer overflow-hidden rounded-full border border-zinc-300 bg-white/70 px-8 py-4 text-sm font-semibold text-zinc-950 shadow-[0_12px_40px_rgba(24,24,27,0.08)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-zinc-400 hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 active:scale-[0.98] dark:border-white/15 dark:bg-white/10 dark:text-white dark:shadow-[0_12px_40px_rgba(255,255,255,0.08)] dark:hover:border-white/25 dark:hover:bg-white/15 dark:focus-visible:ring-white/40";

  return (
    <section className="relative overflow-hidden bg-white px-6 py-0 text-zinc-950 dark:bg-[#09090b] dark:text-white sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/20" />

      <div className="relative mx-auto max-w-[1400px] overflow-hidden border-x border-zinc-200 bg-transparent dark:border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(28deg,transparent_0,transparent_49.65%,rgba(24,24,27,0.08)_50%,transparent_50.35%,transparent_100%),linear-gradient(152deg,transparent_0,transparent_49.65%,rgba(24,24,27,0.065)_50%,transparent_50.35%,transparent_100%)] bg-[size:270px_180px] opacity-60 dark:bg-[linear-gradient(28deg,transparent_0,transparent_49.65%,rgba(255,255,255,0.055)_50%,transparent_50.35%,transparent_100%),linear-gradient(152deg,transparent_0,transparent_49.65%,rgba(255,255,255,0.045)_50%,transparent_50.35%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.08),transparent_38%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_38%)]" />
        </div>

        <div className="pointer-events-none absolute left-0 top-[43%] hidden h-32 w-[32%] md:block">
          <svg className="absolute inset-0 h-full w-full overflow-visible text-zinc-700 dark:text-white" viewBox="0 0 360 128" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 72 C48 96 76 98 112 78 C154 54 188 38 228 20" stroke="currentColor" strokeWidth="1.15" opacity="0.68" vectorEffect="non-scaling-stroke" />
            <path d="M228 20 L228 66" stroke="currentColor" strokeWidth="1.1" opacity="0.42" vectorEffect="non-scaling-stroke" />
            <circle cx="228" cy="66" r="3" fill="currentColor" opacity="0.58" />
          </svg>
          <div className="group/icon pointer-events-auto absolute left-[63.3%] top-[2px] z-20 flex size-9 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-zinc-400/70 bg-white/80 backdrop-blur-sm transition-colors duration-300 hover:border-emerald-500/70 dark:border-white/35 dark:bg-[#111111]/80 dark:hover:border-emerald-400/70">
            <FiSettings className="size-4 text-zinc-700 transition-colors duration-300 group-hover/icon:text-emerald-500 dark:text-white/65 dark:group-hover/icon:text-emerald-400" />
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-[57%] hidden h-28 w-[31%] md:block">
          <svg className="absolute inset-0 h-full w-full overflow-visible text-zinc-700 dark:text-white" viewBox="0 0 360 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <path d="M360 18 L218 78 C180 106 155 104 120 80 L64 38" stroke="currentColor" strokeWidth="1.2" opacity="0.66" vectorEffect="non-scaling-stroke" />
            <path d="M64 38 L64 70" stroke="currentColor" strokeWidth="1.1" opacity="0.4" vectorEffect="non-scaling-stroke" />
            <circle cx="64" cy="70" r="3" fill="currentColor" opacity="0.56" />
          </svg>
          <div className="group/icon pointer-events-auto absolute left-[18%] top-0 z-20 flex size-9 -translate-x-1/2 cursor-pointer items-center justify-center border border-zinc-400/70 bg-white/70 transition-colors duration-300 hover:border-emerald-500/70 dark:border-white/35 dark:bg-transparent dark:hover:border-emerald-400/70">
            <FiBox className="size-4 text-zinc-700 transition-colors duration-300 group-hover/icon:text-emerald-500 dark:text-white/65 dark:group-hover/icon:text-emerald-400" />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[330px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[410px] lg:min-h-[455px]">
          <h2 className="max-w-3xl bg-gradient-to-b from-zinc-900 to-zinc-400 bg-clip-text text-[clamp(2.25rem,4vw,3.9rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-transparent dark:from-zinc-100 dark:to-zinc-500">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-base font-semibold leading-7 text-zinc-500 dark:text-white/40 sm:text-lg">
            {subtitle}
          </p>

          {pathname === "/" ? (
            <button
              type="button"
              onClick={handleAction}
              className={commonClasses}
            >
              {buttonContent}
            </button>
          ) : (
            <Link
              href={`/?scroll=${targetId}`}
              className={commonClasses}
            >
              {buttonContent}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
