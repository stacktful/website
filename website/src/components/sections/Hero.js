import { FaArrowRight } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";

import AudioButton from "../AudioButton";

import resumePDF from "../../static/resume-thibaut.pdf";

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
          <img src={require("../../static/img/portrait.png")}></img>
        </div>
      </div>
      <p className="hero-description">{summary}</p>
      <button className="btn-resume">
        <a href={resumePDF} target="_blank">
          <IoDownloadOutline />
          <span>Resume</span>
        </a>
      </button>
      <button className="btn-about">
        <a href={"/"} target="">
          <span>About me</span>
          <FaArrowRight />
        </a>
      </button>
    </header>
  );
}

export default Hero;
