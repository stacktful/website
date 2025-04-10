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
            <MdOutlineKeyboardArrowUp
              transform={`rotate(${expanded ? 180 : 90})`}
              style={{ transition: "transform 0.3s ease" }}
            />
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
            <IoLocationSharp />
            <span>
              {city}, {countryNamesByCode[country] || country}
            </span>
          </div>
          <a className="job-url" href={url} target="_blank">
            <IoOpenOutline />
            <span>{url.replaceAll("https://www.", "")}</span>
          </a>
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

function Job({ job, isOpen, onToggle }) {
  return (
    <div className="job-container">
      <JobHeader
        role={job.role}
        company={job.company}
        start={job.start}
        end={job.end}
        expanded={isOpen}
        setExpanded={onToggle}
      />
      <AccordionItem isOpen={isOpen} onToggle={onToggle}>
        <JobDetails
          city={job.city}
          country={job.country}
          url={job.url}
          stack={job.stack}
          title={job.title}
          contributions={job.contributions}
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
          <Job key={index} job={job} isOpen={openIndex === index} onToggle={() => toggle(index)} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
