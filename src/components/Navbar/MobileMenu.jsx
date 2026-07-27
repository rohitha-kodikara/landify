import { Menu } from "lucide-react";
import React from "react";

const MobileMenu = ({ isScrolled }) => {
  return (
    <div
      className={`flex flex-row justify-between p-2 rounded-xl sticky top-2 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div>
        <img src="/logo.png" className="w-8 h-auto rounded-lg" alt="" />
      </div>
      <div className="flex items-center gap-5">
        <div className="bg-blue-600 text-white text-sm px-4 rounded-lg py-1">
          Remix Template
        </div>
        <div>
          <Menu className={isScrolled ? "text-black" : "text-white"} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
