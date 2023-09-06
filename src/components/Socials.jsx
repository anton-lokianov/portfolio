import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <a
        href="https://www.linkedin.com/in/anton-lokianov/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Anton Lokianov's LinkedIn"
        className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/anton-lokianov"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Anton Lokianov's GitHub"
        className="hover:text-accent transition-all duration-300">
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
