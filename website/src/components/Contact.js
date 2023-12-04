import Section from "./Section";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

// const contacts = [
//   {
//     icon: "IoMailOutline",
//     text: "",
//     link: "",
//   },
//   {
//     icon: "IoLogoGithub",
//     text: "",
//     link: "",
//   },
//   {
//     icon: "IoLogoLinkedin",
//     text: "",
//     link: "",
//   },
//   {
//     icon: "IoLogoInstagram",
//     text: "",
//     link: "",
//   },
// ];

function Contact() {
  return (
    <Section title="Contact">
      <div className="contact-list">
        <div className="contact-item">
          <MdOutlineAlternateEmail />
          Email
        </div>
        <div className="contact-item">
          <FaLinkedin />
          LinkedIn
        </div>
        <div className="contact-item">
          <IoLogoGithub />
          GitHub
        </div>
      </div>
    </Section>
  );
}

export default Contact;
