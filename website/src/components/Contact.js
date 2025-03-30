import Section from "./layout/Section";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

const contacts = [
  {
    icon: <MdOutlineAlternateEmail />,
    text: "Email",
    link: "mailto:thibaut@stacktful.com",
  },
  {
    icon: <FaLinkedin />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/thibaut-van-bergen/",
  },
  {
    icon: <IoLogoGithub />,
    text: "GitHub",
    link: "https://github.com/stacktful",
  },
  {
    icon: <IoLogoInstagram />,
    text: "Instagram",
    link: "https://www.instagram.com/thibautvb/",
  },
];

function Contact() {
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
