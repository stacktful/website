import { useEffect, useRef, useState } from "react";

import { IoLocationSharp } from "react-icons/io5";
import { IoOpenOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

import useLanguage from "../../hooks/useLanguage";
import { countryName, formatMonth } from "../../i18n/format";
import Section from "../Section";
import JobTitle from "../JobTitle";
import Tile from "../Tile";

import "./Experience.css";

const startYear = (job) => job.start.slice(0, 4); // "2026-01" → "2026"

/* Left column: one entry per job, most recent first. Behaves like a tab list:
   click an entry, or use the arrow keys while it has focus. */
function TimelineRail({ jobs, selected, onSelect }) {
  const itemRefs = useRef([]);
  const previousSelected = useRef(selected);

  // keep the selected entry visible (matters for the horizontal strip on mobile).
  // Only when the selection actually changes: not on mount, which would scroll the page
  // (React's StrictMode runs effects twice in development, so a "first render" flag is not enough).
  useEffect(() => {
    if (previousSelected.current === selected) return;
    previousSelected.current = selected;
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
function JobCard({ job, index, direction, presentLabel }) {
  const [name, description] = job.title.split(" — ");
  const { language } = useLanguage();
  return (
    <Tile
      // a new key re-mounts the card, which replays the slide-in animation
      key={index}
      className={`exp-card exp-card-from-${direction} reveal-item`}
      role="tabpanel"
      id="exp-panel"
      aria-labelledby={`exp-tab-${index}`}
    >
      <div className="exp-card-header">
        <JobTitle role={job.role} company={job.company} />
        <div className="job-date">
          {formatMonth(job.start, language)} -{" "}
          {job.end ? formatMonth(job.end, language) : presentLabel}
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
              {job.city}, {countryName(job.country, language)}
            </span>
          </div>
          {job.url && (
            <a className="job-url" href={job.url} target="_blank" rel="noopener noreferrer">
              <IoOpenOutline />
              <span>{job.url.replaceAll("https://www.", "")}</span>
            </a>
          )}
        </div>
        <p className="job-highlight">{job.highlight}</p>
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

function Experience({ title, presentLabel, previousJobLabel, nextJobLabel, jobs }) {
  const [selected, setSelected] = useState(0); // most recent job first
  const [direction, setDirection] = useState("below");

  const select = (index) => {
    if (index === selected) return;
    // older jobs are further down the rail, so their card slides in from below
    setDirection(index > selected ? "below" : "above");
    setSelected(index);
  };

  return (
    <Section title={title} id="experience">
      <div className="exp-timeline">
        <div className="exp-side reveal-item">
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
              aria-label={previousJobLabel}
            >
              <MdOutlineKeyboardArrowUp />
            </button>
            <button
              className="exp-nav-button"
              onClick={() => select(selected + 1)}
              disabled={selected === jobs.length - 1}
              aria-label={nextJobLabel}
            >
              <MdOutlineKeyboardArrowDown />
            </button>
          </div>
        </div>
        <JobCard
          job={jobs[selected]}
          index={selected}
          direction={direction}
          presentLabel={presentLabel}
        />
      </div>
    </Section>
  );
}

export default Experience;
