import { lazy, Suspense } from "react";
const TopLeftImage = lazy(() => import("./components/TopLeftImage"));
const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
import { motion } from "framer-motion";
import { fadeIn } from "./utils/variants";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-accent text-4xl font-bold">
            Loading...
          </motion.div>
        </div>
      }>
      <div id="home" className="h-screen">
        <TopLeftImage />
        <Navbar />
        <Header />
        <Home />
      </div>
      <div
        id="about"
        className="h-screen bg-site bg-cover bg-no-repeat relative w-full">
        <About />
      </div>
      <div
        id="projects"
        className="h-screen bg-site bg-cover bg-no-repeat relative w-full">
        <Projects />
      </div>
      <div
        id="contact"
        className="h-screen bg-site2 bg-cover bg-no-repeat relative w-full">
        <Contact />
      </div>
    </Suspense>
  );
};

export default App;
