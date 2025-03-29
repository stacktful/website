import { IoOpenOutline } from "react-icons/io5";

import Section from "./layout/Section";

import imgEbitwise from "../static/img/project-ebitwise-1.jpg";
import imgAvonic from "../static/img/project-avonic.png";

const projects = [
  {
    title: <>Dashwise&reg;</>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum, \
    eros nec commodo cursus, nunc elit tincidunt nunc, et tincidunt nunc elit in \
    nulla. Donec euismod, nunc sed ultricies tincidunt, felis nunc tincidunt nisi, \
    et aliquam felis arcu eget mauris. Donec ultricies, lorem eget lacinia aliquet, \
    nisl dui sollicitudin risus, vitae ultricies justo nisl eu nunc. In hac habitasse \
    platea dictumst. In hac habitasse platea dictumst.",
    link: "https://dashwise.io",
    image: imgEbitwise,
  },
  {
    title: <>CamDirector&reg;</>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum, \
      eros nec commodo cursus, nunc elit tincidunt nunc, et tincidunt nunc elit in \
      nulla. Donec euismod, nunc sed ultricies tincidunt, felis nunc tincidunt nisi, \
      et aliquam felis arcu eget mauris. Donec ultricies, lorem eget lacinia aliquet, \
      nisl dui sollicitudin risus, vitae ultricies justo nisl eu nunc. In hac habitasse \
      platea dictumst. In hac habitasse platea dictumst.",
    link: "https://dashwise.io",
    image: imgAvonic,
  },
];

const Project = ({ title, description, link, image }) => (
  <div className="project-container">
    <div className="project-header">
      <h3>{title}</h3>
      <IoOpenOutline />
    </div>
    <div className="project-content">
      <img src={image} className="project-image"></img>
      <p>{description}</p>
    </div>
  </div>
);

function Projects() {
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
