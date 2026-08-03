import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden  py-14 text-white px-3 sm:grid sm:grid-cols-2 gap-3 sm:gap-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Learn how to design creative interfaces from scratch
        </h1>
        <p className="text-neutral-300">
          At Landify, we blend artistry and strategy to create designs that not
          only captivate but also elevate.
        </p>
        <div className="flex flex-col gap-3 mt-6">
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
      <div className="mt-20 flex justify-center sm:mt-0 sm:justify-self-end">
        <img
          src="/purple.png"
          alt="purple"
          className="w-[420px] max-w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
