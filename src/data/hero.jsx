const startDate = new Date(2018, 5, 1);
const role = "Freelance Software Engineer";

function yearsSince(date) {
  const today = new Date();
  return Math.floor((today - date) / (1000 * 60 * 60 * 24 * 365));
}

const years = yearsSince(startDate);

const summary = (
  <>
    {years}+ years of building software from robotics, microservices and SaaS to AI agents.
    Different domains, same job: making hard problems boringly simple, from the code to how it 
    ships. Currently helping{" "}
    <a href="https://www.alliander.com/en" target="_blank" rel="noopener noreferrer">
      Alliander
    </a>{" "}
    automate tedious processes with agentic AI.
  </>
);

const hero = {
  name: "Thibaut",
  role: role,
  audioSrc: "/audio/name.m4a",
  summary: summary,
};

export default hero;
