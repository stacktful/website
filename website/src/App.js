import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Hero />
        <Services />
        {/* <Projects /> */}
        <Experience />
        <Testimonials />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
