import React from "react";
import Navbar from './Navbar'

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-black/20 bg-blend-overlay"
      style={{ backgroundImage: "url('/banner.png')"}}
    >
      <Navbar />
      <div className="container text-center mx-auto py-6 px-6 text-white">
        <h2 className="text-5xl sm:text-6xl inline-block max-w-3xl pt-20">Live Where you Love, Love Where you Live...</h2>
        <div className="space-x-6 mt-10">
          <a href="#" className="border px-8 py-2 rounded">Explore</a>
          <a href="#" className="border px-8 py-2 rounded">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
