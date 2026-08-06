import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ratingFeedbacks = [
  {
    id: 1,
    stars: 5,
    comment:
      "Landify helped us ship faster with cleaner design decisions across every screen.",
  },
  {
    id: 2,
    stars: 4,
    comment:
      "The templates are flexible and modern, but still easy for our team to customize.",
  },
  {
    id: 3,
    stars: 3,
    comment:
      "Good starting point for prototypes and quick experiments inside our workflow.",
  },
  {
    id: 4,
    stars: 2,
    comment:
      "Solid visuals, though we needed extra tweaks for some advanced interactions.",
  },
  {
    id: 5,
    stars: 1,
    comment:
      "Helpful for inspiration, but our use case required a deeper custom build.",
  },
];

const Hero = () => {
  return (
    <div className=" flex flex-col overflow-hidden lg:px-28  py-14 text-white px-3 sm:grid sm:grid-cols-2 gap-3 sm:gap-8">
      <div className="lg:flex lg:flex-col justify-center  lg:gap-6 ">
        <h1 className="text-4xl font-bold mb-4">
          Learn how to design creative interfaces from scratch
        </h1>
        <p className="text-neutral-300">
          At Landify, we blend artistry and strategy to create designs that not
          only captivate but also elevate.
        </p>
        <div className="flex flex-col gap-3 mt-6 lg:flex-row lg:gap-4 ">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded">
            Free preview
          </button>
        </div>
        {/*star rating*/}
        <div className="flex items-center gap-3 mt-6 sm:flex sm:flex-row sm:gap-6">
          <div className="flex items-center">
            <img
              src="/p1.jpg"
              alt="avatar 1"
              className="w-10 h-10 rounded-full border-2 border-[#0f1020] object-cover"
            />
            <img
              src="/p2.jpg"
              alt="avatar 2"
              className="-ml-3 w-10 h-10 rounded-full border-2 border-[#0f1020] object-cover"
            />
            <img
              src="/kamelia.jpg"
              alt="avatar 3"
              className="-ml-3 w-10 h-10 rounded-full border-2 border-[#0f1020] object-cover"
            />
            <img
              src="/ej.jpg"
              alt="avatar 4"
              className="-ml-3 w-10 h-10 rounded-full border-2 border-[#0f1020] object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-semibold leading-tight">
              Trusted by 1M+ customers
            </span>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-2 text-sm text-neutral-300">
                4.2/5 (45k reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20  flex justify-center sm:mt-0 sm:justify-self-end ">
        <img
          src="/purple.png"
          alt="purple"
          className="w-105 max-w-full rounded-xl object-cover"
        />
      </div>
      <div className="mt-12 w-full sm:col-span-2">
        <Carousel
          opts={{ align: "start", containScroll: "trimSnaps" }}
          className="relative w-full max-w-none px-12"
        >
          <CarouselContent>
            {ratingFeedbacks.map((feedback) => (
              <CarouselItem
                key={feedback.id}
                className="flex basis-full sm:basis-1/2 md:basis-1/3 "
              >
                <div className="p-1  h-full w-full">
                  <Card className="h-full min-h-50 border-white/10 bg-[#0b0b14] text-white ">
                    <CardContent className="p-5 sm:p-6 ">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, starIndex) => {
                          const isFilled = starIndex < feedback.stars;

                          return (
                            <Star
                              key={starIndex}
                              className={`h-4 w-4 ${
                                isFilled
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-neutral-600"
                              }`}
                            />
                          );
                        })}
                      </div>
                      <p className="t-4 flex-1 text-sm leading-relaxed pt-3 text-neutral-200">
                        {feedback.comment}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 bottom-auto my-0 -translate-x-1/2 -translate-y-1/2 size-10 [&_svg]:size-6" />
          <CarouselNext className="right-2 top-1/2 bottom-auto my-0 translate-x-1/2 -translate-y-1/2 size-10 [&_svg]:size-6" />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
