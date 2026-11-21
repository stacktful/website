import "./App.css";

import Layout from "./components/Layout";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";

import contacts from "./content/contacts";
import jobs from "./content/experience";
import hero from "./content/hero";
import services, { everydayTools } from "./content/services";
import stack from "./content/stack";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero {...hero} />
        <Services services={services} everydayTools={everydayTools} stack={stack} />
        <Experience jobs={jobs} />
        <Contact contacts={contacts} />
      </Layout>
    </div>
  );
}

export default App;
