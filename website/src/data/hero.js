const startDate = new Date(2018, 5, 1);
const role = "Fullstack Software Engineer";

function monthDiff(startDate) {
  const today = new Date();
  return (
    today.getMonth() -
    startDate.getMonth() +
    12 * (today.getFullYear() - startDate.getFullYear())
  );
}

const yearsOfExp = Math.floor(monthDiff(startDate) / 12);

const summary = (
  <>
    {role} with over {yearsOfExp} years of experience in Python-based greenfield
    projects, with MSc background in engineering, robotics & AI. Specialised in
    end-to-end development of cloud-native web applications (B2B, SaaS), in
    Agile/Scrum multidisciplinary teams within start-ups and international
    corporations. Strong advocate of clean code, automated workflows and clear
    communication for optimal collaboration.
  </>
);

const hero = {
  name: "Thibaut",
  audioSrc: "/audio/name.m4a",
  summary: summary,
};

export default hero;
