/* Texts outside the page sections: the browser tab, nav bar, theme toggle and footer.
   (Each section's texts are in the file named after it.)
   Texts are written as { en, nl, fr } (see src/i18n/localize.js); functions take the parts
   that vary. `meta` must stay plain text: vite.config.js writes it into each language's HTML
   <title> and <meta name="description">. */

const site = {
  // browser tab and search results
  meta: {
    title: {
      en: "Welcome to Thibaut van Bergen's page.",
      nl: "Welkom op de pagina van Thibaut van Bergen.",
      fr: "Bienvenue sur la page de Thibaut van Bergen.",
    },
    description: {
      en: "Personal website of Thibaut van Bergen",
      nl: "Persoonlijke website van Thibaut van Bergen",
      fr: "Site personnel de Thibaut van Bergen",
    },
  },

  // the nav links use the section titles, from each section's file
  nav: {
    openMenu: { en: "Open menu", nl: "Menu openen", fr: "Ouvrir le menu" },
    closeMenu: { en: "Close menu", nl: "Menu sluiten", fr: "Fermer le menu" },
    language: { en: "Language", nl: "Taal", fr: "Langue" },
  },

  theme: {
    names: {
      dark: { en: "dark", nl: "donker", fr: "sombre" },
      light: { en: "light", nl: "licht", fr: "clair" },
    },
    toggle: {
      en: (current) => `Switch color theme (current: ${current})`,
      nl: (current) => `Kleurthema wisselen (huidig: ${current})`,
      fr: (current) => `Changer de thème (actuel : ${current})`,
    },
    switchTo: {
      en: (next) => `Switch to ${next}`,
      nl: (next) => `Wisselen naar ${next}`,
      fr: (next) => `Passer au thème ${next}`,
    },
  },

  footer: {
    builtBy: {
      en: "Designed & built by Thibaut van Bergen",
      nl: "Ontworpen & gebouwd door Thibaut van Bergen",
      fr: "Conçu & développé par Thibaut van Bergen",
    },
    lastUpdate: {
      en: (date) => `Last update: ${date}`,
      nl: (date) => `Laatste update: ${date}`,
      fr: (date) => `Dernière mise à jour : ${date}`,
    },
  },
};

export default site;
