import Section from "../Section";

import { services } from "./constants";
import "./style.css";

function Service({ title, description, techStack }) {
  return (
    <div className="tile">
      <h2>{title}</h2>
      <p>{description}</p>
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
