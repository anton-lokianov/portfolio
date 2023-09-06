import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import TopLeftImage from "./components/TopLeftImage";
import bgImage from "./assets/site-bg.svg";

const App = () => {
  return (
    <>
      <div id="home" className="h-screen">
        <TopLeftImage />
        <Navbar />
        <Header />
        <Home />
      </div>
      <div
        id="about"
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-screen bg-cover bg-no-repeat relative">
        <About />
      </div>
      <div
        id="projects"
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-screen bg-cover bg-no-repeat relative">
        <Projects />
      </div>
      <div
        id="contact"
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-screen bg-cover bg-no-repeat relative">
        <Contact />
      </div>
    </>
  );
};

export default App;
