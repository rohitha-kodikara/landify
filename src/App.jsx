import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import Learn from "./components/Learn";
import Author from "./components/Author";
import Chapters from "./components/Chapters";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import ReactLenis from "lenis/react";
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
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.5, // smoothing intensity, 0–1 (lower = more "float")
          duration: 1.2, // only used if lerp isn't set — pick one or the other
          smoothWheel: true,
          autoRaf: true, // let Lenis run its own raf loop (simplest — skip Step 5)
        }}
      />

      <div className="rounded-md px-2 py-2 mx-1 my-1 flex flex-col bg-hero-gradient">
        <Navbar isScrolled={isScrolled} />
        <Hero />
      </div>
      <div className="px-2 py-2 mx-1 my-1 flex flex-col">
        <Learn />
        <Author />
        <Chapters />
        <Reviews />
        <Pricing />
        <FAQs />
      </div>
    </>
  );
};

export default App;
