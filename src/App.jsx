import React, { useState, useEffect } from "react";
import MobileMenu from "./components/Navbar/MobileMenu";
import Hero from "./components/Hero";
import Test from "./components/Test";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="rounded-md max-w-xl px-2 py-2 mx-1 my-1 flex flex-col bg-hero-gradient">
      <MobileMenu isScrolled={isScrolled} />
      <Hero />
      <Test />
    </div>
  );
};

export default App;
