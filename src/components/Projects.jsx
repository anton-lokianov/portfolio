import Bulb from "./Bulb";
import ProjectSlider from "./ProjectSlider";
import { motion } from "framer-motion";
import { fadeIn } from "./../utils/variants";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              exit="hidden"
              className="h2 xl:mt-12">
              My Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Take a moment to browse through my curated selection of projects. I invite you to explore and see my code
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            exit="hidden"
            className="w-full xl:max-w-[65%]">
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Projects;
