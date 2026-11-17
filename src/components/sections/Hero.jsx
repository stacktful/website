import { FaArrowRight } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

import AudioButton from "../AudioButton";

import resumePDF from "../../static/cv.pdf";
import portrait from "../../static/img/portrait.png";

import "../../styles/Hero.css";

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
          <a className="btn btn-primary" href={resumePDF} target="_blank" rel="noopener noreferrer">
            <IoDownloadOutline />
            <span>Resume</span>
          </a>
          <a className="btn btn-secondary" href="#contact">
            <span>Get in touch</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={portrait} alt={`Portrait of ${name}`} />
      </div>
    </header>
  );
}

export default Hero;
