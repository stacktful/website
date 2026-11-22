import Section from "../Section";

import "./Contact.css";

function Contact({ title, heading, intro, links }) {
  return (
    <Section title={title} id="contact">
      <div className="contact-cta">
        <h2>{heading}</h2>
        <p>{intro}</p>
      </div>
      <div className="contact-list">
        {links.map((contact, index) => (
          <a key={index} className="contact-item" href={contact.link} target="_blank" rel="noopener noreferrer">
            {contact.icon}
            {contact.text}
          </a>
        ))}
      </div>
    </Section>
  );
}

export default Contact;
