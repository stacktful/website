import fs from "node:fs";
import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { defaultLanguage, languages, pathForLanguage } from "./src/i18n/languages.js";
import site from "./src/content/site.jsx";

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Writes one HTML page per language (/index.html, /nl/index.html, /fr/index.html), each with
   its own lang, title and description, so every language has a real URL on any static host.
   The app reads the language from the URL (see src/i18n/LanguageContext.jsx). */
function languagePages() {
  return {
    name: "language-pages",
    apply: "build",
    writeBundle({ dir }) {
      const template = fs.readFileSync(path.join(dir, "index.html"), "utf-8");
      for (const language of languages) {
        const pick = (translation) => escapeHtml(translation[language] ?? translation[defaultLanguage]);
        const html = template
          .replace(/<html lang="[^"]*"/, () => `<html lang="${language}"`)
          .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${pick(site.meta.title)}</title>`)
          .replace(
            /(<meta name="description" content=")[^"]*/,
            (_, start) => start + pick(site.meta.description)
          );
        const file = path.join(dir, pathForLanguage(language), "index.html");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), languagePages()],
  define: {
    // Month of the build ("2026-11"), shown in the footer in the current language.
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 7)),
  },
  // absolute asset paths, so the pages under /nl/ and /fr/ load the same files
  base: "/",
  server: { port: 3000 },
  build: { outDir: "build" },
});
