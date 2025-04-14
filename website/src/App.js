import "./App.css";

import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import TechStack from "./components/sections/TechStack";

import jobs from "./data/experience";
import projects from "./data/projects";
import services from "./data/services";
import testimonials from "./data/testimonials";
import hero from "./data/hero";
import contacts from "./data/contacts";
import stack from "./data/stack";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero {...hero} />
        <Services services={services} />
        <TechStack stack={stack} />
        <Experience jobs={jobs} />
        <Projects projects={projects} />
        <Testimonials testimonials={testimonials} />
        <Contact contacts={contacts} />
      </Layout>
    </div>
  );
}

export default App;
