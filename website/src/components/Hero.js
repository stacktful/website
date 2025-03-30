import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoDownloadOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

import resumePDF from "../static/resume-thibaut.pdf";

const startDate = new Date(2018, 5, 1);
const role = "Fullstack Software Engineer";

function monthDiff(startDate) {
  const today = new Date();
  return (
    today.getMonth() -
    startDate.getMonth() +
    12 * (today.getFullYear() - startDate.getFullYear())
  );
}

function ResumeButton() {
  return (
    <button className="btn-resume">
      <a href={resumePDF} target="_blank">
        <IoDownloadOutline />
        {" Resume"}
      </a>
    </button>
  );
}

function AboutButton() {
  return (
    <button className="btn-about">
      {"About me "}
      <FaArrowRight />
    </button>
  );
}

function AudioButton({ src }) {
  const audioRef = useRef(null);
  const playAudio = () => {
    audioRef.current?.play();
  };

  return (
    <>
      <button
        className="btn-audio"
        onClick={playAudio}
        aria-label="Play name pronunciation"
      >
        <HiMiniSpeakerWave />
      </button>
      <audio ref={audioRef} src={src} preload="auto" />
    </>
  );
}

function Hero({ name, audioSrc, summary }) {
  const yearsOfExp = Math.floor(monthDiff(startDate) / 12);
  return (
    <header>
      <div className="hero-header">
        <div className="hero-text">
          <h1>
            Hi, I'm<span className="hero-name"> {name}</span>
            <AudioButton src={audioSrc} />
          </h1>
          <h2 className="hero-headline">{role}</h2>
        </div>
        <div className="hero-image">
          <img src={require("../static/img/portrait.png")}></img>
        </div>
      </div>
      <p className="hero-description">{summary}</p>
      <ResumeButton />
      <AboutButton />
    </header>
  );
}

export default Hero;
