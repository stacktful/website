function Section({ children, ...props }) {
  return (
    <>
      {props.title && (
        <section id={props.id}>
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
