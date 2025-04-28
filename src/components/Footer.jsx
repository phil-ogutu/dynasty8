import React from "react";
import image from "../assets/images/dynasty8.png"

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 pb-20 lg:px-32 pb-10 bg-gray-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">

          <p className="text-gray-400 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, quos nisi quisquam recusandae distinctio vitae minima
            culpa neque enim repellat possimus saepe molestiae fuga qui id
            incidunt! Quisquam, provident laboriosam!
          </p>
        </div>

        <div className="w-full md:w-1/5 b-8 md:mb-0">
          <h3 className="text-white text-lg font-bold">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="" className="hover:text-white">
              Home
            </a>
            <a href="" className="hover:text-white">
              Properties
            </a>
            <a href="" className="hover:text-white">
              Contact Us
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
