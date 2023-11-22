const startDate = new Date(2018, 5, 1);

function monthDiff(startDate) {
  const today = new Date();
  return (
    today.getMonth() -
    startDate.getMonth() +
    12 * (today.getFullYear() - startDate.getFullYear())
  );
}

function Hero() {
  const yearsOfExp = Math.floor(monthDiff(startDate) / 12);
  return (
    <header>
      <p className="hero-greeting">Hi, my name is</p>
      <div className="hero-header">
        <div className="hero-text">
          <h1 className="hero-name">Thibaut van Bergen,</h1>
          <h1 className="hero-headline">I build SaaS applications.</h1>
        </div>
        <div className="hero-image">
          {/* <img src="../static/img/headshot.jpg"></img> */}
          <img src={require("../static/img/headshot.png")}></img>
        </div>
      </div>
      <p className="hero-description">
        <span style={{ color: "var(--primary-color" }}>
          Full Stack Software Engineer
        </span>{" "}
        with over {yearsOfExp}+ years of experience in the software engineering
        field, helping start-ups bring their concept application to production,
        all with clean and maintainable code adhering to the industry's best
        practices.
      </p>
    </header>
  );
}

export default Hero;
