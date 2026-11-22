import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

/* Contact section: an invitation to get in touch, and the links to do so.
   Texts are written as { en, nl, fr } (see src/i18n/localize.js). */

const links = [
  {
    icon: <MdOutlineAlternateEmail />,
    text: { en: "Email", nl: "E-mail", fr: "E-mail" },
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

const contact = {
  title: { en: "Contact", nl: "Contact", fr: "Contact" },
  heading: { en: "Let's connect!", nl: "Laten we kennismaken!", fr: "Restons en contact\u00A0!" },
  intro: {
    en: "Whether you have an exciting opportunity, a question, or just want to connect, I'd love to hear from you.",
    nl: "Of je nu een mooie kans hebt, een vraag, of gewoon wilt kennismaken: ik hoor graag van je.",
    fr: "Que vous ayez une belle opportunité, une question ou simplement envie d’échanger, je serai ravi d’avoir de vos nouvelles.",
  },
  links: links,
};

export default contact;
