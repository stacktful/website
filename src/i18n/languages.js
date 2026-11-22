// Registry of available languages. Plain JS without React, so vite.config.js can import it
// to generate one HTML page per language.
export const languages = ["en", "nl", "fr"];
export const defaultLanguage = "en";

export const languageNames = {
  en: "English",
  nl: "Nederlands",
  fr: "Français",
};

/* Each language has its own URL: the default language at the root, the others under /<code>/ */
export function pathForLanguage(language) {
  return language === defaultLanguage ? "/" : `/${language}/`;
}

export function languageFromPath(pathname) {
  const firstSegment = pathname.split("/")[1];
  return languages.includes(firstSegment) ? firstSegment : defaultLanguage;
}
