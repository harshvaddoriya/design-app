export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ai-media-platform",
    category: "AI AUTOMATION",
    title: "AI Media Platform",
    description: "End-to-end agentic AI platform automating image, video & document generation with async workflows and real-time WebSockets",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["Next.js", "Python", "OpenAI", "WebSockets"],
    metrics: [
      { value: "94%", label: "AUTOMATION RATE" },
      { value: "3x", label: "FASTER DELIVERY" },
      { value: "50+", label: "CONCURRENT JOBS" },
    ]
  },
  {
    slug: "autogenix-website-ai",
    category: "FULL STACK AI",
    title: "AutoGenix Website AI",
    description: "Agentic AI Website Generator",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["React", "AI", "Vercel", "Tailwind"],
    metrics: [
      { value: "92%", label: "CODE ACCURACY" },
      { value: "<2min", label: "DEPLOY TIME" },
      { value: "100%", label: "ZERO MANUAL" },
    ]
  },
  {
    slug: "ai-video-cloning",
    category: "AI MEDIA",
    title: "AI Video Cloning",
    description: "Autonomous Video & Script Engine",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["PyTorch", "FFmpeg", "AWS", "FastAPI"],
    metrics: [
      { value: "89%", label: "SCENE ACCURACY" },
      { value: "5x", label: "PRODUCTION SPEED" },
    ]
  },
  {
    slug: "comfyui-face-blend",
    category: "AI WORKFLOW",
    title: "ComfyUI Face-Blend",
    description: "Photorealistic Baby Generator",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["ComfyUI", "Stable Diffusion", "SDXL", "LoRA"],
    metrics: [
      { value: "97%", label: "IDENTITY MATCH" },
      { value: "95%", label: "REALISM SCORE" },
    ]
  },
  {
    slug: "pinterest-blog-ai",
    category: "AI CONTENT",
    title: "Pinterest Blog AI",
    description: "Content & Visual Automation",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["Pinterest API", "GPT-4", "DALL-E", "Automation"],
    metrics: [
      { value: "10x", label: "CONTENT OUTPUT" },
      { value: "93%", label: "STYLE MATCH" },
    ]
  },
  {
    slug: "comic-book-generator",
    category: "AI APPLICATION",
    title: "Comic Book Generator",
    description: "Personalized Story Flipbook",
    image: "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?q=80&w=2000&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    tags: ["Canvas API", "Stable Diffusion", "Storytelling", "React"],
    metrics: [
      { value: "96%", label: "FACE CONSISTENCY" },
      { value: "98%", label: "STORY COHERENCE" },
    ]
  }
];
