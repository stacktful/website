import { FaArrowRight } from "react-icons/fa";

import AudioButton from "../AudioButton";

import headshot from "../../static/img/headshot.png";

import "./Hero.css";

function Hero({ name, role, audioSrc, summary }) {
  return (
    <header className="hero">
      <div className="hero-text">
        <h1>
          Hi, I'm<span className="hero-name"> {name}</span>
          <AudioButton src={audioSrc} ariaLabel={"Pronunciation audio"} />
        </h1>
        <h2 className="hero-headline">{role}</h2>
        <p className="hero-description">{summary}</p>
        <div className="hero-buttons">
          <a className="btn btn-primary" href="#contact">
            <span>Get in touch</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={headshot} alt={`Headshot of ${name}`} />
      </div>
    </header>
  );
}

export default Hero;
