import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Update Hash Without Causing Scroll
    const updateHash = (newHash) => {
      // Update the URL without adding a new entry to the history stack
      window.history.replaceState({}, "", newHash);
      setCurrentHash(newHash);
    };

    // IntersectionObserver Callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateHash(`#${entry.target.id}`);
        }
      });
    };

    // Setup IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    // Observing each element corresponding to nav items
    navData.forEach((navItem) => {
      const element = document.querySelector(navItem.path);
      if (element) observer.observe(element);
    });

    // Cleanup function
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    window.location.replace(path);
  };

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-30 top-0  w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((navLink, index) => (
          <a
            onClick={(e) => handleNavClick(e, navLink.path)}
            href={navLink.path}
            className={`${
              navLink.path === currentHash ? "text-accent" : ""
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            key={index}
          >
            <div className="fixed pr-14 right-0 hidden xl:group-hover:flex">
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
