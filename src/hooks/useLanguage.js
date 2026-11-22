import { useContext } from "react";

import { LanguageContext } from "../i18n/LanguageContext";

/* { language, setLanguage, site }: site holds the texts of src/content/site.jsx in the current language */
export default function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage() must be used inside <LanguageProvider>");
  return context;
}
