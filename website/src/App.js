import "./App.css";

import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Stack from "./components/sections/Stack";

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
        <Projects projects={projects} />
        <Experience jobs={jobs} />
        <Testimonials testimonials={testimonials} />
        <Stack stack={stack} />
        <Contact contacts={contacts} />
      </Layout>
    </div>
  );
}

export default App;
