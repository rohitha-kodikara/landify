import React from "react";

const Footer = () => {
  return (
    <section className="bg-gray-800 mt-8 z-0 ">
      <div className="p-8 grid grid-cols-2 md:grid-cols-4 md:justify-items-center text-white gap-5 leading-relaxed lg:gap-6 lg:mt-5 px-0 lg:w-full lg:px-15   lg:mx-auto">
        <div className="flex flex-col gap-2 ">
          <h4 className="font-semibold ">Product</h4>
          <ul className="flex flex-col gap-1 text-sm ">
            <li>Features</li>
            <li>Pricing</li>
            <li>Chapters</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold ">Resources</h4>
          <ul className="flex flex-col gap-1 text-sm ">
            <li>Blog</li>
            <li>Guides</li>
            <li>Templates</li>
            <li>Community</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold ">Company</h4>
          <ul className="flex flex-col gap-1 text-sm ">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold ">Legal</h4>
          <ul className="flex flex-col gap-1 text-sm ">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
