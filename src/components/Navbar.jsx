import React from "react";
import image from "../assets/images/dynasty8.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 bg-transparent">
        <img src={image} class="h-20" alt="Dynasty8 Logo" />
        <ul className="text-xl flex gap-7 text-white">
           <a href="#" className="cursor-pointer hover:text-gray-300">Home</a> 
           <a href="#" className="cursor-pointer hover:text-gray-300">About</a> 
           <a href="#" className="cursor-pointer hover:text-gray-300">Listings</a> 
           <a href="#" className="cursor-pointer hover:text-gray-300">Contact</a> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
