import { useRef, useEffect, useState } from "react";

function AccordionItem({ children, isOpen }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="accordion-content"
      ref={contentRef}
      style={{
        maxHeight: `${height}px`,
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}

export default AccordionItem;
