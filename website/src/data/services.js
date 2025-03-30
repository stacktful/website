import { AiOutlineCode } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";

export const services = [
  {
    icon: <IoCodeSlash />,
    title: "Frontend Development",
    description:
      "I build responsive user interfaces using the latest technologies and best practices.",
    techStack: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: <AiOutlineCode />,
    title: "Backend Development",
    description:
      "I build web applications using the latest technologies and best practices.",
    techStack: [
      "Python",
      "Flask",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    icon: <GoGitCompare />,
    title: "DevOps",
    description:
      "I build web applications using the latest technologies and best practices.",
    techStack: [
      "Bash",
      "Git",
      "GitHub Actions",
      "Docker",
      "Terraform",
      "GCP",
      "Azure",
      "AWS",
    ],
  },
];

export default services;
