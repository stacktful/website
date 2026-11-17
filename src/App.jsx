import "./App.css";

import Layout from "./components/Layout";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";

import contacts from "./data/contacts";
import jobs from "./data/experience";
import hero from "./data/hero";
import services from "./data/services";
import stack from "./data/stack";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero {...hero} />
        <Services services={services} />
        <TechStack stack={stack} />
        <Experience jobs={jobs} />
        {/* <Projects projects={projects} /> */}
        {/* <Testimonials testimonials={testimonials} /> */}
        <Contact contacts={contacts} />
      </Layout>
    </div>
  );
}

export default App;
