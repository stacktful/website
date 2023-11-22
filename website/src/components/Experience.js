import Section from "./Section";

import React from "react";

const jobs = [
  {
    title: "Lead Engineer + Scrum Master",
    company: "EBITWISE",
    date: "Jun 2022 - Oct 2023",
    location: "Remote (Lisbon, Portugal)",
    url: "ebitwise.nl",
    contributions: [
      "Architected containerized app incl. frontend UI, backend API, database + ETL pipeline from scratch.",
      "Built CI/CD pipeline incl. testing, building and cloud infrastructure as code.",
      "Mentored team for software engineering best practices (SOLID, Clean Code etc.).",
      "Setting up and managing Scrum/Agile project management workflows and communication channels.",
    ],
  },
  {
    title: "Software Engineer + Scrum Master",
    company: "Avonic",
    date: "Feb 2021 - Oct 2022",
    location: "Remote (Amsterdam, Netherlands)",
    url: "avonic.nl",
    contributions: [
      "Revamping user interface (UI) for user-friendliness along with development of MVP's main features.",
      "Complete revision of software architecture for performance, cleanliness and maintainability.",
      "Algorithmic optimisation for improved tracking performance.",
      "Code reviews and tutoring juniors on software engineering best practices.",
      "Initiating team to Agile Scrum methodology, incl. setting up project management workflows and automations.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Fleet Cleaner",
    date: "Dec 2018 - Mar 2020",
    location: "Rotterdam, Netherlands",
    url: "fleetcleaner.com",
    contributions: [
      "Researched localization methods for underwater ship-hull-cleaning robots.",
      "Developed algorithms for image processing, target tracking and localization, based on sonar imagery.",
      "Delivered software for largely improved localization accuracy.",
    ],
  },
  {
    title: "R&D Software Engineer",
    company: "Nippon Electric Company",
    date: "May 2018 - Nov 2018",
    location: "Tokyo, Japan",
    url: "nec.com",
    contributions: [
      "Delivered functional prototype for automated speech recordings, using NEC's mIDoT technology.",
      "Involved 3D prototyping, programming embedded systems with sensors and data processing.",
      "Presented results at IEEE 5th World Forum on Internet of Things 2019 (Limerick, Ireland).",
    ],
  },
  {
    title: "Simulation Engineer",
    company: "Formula Student Team Delft",
    date: "Aug 2016 - Jan 2017",
    location: "Delft, Netherlands",
    url: "fsteamdelft.com",
    contributions: [
      "Created models (Matlab) to analyse the car’s performance w.r.t. its geometrical parameters",
      "Optimized geometry for highest performance in terms of vehicle dynamics",
      // "Our team went on to win all competitions we participated in",
    ],
  },
];

function Bullet() {
  return (
    <div className="job-contribution-bullet-wrapper">
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6117 7.27607C12.2763 7.66454 12.2711 8.62678 11.6024 9.00809L2.57462 14.1559C1.90589 14.5372 1.07515 14.0516 1.07928 13.2818L1.13506 2.88965C1.13919 2.11986 1.9751 1.64321 2.63969 2.03168L11.6117 7.27607Z"
          stroke="#00FFD1"
          stroke-width="2"
          transform="scale(0.8), translate(0, 4.5)"
        />
      </svg>
    </div>
  );
}

function Job({ title, company, date, location, url, contributions }) {
  // This is purely to make the first job expanded by default
  const [expanded, setExpanded] = React.useState(false);
  // const expanded = company === "EBITWISE";
  return (
    <>
      <div className="job-header-tile" onClick={() => setExpanded(!expanded)}>
        {/* Job Header - always visible */}
        <div className="job-header">
          <div className="job-title">
            <span className="job-role">{title}</span>{" "}
            <span className="job-company">@ {company}</span>
          </div>
          <div className="job-date">{date}</div>
        </div>
      </div>
      {/* Job Description - dropdown */}
      {expanded && (
        <div className="job-content-tile">
          <div className="job-content">
            <div className="job-details">
              <div className="job-location">{location}</div>
              <div className="job-url">{url}</div>
            </div>
            <ul className="job-contributions">
              {contributions.map((contribution) => (
                <li className="job-contribution">
                  <Bullet />
                  <div className="job-contribution-text">{contribution}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

function Experience() {
  return (
    <Section title="Experience">
      <div className="experience-list">
        {jobs.map((job) => (
          <Job {...job} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
