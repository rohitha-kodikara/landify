import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden min-h-[500px]">
      <div className="px-8 flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Learn how to design creative interfaces from scratch
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-md">
          At Landify, we blend artistry and strategy to create designs that not
          only captivate but also elevate.
        </p>
      </div>
    </div>
  );
};
export default Hero;
