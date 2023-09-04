import { useState, useEffect } from "react";
import { HiHome } from "react-icons/hi";
import { FaUser, FaProjectDiagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const navData = [
  { name: "home", path: "#home", icon: <HiHome /> },
  { name: "about", path: "#about", icon: <FaUser /> },
  { name: "projects", path: "#projects", icon: <FaProjectDiagram /> },
  { name: "contact", path: "#contact", icon: <AiOutlineMail /> },
];

const Navbar = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100); // After 100ms without scrolling, assume scrolling is done
    };

    const handleLinkClick = () => {
      setIsScrolling(true);
    };

    const observers = [];

    navData.forEach((navItem) => {
      const element = document.querySelector(navItem.path);

      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !isScrolling) {
              // Check if not scrolling
              setCurrentHash(navItem.path);
              window.location.hash = navItem.path;
            }
          },
          {
            threshold: 0.5,
          }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, [isScrolling]);

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-30 top-0  w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((navLink, index) => (
          <a
            href={navLink.path}
            className={`${
              navLink.path === currentHash ? "text-accent" : ""
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            key={index}>
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {navLink.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
              </div>
            </div>
            <div>{navLink.icon}</div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
