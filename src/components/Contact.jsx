import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { fadeIn, viewport } from "../utils/motion";

const Contact = () => {
  return (
    <section className="py-16">
      <motion.h2
        data-motion={Boolean(motion)}
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mb-12 text-center text-5xl font-semibold tracking-tight text-neutral-100"
      >
        Get in touch
      </motion.h2>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="space-y-1 text-center text-sm text-neutral-300"
      >
        <p>{CONTACT.address}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="block transition-colors hover:text-cyan-300"
        >
          {CONTACT.email}
        </a>
        <a
          href={`tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`}
          className="block transition-colors hover:text-cyan-300"
        >
          {CONTACT.phoneNo}
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
