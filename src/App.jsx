import "./App.css";

import Layout from "./components/Layout";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";

import contacts from "./data/contacts";
import jobs from "./data/experience";
import hero from "./data/hero";
import services, { everydayTools } from "./data/services";
import stack from "./data/stack";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero {...hero} />
        {/* "What I Do" also covers the tech stack (tools grouped per capability) */}
        <Services services={services} everydayTools={everydayTools} stack={stack} />
        <Experience jobs={jobs} />
        {/* <Testimonials testimonials={testimonials} /> */}
        <Contact contacts={contacts} />
      </Layout>
    </div>
  );
}

export default App;
