const startDate = new Date(2018, 5, 1);
const role = "Fullstack Software Engineer";

function yearsSince(date) {
  const today = new Date();
  return Math.floor((today - date) / (1000 * 60 * 60 * 24 * 365));
}

const summary = (
  <>
    {role} with over {yearsSince(startDate)} years of experience in Python-based
    greenfield projects, with MSc background in engineering, robotics & AI.
    Specialised in end-to-end development of cloud-native web applications (B2B,
    SaaS), in Agile/Scrum multidisciplinary teams within start-ups and
    international corporations. Strong advocate of clean code, automated
    workflows and clear communication for optimal collaboration.
  </>
);

const hero = {
  name: "Thibaut",
  role: role,
  audioSrc: "/audio/name.m4a",
  summary: summary,
};

export default hero;
