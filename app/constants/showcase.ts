import { ShowcaseItem } from "@/app/types";

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "copy-link",
    label: "Copy link",
    icon: "link",
    href: "#",
    description: "Copy portfolio link to clipboard",
  },
  {
    id: "download-cv",
    label: "Download CV",
    icon: "download",
    href: "https://drive.google.com/uc?export=download&id=1M1WbRwafO4Qvp1LnzpLjDSmx7VfCtnSq",
    description: "Download my resume as PDF",
  },
  {
    id: "know-career",
    label: "Know my career",
    icon: "briefcase",
    href: "#career",
    description: "Explore my professional journey",
  },
  {
    id: "see-github",
    label: "See my github",
    icon: "github",
    href: "https://github.com/harshvaddoriya",
    description: "View my open-source projects",
  },
  {
    id: "book-meeting",
    label: "Book a meeting",
    icon: "calendar",
    href: "#contact",
    description: "Schedule a call with me",
  },
];
