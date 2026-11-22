/* Hero: the introduction at the top of the page.
   Texts are written as { en, nl, fr } (see src/i18n/localize.js). */

const startDate = new Date(2018, 5, 1);

function yearsSince(date) {
  const today = new Date();
  return Math.floor((today - date) / (1000 * 60 * 60 * 24 * 365));
}

const years = yearsSince(startDate);

const alliander = (
  <a href="https://www.alliander.com/en" target="_blank" rel="noopener noreferrer">
    Alliander
  </a>
);

const hero = {
  greeting: { en: "Hi, I'm", nl: "Hoi, ik ben", fr: "Bonjour, c'est" },
  role: "Freelance Software Engineer",
  audioSrc: "/audio/name.m4a",
  pronunciationLabel: {
    en: "Pronunciation audio",
    nl: "Uitspraak beluisteren",
    fr: "Écouter la prononciation",
  },
  headshotAlt: {
    en: "Headshot",
    nl: "Portretfoto",
    fr: "Portrait",
  },
  summary: {
    en: (
      <>
        {years}+ years of building software, from robotics, microservices and SaaS to AI agents.
        Different domains, same job: making hard problems boringly simple, from the code to how it
        ships. Currently helping {alliander} automate with agentic AI.
      </>
    ),
    nl: (
      <>
        {years}+ jaar ervaring met het bouwen van software, van robotica, microservices en SaaS tot AI-agents.
        Verschillende domeinen, hetzelfde werk: lastige problemen saai eenvoudig maken, van de code
        tot hoe die live gaat. Momenteel help ik {alliander} automatiseren met agentic AI.
      </>
    ),
    fr: (
      <>
        Plus de {years} ans à concevoir des logiciels, de la robotique aux microservices et au SaaS,
        jusqu’aux agents IA. Différents domaines, un même métier&nbsp;: rendre les problèmes
        complexes simples au point d’en être banals, du code jusqu’à sa mise en production.
        J’aide actuellement {alliander} à automatiser grâce à l’IA agentique.
      </>
    ),
  },
  cta: { en: "Get in touch", nl: "Neem contact op", fr: "Me contacter" },
};

export default hero;
