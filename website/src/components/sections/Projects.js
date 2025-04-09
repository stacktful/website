import { IoOpenOutline } from "react-icons/io5";

import Section from "../Section";

const Project = ({ title, description, link, image }) => (
  <div className="project-container">
    <h3 className="project-header">
      {title}
      <a className="project-link-icon" href={link} target="_blank" rel="noopener noreferrer">
        <IoOpenOutline />
      </a>
    </h3>
    <div className="project-content">
      <img src={image} className="project-image"></img>
      <p>{description}</p>
    </div>
  </div>
);

function Projects({ projects }) {
  return (
    <Section title={"Projects"}>
      <div className="project-list">
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
