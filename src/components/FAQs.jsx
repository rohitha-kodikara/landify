import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <AccordionItem value="shipping" className="border-gray-300 py-2">
              <AccordionTrigger className="text-gray-600  [&_[data-slot=accordion-trigger-icon]]:size-5">
                What is included in the course materials?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The course materials include video lectures, downloadable
                resources, and interactive quizzes to enhance your learning
                experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns" className="border-gray-300 py-2">
              <AccordionTrigger className="text-gray-600 [&_[data-slot=accordion-trigger-icon]]:size-5">
                How long do I have access to the course after purchase?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You will have lifetime access to the course materials, including
                any updates or additions made in the future.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support" className="border-gray-300 py-2">
              <AccordionTrigger className="text-gray-600 [&_[data-slot=accordion-trigger-icon]]:size-5">
                Can I download the course videos for offline viewing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, you can download the course videos to your device and watch
                them offline using our mobile app or desktop player.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="guarantee" className="border-gray-300 py-2">
              <AccordionTrigger className="text-gray-600 [&_[data-slot=accordion-trigger-icon]]:size-5">
                Is there a refund policy if I'm not satisfied with the course?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee. If you are not
                satisfied with the course for any reason, you can request a full
                refund.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="prerequisites"
              className="border-gray-300 py-2"
            >
              <AccordionTrigger className="text-gray-600 [&_[data-slot=accordion-trigger-icon]]:size-5">
                Are there prerequisites for taking this course?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                This course is designed for beginners with no prior experience
                required. It covers all fundamental concepts step by step.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
