"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-20 pb-10 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center">
                                <span className="text-white font-bold text-sm text-[16px]">D</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                DesignApp
                            </span>
                        </Link>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                            Designing the future of web experiences with AI-powered tools and modern workflows.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors cursor-pointer">
                                    <div className="w-3 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Product</h4>
                        <ul className="flex flex-col gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li><Link href="#features" className="hover:text-purple-600 transition-colors">Features</Link></li>
                            <li><Link href="#designers" className="hover:text-purple-600 transition-colors">Designers</Link></li>
                            <li><Link href="#integrations" className="hover:text-purple-600 transition-colors">Integrations</Link></li>
                            <li><Link href="#enterprise" className="hover:text-purple-600 transition-colors">Enterprise</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Support</h4>
                        <ul className="flex flex-col gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li><Link href="/docs" className="hover:text-purple-600 transition-colors">Documentation</Link></li>
                            <li><Link href="/guides" className="hover:text-purple-600 transition-colors">Guides</Link></li>
                            <li><Link href="/help" className="hover:text-purple-600 transition-colors">Help Center</Link></li>
                            <li><Link href="/community" className="hover:text-purple-600 transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Company</h4>
                        <ul className="flex flex-col gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li><Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-purple-600 transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-purple-600 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        &copy; {new Date().getFullYear()} DesignApp Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-zinc-500 dark:text-zinc-400">
                        <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
