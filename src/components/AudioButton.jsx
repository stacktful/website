import { useRef } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";

function AudioButton({ src, ariaLabel }) {
  const audioRef = useRef(null);
  const playAudio = () => audioRef.current?.play();

  return (
    <>
      <button className="btn-audio" onClick={playAudio} aria-label={ariaLabel}>
        <HiMiniSpeakerWave />
      </button>
      <audio ref={audioRef} src={src} preload="auto" />
    </>
  );
}

export default AudioButton;
