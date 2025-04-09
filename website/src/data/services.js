import { AiOutlineCode } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import { TbCloudComputing } from "react-icons/tb";

export const services = [
  {
    icon: <AiOutlineCode />,
    title: "Software Engineering",
    description:
      "Specialized in Python-based backend development, including REST APIs and microservices.",
    // techStack: ["Flask", "FastAPI", "Django"],
  },
  {
    icon: <TbCloudComputing />,
    title: "Cloud Infrastructure",
    description:
      "Experience in cloud infrastructure and deployment of applications on AWS, GCP and Azure.",
    // techStack: ["AWS", "Google Cloud", "Azure"],
  },
  {
    icon: <GoGitCompare />,
    title: "DevOps",
    description:
      "Creating CI/CD pipelines and automating deployment processes for efficient software delivery.",
    // techStack: ["Terraform", "GitHub Actions", "Docker"],
  },
  {
    icon: <IoCodeSlash />,
    title: "Web Development",
    description: "Building responsive and user-friendly web applications prototypes and or MVPs.",
    // techStack: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
];

export default services;
