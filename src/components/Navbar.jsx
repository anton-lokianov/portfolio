import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useState, useEffect } from "react";

const navData = [
  { name: "home", path: "#home", icon: <HiHome /> },
  { name: "about", path: "#about", icon: <FaUser /> },
  { name: "projects", path: "#projects", icon: <FaProjectDiagram /> },
  { name: "contact", path: "#contact", icon: <AiOutlineMail /> },
];

const Navbar = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-30 top-0  w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((navLink, index) => (
          <a
            href={navLink.path}
            className={`${
              navLink.path === currentHash && "text-accent"
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
