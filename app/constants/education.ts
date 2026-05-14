export type EducationSlide = {
  credential: string;
  institution: string;
  stream: string;
  location: string;
  period: string;
  summary: string;
  metrics: {
    value: string;
    label: string;
  }[];
};

export const EDUCATION_SLIDES: EducationSlide[] = [
  {
    credential: "Bachelor of Technology in Information Technology",
    institution: "P P Savani University",
    stream: "Information Technology",
    location: "Surat, Gujarat",
    period: "2021 - 2025",
    summary:
      "Built a strong base in software engineering, web technologies, programming fundamentals, and practical product development.",
    metrics: [
      { value: "B.Tech", label: "Information Technology" },
      { value: "2021", label: "Started university" },
      { value: "2025", label: "Graduated" },
    ],
  },
  {
    credential: "GSEB (HSC Board)",
    institution: "J. B. & Karp Vidhya Sankul",
    stream: "HSC Board",
    location: "Surat, Gujarat",
    period: "2019 - 2021",
    summary:
      "Completed higher secondary education with a focus on the fundamentals that supported the move into engineering and web development.",
    metrics: [
      { value: "HSC", label: "GSEB board" },
      { value: "2019", label: "Started" },
      { value: "2021", label: "Completed" },
    ],
  },
];
