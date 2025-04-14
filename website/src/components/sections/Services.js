import Section from "../Section";
import Tile from "../Tile";

function Service({ icon, title, description, techStack }) {
  return (
    <Tile className="service-tile">
      <h3 className="service-header">
        <div className="service-icon">{icon}</div>
        {title}
      </h3>
      {description && <p className="service-description">{description}</p>}
      {techStack && (
        <div className="tech-tag-container">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-tag">
              {tech}
            </div>
          ))}
        </div>
      )}
    </Tile>
  );
}

function Services({ services }) {
  return (
    <Section title="What I Do" id="services">
      <div className={`tiles-grid ${services.length === 3 ? "three-tiles" : ""}`}>
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}

export default Services;
