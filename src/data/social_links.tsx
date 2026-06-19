import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:johannajanecamus@gmail.com",
    icon: <AiFillMail />,
  },
  {
    name: "GitHub",
    url: "https://github.com/johannajanecamus",
    icon: <AiFillGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/johanna-jane-camus-2a802b417/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Telegram",
    url: "https://t.me/johanna03",
    icon: <FaTelegram />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/639919666448",
    icon: <FaWhatsapp />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/johannajane.camusramirez/",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/cmsjnvyyll",
    icon: <FaInstagram />,
  },
];

export default socialLinks;
