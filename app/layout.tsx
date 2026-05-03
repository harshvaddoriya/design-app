import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/app/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Vaddoriya — Frontend Engineer",
  description:
    "Portfolio of Harsh Vaddoriya, a Frontend Engineer specialising in React, Next.js, TypeScript, and excellent UI experiences.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Harsh Vaddoriya" }],
  creator: "Harsh Vaddoriya",
  openGraph: {
    title: "Harsh Vaddoriya — Frontend Engineer",
    description: "Crafting fast, accessible, and beautiful web experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Vaddoriya — Frontend Engineer",
    description: "Crafting fast, accessible, and beautiful web experiences.",
  },
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
          <Toaster 
            position="top-center"
            toastOptions={{
              style: {
                background: "#18181b",
                color: "#fff",
                border: "1px solid #27272a",
                fontSize: "13px",
                fontWeight: "500",
                borderRadius: "12px",
                padding: "12px 16px",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
