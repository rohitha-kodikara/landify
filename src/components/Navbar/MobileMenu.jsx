import { Button } from "@base-ui/react";
import { X } from "lucide-react";
import React from "react";

const MobileMenu = ({ onClose }) => {
  return (
    <>
      <div className="bg-white  w-full px-5 flex flex-col h-full  fixed top-0 left-0 z-100 ">
        <div className="flex flex-row justify-between items-center py-2">
          <img src="/logo.png" className="w-8 h-auto rounded-lg" alt="" />
          <X className="text-black cursor-pointer" onClick={onClose} />
        </div>

        <div className="flex flex-col py-19 ">
          <ul className="flex flex-col gap-4 font-semibold tracking-normal text-neutral-800">
            <li>Features</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>

        <Button className="bg-blue-800 py-2  rounded-md max-w-lg mt-auto mb-9 text-white">
          Remix Template
        </Button>
      </div>
    </>
  );
};

export default MobileMenu;
