"use client";

import React from "react";
import { ShowcaseIcon } from "@/app/types";
import { FiLink, FiDownload, FiBriefcase, FiGithub, FiCalendar } from "react-icons/fi";

interface IconProps {
  name: ShowcaseIcon;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = "w-5 h-5" }) => {
  const icons: Record<ShowcaseIcon, React.ReactNode> = {
    link: <FiLink className={className} />,
    download: <FiDownload className={className} />,
    briefcase: <FiBriefcase className={className} />,
    github: <FiGithub className={className} />,
    calendar: <FiCalendar className={className} />,
  };

  return <>{icons[name]}</>;
};

export default Icon;
