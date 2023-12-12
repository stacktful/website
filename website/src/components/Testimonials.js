import Section from "./Section";

import Me from "../static/img/headshot.png";
import ConnoKuyt from "../static/img/conno-kuyt.jpg";
import ElonMusk from "../static/img/elon-musk.jpg";

const testimonials = [
  {
    name: "Thibaut van Bergen",
    role: "Founder",
    company: "Stacktful",
    quote:
      "This guy is a genius, he's like the Einstein of IT, but better. \
    He has a sexy french accent too. Hire him now or regret it for the rest of your days.",
    img: Me,
  },
  {
    name: "Conno Kuyt",
    role: "Head of Product",
    company: "EBITWISE",
    quote:
      "I never believed in unicorns until I met Thibaut, he's a real one. Everything he touches turns to gold. \
      You can't go wrong with this guy.",
    img: ConnoKuyt,
  },
  {
    name: "Elon Musk",
    role: "CEO",
    company: "Tesla",
    quote:
      "I wish I was as smart as Thibaut. And he's good looking too. I'm jealous.",
    img: ElonMusk,
  },
];

function Testimonial({ name, role, company, quote, img }) {
  return (
    <div className="testimonial-wrapper">
      <img className="testimonial-image" src={img} />
      <div className="testimonial-item">
        <blockquote>"{quote}"</blockquote>
        <div className="testimonial-reference">
          <h5 className="testimonial-name">— {name.toUpperCase()}</h5>
          <h5 className="testimonial-role">
            {role} @ {company}
          </h5>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
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
