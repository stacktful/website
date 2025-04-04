import { AiOutlineCode } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import { TbCloudComputing } from "react-icons/tb";

export const services = [
  {
    icon: <IoCodeSlash />,
    title: "Web Development",
    description:
      "I build responsive user interfaces using the latest technologies and best practices.",
    techStack: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: <AiOutlineCode />,
    title: "Software Engineering",
    description: "I build Python-based API's using the latest technologies and best practices.",
    techStack: ["Python", "Flask", "FastAPI", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    icon: <GoGitCompare />,
    title: "DevOps",
    description: "I build web applications using the latest technologies and best practices.",
    techStack: ["Terraform", "GitHub Actions", "Docker"],
  },
  {
    icon: <TbCloudComputing />,
    title: "Cloud Infrastructure",
    description: "I build web applications using the latest technologies and best practices.",
    techStack: ["AWS", "Google Cloud", "Azure"],
  },
];

export default services;
