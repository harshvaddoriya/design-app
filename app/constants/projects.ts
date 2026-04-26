export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ai-media-platform",
    category: "AI AUTOMATION",
    title: "AI Media Platform",
    description: "End-to-end agentic AI platform automating image, video & document generation with async workflows and real-time WebSockets",
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
    metrics: [
      { value: "96%", label: "FACE CONSISTENCY" },
      { value: "98%", label: "STORY COHERENCE" },
    ]
  }
];
