import "./App.css";

import NavBar from "./components/layout/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

import jobs from "./data/experience";
import projects from "./data/projects";
import services from "./data/services";
import testimonials from "./data/testimonials";
import hero from "./data/hero";
import contacts from "./data/contacts";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero {...hero} />
        <Services services={services} />
        <Projects projects={projects} />
        <Experience jobs={jobs} />
        <Testimonials testimonials={testimonials} />
        <Contact contacts={contacts} />
      </Layout>
    </div>
  );
}

export default App;
