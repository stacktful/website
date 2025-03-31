const jobs = [
  {
    role: "DevOps Engineer",
    company: "Louwman Group",
    start: "Jan 2025",
    end: "Present",
    location: "Remote (Amsterdam, Netherlands)",
    url: "louwman.nl",
    summary:
      "Led the technical development of Dashwise™, a real-time financial dashboard SaaS application \
      for scale-ups, from early concept to product launch.",
    contributions: [
      "Designed & built containerized architecture incl. frontend UI, backend API, database and ETL pipeline from scratch.",
      "Built CI/CD pipeline incl. testing, building and cloud infrastructure as code.",
    ],
    title:
      "Trimbel — cloud-native platform for car dealerships to manage their inventory and sales.",
    stack: [
      "Python",
      "Django",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "GCP",
      "Azure",
      "Agile/Scrum",
    ],
  },
  {
    role: "Software Engineer",
    company: "ACT Commodities",
    start: "Jun 2024",
    end: "Oct 2024",
    location: "Amsterdam, Netherlands",
    url: "actcommodities.nl",
    summary:
      "Led the technical development of Dashwise™, a real-time financial dashboard SaaS application \
      for scale-ups, from early concept to product launch.",
    contributions: [
      "Designed & built containerized architecture incl. frontend UI, backend API, database and ETL pipeline from scratch.",
      "Built CI/CD pipeline incl. testing, building and cloud infrastructure as code.",
    ],
    title:
      "Talos — cloud-native platform for car dealerships to manage their inventory and sales.",
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Agile/Scrum",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Whitespace Solutions",
    start: "Jan 2024",
    end: "Apr 2024",
    location: "Remote (Lisbon, Portugal)",
    url: "whitespace.nl",
    summary:
      "Led the technical development of Dashwise™, a real-time financial dashboard SaaS application \
      for scale-ups, from early concept to product launch.",
    contributions: [
      "Designed & built containerized architecture incl. frontend UI, backend API, database and ETL pipeline from scratch.",
      "Built CI/CD pipeline incl. testing, building and cloud infrastructure as code.",
    ],
    title:
      "AIM™ — cloud-native platform for car dealerships to manage their inventory and sales.",
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Agile/Scrum",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Ebitwise",
    start: "Jun 2022",
    end: "Oct 2023",
    location: "Remote (Lisbon, Portugal)",
    url: "ebitwise.nl",
    summary:
      "Led the technical development of Dashwise™, a real-time financial dashboard SaaS application \
      for scale-ups, from early concept to product launch.",
    contributions: [
      "Designed & built containerized architecture incl. frontend UI, backend API, database and ETL pipeline from scratch.",
      "Built CI/CD pipeline incl. testing, building and cloud infrastructure as code.",
      "Scrum Master, incl. creating Agile/Scrum project management workflows and managed communication channels.",
      "Mentored team for software engineering best practices (SOLID, Clean Code etc.).",
    ],
    title:
      "Dashwise™ — cloud-native platform for car dealerships to manage their inventory and sales.",
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Agile/Scrum",
    ],
  },
  {
    role: "Software Engineer",
    company: "Avonic",
    start: "Feb 2021",
    end: "Oct 2022",
    location: "Remote (Amsterdam, Netherlands)",
    url: "avonic.com",
    summary:
      "Developed CamDirector™, Avonic's innovative tracking solution for automatic \
       multi-camera lecture registrations, from early prototype to first sale. ",
    contributions: [
      "Revamped user interface (UI) for user-friendliness along with development of MVP's main features.",
      "Complete revision of backend software architecture for performance, cleanliness and maintainability.",
      "Algorithmic optimisation for improved tracking performance.",
      "Revised fleet management pipeline for improved scalability and maintainability.",
      "Managed tasks incl. setting up project management workflows and automations for the team.",
      "Code reviews and tutoring juniors on software engineering best practices.",
      "Initiated team to Agile/Scrum methodology, incl. setting up project management workflows and automations.",
    ],
    title:
      "CamDirector™ — cloud-native platform for car dealerships to manage their inventory and sales.",
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Agile/Scrum",
    ],
  },
  {
    role: "Software Engineer",
    company: "Fleet Cleaner",
    start: "Dec 2018",
    end: "Mar 2020",
    location: "Rotterdam, Netherlands",
    url: "fleetcleaner.com",
    summary:
      "Delivered proof of concept for the localization of the ship-hull-cleaning robot \
      based on target tracking from sonar imagery.",
    contributions: [
      "Researched localization methods for underwater ship-hull-cleaning robots.",
      "Developed algorithms for image processing, target tracking and localization, based on sonar imagery.",
      "Delivered software for largely improved localization accuracy.",
    ],
    title:
      "FLS Localization — cloud-native platform for car dealerships to manage their inventory and sales.",
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Agile/Scrum",
    ],
  },
  {
    role: "R&D Software Engineer",
    company: "Nippon Electric Company",
    start: "May 2018",
    end: "Nov 2018",
    location: "Tokyo, Japan",
    url: "nec.com",
    summary:
      "Delivered proof of concept for the 'micro-Identifier Dot on Things' (mIDoT) \
       technology in NEC's research for alternative asset tracking solutions.",
    contributions: [
      "Designed and built hardware for embedded system with 3D printed parts, circuitry, sensors etc.",
      "Developed and tested software for automated object recognition and data processing.",
      "Presented my results compiled in a conference paper at the IEEE 5th World Forum on IoT 2019.",
    ],
    title:
      "MIDoT — cloud-native platform for car dealerships to manage their inventory and sales.",
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Agile/Scrum",
    ],
  },
  {
    role: "Simulation Engineer",
    company: "Formula Student Team Delft",
    start: "Aug 2016",
    end: "Jan 2017",
    location: "Delft, Netherlands",
    url: "fsteamdelft.nl",
    summary:
      "Created models to analyse car's performance as precursor to geometrical design \
      choices for Formula Student Team Delft's award winning car.",
    contributions: [
      "Created models (Matlab) to analyse the car's performance w.r.t. its geometrical parameters",
      "Optimized geometry for highest performance in terms of vehicle dynamics",
    ],
    title:
      "DUT16 — cloud-native platform for car dealerships to manage their inventory and sales.",
    stack: [
      "Python",
      "Flask",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Agile/Scrum",
    ],
  },
];

export default jobs;

const skills = [
  {
    category: "Software",
    skills: [
      { name: "REST APIs", stack: ["Python", "Django", "Flask", "FastAPI"] },
      { name: "Databases", stack: ["PostgreSQL", "BigQuery", "SQLite", "SQL"] },
      {
        name: "Web Development",
        stack: ["ReactJS", "JavaScript", "HTML", "CSS"],
      },
      {
        name: "Test-Driven Design (TDD)",
        stack: ["Pytest", "Unittest", "mypy"],
      },
      { name: "API Documentation", stack: ["OpenAPI", "Swagger", "Postman"] },
      { name: "Version Control", stack: ["Git", "GitHub"] },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Cloud Computing", stack: ["Google Cloud", "Azure", "AWS"] },
      { name: "Infrastructure-as-Code", stack: ["Terraform"] },
      { name: "Scripting & Automation", stack: ["Python", "Bash"] },
      { name: "Containerization", stack: ["Docker"] },
      { name: "CI/CD", stack: ["GitHub Actions", "Cloud Build"] },
      {
        name: "Agile",
        stack: ["Scrum", "Kanban", "Jira", "Confluence", "ClickUp", "Slack"],
      },
    ],
  },
];
