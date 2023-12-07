import Section from "./Section";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

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
];

function Contact() {
  return (
    <Section title="Contact">
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
