"use client";

import React, { useState } from "react";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiPhone, FiCheck, FiAlertCircle } from "react-icons/fi";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Professional Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please write a message");
      return;
    }

    setStatus("submitting");
    const loadId = toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Message sent successfully!", { id: loadId });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.", { id: loadId });
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="w-full bg-white dark:bg-zinc-950 py-15 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch border border-zinc-200 dark:border-white/10">

          {/* Info Panel (Left) */}
          <div className="p-10 bg-zinc-50 dark:bg-white/[0.02] border-r border-zinc-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase">Available for Work</span>
              </div>

              <h2 className="text-4xl sm:text-4xl font-black tracking-tighter mb-6 flex flex-wrap gap-x-3">
                <span className="inline-block bg-gradient-to-b from-zinc-900 to-zinc-400 dark:from-zinc-100 dark:to-zinc-500 text-transparent bg-clip-text">Work</span>
                <span className="inline-block bg-gradient-to-b from-zinc-900 to-zinc-400 dark:from-zinc-100 dark:to-zinc-500 text-transparent bg-clip-text">Inquiries</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-md mb-12">
                I&apos;m currently looking for new opportunities. Whether you have a project in mind or just want to connect, my inbox is always open.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 group-hover:border-zinc-900 dark:group-hover:border-white transition-colors">
                    <FiMail className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Email Me At</span>
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
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Call Me At</span>
                    <a href="tel:+919879838537" className="text-base font-bold text-zinc-900 dark:text-white hover:underline underline-offset-4">
                      +91 98798 38537
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest block mb-6">Connect With Me</span>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/harshvaddoriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-bold text-xs uppercase tracking-widest"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/harsh-vaddoriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-bold text-xs uppercase tracking-widest"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="p-10 bg-zinc-900 dark:bg-zinc-900 flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <FiSend className="w-5 h-5 text-zinc-400" />
              <h2 className="text-2xl font-black tracking-tight text-white">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-8 flex-grow">
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === "submitting"}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-zinc-800 focus:border-white/20 outline-none p-4 text-white placeholder:text-zinc-700 transition-all disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === "submitting"}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-zinc-800 focus:border-white/20 outline-none p-4 text-white placeholder:text-zinc-700 transition-all disabled:opacity-50"
                />
              </div>

              <div className="space-y-2 flex-grow flex flex-col">
                <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Your Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === "submitting"}
                  placeholder="How can I help you?"
                  rows={6}
                  className="w-full flex-grow bg-white/5 border border-zinc-800 focus:border-white/20 outline-none p-4 text-white placeholder:text-zinc-700 transition-all resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full bg-white text-black hover:bg-zinc-200 transition-colors py-5 font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <span className="animate-pulse">Sending...</span>
                ) : status === "success" ? (
                  <>
                    <FiCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-600">Message Sent</span>
                  </>
                ) : status === "error" ? (
                  <>
                    <FiAlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-600">Error Sending</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
