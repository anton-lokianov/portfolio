import TopLeftImage from "./components/TopLeftImage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
        className="h-screen bg-site bg-cover bg-no-repeat relative w-full"
      >
        <About />
      </div>
      <div
        id="projects"
        className="h-screen bg-site bg-cover bg-no-repeat relative w-full"
      >
        <Projects />
      </div>
      <div
        id="contact"
        className="h-screen bg-site bg-cover bg-no-repeat relative w-full"
      >
        <Contact />
      </div>
    </>
  );
};

export default App;
