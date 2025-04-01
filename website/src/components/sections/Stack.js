import Section from "../Section";
import Tile from "../Tile";

function Stack({ stack }) {
  return (
    <Section title="Stack">
      <div className="tech-stack-grid">
        {stack.map((tech, index) => (
          <Tile key={index} className="tech-stack-cell">
            <div className="tech-stack-cell-content">
              <div className="tech-stack-icon">{tech.icon}</div>
              <div className="tech-stack-name">{tech.name}</div>
            </div>
          </Tile>
        ))}
      </div>
    </Section>
  );
}

export default Stack;
