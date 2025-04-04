import Section from "../Section";
import Tile from "../Tile";

function Service({ icon, title, description, techStack }) {
  return (
    <Tile className="service-tile">
      <h3 className="service-header">
        <div className="service-icon">{icon}</div>
        {title}
      </h3>
      <p className="service-description">{description}</p>
      <div className="tech-stack-container">
        {techStack &&
          techStack.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              {tech}
            </div>
          ))}
      </div>
    </Tile>
  );
}

function Services({ services }) {
  return (
    <Section title="Services">
      <div className={`tiles-grid ${services.length === 3 ? "three-tiles" : ""}`}>
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}

export default Services;
