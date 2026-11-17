import { useEffect, useRef, useState } from "react";

import { IoLocationSharp } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

import Section from "../Section";
import JobTitle from "../JobTitle";
import Tile from "../Tile";
import Bullet from "../icons/Bullet";

import "../../styles/Experience.css";

const countryNamesByCode = {
  NL: "Netherlands",
  JP: "Japan",
};

const startYear = (job) => job.start.split(" ").pop();

/* Left column: one entry per job, most recent first. Behaves like a tab list:
   click an entry, or use the arrow keys while it has focus. */
function TimelineRail({ jobs, selected, onSelect }) {
  const itemRefs = useRef([]);
  const isFirstRender = useRef(true);

  // keep the selected entry visible (matters for the horizontal strip on mobile)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    itemRefs.current[selected]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selected]);

  const onKeyDown = (event) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = Math.min(Math.max(selected + step, 0), jobs.length - 1);
    onSelect(next);
    itemRefs.current[next]?.focus();
  };

  return (
    <ol className="exp-rail" role="tablist" aria-orientation="vertical" onKeyDown={onKeyDown}>
      {jobs.map((job, index) => {
        const year = startYear(job);
        // Read the rail bottom-up (oldest first): label a year on the earliest job that
        // started in it, i.e. the bottom-most one of a group with the same start year.
        const isLast = index === jobs.length - 1;
        const showYear = isLast || year !== startYear(jobs[index + 1]);
        const isActive = index === selected;
        return (
          <li key={index}>
            <button
              ref={(el) => (itemRefs.current[index] = el)}
              className={`exp-rail-item${isActive ? " active" : ""}`}
              role="tab"
              id={`exp-tab-${index}`}
              aria-selected={isActive}
              aria-controls="exp-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(index)}
            >
              <span className="exp-rail-year">{showYear ? year : ""}</span>
              <span className="exp-rail-dot" />
              <span className="exp-rail-company">{job.company}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

/* Right column: full details of the selected job */
function JobCard({ job, index, direction }) {
  const [name, description] = job.title.split(" — ");
  return (
    <Tile
      // a new key re-mounts the card, which replays the slide-in animation
      key={index}
      className={`exp-card exp-card-from-${direction}`}
      role="tabpanel"
      id="exp-panel"
      aria-labelledby={`exp-tab-${index}`}
    >
      <div className="exp-card-header">
        <JobTitle role={job.role} company={job.company} />
        <div className="job-date">
          {job.start} - {job.end}
        </div>
        <p className="job-summary">
          <span className="job-summary-name">{name}</span>
          {description && <> &mdash; {description}</>}
        </p>
      </div>
      <div className="exp-card-body">
        <div className="job-details">
          <div className="job-location">
            <IoLocationSharp />
            <span>
              {job.city}, {countryNamesByCode[job.country] || job.country}
            </span>
          </div>
          {job.url && (
            <a className="job-url" href={job.url} target="_blank" rel="noopener noreferrer">
              <IoOpenOutline />
              <span>{job.url.replaceAll("https://www.", "")}</span>
            </a>
          )}
        </div>
        <ul className="job-contributions">
          {job.contributions.map((contribution, i) => (
            <li key={i} className="job-contribution">
              <Bullet />
              <div className="job-contribution-text">{contribution}</div>
            </li>
          ))}
        </ul>
        <div className="tech-tag-container">
          {job.stack.map((tech, i) => (
            <div key={i} className="tech-tag">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </Tile>
  );
}

function Experience({ jobs }) {
  const [selected, setSelected] = useState(0); // most recent job first
  const [direction, setDirection] = useState("below");

  const select = (index) => {
    if (index === selected) return;
    // older jobs are further down the rail, so their card slides in from below
    setDirection(index > selected ? "below" : "above");
    setSelected(index);
  };

  return (
    <Section title="Experience" id="experience">
      <div className="exp-timeline">
        <div className="exp-side">
          <TimelineRail jobs={jobs} selected={selected} onSelect={select} />
          {/* below the rail, so the buttons stay in place whatever the card height */}
          <div className="exp-nav">
            <span className="exp-nav-count">
              {selected + 1} / {jobs.length}
            </span>
            <button
              className="exp-nav-button"
              onClick={() => select(selected - 1)}
              disabled={selected === 0}
              aria-label="Previous (more recent) job"
            >
              <MdOutlineKeyboardArrowUp />
            </button>
            <button
              className="exp-nav-button"
              onClick={() => select(selected + 1)}
              disabled={selected === jobs.length - 1}
              aria-label="Next (older) job"
            >
              <MdOutlineKeyboardArrowDown />
            </button>
          </div>
        </div>
        <JobCard job={jobs[selected]} index={selected} direction={direction} />
      </div>
    </Section>
  );
}

export default Experience;
