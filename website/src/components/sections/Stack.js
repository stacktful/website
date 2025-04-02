import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import Section from "../Section";
import Tile from "../Tile";

function ArrowIcon({ angle }) {
  return (
    <div className="show-all-stack-arrow">
      <MdOutlineKeyboardArrowUp transform={`rotate(${angle})`} />
    </div>
  );
}

function Stack({ stack }) {
  const [showAll, setShowAll] = useState(false);
  const visibleStack = showAll ? stack.slice(0, 15) : stack;
  return (
    <Section title="Stack">
      <div className="tech-stack-grid">
        {visibleStack.map((tech, index) => (
          <Tile key={index} className="tech-stack-cell">
            <div className="tech-stack-cell-content">
              <div className="tech-stack-icon">{tech.icon}</div>
              <div className="tech-stack-name">{tech.name}</div>
            </div>
          </Tile>
        ))}
      </div>
      <div className="tech-stack-button-wrapper">
        <button
          className="btn-show-all-stack"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show All" : "Show Less"}
          <ArrowIcon angle={showAll ? 180 : 0} />
        </button>
      </div>
    </Section>
  );
}

export default Stack;
