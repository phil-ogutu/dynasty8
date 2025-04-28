import React from "react";
import image from "../assets/images/dynasty8.png";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 bg-transparent">
        <img src={image} className="h-20" alt="Dynasty8 Logo" />
        <ul className="text-xl flex gap-7 text-white">
           <Link to="/" className="cursor-pointer hover:text-gray-300">Home</Link>
           <a href="#properties" className="cursor-pointer hover:text-gray-300">Properties</a>
           <a href="#contact" className="cursor-pointer hover:text-gray-300">Contact Us</a>
           <Link to="/admin" className="cursor-pointer hover:text-gray-300">Admin</Link> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
