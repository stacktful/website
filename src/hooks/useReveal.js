import { useEffect, useRef, useState } from "react";

/* Becomes true once the element has scrolled into view, and stays true.
   Pair the returned ref with the "reveal" / "is-visible" classes (see App.css). */
export default function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // threshold 0 (not a ratio) so sections taller than the screen still trigger;
      // the negative margin waits until the top has moved a bit into view
      { threshold: 0, rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
