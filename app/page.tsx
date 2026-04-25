import Footer from "@/app/common/Footer";
import HeroSection from "@/app/components/HeroSection";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-x-hidden">
      
      {/* ── Theme Toggle (Top Right) ─────────────────────── */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* ── Main ─────────────────────────────────────────── */}
      <main className="flex-grow">
        {/* Hero / Home Section */}
        <HeroSection />

      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
