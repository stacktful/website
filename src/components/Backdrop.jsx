import { useEffect, useRef, useState } from "react";

import "../styles/Backdrop.css";

/* Decorative background behind the whole page:
   - a faint dot grid, strongest near the top of the screen
   - a spotlight that lights up the dots around the mouse (devices with a mouse only)
   - a subtle film grain
   Purely visual: hidden from assistive technology and ignores pointer events. */
function BackdropLayers() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let frame = null;
    const onPointerMove = (event) => {
      if (event.pointerType !== "mouse") return;
      // update at most once per animation frame, without re-rendering React
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        spotlight.style.setProperty("--mx", `${event.clientX}px`);
        spotlight.style.setProperty("--my", `${event.clientY}px`);
        spotlight.classList.add("active");
      });
    };
    const onPointerLeave = () => spotlight.classList.remove("active");

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-grid" />
      <div className="backdrop-spotlight" ref={spotlightRef} />
      <div className="backdrop-grain" />
    </div>
  );
}

/* the active theme, read from <html data-theme> (set by useTheme) */
function useDocumentTheme() {
  const root = document.documentElement;
  const [theme, setTheme] = useState(root.dataset.theme);
  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(root.dataset.theme));
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, [root]);
  return theme;
}

/* WebKit (Safari and every browser on iOS) caches the fixed backdrop layer and does not always
   repaint it when only the theme's CSS variables change, leaving the old colors on screen until
   the next scroll. Rebuilding the layers on every theme change forces a fresh paint. */
function Backdrop() {
  const theme = useDocumentTheme();
  return <BackdropLayers key={theme} />;
}

export default Backdrop;
