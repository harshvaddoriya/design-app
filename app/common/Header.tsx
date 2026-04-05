"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 ${
                scrolled 
                ? "py-3 bg-white/70 backdrop-blur-xl border-b border-blue-100" 
                : "py-6 bg-gradient-to-b from-blue-100/50 to-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">D</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700">
                        DesignApp
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Features", "Designers", "Pricing", "About"].map((item) => (
                        <Link 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-semibold text-zinc-700 hover:text-purple-600 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors cursor-pointer">
                        Sign In
                    </button>
                    <button className="px-5 py-2.5 rounded-full bg-zinc-950 text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-900/10 cursor-pointer">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
