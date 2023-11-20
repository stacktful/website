import "./App.css";

import NavBar from "./components/NavBar";

function Section({ children, ...props }) {
  return (
    <>
      {props.title && (
        <section>
          <div className="section-header">
            <div className="section-header-line"></div>
            <h2 className="section-header-title">{props.title}</h2>
            <div className="section-header-line"></div>
          </div>
          {children}
        </section>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="content">
        <header>
          <p>Hi, my name is</p>
          <h1>Thibaut van Bergen</h1>
          <h1>I build SaaS applications.</h1>
          {/* <h2>
            Your go-to Software Engineer for creating applications. You think
            it, I build it.
          </h2>
          <p>
            I'm a software engineer who brings ideas to life. I'm passionate
            about building software that solves problems and makes people's
            lives easier. Currently, I'm focused on building SaaS / Web
            applications for small businesses and startups in the FinTech and
            HealthTech space.
          </p> */}
        </header>

        <Section title={"About"}>
          {/* <p>
            Hi, my name is Thibaut van Bergen and I enjoy building software that
            solves problems and makes people's lives easier. I've started in the
            software industry as a self-taught developer and have since then
            worked for a variety of startups. I love the process of bringing
            ideas to life and seeing them being used by people. I'm awesome,
            simply hire me and you'll see. Here's what I've been up to lately:
          </p>
          <ul>
            <li>
              Building a SaaS application for a startup in the FinTech space
            </li>
            <li>
              Developing and bringing an automatic lecture registration system
              to market
            </li>
          </ul> */}
        </Section>

        <Section title="Services"></Section>

        <Section title="Experience"></Section>

        <Section title="Contact"></Section>
      </div>
    </div>
  );
}

export default App;
