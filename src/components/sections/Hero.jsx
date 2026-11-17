import { FaArrowRight } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

import AudioButton from "../AudioButton";

import resumePDF from "../../static/cv.pdf";
import portrait from "../../static/img/portrait.png";

import "../../styles/Hero.css";

function Hero({ name, role, audioSrc, summary }) {
  return (
    <header>
      <div className="hero-header">
        <div className="hero-text">
          <h1>
            Hi, I'm<span className="hero-name"> {name}</span>
            <AudioButton src={audioSrc} ariaLabel={"Pronunciation audio"} />
          </h1>
          <h2 className="hero-headline">{role}</h2>
        </div>
        <div className="hero-image">
          <img src={portrait} alt={`Portrait of ${name}`} />
        </div>
      </div>
      <p className="hero-description">{summary}</p>
      <div className="hero-buttons">
        <button className="btn-resume">
          <a className="flex-row-center" href={resumePDF} target="_blank" rel="noopener noreferrer">
            <IoDownloadOutline />
            <span>Resume</span>
          </a>
        </button>
        <button className="btn-about">
          <a className="flex-row-center" href="#contact">
            <span>Get in touch</span>
            <FaArrowRight />
          </a>
        </button>
      </div>
    </header>
  );
}

export default Hero;
