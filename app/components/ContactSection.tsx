import React from "react";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiPhone, FiFileText } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section className="w-full bg-white dark:bg-zinc-950 py-32 border-t border-zinc-200 dark:border-white/[0.05] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch border border-zinc-200 dark:border-white/10">

          {/* Info Panel (Left) */}
          <div className="p-10 bg-zinc-50 dark:bg-white/[0.02] border-r border-zinc-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase">System Online</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6">
                Architect the Future
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-md mb-12">
                Scaling operations requires precision. My communication lines are open for high-impact automation architecture discussions.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 group-hover:border-zinc-900 dark:group-hover:border-white transition-colors">
                    <FiMail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Want to hire me?</span>
                    <a href="mailto:harshvaddoriya0319@gmail.com" className="text-base font-bold text-zinc-900 dark:text-white hover:underline underline-offset-4">
                      harshvaddoriya0319@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 group-hover:border-zinc-900 dark:group-hover:border-white transition-colors">
                    <FiPhone className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Direct Line</span>
                    <a href="tel:+919099645594" className="text-base font-bold text-zinc-900 dark:text-white hover:underline underline-offset-4">
                      +91 90996 45594
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-6">Establish Connection via</span>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/harshvaddoriya" className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-bold text-xs uppercase tracking-widest">
                  <FiGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/harsh-vaddoriya" className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-bold text-xs uppercase tracking-widest">
                  <FiLinkedin /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-bold text-xs uppercase tracking-widest">
                  LeetCode
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-bold text-xs uppercase tracking-widest">
                  <FiFileText /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="p-10 bg-zinc-900 dark:bg-zinc-900 flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <FiSend className="w-5 h-5 text-zinc-400" />
              <h2 className="text-2xl font-black tracking-tight text-white">Transmit Message</h2>
            </div>

            <form className="space-y-8 flex-grow">
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Operator Name</label>
                <input
                  type="text"
                  placeholder="Identify yourself"
                  className="w-full bg-white/5 border border-zinc-800 focus:border-white/20 outline-none p-4 text-white placeholder:text-zinc-700 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Comms Channel (Email)</label>
                <input
                  type="email"
                  placeholder="secure@frequency.com"
                  className="w-full bg-white/5 border border-zinc-800 focus:border-white/20 outline-none p-4 text-white placeholder:text-zinc-700 transition-all"
                />
              </div>

              <div className="space-y-2 flex-grow flex flex-col">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Directive / Inquiry</label>
                <textarea
                  placeholder="Outline your automation requirements..."
                  rows={6}
                  className="w-full flex-grow bg-white/5 border border-zinc-800 focus:border-white/20 outline-none p-4 text-white placeholder:text-zinc-700 transition-all resize-none"
                />
              </div>

              <button className="w-full bg-white text-black hover:bg-zinc-200 transition-colors py-5 font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group">
                <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Execute Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
