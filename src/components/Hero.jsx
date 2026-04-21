import React from 'react'
import { HERO_CONTENT } from '../constants'
import HeroImg from "../assets/HeroImg.png"
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, viewport } from "../utils/motion";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className='border-b border-neutral-900 pb-4 lg:mb-35'
    >
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1
                  variants={fadeIn("right", 0.18)}
                  className='pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl'
                >
                  Haseeb Ur Rehman
                </motion.h1>
                <motion.span
                  variants={fadeIn("right", 0.32)}
                  className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'
                >
                    Full-Stack Developer
                </motion.span>
                <motion.p
                    variants={fadeIn("right", 0.46)}
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'
                >
                    {HERO_CONTENT}
                </motion.p>
                <motion.a
                  variants={fadeIn("right", 0.6)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="/Haseeb's Resume.pdf"
                  download="Haseeb-Ur-Rehman-Resume.pdf"
                  className="mt-4 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/40"
                >
                  Download Resume
                </motion.a>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:px-8'>
            <div className='flex justify-center'>
                <motion.img
                  variants={fadeIn("left", 0.2)}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" } }}
                  src={HeroImg}
                  alt="Haseeb Ur Rehman profile"
                />
            </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
