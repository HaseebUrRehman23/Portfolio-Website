import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from 'react-icons/tb';
import { FaWordpress } from "react-icons/fa"
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, staggerContainer, viewport, zoomIn } from "../utils/motion";

const technologies = [
  { Icon: RiReactjsLine, colorClass: "text-cyan-400", name: "React" },
  { Icon: FaBootstrap, colorClass: "text-[#563d7c]", name: "Bootstrap" },
  { Icon: SiTailwindcss, colorClass: "text-[#38bdf8]", name: "Tailwind CSS" },
  { Icon: SiMysql, colorClass: "text-[#00758f]", name: "MySQL" },
  { Icon: SiDotnet, colorClass: "text-[#512bd4]", name: ".NET" },
  { Icon: FaAngular, colorClass: "text-[#dd0031]", name: "Angular" },
  { Icon: TbBrandCSharp, colorClass: "text-[#239120]", name: "C#" },
  { Icon: FaWordpress, colorClass: "text-[#21759b]", name: "WordPress" },
];

const Technologies = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className='border-b border-neutral-800 pb-24'>
      <motion.h2
        data-motion={Boolean(motion)}
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className='flex flex-wrap items-center justify-center gap-5'
      >
        {technologies.map(({ Icon, colorClass, name }, index) => {
          const iconNode = React.createElement(Icon, { className: `text-7xl ${colorClass}` })

          return (
          <motion.div
            key={name}
            variants={zoomIn(index * 0.05)}
            animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={prefersReducedMotion ? undefined : {
              y: {
                duration: 2.6 + (index % 3) * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              },
              type: "spring",
              stiffness: 220,
              damping: 14,
            }}
            whileHover={{
              y: -10,
              scale: 1.08,
              rotate: [0, -2, 2, 0],
              borderColor: "rgb(164 164 164)",
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
            }}
            className='group relative rounded-2xl border-4 border-neutral-800 bg-neutral-900/40 p-4'
            aria-label={name}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div whileHover={{ scale: 1.06 }}>
              {iconNode}
            </motion.div>
          </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Technologies
