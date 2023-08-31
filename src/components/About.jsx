import Circles from "./Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { aboutData } from "../utils/constants";

const About = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">
            Captivating <span className="text-accent">stories</span> birth
            awesome designs
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 xl:mb-6 px-2 xl:px-0">
            I began my journey into web development and discovered passion for
            creating beautiful, intuitive, and highly functional websites and
            applications. I have experience working with both front-end and
            back-end technologies, and I am always eager to learn new
            technologies and improve my skills.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex mx-auto flex-col text-center xl:mx-0">
            {aboutData.map((item, index) => (
              <div
                key={index}
                className="capitalize xl:text-4xl mt-5  text-accent">
                {item.title}
              </div>
            ))}
            <div className="flex gap-x-5 gap-y-3 flex-wrap mt-5 justify-center text-white">
              {aboutData[0].skills.map((skill, index) => (
                <div
                  className="xl:text-8xl md:text-3xl xs:text-2xl flex flex-col items-center gap-y-1"
                  key={index}>
                  {skill.icon}
                  <div className="xl:text-sm">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
