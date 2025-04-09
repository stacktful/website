import imgEbitwise from "../static/img/project-ebitwise-1.jpg";
import imgAvonic from "../static/img/project-avonic.png";

const projects = [
  {
    title: <>Dashwise&reg;</>,
    description:
      "Cloud-native multi-tenant web application (SaaS) presenting real-time financial \
      data for start-up and/or scale-up founders. It provides an interactive dashboard \
      presenting digestible financial insights and key performance metrics (KPIs), \
      enabling founders make informed decisions while focusing on their core business.",
    link: "https://ebitwise.nl/en/dashwise/",
    image: imgEbitwise,
  },
  {
    title: <>CamDirector&reg;</>,
    description:
      "AI-driven multiple camera system for automated video registration of lectures, \
      capable to automatically find and track the speaker while omitting spectators. \
      Using the different camera views such as close-ups and overview shots, it also \
      provides an elegant composition, for both small and large lecture halls.",
    link: "https://avonic.com/product/av-cd-trac1/",
    image: imgAvonic,
  },
];

export default projects;
