import { AiOutlineCode } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { TbCloudComputing } from "react-icons/tb";

/* What I do: one featured capability (my main focus) and supporting ones.
   `tools` refers to tools in stack.jsx by name, so their icons are defined in one place. */
export const services = [
  {
    icon: <AiOutlineCode />,
    title: "Backend & Data",
    featured: true,
    description:
      "My core: Python-based backend development, including REST APIs, microservices and the databases behind them.",
    tools: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "BigQuery",
      "Snowflake",
      "SQL",
    ],
  },
  {
    icon: <TbCloudComputing />,
    title: "Cloud & DevOps",
    description:
      "Deploying applications on AWS, GCP and Azure, with CI/CD pipelines that automate software delivery.",
    tools: ["AWS", "GCP", "Azure", "Docker", "Terraform"],
  },
  {
    icon: <IoCodeSlash />,
    title: "Web Development",
    description: "Building responsive and user-friendly web applications, prototypes and MVPs.",
    tools: ["React", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
];

/* General tools used across all of the above */
export const everydayTools = [
  "Git",
  "GitHub",
  "GitLab",
  "Bash",
  "Linux",
  "Pytest",
  "Postman",
  "Swagger",
  "Claude Code",
  "ChatGPT",
  "Copilot",
];

export default services;
