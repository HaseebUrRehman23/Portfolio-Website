import React from "react";
import AboutImg from "../assets/AboutImg.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, viewport } from "../utils/motion";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        data-motion={Boolean(motion)}
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:px-6">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl w-[230px] md:w-[280px] lg:w-[330px]"
              src={AboutImg}
              alt="About Me"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-4">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
