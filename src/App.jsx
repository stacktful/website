import { useMemo } from "react";

import "./App.css";

import Layout from "./components/Layout";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";

import contact from "./content/contact";
import experience from "./content/experience";
import hero from "./content/hero";
import services from "./content/services";
import stack from "./content/stack";

import useLanguage from "./hooks/useLanguage";
import localize from "./i18n/localize";

function App() {
  const { language } = useLanguage();
  // each section's texts in the current language
  const content = useMemo(
    () => localize({ hero, services, experience, contact }, language),
    [language]
  );

  const navLinks = [
    { id: "services", label: content.services.title },
    { id: "experience", label: content.experience.title },
    { id: "contact", label: content.contact.title },
  ];

  return (
    <div className="App">
      <Layout navLinks={navLinks}>
        <Hero {...content.hero} />
        <Services {...content.services} stack={stack} />
        <Experience {...content.experience} />
        <Contact {...content.contact} />
      </Layout>
    </div>
  );
}

export default App;
