import { isValidElement } from "react";

import { defaultLanguage, languages } from "./languages";

/* Translatable values are written inline as { en: …, nl: …, fr: … }. localize() walks through
   content (objects and arrays, at any depth) and replaces each of those with the value for the
   given language, falling back to the default language when a translation is missing.
   Everything else (strings, numbers, functions, React elements) is returned as is.
   French puts a non-breaking space (\u00A0) before : ! ? so they never wrap onto their own line. */
export default function localize(value, language) {
  if (Array.isArray(value)) return value.map((item) => localize(item, language));
  if (!isPlainObject(value)) return value;

  if (isTranslation(value)) {
    if (import.meta.env.DEV && !(language in value)) {
      console.warn(`Missing "${language}" translation for:`, value[defaultLanguage]);
    }
    return localize(value[language] ?? value[defaultLanguage], language);
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, localize(item, language)])
  );
}

function isPlainObject(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    Object.getPrototypeOf(value) === Object.prototype &&
    !isValidElement(value) // React elements are plain objects too
  );
}

/* { en: …, nl: … }: has the default language, and only language codes as keys */
function isTranslation(object) {
  const keys = Object.keys(object);
  return keys.includes(defaultLanguage) && keys.every((key) => languages.includes(key));
}
