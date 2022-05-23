import { AiFillGithub } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <span>Created by Phoebe Chang </span>
      <a
        href="https://github.com/phoebe03111/openai-project"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={25} />
      </a>
    </footer>
  );
};

export default Footer;
