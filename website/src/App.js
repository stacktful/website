import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Hero />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
