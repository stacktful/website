import { IoDownloadOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

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
      {/* <p className="hero-greeting">Hi, my name is</p> */}
      <div className="hero-header">
        <div className="hero-text">
          <h1>
            Hi, I'm<span className="hero-name"> Thibaut</span>.
          </h1>
          <h2 className="hero-headline">Fullstack Software Engineer</h2>
        </div>
        <div className="hero-image">
          {/* <img src="../static/img/headshot.jpg"></img> */}
          <img src={require("../static/img/headshot.jpg")}></img>
        </div>
      </div>
      <p className="hero-description">
        <span style={{ color: "var(--primary-color" }}>
          Full Stack Software Engineer
        </span>{" "}
        with over {yearsOfExp}+ years of experience in the software engineering
        field, helping start-ups / scale-ups bring their concept product to an
        application in production, all with clean and maintainable code adhering
        to the industry's best practices.
      </p>
      <button>
        <IoDownloadOutline />
        {" Resume"}
      </button>
      <button className="btn-about">
        {"About me "}
        <FaArrowRight />
      </button>
    </header>
  );
}

export default Hero;
