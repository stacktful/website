function Hero() {
  return (
    <header>
      <p className="hero-greeting">Hi, my name is</p>
      <h1 className="hero-name">Thibaut van Bergen,</h1>
      <h1 className="hero-headline">I build SaaS applications.</h1>
      <p className="hero-description">
        <span style={{ color: "var(--primary-color" }}>
          Full Stack Software Engineer
        </span>{" "}
        with over 5+ years of experience in the software engineering field,
        helping start-ups bring their concept application to production, all
        with clean and maintainable code adhering to the industry's best
        practices.
      </p>
    </header>
  );
}

export default Hero;
