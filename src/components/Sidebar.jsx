import React from "react";
import { MdDashboard } from "react-icons/md";
import { BsHouseFill, BsHouseAddFill } from "react-icons/bs";
import image from "../assets/images/dynasty8.png";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className="h-screen">
      <div className="border-b mt-2 pb-4 border-stone-400 flex items-center gap-2">
        <img src={image} className="h-14" />
        <div className="flex flex-col">
          <span className="text">Dynasty8</span>
          <span className="text-xs">Admin</span>
        </div>
      </div>
      <div className="h-full px-3 py-4 overflow-y-auto ">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/admin/dashboard"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100"
            >
              <MdDashboard />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add-property"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100"
            >
              <BsHouseAddFill />
              <span className="ms-3">Add Property</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-100"
            >
              <BiArrowBack />
              <span className="ms-3">Back to Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
