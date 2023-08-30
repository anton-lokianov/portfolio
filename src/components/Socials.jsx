import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <a
        href="https://www.linkedin.com/in/anton-lokianov/"
        target="_blank "
        className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/anton-lokianov"
        target="_blank "
        className="hover:text-accent transition-all duration-300">
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
