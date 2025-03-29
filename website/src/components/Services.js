import { AiOutlineCode } from "react-icons/ai";
import { IoCodeSlash } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";

import Section from "./layout/Section";

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

function Service({ icon, title, description, techStack }) {
  return (
    <div className="tile">
      <h3 className="service-header">
        <div className="service-icon">{icon}</div>
        {title}
      </h3>
      <p className="service-description">{description}</p>
      <div className="tech-stack-container">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-stack-item">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <Section title="Services">
      <div
        className={`tiles-grid ${services.length === 3 ? "three-tiles" : ""}`}
      >
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}

export default Services;
