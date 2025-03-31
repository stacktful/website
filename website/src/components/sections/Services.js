import Section from "../Section";

function Service({ icon, title, description, techStack }) {
  return (
    <div className="tile service-tile">
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

function Services({ services }) {
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
