import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import Section from "../Section";
import Tile from "../Tile";
import AccordionItem from "../AccordionItem"; // import your animated wrapper

import "../../styles/TechStack.css";

function TechStackGrid({ stack }) {
  return (
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
  );
}

function TechStack({ stack }) {
  const [showAll, setShowAll] = useState(false);
  const sliceSize = 15; // Must be multiple of 5 /!\
  const baseStack = stack.slice(0, sliceSize);
  const restStack = stack.slice(sliceSize);

  return (
    <Section title="Tools I Use" id="teckstack">
      <TechStackGrid stack={baseStack} />
      <AccordionItem isOpen={showAll}>
        <TechStackGrid stack={restStack} />
      </AccordionItem>
      <div className="tech-stack-button-wrapper">
        <button className="btn-show-all-stack" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show All"}
          <div className="show-all-stack-arrow">
            <MdOutlineKeyboardArrowUp
              style={{
                transform: `rotate(${showAll ? 0 : 180}deg)`,
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </button>
      </div>
    </Section>
  );
}

export default TechStack;
