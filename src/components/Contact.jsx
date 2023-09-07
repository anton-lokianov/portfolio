import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "./../utils/variants";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const FORMSPREE_KEY = import.meta.env.VITE_FORMSPREE_KEY;
  const [submit, handleSubmit] = useForm(FORMSPREE_KEY);

 
    if (submit.succeeded) {
      return
    }

  return (
    <div ref={ref} className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            exit="hidden"
            className="h2 text-center mb-12">
            Contact <span className="text-accent">me.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            exit="hidden">
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input"
                required
              />
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              className="input"
              required
            />
            <textarea
              placeholder="message"
              name="message"
              required
              className="textarea"></textarea>
            <button
              disabled={submit.submitting}
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
