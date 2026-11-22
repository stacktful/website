import useLanguage from "../hooks/useLanguage";
import { languageNames, languages, pathForLanguage } from "../i18n/languages";

import "./LanguageSwitcher.css";

/* EN · NL · FR in the nav bar. Real links to each language's page (so they work without
   JavaScript and search engines find every language); a plain click switches in place. */
function LanguageSwitcher() {
  const { language, setLanguage, site } = useLanguage();

  const onClick = (event, next) => {
    // let the browser handle opening in a new tab or window
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    setLanguage(next);
  };

  return (
    <ul className="lang-switcher" aria-label={site.nav.language}>
      {languages.map((code) => (
        <li key={code}>
          <a
            href={pathForLanguage(code)}
            hrefLang={code}
            lang={code}
            title={languageNames[code]}
            aria-current={code === language ? "true" : undefined}
            onClick={(event) => onClick(event, code)}
          >
            {code.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LanguageSwitcher;
