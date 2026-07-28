import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <>
        <div
          className={` flex flex-row justify-between p-2 rounded-xl sticky top-2 z-60 transition-colors duration-300 ${
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
              {menuOpen ? (
                <X className="text-black" onClick={() => setMenuOpen(false)} />
              ) : (
                <Menu
                  onClick={() => setMenuOpen((t) => !t)}
                  className={isScrolled ? "text-black " : "text-white"}
                />
              )}
            </div>
          </div>
        </div>
        {/* MobileMenu - conditionally rendered as overlay */}
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </>
    </>
  );
};

export default Navbar;
