import { motion } from "framer-motion";
import ProjectBtn from "./ProjectBtn";
import { fadeIn } from "../utils/variants";
import Avatar from "./Avatar";
import ParticlesContainer from "./ParticlesContainer";

const Home = () => {
  return (
    <div className="bg-primary/30 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1">
            Transforming ideas <br /> into {""}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            As a seasoned Full Stack Developer, I've journeyed through the
            intricate layers of web development, from the aesthetic intricacies
            of frontend design to the logical complexities of backend
            engineering. My passion lies in weaving together cutting-edge
            technologies,
          </motion.p>
          <div className="flex justify-center xl:hidden relative z-30">
            <ProjectBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex">
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1400px] h-full absolute -right-0 bottom-0">
        {/* <ParticlesContainer /> */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="bg-none xl:bg-avatar2 xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-color-dodge translate-z-0"></motion.div>

        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Home;