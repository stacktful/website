import Section from "../Section";
import JobTitle from "../JobTitle";

function Testimonial({ name, role, company, quote, img }) {
  return (
    <div className="testimonial-wrapper">
      <img className="testimonial-image" src={img} />
      <div className="tile testimonial-tile">
        <blockquote>"{quote}"</blockquote>
        <div className="testimonial-reference">
          <h5 className="testimonial-name">— {name.toUpperCase()}</h5>
          <h5 className="testimonial-role">
            <JobTitle role={role} company={company} />
          </h5>
        </div>
      </div>
    </div>
  );
}

function Testimonials({ testimonials }) {
  return (
    <Section title="Testimonials">
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <Testimonial {...testimonial} key={index} />
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
