import { IoLocationSharp } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import Section from "./layout/Section";
import Bullet from "./layout/Bullet";

import React from "react";

const DropdownArrow = ({ angle }) => {
  return (
    <div className="job-dropdown-arrow">
      <MdOutlineKeyboardArrowUp transform={`rotate(${angle})`} />
    </div>
  );
};

function Job({
  title,
  company,
  date,
  location,
  url,
  techStack,
  summary,
  project,
  contributions,
}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="job-container">
      <div
        className="tile job-header-tile"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Job Header - always visible */}
        <div className="job-header">
          <div className="job-title">
            <DropdownArrow angle={expanded ? 180 : 90} />
            <span className="job-role">{title}</span>
            <span className="job-company">@ {company}</span>
          </div>
          <div className="job-date">{date}</div>
        </div>
      </div>
      {/* Job Description - dropdown */}
      {expanded && (
        <div className="tile job-content-tile">
          <div className="job-content">
            <div className="job-details">
              <div className="job-location">
                <div className="job-location-icon">
                  <IoLocationSharp />
                </div>
                {location}
              </div>
              <div className="job-url">
                <div className="job-url-icon">
                  <IoOpenOutline />
                </div>
                <a href={"https://www." + url} target="_blank">
                  {url}
                </a>
              </div>
            </div>
            <p class="job-project">
              <strong className="job-project-name">{project.name}</strong>
              <strong> &mdash; {project.description}</strong>
            </p>
            {/* <p className="job-summary">{summary}</p> */}
            {/* Main contributions: */}
            <ul className="job-contributions">
              {contributions.map((contribution, index) => (
                <li key={index} className="job-contribution">
                  <Bullet />
                  <div className="job-contribution-text">{contribution}</div>
                </li>
              ))}
            </ul>
            <div className="tech-stack-container">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-stack-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Experience({ jobs }) {
  return (
    <Section title="Experience">
      <div className="experience-list">
        {jobs.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
