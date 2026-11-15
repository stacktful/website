import { GoCopilot } from "react-icons/go";
import { BiLogoMongodb } from "react-icons/bi";
import { RiOpenaiFill } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiPostgresql,
  SiGooglecloud,
  SiPostman,
  SiSwagger,
  SiSqlite,
  SiGooglebigquery,
  SiTerraform,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiPytest,
  SiGnubash,
  SiSnowflake,
  SiLinux,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaReact,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGitlab,
} from "react-icons/fa";

const stack = [
  // Backend
  {
    icon: <FaPython />,
    name: "Python",
  },
  {
    icon: <SiFlask />,
    name: "Flask",
  },
  {
    icon: <SiFastapi />,
    name: "FastAPI",
  },
  {
    icon: <SiDjango />,
    name: "Django",
  },
  {
    icon: <SiPytest />,
    name: "Pytest",
  },
  {
    icon: <SiPostman />,
    name: "Postman",
  },
  {
    icon: <SiSwagger />,
    name: "Swagger",
  },
  // Database
  {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
  },
  {
    icon: <SiSqlite />,
    name: "SQLite",
  },
  {
    icon: <SiGooglebigquery />,
    name: "BigQuery",
  },
  {
    icon: <SiSnowflake />,
    name: "Snowflake",
  },
  {
    icon: <BiLogoMongodb />,
    name: "MongoDB",
  },
  // {
  //   icon: <SiRedis />,
  //   name: "Redis",
  // },
  {
    icon: <BsFiletypeSql />,
    name: "SQL",
  },
  // Frontend
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },
  // Cloud Infrastructure and DevOps
  {
    icon: <SiGooglecloud />,
    name: "GCP",
  },
  {
    icon: <VscAzure />,
    name: "Azure",
  },
  {
    icon: <FaAws />,
    name: "AWS",
  },
  {
    icon: <FaDocker />,
    name: "Docker",
  },
  // {
  //   icon: <SiKubernetes />,
  //   name: "Kubernetes",
  // },
  {
    icon: <SiTerraform />,
    name: "Terraform",
  },
  // {
  //   icon: <SiAnsible />,
  //   name: "Ansible",
  // },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
  {
    icon: <IoLogoGithub />,
    name: "GitHub",
  },
  {
    icon: <FaGitlab />,
    name: "GitLab",
  },
  {
    icon: <SiGnubash />,
    name: "Bash",
  },
  {
    icon: <SiLinux />,
    name: "Linux",
  },

  // Other
  {
    icon: <RiOpenaiFill />,
    name: "ChatGPT",
  },
  {
    icon: <GoCopilot />,
    name: "Copilot",
  },
  // {
  //   icon: <SiJira />,
  //   name: "Jira",
  // },
  // {
  //   icon: <FaConfluence />,
  //   name: "Confluence",
  // },
  // {
  //   icon: <FaSlack />,
  //   name: "Slack",
  // },
  // {
  //   icon: <SiClickup />,
  //   name: "ClickUp",
  // },
  // {
  //   icon: <SiNotion />,
  //   name: "Notion",
  // },
];

export default stack;
