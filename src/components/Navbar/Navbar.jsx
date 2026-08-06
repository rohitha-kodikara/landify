import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed lg:text-black lg:text-md top-2 left-0 right-0 z-50 flex w-full flex-row items-center justify-between rounded-xl p-3 transition-colors duration-300 lg:px-8 ${
          isScrolled
            ? "bg-white   shadow-md lg:mx-auto lg:w-2/3"
            : "bg-transparent  lg:text-white"
        }`}
      >
        <div>
          <img src="/logo.png" className="w-8 h-auto rounded-lg" alt="logo" />
        </div>

        <ul className="hidden gap-6 lg:flex ">
          <li>Features</li>
          <li>About</li>
          <li>Testimonials</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>

        <div className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm text-white lg:block">
          Remix Template
        </div>

        <div className="lg:hidden">
          {menuOpen ? (
            <X className="text-black" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu
              onClick={() => setMenuOpen((t) => !t)}
              className={isScrolled ? "text-black" : "text-white"}
            />
          )}
        </div>
      </nav>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
