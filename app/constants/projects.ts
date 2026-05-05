import { Project } from "@/app/types";

export const PROJECTS: Project[] = [
  {
    slug: "gradex-results",
    category: "Public Application",
    title: "Gradex Results",
    description: "A Modern Desktop App that is built with Mext JS and TailwindCSS. It is a responsive desktop app with a modern and clean design.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Node JS"],
    metrics: [
      { value: "95+", label: "LIGHTHOUSE SCORE" },
      { value: "100%", label: "CORE WEB VITALS" },
      { value: "24/7", label: "PRODUCTION READY" },
    ]
  },
  {
    slug: "coffee-site",
    category: "Modern Coffee Website",
    title: "Coffee Website",
    description: "A Modern Coffee Website that is built with React and TailwindCSS. It is a responsive coffee website with a modern and clean design.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["React", "EJS", "Vercel", "Tailwind"],
    metrics: [
      { value: "100%", label: "UX FOCUSED" },
      { value: "AA+", label: "ACCESSIBILITY" },
      { value: "REST", label: "API ARCHITECTURE" },
    ]
  },
  {
    slug: "ai-desktop-app",
    category: "OpenSource Desktop App",
    title: "Desktop App",
    description: "A Modern Desktop App that is built with React and TailwindCSS. It is a responsive desktop app with a modern and clean design.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["Next.js", "Python", "OpenAI", "WebSockets", "Tauri", "SQLite"],
    metrics: [
      { value: "100%", label: "CORE WEB VITALS" },
      { value: "24/7", label: "PRODUCTION READY" },
    ]
  },
  {
    slug: "meeting-management-tool",
    category: "AI CONTENT",
    title: "Meeting Management Tool",
    description: "Content & Visual Automation",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["Streamlit", "python", "Huggings Face", "LLMs"],
    metrics: [
      { value: "24/7", label: "PRODUCTION READY" },
      { value: "REST/QL", label: "STATE MANAGEMENT" },
    ]
  },
  {
    slug: "social-media-downloader",
    category: "SOCIAL MEDIA APPLICATION",
    title: "Social Media Downloader",
    description: "Social Media iamge,video,Reels,Story,IG,Posts Downloader",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["Next.js", "Nodejs", "MicroFronted Architrecture"],
    metrics: [
      { value: "100%", label: "CORE WEB VITALS" },
      { value: "AA+", label: "INCLUSIVE DESIGN" },
    ]
  },
  {
    slug: "pinterest-clone",
    category: "Social Media App",
    title: "Pinterest Clone",
    description: "A Modern Social Media App that is built with React and TailwindCSS. It is a responsive social media app with a modern and clean design.",
    image: "https://images.unsplash.com/photo-1636044594149-6e2f289c3868?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["React", "Next.js", "TailwindCSS", "FireStore", "Unsplace media API", "React-icons"],
    metrics: [
      { value: "95+", label: "PERFORMANCE SCORE" },
      { value: "Smooth", label: "INTERACTIONS" },
    ]
  }
];
