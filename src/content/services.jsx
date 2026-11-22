import { AiOutlineCode } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { TbCloudComputing } from "react-icons/tb";

/* Services section: what I do, as one featured capability (my main focus) and supporting ones.
   `tools` refers to tools in stack.jsx by name, so their icons are defined in one place.
   Texts are written as { en, nl, fr } (see src/i18n/localize.js). */

const capabilities = [
  {
    icon: <AiOutlineCode />,
    title: { en: "Backend & Data", nl: "Backend & Data", fr: "Backend & Data" },
    featured: true,
    description: {
      en: "My core: Python-based backend development, including REST APIs, microservices and the databases behind them.",
      nl: "Mijn kern: backendontwikkeling in Python, van REST API's en microservices tot de databases erachter.",
      fr: "Mon cœur de métier\u00A0: le développement backend en Python, des API REST et microservices jusqu’aux bases de données qui les alimentent.",
    },
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
    description: {
      en: "Deploying applications on AWS, GCP and Azure, with CI/CD pipelines that automate software delivery.",
      nl: "Applicaties uitrollen op AWS, GCP en Azure, met CI/CD-pipelines die softwarelevering automatiseren.",
      fr: "Déploiement d’applications sur AWS, GCP et Azure, avec des pipelines CI/CD qui automatisent la livraison logicielle.",
    },
    tools: ["AWS", "GCP", "Azure", "Docker", "Terraform"],
  },
  {
    icon: <IoCodeSlash />,
    title: { en: "Web Development", nl: "Webontwikkeling", fr: "Développement web" },
    description: {
      en: "Building responsive and user-friendly web applications, prototypes and MVPs.",
      nl: "Responsieve en gebruiksvriendelijke webapplicaties, prototypes en MVP's bouwen.",
      fr: "Création d’applications web responsives et conviviales, de prototypes et de MVP.",
    },
    tools: ["React", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
];

/* General tools used across all of the above */
const everydayTools = [
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

const services = {
  title: { en: "Services", nl: "Diensten", fr: "Services" },
  coreFocusLabel: { en: "Core focus", nl: "Kernfocus", fr: "Cœur de métier" },
  capabilities: capabilities,
  everydayToolsLabel: { en: "Also day-to-day", nl: "Ook dagelijks", fr: "Au quotidien aussi" },
  everydayTools: everydayTools,
};

export default services;
