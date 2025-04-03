import { IoLocationSharp } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import Section from "../Section";
import JobTitle from "../JobTitle";
import Tile from "../Tile";
import Bullet from "../icons/Bullet";
import AccordionItem from "../AccordionItem";

import React from "react";

const countryNamesByCode = {
  NL: "Netherlands",
  JP: "Japan",
};

function JobHeader({ role, company, start, end, expanded, setExpanded }) {
  return (
    <Tile className="job-header-tile" onClick={setExpanded}>
      <div className="job-header">
        <div className="job-title">
          <div className="job-dropdown-arrow">
            <MdOutlineKeyboardArrowUp transform={`rotate(${expanded ? 180 : 90})`} />
          </div>
          <JobTitle role={role} company={company} />
        </div>
        <div className="job-date">
          {start} - {end}
        </div>
      </div>
    </Tile>
  );
}

function JobDetails({ city, country, url, stack, title, contributions }) {
  const [name, description] = title.split(" — ");
  return (
    <Tile className="job-content-tile">
      <div className="job-content">
        <div className="job-details">
          <div className="job-location">
            <div className="job-location-icon">
              <IoLocationSharp />
            </div>
            {city}, {countryNamesByCode[country] || country}
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
        <p class="job-project">
          <strong className="job-project-name">{name}</strong>
          <strong> &mdash; {description}</strong>
        </p>
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
    </Tile>
  );
}

function Job({
  isOpen,
  onToggle,
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
  return (
    <div className="job-container">
      <JobHeader
        role={role}
        company={company}
        start={start}
        end={end}
        expanded={isOpen}
        setExpanded={onToggle}
      />
      <AccordionItem isOpen={isOpen} onToggle={onToggle}>
        <JobDetails
          city={city}
          country={country}
          url={url}
          stack={stack}
          title={title}
          contributions={contributions}
        />
      </AccordionItem>
    </div>
  );
}

function Experience({ jobs }) {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <Section title="Experience">
      <div className="experience-list">
        {jobs.map((job, index) => (
          <Job key={index} isOpen={openIndex === index} onToggle={() => toggle(index)} {...job} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
