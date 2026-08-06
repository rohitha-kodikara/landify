import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const itemVariants = {
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

const faqs = [
  {
    value: "shipping",
    question: "What is included in the course materials?",
    answer:
      "The course materials include video lectures, downloadable resources, and interactive quizzes to enhance your learning experience.",
  },
  {
    value: "returns",
    question: "How long do I have access to the course after purchase?",
    answer:
      "You will have lifetime access to the course materials, including any updates or additions made in the future.",
  },
  {
    value: "support",
    question: "Can I download the course videos for offline viewing?",
    answer:
      "Yes, you can download the course videos to your device and watch them offline using our mobile app or desktop player.",
  },
  {
    value: "guarantee",
    question: "Is there a refund policy if I'm not satisfied with the course?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you are not satisfied with the course for any reason, you can request a full refund.",
  },
  {
    value: "prerequisites",
    question: "Are there prerequisites for taking this course?",
    answer:
      "This course is designed for beginners with no prior experience required. It covers all fundamental concepts step by step.",
  },
];

const FAQs = () => {
  return (
    <section className="lg:px-25 mt-8 z-0">
      <div className="pt-15  flex flex-col gap-5 leading-relaxed lg:gap-6 lg:mt-5 px-4 lg:w-2/3 lg:mx-auto ">
        <span className="text-left bg-blue-300 text-blue-800 px-3 lg:flex lg:flex-row self-start rounded-full py-1">
          WE'VE GOT ANSWERS
        </span>
        <h3 className="text-3xl font-bold lg:-mb-3 pt-4">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-700">
          Get quick answers to your questions and make an informed decision
          before starting your learning journey.
        </p>
        <div className="sm:flex flex-col sm:w-full sm:items-center">
          <Accordion defaultValue={["shipping"]} className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.value}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.35 }}
              >
                <AccordionItem
                  value={faq.value}
                  className="border-gray-300 py-2"
                >
                  <AccordionTrigger className="text-gray-600 [&_[data-slot=accordion-trigger-icon]]:size-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
