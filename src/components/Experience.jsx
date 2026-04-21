import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion";
import { fadeIn, viewport } from "../utils/motion";

const Experience = () => {
  return (
    <section className='border-b border-neutral-900 pb-4'>
      <motion.h2
        data-motion={Boolean(motion)}
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className='my-20 text-center text-4xl'
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index)=>(
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              whileHover={{ y: -4 }}
              className='mb-8 flex flex-wrap rounded-xl p-4 lg:justify-center'
            >
                <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className='mb-2 font-semibold'>
                    {experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span>
                  </h6>
                  <p className='mb-4 text-neutral-400'>{experience.description}</p>
                  {experience.technologies.map((tech, index)=> (
                    <span key={index} className='mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300'>{tech}</span>
                  ))}
                </div>
            </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
