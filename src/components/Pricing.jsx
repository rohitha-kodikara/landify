import React from "react";
import { CircleCheck } from "lucide-react";

const Pricing = () => {
  return (
    <section className="lg:px-25 mt-10 z-0">
      <div className="pt-15  flex flex-col gap-5 leading-relaxed lg:gap-6 lg:mt-5 px-4 bg-hero-gradient text-white rounded-md">
        <h2>Explore our pricing options</h2>
        <p>
          Choose the plan that best fits your needs and start your journey to
          mastering modern design today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 border-t-2 border-gray-500 rounded-lg p-8 flex flex-col gap-8">
            <span className="text-sm text-gray-300 bg-gray-800 px-4 py-1 rounded-lg self-start">
              Free preview
            </span>
            <div>
              <span className="pl-3 py-1 font-extrabold text-3xl">$0</span>
              <span className="text-sm pl-1 py-1 text-gray-400">
                Try it before you buy
              </span>
            </div>
            <button className="bg-gray-800 border-t-2 border-gray-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Free preview
            </button>
            <div className="flex flex-col gap-2">
              <span className="text-gray-300">Key features</span>
              <ul className="flex flex-col gap-1 [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Access to first 2 chapters
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Limited access to resources
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Community support
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 border-t-2 border-indigo-500 rounded-lg p-8 flex flex-col gap-8">
            <span className="text-sm text-indigo-200 bg-indigo-900 px-4 py-1 rounded-lg self-start">
              The Essentials
            </span>
            <div>
              <span className="pl-3 py-1 font-extrabold text-3xl">$99</span>
              <span className="text-sm pl-1 py-1 text-gray-400">
                One-time payment
              </span>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
              Buy now
            </button>
            <div className="flex flex-col gap-2">
              <span className="text-gray-300">Key features</span>
              <ul className="flex flex-col gap-1 [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Full access to all chapters
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Advanced techniques
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Interactive resources
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Community access
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> 30-day money back
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 border-t-2 border-amber-500 rounded-lg p-8 flex flex-col gap-8">
            <span className="text-sm text-amber-200 bg-amber-900 px-4 py-1 rounded-lg self-start">
              Premium Bundle
            </span>
            <div>
              <span className="pl-3 py-1 font-extrabold text-3xl">$149</span>
              <span className="text-sm pl-1 py-1 text-gray-400">
                One-time payment
              </span>
            </div>
            <button className="bg-gray-800 border-t-2 border-gray-600 text-white px-4 py-2 rounded-lg hover:bg-amber-600">
              Buy now
            </button>
            <div className="flex flex-col gap-2">
              <span className="text-gray-300">Key features</span>
              <ul className="flex flex-col gap-1 [&_li]:flex [&_li]:items-center [&_li]:gap-2">
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Everything in Essentials
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> 1-on-1 mentorship session
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Exclusive design templates
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Lifetime updates
                </li>
                <li className="text-gray-300">
                  <CircleCheck size={17} /> Priority community support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
