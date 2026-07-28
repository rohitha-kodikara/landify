import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden min-h-[500px] py-14">
      <div className="px-2 flex flex-col gap-7 mt-4 text-left">
        <h1 className="text-left text-4xl md:text-5xl font-bold text-white leading-tight">
          Learn how to design creative interfaces from scratch
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-md text-left">
          At Landify, we blend artistry and strategy to create designs that not
          only captivate but also elevate.
        </p>
        <div className="flex flex-col gap-2">
          <Button className="bg-indigo-600 text-white h-10">
            Buy the book
          </Button>
          <Button className="bg-gray-800 text-white h-10">Free preview</Button>
        </div>
        {/*parent div*/}
        <div>
          <div className="flex flex-row items-center">
            <img
              src="/p1.jpg"
              className="relative z-40 rounded-full w-9 h-9 border-2 border-white object-cover"
              alt="avatar 1"
            />
            <img
              src="/p2.jpg"
              className="relative -ml-3 z-30 rounded-full w-9 h-9 border-2 border-pink-300 object-cover"
              alt="avatar 2"
            />
            <img
              src="/p1.jpg"
              className="relative -ml-3 z-20 rounded-full w-9 h-9 border-2 border-purple-400 object-cover"
              alt="avatar 3"
            />
            <img
              src="/p2.jpg"
              className="relative -ml-3 z-10 rounded-full w-9 h-9 border-2 border-sky-300 object-cover"
              alt="avatar 4"
            />
            <div className="flex flex-col gap-1 px-3 items-start">
              <span className="text-white text-xs leading-relaxed">
                Trusted by 1M+ customers
              </span>
              <div className="flex flex-row gap-1 items-center ">
                <Star className="text-yellow-400 fill-yellow-400 h-4 -ml-0.5" />
                <Star className="text-yellow-400 fill-yellow-400 h-4" />
                <Star className="text-yellow-400 fill-yellow-400 h-4" />
                <Star className="text-yellow-400 fill-yellow-400 h-4" />
                <Star className="text-yellow-400 fill-yellow-400 h-4" />{" "}
                <span className="text-white text-[10px] leading-none">
                  4.2/5 (45k reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*parent div*/}
      </div>
    </div>
  );
};
export default Hero;
