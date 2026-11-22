// Formatting that the browser translates for us, so it needs no texts in src/content/

/* "2026-01" → "Jan 2026" (en), "jan 2026" (nl), "janv. 2026" (fr) */
export function formatMonth(yearMonth, language) {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(
    new Date(year, month - 1)
  );
}

/* "NL" → "Netherlands" (en), "Nederland" (nl), "Pays-Bas" (fr) */
export function countryName(code, language) {
  return new Intl.DisplayNames(language, { type: "region" }).of(code) ?? code;
}
