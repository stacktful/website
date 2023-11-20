import './App.css';

function App() {
  return (
    <div className="App">

      <nav>
        <div style={{ color: 'white', border: '1px solid red', float: 'left' }}>Logo</div>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


      <div className="content">

        <header>
          <h1>Hi, my name is Thibaut van Bergen</h1>
          <h2>Your go-to Software Engineer for creating applications. You think it, I build it.</h2>
          <p>
            I'm a software engineer who brings ideas to life. I'm passionate about building software that
            solves problems and makes people's lives easier. Currently, I'm focused on building SaaS / Web applications
            for small businesses and startups in the FinTech and HealthTech space.
          </p>
        </header>

        <section>
          <h2>About Me</h2>
          <p>
            Hi, my name is Thibaut van Bergen and I enjoy building software that solves problems and makes people's lives easier.
            I've started in the software industry as a self-taught developer and have since then worked for a variety of startups.
            I love the process of bringing ideas to life and seeing them being used by people. I'm awesome, simply hire me and
            you'll see.

            Here's what I've been up to lately:
          </p>
          <ul>
            <li>Building a SaaS application for a startup in the FinTech space</li>
            <li>Developing and bringing an automatic lecture registration system to market</li>
          </ul>
        </section>

        <section>
        <h2>Expertise</h2>
        <div>
          In my work I focus on the following areas:
          <ul>
            <li>Software Development</li>
            <li>DevOps</li>
            <li>Cloud Computing</li>
            <li>Agile/Scrum Project Management</li>
          </ul>

          Technologies I've worked with:
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Google Cloud Platform</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        </section>

        <section>
          <h2>Experience</h2>
          <div>
            Some text about my experience
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div>
            Some text about my past projects
          </div>
        </section>

        <section>
          <h2>Contact</h2>
          <div>
            Some text about how to contact me
            <ul>
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
