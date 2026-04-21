import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="hidden"
      animate="show"
      className="mb-20 flex items-center justify-between py-6"
    >
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          whileHover={{ rotate: 10, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="mx-2 w-30"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/haseeb-ur-rehman-webdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/HaseebUrRehman23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://x.com/Haseeb47752839"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaSquareXTwitter />
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
