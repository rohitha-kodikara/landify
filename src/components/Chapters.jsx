import React from "react";
import { Album } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Chapters = () => {
  return (
    <section className="learn lg:px-25 mt-18 z-0">
      <div className="flex flex-col gap-4 lg:gap-6 lg:mt-5 px-4 ">
        <span className=" bg-blue-300 text-blue-800 px-3 lg:flex lg:flex-row self-start rounded-full py-1">
          BOOK CHAPTERS
        </span>
        <span className="text-3xl font-bold lg:-mb-3 pt-4">
          From basics to advanced. Definitive guide to{" "}
          <span className="text-indigo-700">modern design.</span>
        </span>
        <span className="text-gray-700 lg:pb-3">
          A structured journey through the principles, tools, and techniques
          that power today's most impactful digital experiences.
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="flex flex-col border-rose-200 border gap-2 bg-gray-100 p-4 rounded-lg"
          >
            <Album className="text-indigo-700 fill-indigo-200" />
            <h3 className="text-black font-bold">Foundations of Design</h3>
            <p className="text-gray-700">
              Learn the core principles of layout, typography, color theory, and
              visual hierarchy that form every great interface.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="flex flex-col border-rose-200 border gap-2 bg-gray-100 p-4 rounded-lg"
          >
            <Album className="text-indigo-700 fill-indigo-200" />
            <h3 className="text-black font-bold">User-Centered Research</h3>
            <p className="text-gray-700">
              Discover how to understand user needs, conduct interviews, and
              turn insights into actionable design decisions.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="flex flex-col border-rose-200 border gap-2 bg-gray-100 p-4 rounded-lg"
          >
            <Album className="text-indigo-700 fill-indigo-200" />
            <h3 className="text-black font-bold">Wireframing & Prototyping</h3>
            <p className="text-gray-700">
              Move from rough sketches to interactive prototypes that validate
              ideas quickly and communicate clearly with stakeholders.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="flex flex-col border-rose-200 border gap-2 bg-gray-100 p-4 rounded-lg"
          >
            <Album className="text-indigo-700 fill-indigo-200" />
            <h3 className="text-black font-bold">Visual Design Systems</h3>
            <p className="text-gray-700">
              Build scalable design systems with reusable components, tokens,
              and guidelines that keep products consistent across teams.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="flex flex-col border-rose-200 border gap-2 bg-gray-100 p-4 rounded-lg"
          >
            <Album className="text-indigo-700 fill-indigo-200" />
            <h3 className="text-black font-bold">
              Advanced Interaction Design
            </h3>
            <p className="text-gray-700">
              Master motion, micro-interactions, accessibility, and responsive
              behavior to craft polished, production-ready experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chapters;
