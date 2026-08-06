import React from "react";
import { Star } from "lucide-react";
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

const reviews = [
  {
    id: 1,
    name: "Lucas Carter",
    handle: "@lucascarter",
    image: "/pp1.jpg",
    count: 5,
    content:
      "Landify elevates our marketing strategy. Instantly generate compelling copy to enhance campaigns. Keeping us ahead of the curve.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    handle: "@sarahm",
    image: "/p2.jpg",
    count: 2,
    content:
      "A game-changer for my design workflow. The practical examples made complex concepts easy to grasp and apply immediately.",
  },
  {
    id: 3,
    name: "James Rodriguez",
    handle: "@jamesr",
    image: "/pp3.jpg",
    count: 4,
    content:
      "Finally, a resource that bridges theory and practice. My portfolio has improved dramatically since reading this guide.",
  },
  {
    id: 4,
    name: "Emma Thompson",
    handle: "@emmat",
    image: "/p4.jpg",
    count: 5,
    content:
      "The chapter on design systems alone was worth it. Clear, concise, and packed with actionable insights for any designer.",
  },
  {
    id: 5,
    name: "Michael Chen",
    handle: "@mchen",
    image: "/p5.jpg",
    count: 4,
    content:
      "From wireframing to advanced interactions, this ebook covers it all. Highly recommend it for both beginners and pros.",
  },
  {
    id: 6,
    name: "Olivia Park",
    handle: "@oliviapark",
    image: "/pp4.jpg",
    count: 3,
    content:
      "Transformed how I approach user research. The frameworks are simple yet powerful, and the results speak for themselves.",
  },
  {
    id: 7,
    name: "Daniel Foster",
    handle: "@danielf",
    image: "/pp1.jpg",
    count: 2,
    content:
      "Well-structured and beautifully designed. It feels like having a senior designer mentor you through every chapter.",
  },
  {
    id: 8,
    name: "Ava Williams",
    handle: "@avaw",
    image: "/pp2.jpg",
    count: 1,
    content:
      "I keep coming back to this guide. It has become my go-to reference whenever I start a new project or feel stuck creatively.",
  },
];

const Reviews = () => {
  return (
    <section className="lg:px-25 mt-10 z-0">
      <div className="flex flex-col gap-4 lg:gap-6 lg:mt-5 px-4">
        <span className="text-left bg-blue-300 text-blue-800 px-3 lg:flex lg:flex-row self-start rounded-full py-1">
          REVIEWS
        </span>
        <h3 className="text-3xl font-bold lg:-mb-3 pt-4">
          Thousands of rave reviews
        </h3>
        <p className="text-gray-700">
          Explore reader feedback praising our ebook for its clarity,
          practicality, and transformative impact on design skills. Join a
          community of satisfied learners who have elevated their creative
          journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.35 }}
              className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg border border-rose-200"
            >
              <div className="flex gap-1">
                {[...Array(review.count)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 flex-grow">{review.content}</p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-200"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-black">
                      {review.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {review.handle}
                    </span>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
