import { IoLocationSharp } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import Section from "../Section";
import Bullet from "../Bullet";
import JobTitle from "../JobTitle";

import React from "react";

const countryNamesByCode = {
  NL: "Netherlands",
  JP: "Japan",
};

function getCountryName(countryCode) {
  return countryNamesByCode[countryCode] || countryCode;
}

const ProjectTitle = ({ title }) => {
  const [name, description] = title.split(" — ");
  return (
    <p class="job-project">
      <strong className="job-project-name">{name}</strong>
      <strong> &mdash; {description}</strong>
    </p>
  );
};

const DropdownArrow = ({ angle }) => {
  return (
    <div className="job-dropdown-arrow">
      <MdOutlineKeyboardArrowUp transform={`rotate(${angle})`} />
    </div>
  );
};

function Job({
  role,
  company,
  start,
  end,
  city,
  country,
  url,
  stack,
  title,
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
            <JobTitle role={role} company={company} />
          </div>
          <div className="job-date">
            {start} - {end}
          </div>
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
                {city}, {getCountryName(country)}
              </div>
              <div className="job-url">
                <div className="job-url-icon">
                  <IoOpenOutline />
                </div>
                <a href={url} target="_blank">
                  {url.replaceAll("https://www.", "")}
                </a>
              </div>
            </div>
            <ProjectTitle title={title} />
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
              {stack.map((tech, index) => (
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
