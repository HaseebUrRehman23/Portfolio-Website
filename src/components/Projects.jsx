import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion";
import { fadeIn, viewport } from "../utils/motion";

const Projects = () => {
  return (
    <section className='border-b border-neutral-900 pb-16'>
      <motion.h2
        data-motion={Boolean(motion)}
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>
      <div className='grid grid-cols-1 items-stretch gap-7 pb-10 sm:grid-cols-2 xl:grid-cols-4'>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeIn("up", index * 0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            whileHover={{ y: -8, scale: 1.01 }}
            className='flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/65 p-4 shadow-lg shadow-black/30'
          >
            <div className='mb-5 overflow-hidden rounded-xl border border-neutral-700/80'>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                src={project.image}
                alt={project.title}
                className='h-40 w-full object-cover'
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3 className='min-h-24 text-center text-2xl font-semibold leading-tight text-neutral-100'>
              {project.title}
            </h3>

            <p className='mt-3 min-h-20 text-center text-xs text-neutral-400'>
              {project.description}
            </p>

            <div className='mt-4 flex min-h-14 flex-wrap content-start justify-center gap-2 pb-3'>
              {project.technologies.map((tech) => (
                <span key={tech} className='rounded bg-neutral-800 px-2 py-1 text-[10px] font-medium tracking-wide text-cyan-300'>
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.liveUrl || "https://example.com"}
              target="_blank"
              rel="noopener noreferrer"
              className='mt-auto block w-full rounded-full border border-neutral-700/80 bg-neutral-900/70 px-4 py-2 text-center text-sm font-medium text-neutral-200 transition-colors hover:text-cyan-300'
            >
              Live demo
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
