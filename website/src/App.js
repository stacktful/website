import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Hero />
        <Services />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
