import useReveal from "../hooks/useReveal";

import "./Section.css";

function Section({ children, ...props }) {
  // the header and any ".reveal-item" inside animate in once the section scrolls into view
  const [ref, visible] = useReveal();
  return (
    <>
      {props.title && (
        <section id={props.id} ref={ref} className={`reveal${visible ? " is-visible" : ""}`}>
          <div className="section-header">
            <div className="section-header-line"></div>
            <h2 className="section-header-text">{props.title}</h2>
            <div className="section-header-line"></div>
          </div>
          {children}
        </section>
      )}
    </>
  );
}

export default Section;
