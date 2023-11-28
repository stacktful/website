import { AiOutlineCode } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";

// list of services (title, description and tech-stack)
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
    title: "Backend Engineering",
    description:
      "I build web applications using the latest technologies and best practices.",
    techStack: ["Python", "JavaScript", "Flask", "SQL"],
  },
  {
    icon: <GoGitCompare />,
    title: "DevOps",
    description:
      "I build web applications using the latest technologies and best practices.",
    techStack: ["Bash", "Git", "GitHub Actions", "Docker", "Terraform", "GCP"],
  },
];
