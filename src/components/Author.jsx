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
      delay: index * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Author = () => {
  return (
    <section className="learn lg:px-25 mt-16 z-0">
      <div className="flex flex-col gap-4 lg:gap-6 lg:mt-5 px-4">
        <span className="bg-blue-300 text-blue-800 px-3 lg:flex lg:flex-row self-start rounded-full py-1">
          ABOUT THE AUTHOR
        </span>
        <span className="text-3xl font-bold lg:-mb-3">
          Meet our design {"  "}
          <span className="text-indigo-700">specialist</span>
        </span>
        <div className="sm:grid sm:grid-cols-2 gap-8 items-center sm:pt-5">
          <div className="sm:order-1 sm:flex-1 sm:flex-col sm: gap-6 ">
            <motion.p
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.35 }}
              custom={0}
              className="order-1 text-gray-700 lg:pb-3 text-justify leading-relaxed"
            >
              With a passion for creativity and a knack for problem-solving, our
              author offers a unique perspective to the world of design.
            </motion.p>
            <br />
            <motion.p
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.35 }}
              custom={1}
              className="order-last text-gray-700 lg:pb-3 text-justify leading-relaxed"
            >
              His journey began with a passion for crafting delightful user
              experiences, propelling him to explore the intricate relationship
              between form and function.
            </motion.p>
            <br />
          </div>
          <div className="sm:order-2 sm:flex sm:flex-col sm: gap-4 ">
            <motion.p
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.35 }}
              custom={2}
              className="order-2 text-gray-700 lg:pb-3 text-justify leading-relaxed"
            >
              With years of hands-on experience and a dedication to ongoing
              learning, he excels in simplifying complex concepts into practical
              insights. His mission? Empowering aspiring designers.
            </motion.p>
            <div className="order-last flex flex-row gap-4 mt-3 items-center">
              <img
                src="/public/ej.jpg"
                className="rounded-full w-14 h-14 border-2 border-amber-200"
                alt=""
              />
              <div className="flex flex-col gap-1 mt-2 ">
                <span>Olivia Power</span>
                <span>UI Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
