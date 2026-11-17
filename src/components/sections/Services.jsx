import Section from "../Section";
import Tile from "../Tile";

import "../../styles/Services.css";

/* Look up tools (icon + name) from stack.jsx by name */
function resolveTools(names, stack) {
  return names
    .map((name) => {
      const tool = stack.find((t) => t.name === name);
      if (!tool) console.warn(`Unknown tool "${name}": add it to src/data/stack.jsx`);
      return tool;
    })
    .filter(Boolean);
}

function ToolTag({ tool }) {
  return (
    <li className="tech-tag tool-tag">
      <span className="tool-tag-icon" aria-hidden="true">
        {tool.icon}
      </span>
      {tool.name}
    </li>
  );
}

function Capability({ icon, title, description, tools, featured, stack }) {
  return (
    <Tile className={`capability${featured ? " capability-featured" : ""}`}>
      {featured && <p className="capability-eyebrow">Core focus</p>}
      <h3 className="capability-title">
        <span className="capability-icon" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h3>
      <p className="capability-description">{description}</p>
      <ul className="tool-tags">
        {resolveTools(tools, stack).map((tool) => (
          <ToolTag key={tool.name} tool={tool} />
        ))}
      </ul>
    </Tile>
  );
}

function Services({ services, everydayTools, stack }) {
  return (
    <Section title="What I Do" id="services">
      <div className="capabilities">
        {services.map((service) => (
          <Capability key={service.title} {...service} stack={stack} />
        ))}
      </div>
      <div className="everyday-tools">
        <span className="everyday-tools-label">Also day-to-day</span>
        <ul className="everyday-tools-list">
          {resolveTools(everydayTools, stack).map((tool) => (
            <li key={tool.name}>
              <span aria-hidden="true">{tool.icon}</span>
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Services;
