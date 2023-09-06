import image from "../../public/anton-lokianov-logo.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="fixed top-0 z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <a href="/">
            <img src={image} width={220} height={48} alt="" />
          </a>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
