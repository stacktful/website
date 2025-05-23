import Section from "../Section";
import JobTitle from "../JobTitle";
import Tile from "../Tile";

import "../../styles/Testimonials.css";

function Testimonial({ name, role, company, quote, img }) {
  return (
    <div className="testimonial-wrapper">
      <img className="testimonial-image" src={img} />
      <Tile className="testimonial-tile">
        <div className="testimonial-quote">"{quote}"</div>
        <div className="testimonial-reference">
          <h5 className="testimonial-name">— {name.toUpperCase()}</h5>
          <h5 className="testimonial-role">
            <JobTitle role={role} company={company} />
          </h5>
        </div>
      </Tile>
    </div>
  );
}

function Testimonials({ testimonials }) {
  return (
    <Section title="Testimonials" id="testimonials">
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <Testimonial {...testimonial} key={index} />
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
