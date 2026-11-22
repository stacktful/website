import { createContext, useCallback, useEffect, useMemo, useState } from "react";

import { languageFromPath, pathForLanguage } from "./languages";
import localize from "./localize";
import site from "../content/site";

export const LanguageContext = createContext(null);

/* The URL is the single source of truth for the language: / is English, /nl/ Dutch, /fr/ French.
   Switching updates the URL without reloading the page (keeping the scroll position), and the
   browser's back/forward buttons switch back. */
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => languageFromPath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setLanguageState(languageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const setLanguage = useCallback((next) => {
    if (next === languageFromPath(window.location.pathname)) return;
    window.history.pushState(null, "", pathForLanguage(next) + window.location.hash);
    setLanguageState(next);
  }, []);

  // texts outside the page sections (nav, footer, …) in the current language, e.g. site.nav.openMenu
  const localizedSite = useMemo(() => localize(site, language), [language]);

  // the generated HTML pages already have these right; this keeps them right after switching
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = localizedSite.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", localizedSite.meta.description);
  }, [language, localizedSite]);

  const value = useMemo(
    () => ({ language, setLanguage, site: localizedSite }),
    [language, setLanguage, localizedSite]
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
