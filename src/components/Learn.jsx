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

const Learn = () => {
  return (
    <section className="learn lg:px-25 mt-10 z-0">
      <div className="flex flex-col gap-4 lg:gap-6 lg:mt-5 px-4">
        <span className="bg-blue-300 text-blue-800 px-3 lg:flex lg:flex-row self-start rounded-full py-1">
          WHAT YOU'LL LEARN
        </span>
        <span className="text-3xl font-bold lg:-mb-3">
          Master the Essentials of {"  "}
          <span className="text-indigo-700">Creative Design</span>
        </span>
        <span className="text-gray-700 lg:pb-3">
          Gain expertise in design, explore processes, and effortlessly apply
          best practices to create stunning, user-friendly interfaces.
        </span>
        {/*small paragraph cards*/}
        <div className="flex flex-col sm:flex sm:flex-row gap-4 sm:gap-6">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="flex flex-col sm:flex-1 border-rose-200 border gap-2 bg-gray-100 p-4 rounded-lg"
          >
            <Album className="text-indigo-700 fill-indigo-200" />
            <h3 className="text-black font-bold">
              Best practices for creating a user friendly product
            </h3>
            <p className="text-gray-700">
              Discover proven techniques for crafting intuitive and engaging
              products.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="flex flex-col sm:flex-1 border-rose-200 border gap-2 bg-gray-100 p-4 rounded-lg"
          >
            <Album className="text-indigo-700 fill-indigo-200" />
            <h3 className="text-black font-bold">
              Delve into the design process from concept to execution
            </h3>
            <p className="text-gray-700">
              Explore every stage of the journey, from brainstorming creative
              concepts to bringing them to life.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            className="flex flex-col sm:flex-1 border-rose-200 border gap-2 bg-gray-100 p-4 rounded-lg"
          >
            <Album className="text-indigo-700 fill-indigo-200" />
            <h3 className="text-black font-bold">
              Acquire essential knowledge and industry insights
            </h3>
            <p className="text-gray-700">
              Acquire essential insights to begin your design journey,
              empowering you to navigate the industry landscape effectively.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
