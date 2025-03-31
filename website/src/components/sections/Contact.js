import Section from "../Section";

function Contact({ contacts }) {
  return (
    <Section title="Contact">
      <div className="contact-cta">
        <h2>Let's get in touch!</h2>
        <p>
          Whether you have an exciting opportunity, a question, or just want to
          connect, I'd love to hear from you.
        </p>
      </div>
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <a
            key={index}
            className="contact-item"
            href={contact.link}
            target="_blank"
          >
            {contact.icon}
            {contact.text}
          </a>
        ))}
      </div>
    </Section>
  );
}

export default Contact;
