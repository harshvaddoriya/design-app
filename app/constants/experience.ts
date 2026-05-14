import { type IconType } from "react-icons";
import { FiBookOpen, FiCode, FiLayers } from "react-icons/fi";

export type Experience = {
  company: string;
  location: string;
  companyType: string;
  period: string;
  role: string;
  headline: string;
  description: string;
  projects: string;
  impact: string;
  workflowTitle: string;
  workflowDescription: string;
  stack: string[];
  icon: IconType;
  accent: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "P.P. Savani University",
    location: "Surat",
    companyType: "Academic internship",
    period: "6 months",
    role: "Teaching Intern",
    headline: "Teaching practical web fundamentals to students.",
    description:
      "Worked closely with students during practical lab sessions, teaching Java and PHP fundamentals while helping them understand core web development concepts through hands-on learning and technical guidance.",
    projects: "6 months",
    impact: "Teaching internship",
    workflowTitle: "Lab teaching support",
    workflowDescription:
      "Conducted practical sessions, guided students through coding exercises, solved technical doubts, and helped simplify programming and web development concepts during lab work.",
    stack: ["Java", "PHP", "Web Development", "Practical Labs", "Student Support"],
    icon: FiBookOpen,
    accent: "#f59e0b",
  },
  {
    company: "Niqox",
    location: "Surat",
    companyType: "Client-based company",
    period:"Dec 2024 - Dec 2025",
    role: "Frontend Engineer Internship -> Frontend Developer",
    headline: "Frontend delivery across client-based projects.",
    description:
      "Started with a 4-month internship and grew into a frontend developer role, building responsive screens, reusable UI patterns, and production interfaces for client projects.",
    projects: "5+",
    impact: "Live projects shipped",
    workflowTitle: "Client delivery workflow",
    workflowDescription:
      "Worked on responsive UI development, API integration collaboration, component optimization, bug fixing, and fast-paced client delivery workflows across multiple projects.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "MicroFrontend Architecture"],
    icon: FiCode,
    accent: "#10b981",
  },
  {
    company: "Nextbase Solutions",
    location: "Surat",
    companyType: "Product-based company",
    period: "Jan 2026 - Present",
    role: "Full Stack Developer",
    headline: "Full stack ownership inside product development.",
    description:
      "Working inside a product-based environment across UI, API integration, backend flow, and product logic to deliver complete features that feel polished and reliable.",
    projects: "8+",
    impact: "Live projects contributed",
    workflowTitle: "Product delivery workflow",
    workflowDescription:
      "Feature implementation, API integration, product QA, and quick iteration across product-based company work.",
    stack: ["Next.js", "React", "Node.js", "APIs", "Database Flow", "GA4", "Open Claw","Agentic Flow"],
    icon: FiLayers,
    accent: "#06b6d4",
  },
];
