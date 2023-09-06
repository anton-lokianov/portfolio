import React, { lazy } from "react";

const TopLeftImage = lazy(() => import("./components/TopLeftImage"));
const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

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
        className="h-screen bg-site bg-cover bg-no-repeat relative">
        <About />
      </div>
      <div
        id="projects"
        className="h-screen bg-site bg-cover bg-no-repeat relative">
        <Projects />
      </div>
      <div
        id="contact"
        className="h-screen bg-site bg-cover bg-no-repeat relative">
        <Contact />
      </div>
    </>
  );
};

export default App;
