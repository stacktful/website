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

export default contacts;
