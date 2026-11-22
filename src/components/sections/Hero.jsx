import { FaArrowRight } from "react-icons/fa";

import AudioButton from "../AudioButton";

import headshot from "../../static/img/headshot.png";

import "./Hero.css";

function Hero({ greeting, name, role, audioSrc, pronunciationLabel, headshotAlt, summary, cta }) {
  return (
    <header className="hero">
      <div className="hero-text">
        <h1>
          {greeting}{" "}
          {/* kept on one line, so the speaker icon never wraps away from the name */}
          <span className="hero-name-group">
            <span className="hero-name">{name}</span>
            <AudioButton src={audioSrc} ariaLabel={pronunciationLabel} />
          </span>
        </h1>
        <h2 className="hero-headline">{role}</h2>
        <p className="hero-description">{summary}</p>
        <div className="hero-buttons">
          <a className="btn btn-primary" href="#contact">
            <span>{cta}</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={headshot} alt={headshotAlt} />
      </div>
    </header>
  );
}

export default Hero;
